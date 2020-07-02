import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import axios from 'axios';

axios({
  url:'http://localhost:7020/tartan/solver/test/info',
  params:{
    name: 'zhangsan'
  }
}).then((res)=>{
  console.log('请求完成:',res);
})
