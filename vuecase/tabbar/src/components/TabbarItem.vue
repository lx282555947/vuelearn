<template>
    <div class="tab-bar-item" @click="show">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        <!--        <slot v-else name="item-text-active"></slot>-->
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props: {
            path: {
                type: String,
                required: true
            },
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                // isActive: false
            }
        },
        computed: {
            isActive() {
                return this.$route.path === this.path;
            },
            activeStyle(){
                return this.isActive ? {color: this.activeColor} : {};
            }
        },
        methods: {
            show() {
                this.$router.push(this.path);
                // this.isActive = true;
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        height: 49px;
        text-align: center;
    }

    .tab-bar-item img {
        height: 23px;
        width: 24px;
        vertical-align: middle;
        margin-top: 5px;
    }

    .active {
        color: red;
    }
</style>