import Vue from 'vue';
import prompt from './prompt.vue'
const promptConstructor = Vue.extend(prompt);

const promptDom = () => new promptConstructor({
	el: document.createElement('div'),
})

promptConstructor.prototype.close = ()=>{
	document.body.removeChild(document.getElementById('promptContainer'));
};

const Prompt = (options = {}) => {
	const instance = promptDom();
	if(!document.getElementById('promptContainer')){
		for (let [key, value] of Object.entries(options)) {
			instance[key] = options[key];
		}
		document.body.appendChild(instance.$el);
	}
	return {
		close:instance.close
	}
}

export default Prompt;