/*
 * @Author: zhangpeng
 * @Date: 2019-08-16 23:59:40
 * @LastEditTime: 2019-08-17 20:26:53
 */
import axios from 'axios'
import qs from 'qs'
class Axios {
    static post(url = '', data = {}) {
        const instance = axios.create({
            method: "post",
            timeout: 6000,
            baseURL: "http://localhost:80",
            headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            transformRequest: [data => qs.stringify(data)],
        })
        instance.interceptors.request.use(config => {
            return config;
        }, error => {
            return Promise.reject(error);
        });
        instance.interceptors.response.use(response => {
            return response.data;
        }, error => {
            return Promise.reject(error);
        });
        return instance({ url, data });
    }
    static file(url = '', data = {}) {
        const instance = axios.create({
            method: "post",
            timeout: 1500,
            baseURL: "http://localhost:80",
            headers: { 'Content-Type': 'multipart/from-data;charset=UTF-8' },
            transformRequest: [data => {
                const form = new FormData();
                for (const [key, item] of Object.entries(data)) {
                    form.append(key, item);
                }
                return form;
            }],
        })
        instance.interceptors.request.use(config => {
            return config;
        }, error => {
            return Promise.reject(error);
        });
        instance.interceptors.response.use(response => {
            return response.data;
        }, error => {
            return Promise.reject(error);
        });
        return instance({ url, data });
    }
};
export default {
    install(Vue) {
        Vue.prototype.$axios = Axios;
        // Object.defineProperty(Vue.prototype, '$axios', { value: Axios })
    }
}