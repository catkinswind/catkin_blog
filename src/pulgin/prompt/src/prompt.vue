<template>
	<div id="promptContainer" class="contentbox">
		<div class="content">
			{{message}}
		</div>
	</div>
</template>
<script>
export default{
	props:{
		message:{
			type:String,
			default:
			'Promppt Message!'
		},
		el:''
	},
	data(){
		return{
		     
        }
	},
	updated(){
		this.$el.style.position='absolute'
		this.$el.style.left=this.left;
		this.$el.style.top=this.top;
	},
	methods:{

	},
	computed:{
		left:function(){
			return this.el.getBoundingClientRect().left-this.$el.offsetWidth/2+'px';
		},
		top:function(){
			return this.el.getBoundingClientRect().top-this.$el.offsetHeight-15+'px';
		}
	}
};
</script>
<style lang="scss" scoped>
.contentbox{
	position: absolute;width:200px;background-color: black;border-radius: 5px;
	font-size: 13px;letter-spacing: 1px;padding: 10px 5px;z-index: 999;
}	
.contentbox::before{
	content:"";position:absolute;bottom: -13px;z-index: -1;
	width:30px;left: 50%;height: 30px;background-color: black;transform: rotate(45deg) translateX(-50%)
}
.content{
	color: #FFF;position: relative;text-indent: 2em;line-height: 15px;word-break: break-all;
}
</style>