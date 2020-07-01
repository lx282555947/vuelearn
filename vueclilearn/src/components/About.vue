<template>
    <h3>我是关于</h3>
</template>

<script>
    export default {
        name: "About",
        created(){
            console.log('关于created');
        },
        activated() {
            console.log('关于activated');
        }
    }
</script>

<style scoped>

</style>