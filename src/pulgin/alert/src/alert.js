import Vue from 'vue';
import alert from './alert.vue'
const Alertconstructor = Vue.extend(alert);

const alertDom = () => new Alertconstructor({
	el: document.createElement('div')
})

let Alert = (options = {},callback) => {
	const instance = alertDom();

	for (let [key, value] of Object.entries(options)) {
		instance[key] = options[key];
	}
    document.body.appendChild(instance.$el);

	let Timer=setInterval(function(){ 
		if (!instance._data.showAlert) {
			clearInterval(Timer);
			const resultData={
				res:instance._data.res,
				rej:instance._data.rej,
				show:instance._data.showAlert,
			};
			callback(resultData); // 使用异步的方式通过回调函数把数据返回到前端
		}
	}, 1000)
	
};
// export {Alert} 

export default Alert;
