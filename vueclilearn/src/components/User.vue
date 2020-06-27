<template>
    <div>
        <h3>我是用户</h3>
        <h3>我是{{userId}}</h3>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return {
                userId: this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>