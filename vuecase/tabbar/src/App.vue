<template>
    <div id="app">
        <router-view></router-view>
        <tabbar>
<!--            <tabbar-item :icon="url1" text="首页"></tabbar-item>-->
<!--            <tabbar-item :icon="url2" text="分类"></tabbar-item>-->
<!--            <tabbar-item :icon="url3" text="购物车"></tabbar-item>-->
<!--            <tabbar-item :icon="url4" text="我的"></tabbar-item>-->
            <tabbar-item path="/home" activeColor="red">
                <template v-slot:item-icon>
                    <img src="@/assets/img/home.png" alt="首页">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/home_red.png" alt="首页">
                </template>
                <template v-slot:item-text>
                    <div>首页</div>
                </template>
            </tabbar-item>
            <tabbar-item path="/category" activeColor="red">
                <template v-slot:item-icon>
                    <img src="@/assets/img/category.png" alt="分类">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/category_red.png" alt="分类">
                </template>
                <template v-slot:item-text>
                    <div>分类</div>
                </template>
            </tabbar-item>
            <tabbar-item path="/shoppingcart" activeColor="red">
                <template v-slot:item-icon>
                    <img src="@/assets/img/shoppingcart.png" alt="购物车">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/shoppingcart_red.png" alt="购物车">
                </template>
                <template v-slot:item-text>
                    <div>购物车</div>
                </template>
            </tabbar-item>
            <tabbar-item path="/mine" activeColor="blue">
                <template v-slot:item-icon>
                    <img src="@/assets/img/mine.png" alt="我的">
                </template>
                <template v-slot:item-icon-active>
                    <img src="@/assets/img/mine_red.png" alt="我的">
                </template>
                <template v-slot:item-text>
                    <div>我的</div>
                </template>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>


    export default {
        name: 'App',
        components: {
            // ctt: () => import('./components/Content'),
            Tabbar: () => import('./components/Tabbar'),
            // TabbarItem: () => import('./components/Item')
            TabbarItem: () => import('./components/TabbarItem')
        },
        data() {
            return {
                url1: require('@/assets/img/home.png'),
                url2: require('@/assets/img/category.png'),
                url3: require('./assets/img/shoppingcart.png'),
                url4: require('./assets/img/mine.png')
            }

        }
    }
</script>

<style>
    @import './assets/css/base.css';


</style>
