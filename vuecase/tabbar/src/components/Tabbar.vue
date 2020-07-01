<template>
    <div class="tab-bar">
        <div class="tab-bar-item">
            <div class="item1"></div>
            <div>首页</div>
        </div>
        <div class="tab-bar-item">分类</div>
        <div class="tab-bar-item">购物车</div>
        <div class="tab-bar-item">我的</div>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    .tab-bar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0px;
        bottom: 0px;
        right: 0px;
        box-shadow: 0px -1px 1px 1px black;
    }
    .tab-bar-item {
        flex: 1;
        height: 49px;
        text-align: center;
    }
    .item1 {
        background: transparent url("../assets/img/home.png") no-repeat fixed center;
    }
</style>