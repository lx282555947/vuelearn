<template>
    <div id="app">
        <h3>{{$store.state.info}}</h3>
        <button @click="changeField">修改属性</button>
        <h3>----------vue内的count-----------</h3>
        <h3>{{$store.state.counter}}</h3>
        <h3>-----------helloworld内的cout-----------</h3>
        <hello-world></hello-world>
        <h3>----------------</h3>
        <button @click="add(8)">+</button>
        <button @click="sub">-</button>
        <button @click="multi(10)">*10</button>
        <h3>--------getters-------</h3>
        <h3>{{$store.getters.counterPow}}</h3>
        <h3>--------action----------</h3>
        <button @click="updateInfo">更新信息</button>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import {ASC,DESC} from '@/store/mutationType.js';

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        methods: {
          // 传参
            add(count) {
                this.$store.commit(ASC, count);
            },
          // 无参
            sub() {
                this.$store.commit(DESC);
            },
          // 传对象
            multi(count) {
              console.log(count)
                this.$store.commit('multi',{
                    count
                })
            },
            changeField(){
                this.$store.commit('changeInfo');
            },
            // updateInfo(){
            //     this.$store.dispatch('update',{
            //         message:'我是消息',
            //         success(info){
            //             console.log('我是回调函数');
            //             console.log('数据为：', info);
            //         }
            //     })
            // }
            updateInfo(){
                this.$store
                    .dispatch('update', '我是消息')
                    .then(() => {
                        console.log('异步处理结束');
                    });
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
