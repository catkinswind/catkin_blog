<template>
	<div >
		<div class="dropbox" >
			<div name="single" class="load" ref="dropbox">
				点击或将文件拖动到此处上传文件
				<input   class="loadinputfile" type="file" @change="onc" multiple="multiple" />
			</div> 
			<div class="open">
				查看资源
			</div>
		</div>  
		<button class="upload" type="button" @click="Upload">上传</button>
		<!-- 展示文件信息 -->
		<div ref="fileliststring" class='hightlight'>
			<p v-if="uploadFiles.length===0?false:true">		
				<span>文件数量：{{uploadFiles.length===0?'':uploadFiles.length}}</span>
				<span>文件总大小：{{uploadFiles.allsize}}</span>
			</p>
			<p v-for="item in uploadFiles" :key='item.name'>
				<span>{{item.name}}</span>
				<span>大小：{{item.onesize}}k ({{item.size}} 字节)</span>
			</p>
		</div>
	</div>
</template>
<script>
	import hight from '../js/my.js'
	export default{
		data(){
			return{
				uploadFiles:new Array(),
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
 		        this.AddFiles(fileList); //调用函数处理拖拽的文件
 		    }, false);
		},
		updated(){
			// console.log(this.$refs.fileliststring.children)
		},
		methods:{
			AddFiles(files) {
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
 		    					hight(ele,'red',' #27AE60');
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
 		    	return item.size;
 		    })
 		    this.uploadFiles.allsize=(sizeArr.reduce((prev,curr)=>{
 		    	return prev+curr;
 		    }, 0)/1024).toFixed(2)+'k';
 		},
 		onc(el) {
 			if (el.target.files.length <= 0) {
 				return;
 			}
 			this.AddFiles(el.target.files);
 		},
 		Upload() {
 			if (this.uploadFiles.length <= 0) {
 				return;
 			}
 			let form=new FormData();
		    for (let [key,value] of this.uploadFiles.entries()) {
		    	// 此处不能用for_in循环，因为for_in循环遍历数组的同时，还会遍历数组身上的
		    	// 自定义属性。
		    	form.append(`file${key}`, value);
		    }
		    let config={
		    	headers:{'Content-Type':'multipart/from-data'}
		    }
		    this.axios.post('/api/SaveFile.php',form,config).then(resp=>{
		    	let data=resp.data;
		    	console.log(data)
		    })
		},
	},
};
</script>
<style lang="scss" scoped>
.dropbox{
	font-size:30px;background:#27AE60;width:100%;height:250px;
	display: flex;align-items: center;justify-content: center;box-sizing: border-box;
	div{
		width: 120px;height: 75px;background: white;padding: 2px;padding-top: 20px;
		border: 1px solid #000;box-sizing: border-box;
		font-size: 12px;text-align: center;
	}
	.load{
		margin-right: 2px;position: relative;
		.loadinputfile{
			position: absolute;left: 0;top: 0;opacity: 0;width: 100%;height: 100%;
		}
	}
}
.upload{
	width: 70px;height: 35px;border-radius: 5px;outline: none;margin-top: 10px;
}
.hightlight p{
	width:400px;height: 35px;line-height: 35px;background:white;border-radius: 5px;
	border: 1px solid #27AE60;font-size: 12px;margin: 5px 0;padding: 0 15px 0 10px;
	display: flex;justify-content: space-between;box-sizing: border-box;
	span{
		display: inline-block;width: 50%;
	}
	span:nth-child(1){
		padding-left: 5px;box-sizing: border-box
	}
	span:nth-child(2){
		padding-left: 45px;box-sizing: border-box
	}	
}
</style>