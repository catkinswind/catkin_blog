<template>
	<transition :name='position'>
		<div :class="['alert',appear?'top':'bottom',className]" v-if="showAlert">
			<div class="wrap">
				<div class="text">
					{{message}}
				</div>
				<div class="inputbox">
					<input type="button" :value="reject" @click='cancel'>
					<input type="button" :value="resolve" @click='sure'>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		props:{
			message:{
				type:String,
				default:'1111111111111',
			},
			resolve:{
				type:String,
				default:'AAAA',
			},
			reject:{
				type:String,
				default:'CCCC',
			},
			position:{
				type:String,
				default:'bottom',
			},
			showAlert:{
				type:Boolean,
				default:false,
			},
			className:{
				type:String,
				default:'',
			}
		},
		data() {
			return {
				res:false,
				rej:false,
			};
		},
		methods: {
			sure() {
				this.showAlert=false;
				this.res=true;
			},
			cancel() {
				this.showAlert=false;
				this.rej=true;
			},
		},
		computed:{
			appear(){
				if (this.position==='top') {
					return true;
				}else if (this.position==='bottom'){
					return false;
				}
			}
		}
	};
</script>
<style lang='scss' scoped>
.alert {
	position: absolute;left: 50%;transform: translate(-50%, 0);
	width: 90%;background:red;border-radius: 5px;
	box-shadow: 0 0 5px #CCC;
}
.bottom{
	bottom: 0px;
}
.top{
	top: 0px;
}
.wrap {
	font-size: 13px;letter-spacing: 1px;padding: 10px;
	.text{
		min-height: 40px;text-indent: 2em;line-height: 18px;word-break: break-all;
	}
	.inputbox{
		margin-top: 5px;display: flex;justify-content: flex-end;
	}
	input{
		width: 60px;height: 30px;margin-left: 15px;border-radius: 5px;background-color: black;
		border: none;color: white;font-size: 12px;
	}
	input:active{
		opacity: 0.4;
	}
}
.bottom-enter,
.bottom-leave-to{
	transform: translate(-50%, 100%)
}
.top-enter,
.top-leave-to{
	transform: translate(-50%, -100%)
}
.top-enter-active,.top-leave-active,
.bottom-enter-active,.bottom-leave-active{
	transition: all 0.7s ease;
}
</style>