<template>
    <div class="tab-bar">
        <slot></slot>
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
        box-shadow: 0px -0.5px 1px rgba(0, 0, 0, .01);
        font-size: 14px;
    }


</style>