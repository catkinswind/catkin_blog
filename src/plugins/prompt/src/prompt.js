import Vue from 'vue';
import prompt from './prompt.vue'
const promptConstructor = Vue.extend(prompt);

const instance = new promptConstructor({
    el: document.createElement('div'),
})

promptConstructor.prototype.close = () => {
    document.body.removeChild(document.getElementById('promptContainer'));
};
promptConstructor.prototype.exist = () => document.getElementById('promptContainer') !== null;

const Prompt = (options = {}) => {
    for (let [key, value] of Object.entries(options)) {
        instance[key] = options[key];
    }
    document.body.appendChild(instance.$el);
    return instance;
}

export default Prompt;