<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    margin-top: 40px;
    overflow: hidden;
  }
  .el-card__header {
    padding: 6px 20px;
  }
  .el-card__body {
    max-height: 360px;
    overflow-y: auto;
  } 
</style>
