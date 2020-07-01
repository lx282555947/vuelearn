<template>
  <div id="app">
      <cnt></cnt>
      <tb></tb>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    cnt: () => import('./components/Content.vue'),
    tb: () => import('./components/Tabbar.vue')
  }
}
</script>

<style>
  @import './assets/css/base.css';


</style>
