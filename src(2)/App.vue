<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './static/css/reset.css'

export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  height: 100%;
  max-height: auto;
}
</style>
