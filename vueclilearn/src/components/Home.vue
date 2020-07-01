<template>
    <div>
        <h3>我是主页</h3>
        <router-link to="/home/name">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
<!--        exclude的值为组件的名称-->
        <keep-alive exclude="HomeMessage">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                path: '/home/name'
            }
        },
        created() {
            console.log('首页created');
        },
        //activated和deactivated两个函数尽在keep-alive中有效
        activated() {
            console.log('首页activated');
            this.$router.push(this.path);
        },
        deactivated() {
            console.log('首页deactivated');
        },
        // beforeRouteEnter(to, from, next) {
            // this.$router.push(this.path);
            // next();
        // },
        beforeRouteLeave(to, from, next) {
            console.log('即将离开首页');
            this.path = this.$route.path;
            console.log('保存当前路由:' + this.path);
            next();
        }
    }
</script>

<style scoped>

</style>