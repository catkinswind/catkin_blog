<template>
	<div >
		<div class="dropbox" >
			<div name="single" class="load" ref="dropbox" title="点击或将文件拖动到此处上传文件">
				<i class="layui-icon layui-icon-upload"></i>
				<input  class="loadinputfile" type="file" @change="buttonCheck" multiple="multiple" />
			</div> 
			<div class="open" title="点击此处下载文件" @click='download'>
				<i class="layui-icon layui-icon-tabs"></i>
			</div>
			<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter">
			    <span class="exist" v-show="existflag">{{errmsg}}</span>
			</transition>
		</div> 
		<div class="checkallbox" v-if='checkflag'>
			<div class="checkall">
				<div @click.stop="checkAll($event)" ref='all'>
					<i v-show='allok' class="layui-icon layui-icon-ok"></i> 
				</div>
				<span>全选</span>
			</div>
			<button class="upload" type="button" @click="upLoad">上传</button>
		</div> 
	    <!-- 展示文件信息 -->
	    <div class='hightlight'>
	    	<div class="filament"></div>
	    	<p class="filetitle" v-if="uploadFiles.length===0?false:true">		
	    		<span>文件数量：{{uploadFiles.length===0?'':uploadFiles.length}}</span>
	    		<span>文件总大小：{{uploadFiles.allsize}}</span>
	    	</p>
	    	<div class="filament"></div>
	    	<div ref="filecatalogue">
	    		<div  v-for="item in uploadFiles" :key='item.name' class="catalogue" :sign="item.name">
	    			<div class="flexbox">
	    				<div class="ischeck">
	    					<div @click.stop="check($event,item)" ref='bgc'>
	    						<i v-if="item.ok" class="layui-icon layui-icon-ok"></i> 
	    					</div>
	    				</div>
	    				<div class="fileone" >
	    					<p>{{item.name|fileNameFormat}}</p>
	    					<div class="detailed">
	    						<span>{{item.lastModifiedDate|dateFormat}}</span>
	    						<span>{{item.size|computedSize}}</span>
	    						<span>{{item.name|fileTypeFormat}}</span>
	    						<!-- <span>{{item.ok}}</span> -->
	    					</div>
	    				</div>
	    			</div>
	    			<div class="filament"></div>
	    		</div>
	    	</div>
	    </div>
        <!-- <a href="http://127.0.0.1/api/mysqlphp.php" title="" download="f.php">download</a> -->
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default{
	data(){
		return{
			uploadFiles:new Array(),
			existflag:false,
			errmsg:'',
			allok:false,
			checkflag:false,
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
		this.$refs.dropbox.addEventListener("drop", e=> {//通过拖拽的形式上传文件
			e.preventDefault(); //取消默认浏览器拖拽效果 
			var fileList = e.dataTransfer.files; //获取文件对象 
			if (fileList.length == 0) { //检测是否是拖拽文件到页面的操作 
			    return false;
			}
			[...e.dataTransfer.files].forEach(item=>{//同时添加多个文件
			    this.addFiles(item);//添加的单个文件对象
			})
		}, false);
		console.log(`UpLoadFile组件接收到的用户名为空${this.loginName===''}`);
	},
	updated(){
		// console.log(this.$refs)
		// console.log(this.$refs.filecatalogue)
		this.isCheckAll();
	},
	methods:{
		addFiles(file) {
			// console.log(file)
 		    const filename = file.name;
 		    if (file.size>=200*1024*1024) {//最大可传输200MB的文件
 		    	this.existflag=true;
 		    	this.errmsg='文件体积过大';//错误，提示信息
 		    } else {
 		    	if (this.uploadFiles.length === 0) {
 		    		file.ok=false;
 		    		this.uploadFiles.push(file);
 		    	} else {
 		    		if (this.uploadFiles.find(item => item.name === filename)) {//文件已存在
 		    			[...this.$refs.filecatalogue.children].forEach(ele=>{
 		    				// 在上传列表中找到已存在的文件，并高亮提示，后续还需要判断数据库是否有同名文件，
 		    				// 覆盖或改名，改名可采用重命名或者在同名文件后加(1)的方式
 		    				if (ele.getAttribute('sign')===filename) {
 		    					this.$_hight(ele,'red',' #CCC');
 		    					this.existflag=true;
 		    					this.errmsg='文件已存在';
 		    				}
 		    			});
 		    		} else {
 		    			file.ok=false;
 		    			this.uploadFiles.unshift(file);
 		    			this.isCheckAll();
 		    		}
 		    	}
 		    }
 		    let size=(this.uploadFiles.reduce((prev,curr)=>prev+curr.size, 0));
 		    this.uploadFiles.allsize=this.computedSize(size);
 		},
 		buttonCheck(el) {//通过input-file按钮添加文件
 			if (el.target.files.length <= 0) {
 				return;
 			}
 			[...el.target.files].forEach(item=>{//同时添加多个文件
 				console.log(item);
 			    this.addFiles(item);//添加的单个文件对象
 			})
 			el.target.value='';
 		},
 		upLoad() {
 			if (this.uploadFiles.length <= 0) {
 				return;
 			}
 			const upLoadArr=this.uploadFiles.filter(item=>item.ok===true);
 			if (upLoadArr.length===0) {
 				this.existflag=true;
 		    	this.errmsg='未选择文件';
 			}else{
 				if(this.loginName!==''){
 					let form=new FormData();
 					form.append('name',this.loginName);
 					upLoadArr.forEach((item,index)=>{
 						form.append(`file${index}`, item);
 					})
 					let config={
 						headers:{'Content-Type':'multipart/from-data'}
 					}
 					this.axios.post('/api/SaveFile.php',form,config).then(resp=>{
 						let data=resp.data;
		        	    if (data) {//文件上传成功
		        	    	this.existflag=true;
		        	    	this.errmsg='保存成功';
		        	    	this.uploadFiles=[];
		        	    }else {
		        	    	this.existflag=true;
		        	    	this.errmsg='保存失败!';
		        	    }
		        	}).catch(error=>{
		        		this.existflag=true;
		        	    this.errmsg='上传失败，服务器错误!';
		        	})
 				}else{
 					this.existflag=true;
		        	this.errmsg='请先登录!';
 				}
 			}
		},
		check(el,item){
			item.ok=!item.ok;
			// 点击事件发生在item.ok===true之前，所以事件绑定在了背景div上，节点理所应当是背景div节点，
			// 而当item.ok===false时，点击在span图标上，事件也绑定在身上
			if (item.ok) {
				el.target.style.backgroundColor='#4A9BF9';
				el.target.style.borderColor = '#4A9BF9'
			}else {
				this.$refs.all.style.backgroundColor =
				el.target.parentNode.style.backgroundColor='transparent';
				this.$refs.all.style.borderColor =
				el.target.parentNode.style.borderColor = '#CCC';
				// 如果有一个不符合全选或者全不选，那么全选和全不选就不成立
				this.allok=false
			}
			// 由于嵌套太深，导致数据更新了，组件ui内容还没有及时更新（连深度监听都没有监听到），
			// render函数没有自动更新，需要手动强制刷新
			this.$forceUpdate();
		},
		checkAll(el){
			if (this.uploadFiles.length===0) {
				return;
			}
			this.allok=!this.allok;//初始化为flase全不选，取反
			// console.log(this.allok)
			this.uploadFiles.forEach(item=>{//让所有文件处于全选与全不选状态
				item.ok=this.allok;
			})
			if (this.allok) {
				this.$refs.bgc.forEach(item=>{
					item.style.backgroundColor='#4A9BF9';
					item.style.borderColor = '#4A9BF9'
				});
				el.target.style.backgroundColor='#4A9BF9';
				el.target.style.borderColor = '#4A9BF9'
			}else {
				this.$refs.bgc.forEach(item=>{
					item.style.backgroundColor='transparent'
					item.style.borderColor =  '#CCC'
				});
				el.target.parentNode.style.backgroundColor='transparent';
				el.target.parentNode.style.borderColor = '#CCC'
			}
			// 不要用和背景颜色相同的颜色，根本看不清
			this.$forceUpdate();
		},
		isCheckAll(){
			if (this.uploadFiles.length!==0) {
				if (this.uploadFiles.every(item=>item.ok===true)){//当所有文件都被选中全选按钮也会被选中
				    this.allok=true;
				    this.$refs.all.style.backgroundColor ='#4A9BF9';
				    this.$refs.all.style.borderColor = '#4A9BF9';
				}else {
				    if (this.allok) {// 设置样式前必须保证标签必须存在
				    	this.allok=false;
					    this.$refs.all.style.backgroundColor ='transparent'
					    this.$refs.all.style.borderColor = '#CCC';
					}
				}
			}
		},
		download(){
			// window.open("http://localhost/api/mysqlphp.php")
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
			this.existflag=!this.existflag;
		}
	},
 	watch:{
 		'uploadFiles.length':function(val){
 			if (val==0) {
 				this.checkflag=false;
 			}else {
 				this.checkflag=true;
 			}
 		}
 	},
 	computed:{
		// loginName(){
		// 	return this.$store.getters.loginName;
		// }
		...mapGetters(['loginName'])
	}
 };
</script>
<style lang="scss" scoped>
.dropbox{
	position: relative;background:skyblue;width:400px;height:250px;margin: 0 auto;
	display: flex;align-items: center;justify-content: center;box-sizing: border-box;
	div{
		width: 120px;height: 75px;background: white;box-sizing: border-box;
		font-size: 13px;
	}
	i{
		font-size: 35px;color: #4A9BF9;
		position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);
	}
	.load{
		margin-right: 4px;position: relative;
		.loadinputfile{
			position: absolute;left: 0;top: 0;opacity: 0;width: 100%;height: 100%;
		}
	}
	.open{
		position: relative;
		i{
			color: purple;font-size: 25px;font-weight: bold;
		}
	}
	.exist{
		position: absolute;left: 50%;bottom: -20%;text-align: center;
		line-height: 35px;width: 20%;background: linear-gradient(.31deg,#3cac8a .7%,#5cceac 99.3%);
		text-shadow: 0 2px 4px rgba(0,0,0,.25);
		font-size: 15px;color: white;border-radius: 5px;
	}
}
.checkallbox{
	display: flex;justify-content: space-between;align-items: center;padding: 0 30px 0 12px;
	box-sizing: border-box;background-color: #FFF;
	.checkall{
		display: flex;justify-content: space-between;align-items: center;height: 40px;
		span{
			font-size: 15px;display: inline-block;
		}
		div{
			width: 40px;height: 40px;transform-origin: 0% center;transform: scale(.5);
			border-radius: 50%;border: 4px solid #CCC;position: relative;
		}
		div i{
			display: inline-block;font-size: 30px;font-weight: 600;
			position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%);
			text-align: center;box-sizing: border-box;color: white;
		}
	}
	.upload{
		width: 60px;height: 30px;border-radius: 5px;font-size: 13px;
		border:2px solid #4A9BF9;background: white;
	}
	.upload:active{
		border:none;color:#FFF;
		background-color:skyblue;
		// #01ACC1
	}
}
.hightlight{
	.filetitle{
		height: 35px;line-height: 35px;padding-left: 10px;
		display: flex;justify-content: space-between;
		span{
			display:block;flex: 1;font-size: 13px;box-sizing: border-box
		}
	}
}
.hightlight .catalogue{
	.flexbox{
		display: flex;justify-content: space-between;align-items: center;padding-left: 12px;box-sizing: border-box;
	}
}
.ischeck{
	flex: 1;height:50px;position: relative;
	div{
		// 解决安卓手机渲染圆形圆角变形：
		//     先把px/rem的值放大一遍，是所有属性的尺寸，然后用transform:scale(.5)缩小一倍，
		//     就达到无论宽高设置多大的值，圆角都不会出现变形，残缺问题，最后用transform-origin位置，
		//     也就是以原图形的哪一个轴形变
		width: 40px;height: 40px;position: relative;left: 0;top: 50%;
		border: 4px solid #CCC;border-radius: 50%;
		transform-origin: 0% center;transform: translate(0,-50%) scale(.5);
	}
	div i{
		display: inline-block;font-size: 30px;font-weight: 600;
		position: absolute;left: 50%;top:50%;transform: translate(-50%,-50%);
		text-align: center;box-sizing: border-box;color: white;
	}
}
.fileone{
	flex: 9;display: flex;flex-direction: column;justify-content: space-between;align-items: center;
	p{
		width: 100%;flex:1;font-size: 14px;position: relative;font-weight: normal;
	}
	.detailed{
		width: 100%;flex:1;
		display: flex;justify-content: space-between;align-items: center;
		padding-right: 30px;box-sizing: border-box;font-size: 12px;
		span:nth-child(1){
			flex:5;
		}
		span:nth-child(2){
			flex:2;
		}
		span:nth-child(2){
			flex:3;
		}
	}
}
</style>