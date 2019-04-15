<template>
	<div >
		<div name="single" class="filePrewbox">
			上传文件
			<input   class="filePrew" type="file" @change="onc" multiple="multiple" />
		</div>  
		<div class="dropbox" ref="dropbox" >
			<div class="load"></div>
			<div class="open"></div>
		</div>  
		<button class="upload" type="button" @click="Upload">上传</button>
		<!-- 展示文件信息 -->
		<div ref="fileliststring">
			<p class='hightlight' v-for="item in uploadFiles" :key='item.name'>
				<span class="info">{{item.name}}</span>
				<span class="info">大小：{{item.size}}k</span>
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
        document.addEventListener("drop", e=> {
                e.preventDefault(); //取消默认浏览器拖拽效果 
                var fileList = e.dataTransfer.files; //获取文件对象 
                if (fileList.length == 0) { //检测是否是拖拽文件到页面的操作 
                	return false;
                }
 		        this.AddFiles(fileList); //调用函数处理拖拽的文件
 	    }, false);
    },
    updated(){
    },
	methods:{
		ceshi(){
			console.log(1111)
		},
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
 		    		console.log(file.name,file.size)
 		    	} else {
 		    		if (this.uploadFiles.find(item => item.name === filename)) {
 		    			[...document.getElementsByClassName('hightlight')].forEach(ele=>{
 		    				if (ele.innerHTML.includes(filename)) {
 		    					ele.style.border = `1px solid rgb(204, 204, 204)`
 		    					hight(ele,'red',' #27AE60');
 		    				}
 		    			});
 		    		} else {
 		    			this.uploadFiles.push(file);
 		    			console.log(file.name,file.size)
 		    		}
 		    	}
 		    }
 		    if (errstr != "") {
 		    	alert("文件格式错误:" + errstr);
 		    }
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
		for (let key in this.uploadFiles) {//不能用for_of具体原因知道
 			form.append(`file${key}`, this.uploadFiles[key]);
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
.filePrewbox{
	position: relative;display: inline-block;overflow: hidden;background: #F7F7F7F7;
	width: 70px;line-height: 35px;font-size: 13px;text-align: center;
	border: 2px solid #CCC;border-radius: 5px;box-sizing: border-box;


}
.filePrew{
	position: absolute;right: 0;top: 0;opacity: 0
}
.dropbox{
	font-size:30px;background:#27AE60;width:100%;height:250px;
	display: flex;align-items: center;justify-content: center;box-sizing: border-box;
	div{
		width: 120px;height: 75px;background: white;border: 1px solid #000;box-sizing: border-box;
	}
	.load{
		margin-right: 2px;
	}

}
.upload{
	width: 70px;height: 35px;border-radius: 5px;outline: none;margin-top: 10px;
}
.fileliststring{

}
.hightlight{
	width:400px;height: 35px;line-height: 35px;background:white;border-radius: 5px;
	border: 1px solid #27AE60;font-size: 12px;margin: 5px 0;padding: 0 15px 0 10px;
	display: flex;justify-content: space-between;box-sizing: border-box;
}	
.info{
	display: inline-block;width: 50%;
}
.info:nth-child(1){
	padding-left: 5px;box-sizing: border-box
}
.info:nth-child(2){
	padding-left: 75px;box-sizing: border-box

}
</style>