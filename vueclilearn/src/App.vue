<template>
    <div id="app">
        <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
        <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
        <button @click="homeClick">首页</button>
        <button @click="aboutClick">关于</button>
        <router-link :to="'/user/'+userId" tag="button">用户</router-link>
        <router-link :to="{path:'/profile',query:{name:'zhangsan',age:20}}" tag="button">我的</router-link>
        <router-view></router-view>
        <!--    <button>首页</button>-->
        <!--    <button>关于</button>-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        data() {
            return {
                userId: 'lisi'
            }
        },
        methods: {
            homeClick() {
                console.log('home');
                this.$router.push('/home');
            },
            aboutClick() {
                console.log('about');
                this.$router.replace('/about');
            }
        }
    }
</script>

<style>
    .router-link-active {
        color: red;
    }
</style>
