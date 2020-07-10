import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

// import {request} from './network/request';
//
// request({
//   url:'/axios/testGet'
// }).then((res)=>{
//   console.log('调用接口成功:', res);
// }).catch(()=>{
//   console.log('调用接口异常')
// })

import axios from 'axios';

axios.defaults.timeout = 3000;
axios.defaults.headers['mytoken'] = "hello I'am token";
// get无参请求
axios.get('/api/axios/testGet')
    .then(res => {
        console.log('get无参请求接口调用成功', res);
    })

//get带参请求
axios.get('/api/axios/testGetWithParams?name=zhangsan')
    .then(res => {
        console.log('get带参请求调用接口成功', res);
    })

axios.get('/api/axios/testGetWithParams', {
    params: {
        name: "lisi"
    }
}).then(res => {
    console.log('get带参请求调用接口成功', res);
})

//post无参请求
axios.post('/api/axios/testPost')
    .then(res => {
        console.log('post无参请求调用接口成功');
    })

//post带参请求
const params = new URLSearchParams();
params.append('name', 'wangwu');
params.append('password', '1298479875');
axios.post('/api/axios/testPostWithParams', params)
    .then(res => {
        console.log('post 带参请求调用接口成功');
    });

//post json/application 请求
axios.post('/api/axios/testPostWithBody', {
    name: "zhaoliu",
    age: 19
}).then(res => {
    console.log('post json形式调用接口成功', res.data.name);
})
