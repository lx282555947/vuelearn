<template>
    <div>
        <h3>我是主页</h3>
        <router-link to="/home/name">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>