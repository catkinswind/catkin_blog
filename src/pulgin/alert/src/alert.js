import Vue from 'vue';
import alert from './alert.vue'
const Alertconstructor = Vue.extend(alert);

const instance = new Alertconstructor({
    el: document.createElement('div'),
})

Alertconstructor.prototype.close = () => {
    document.body.removeChild(document.getElementById('alertComponent'));
};

const Alert = (options = {}, callback) => {
    if (!document.getElementById('alertComponent')) { //如果没有alert组件，让其产生
        // 组件的显示状态默认是false，给它true，让它可以进入过渡动画
        instance.showAlert = true;
        for (let [key, value] of Object.entries(options)) {
            instance[key] = options[key];
        }
        document.body.appendChild(instance.$el);

        let Timer = setInterval(() => {
            if (instance._data.res || instance._data.rej) { // 只要选中其中一个按钮就为true
                clearInterval(Timer);
                // 如果确定选中就返回true，否则就返回false
                const checked = instance._data.res === true ? true : false;
                // 使用异步的方式通过回调函数把判断返回到前端
                callback(checked);
            }
        }, 1000)
    }
    return {
        close: instance.close,
    };
};

export default Alert;