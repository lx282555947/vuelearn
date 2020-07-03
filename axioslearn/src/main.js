import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import {request} from './network/request';

request({
  url:'/home/multidata'
}).then((res)=>{
  console.log('调用接口成功:', res);
}).catch(()=>{
  console.log('调用接口异常')
})