import axios from 'axios';

export function request(config) {
    let instance = axios.create({
        baseURL: 'http://localhost:8080/api',
        timeout: 5000
    });
    instance.interceptors.request.use(config=>{
        console.log('拦截请求：', config);
        return config;
    },error => {
        console.log(error);
    })
    instance.interceptors.response.use(result=>{
        console.log('拦截返回结果：', result);
        return result.data;
    },error => {
        console.log(error);
    })
    return instance(config);
}