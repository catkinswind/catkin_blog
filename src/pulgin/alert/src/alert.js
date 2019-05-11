import Vue from 'vue';
import alert from './alert.vue'
const Alertconstructor = Vue.extend(alert);

const alertDom = () => new Alertconstructor({
	el: document.createElement('div'),
})

Alertconstructor.prototype.close = () => {
	console.log(111)
	const instance = alertDom();
	// console.log(instance.$root)
	// console.log(instance.$el.parentNode)
	instance._data.showAlert = false;
	// instance.$el.parentNode.removeChild(instance.$el);
};

let Alert = (options = {}, callback) => {
	const instance = alertDom();
	options.showAlert = true;
	for (let [key, value] of Object.entries(options)) {
		instance[key] = options[key];
	}
	document.body.appendChild(instance.$el);

	let Timer = setInterval(function() {
		if (instance._data.res || instance._data.rej) {//只要选中其中一个按钮就为true
			clearInterval(Timer);
			const checked = instance._data.res === true ? true : false;//如果确定选中就返回true，否则就返回false
			callback(checked); // 使用异步的方式通过回调函数把判断返回到前端
		}
	}, 1000)
	return {
		showAlert: true,
		close: instance.close,
	};
};

export default Alert;