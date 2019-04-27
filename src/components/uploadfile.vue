<template>
	<div >
		<div class="dropbox" >
			<div name="single" class="load" ref="dropbox">
				点击或将文件拖动到此处上传文件
				<input  class="loadinputfile" type="file" @change="buttonCheck" multiple="multiple" />
			</div> 
			<div class="open">
				查看资源
			</div>
			<transition
			    @before-enter="beforeEnter"
			    @enter="enter"
			    @after-enter="afterEnter">
				<span class="exist" v-show="existflag">文件已存在</span>
			</transition>
		</div>  
		<button class="upload" type="button" @click="upLoad">上传</button>
		<!-- 展示文件信息 -->
		<div class='hightlight'>
			<p class="filetitle" v-if="uploadFiles.length===0?false:true">		
				<span>文件数量：{{uploadFiles.length===0?'':uploadFiles.length}}</span>
				<span>文件总大小：{{uploadFiles.allsize}}</span>
			</p>
			<div ref="fileliststring">
				<div v-for="item in uploadFiles" :key='item.name' class="catalogue">
					<div class="flexbox">
						<div class="ischeck">
							<div @click.stop="check">
								<span v-if="item.ok" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
							</div>
						</div>
						<p class="fileone" >
							<span>{{item.name}}</span>
							<span>{{item.lastModifiedDate|dataFormat}}</span>
							<span>{{item.onesize}}kB</span>
							<span>{{item.ok}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import hight from '../js/my.js'
export default{
	data(){
			return{
				uploadFiles:new Array(),
				existflag:false,
			}
	},
	mounted:function(){
			document.addEventListener('dragenter',e=>{
				e.preventDefault();
				e.stopPropagation();
			},false);
			document.addEventListener('dragover',e=>{
				e.preventDefault();
				e.stopPropagation();
			},false);
			document.addEventListener('drop',e=>{
				e.preventDefault();
				e.stopPropagation();
			},false);
			this.$refs.dropbox.addEventListener("drop", e=> {
                e.preventDefault(); //取消默认浏览器拖拽效果 
                var fileList = e.dataTransfer.files; //获取文件对象 
                if (fileList.length == 0) { //检测是否是拖拽文件到页面的操作 
                	return false;
                }
 		        this.addFiles(fileList); //调用函数处理拖拽的文件
 		    }, false);
	},
	updated(){
			// console.log(this.$refs)
			// console.log(this.$refs.fileliststring.children[1])
	},
	methods:{
		addFiles(files) {
 		    let errstr = ""; //错误，提示信息
 		    const typeArray = Array.of('txt', 'jpg', 'jpeg', 'gif', 'png', 'js','php','class' );
 		    const file = files[files.length - 1];
 		    const filename = file.name;
 		    const index1 = filename.lastIndexOf("."); //返回文件类型中.的位置
 		    const postf = filename.slice(index1 + 1); //获取文件的后缀名
 		    //传输的文件类型不符合要求
 		    if (typeArray.find(item => postf.toLowerCase() === item.toLowerCase()) == false) {
 		    	errstr += filename + "/"; //错误提示
 		    } else {
 		    	if (this.uploadFiles.length === 0) {
 		    		this.uploadFiles.push(file);
 		    	} else {
 		    		if (this.uploadFiles.find(item => item.name === filename)) {
 		    			[...this.$refs.fileliststring.children].forEach(ele=>{
 		    				if (ele.innerHTML.includes(filename)) {
 		        				hight(ele,'red',' #CCC');
 		    					// this.$refs.exist.style.display = 'block'
 		    					// this.$refs.exist.style.opacity = 1
 		    					this.existflag=true
 		    				}
 		    			});
 		    		} else {
 		    			this.uploadFiles.push(file);
 		    		}
 		    	}
 		    }
 		    if (errstr != "") {
 		    	alert("文件格式错误:" + errstr);
 		    }
 		    // 相加之后就是数字，数字没有size属性，所以只有第一次是成功，之后都是NaN
 		    // let size=this.uploadFiles.reduce((prev,cur)=> {
 		    // 	console.log(prev.size)
 		    // 	console.log(cur.size)
 		    // 	return (prev.size+cur.size).toString();
 		    // },this.a)
 		    let sizeArr=this.uploadFiles.map(item=>{
 		    	item.onesize=(item.size/1024).toFixed(2);
 		    	item.ok=false;
 		    	return item.size;
 		    })
 		    this.uploadFiles.allsize=(sizeArr.reduce((prev,curr)=>{
 		    	return prev+curr;
 		    }, 0)/1024).toFixed(2)+'k';
 		},
 		buttonCheck(el) {
 			if (el.target.files.length <= 0) {
 				return;
 			}
 			this.addFiles(el.target.files);//添加文件对象
 			// console.log(el)
 			el.target.value='';
 		},
 		upLoad() {
 			if (this.uploadFiles.length <= 0) {
 				return;
 			}
 			let form=new FormData();
 			for (let [key,value] of this.uploadFiles.entries()) {
		    	// 此处不能用for_in循环，因为for_in循环遍历数组的同时，还会遍历数组身上的
		    	// 自定义属性。
		    	if(value.ok){
		    		form.append(`file${key}`, value);
		    	}
		    }
		    let config={
		    	headers:{'Content-Type':'multipart/from-data'}
		    }
		    this.axios.post('/api/SaveFile.php',form,config).then(resp=>{
		    	let data=resp.data;
		    	console.log(data)//返回true或false判断是否保存成功
		    })
		},
		check(el){
			const item=this.uploadFiles.find(item=>{
				return el.target.parentNode.parentNode.parentNode.innerHTML.includes(item.name);
			})
			item.ok=!item.ok;
			//由于嵌套太深，导致数据更新了，组件ui内容还没有及时更新（连深度监听都没有监听到），
			//render函数没有自动更新，需要手动强制刷新
			this.$forceUpdate();
		},
		beforeEnter(el){
			el.style.transform = "translate(-50%,-50%)";
		},
		enter(el,done){
			el.offsetWidth;
			el.style.transform = "translate(-50%,-100%)";
			el.style.transition = 'all 0.8s ease';
			setTimeout(function(){done()}, 800);
		},
		afterEnter(el){
			this.existflag=!this.existflag
		}
	},
};
</script>
<style lang="scss" scoped>
 .dropbox{
	position: relative;background:#27AE60;width:100%;height:250px;
	display: flex;align-items: center;justify-content: center;box-sizing: border-box;
	div{
		width: 120px;height: 75px;background: white;padding: 2px;padding-top: 20px;
		border: 1px solid #000;box-sizing: border-box;
		font-size: 13px;text-align: center;
	}
	.load{
		margin-right: 2px;position: relative;
		.loadinputfile{
			position: absolute;left: 0;top: 0;opacity: 0;width: 100%;height: 100%;
		}
	}
	.exist{
		position: absolute;left: 50%;bottom: 0;text-align: center;
		font-size: 14px;color:red;text-shadow: 0 0 5px black;border-radius: 5px;
	}
}
.upload{
	width: 70px;height: 35px;border-radius: 5px;outline: none;margin-top: 10px;
}
.hightlight{
	p:nth-child(1){
		border-top:1px solid #CCC;
		border-bottom: 1px solid #CCC;
	}
	.filetitle{
		height: 35px;line-height: 35px;padding-left: 10px;
		display: flex;justify-content: space-between;
		span{
			display:block;flex: 1;font-size: 13px;box-sizing: border-box
		}
	}
}
.hightlight .catalogue{
	border-bottom: 1px solid #CCC;
	.flexbox{
		display: flex;justify-content: flex-start;
		.ischeck{
			width: 40px;height: 50px;position: relative;
			div{
				width: 20px;height: 20px;
				border: 1px solid black;border-radius: 50%;box-sizing: border-box;
				position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);
			}
			div span{
				display: inline-block;width: 100%;height: 100%;font-size: 13px;padding-top: 2px;
				position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%);
				border-radius: 50%;text-align: center;box-sizing: border-box;
			}
		}
		.fileone{
			padding-left: 10px;
			span{
				margin-right: 40px;font-size: 13px;display: inline-block;
				line-height: 25px;box-sizing: border-box;
			}
			span:nth-child(1){
				font-size: 16px;display: block;
			}
		}
	}
}
</style>