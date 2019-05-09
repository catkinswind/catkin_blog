<template>
	<transition>
		<div class="alert" v-if="showAlert">
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
	},
	data() {
		return {
			showAlert:true,
			res:false,
			rej:false,
		};
	},
	methods: {
		sure() {
			this.showAlert = false;
			this.res=true;
		},
		cancel() {
			this.showAlert=false;
			this.rej=true;
		},
	},
};
</script>
<style lang='scss' scoped>
.alert {
	position: fixed;left: 50%;bottom: 5px;transform: translate(-50%, 0);
	width: 90%;background:#FFF;border-radius: 5px;
	box-shadow: 0 0 5px #CCC;
}
.wrap {
	font-size: 13px;letter-spacing: 1px;padding: 10px;
	.text{
		text-indent: 2em;line-height: 18px;word-break: break-all;
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
.v-enter,
.v-leave-to{
	transform: translate(-50%, 120%)
}
.v-enter-active{
	transition: all 0.7s ease;
}
.v-leave-active{
	transition: all 0.7s ease;
	position: absolute;
}
.v-move{
	transition: all 0.7s ease;
}
</style>