<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app"
};
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
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}
.el-collapse-item__wrap {
  background-color: #f4f7fc;
}
</style>
