<template>
  <div class="list-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">本周已做以下事项：</span>
        <i class="el-icon-delete"></i>
      </div>
      <div v-for="list in listData" class="text item">
        {{list.index + '、'}}{{list.date}} {{list.project}} {{list.page}} {{list.func}} {{list.percent + '%'}}
      </div>
    </el-card>     
  </div>
</template>

<script>
export default {
  name: 'list',
  props:['listData'],
  data () {
    return {     

    }
  }
}
</script>

<style scoped>	   
  i {
    float: right;
    color: #8492a6;
    margin-top: 5px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  i:hover {
    cursor: pointer;
    color: #1F2D3D;
  }
</style>
