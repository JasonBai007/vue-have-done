<template>
  <div class="list-wrap">
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="21">
        <div class="inner">
          <div v-for="list in listData">
            <div class="item animated flipInX">
              {{list.index + '、'}}{{list.date}} {{list.project}} {{list.page}} {{list.func}} {{list.percent + '%'}} 
            </div>          
          </div>        
        </div>
      </el-col>
    </el-row>
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
	.list-wrap {
		margin-top: 30px;
  }
  .item {
    margin:5px 0;
  }
  .inner {
    width: 46%;
    height: 460px;
    overflow-x: hidden;
    overflow-y: auto;
    background: #E5E9F2;
    border-radius: 5px;
    padding: 10px 20px;
    color:#1F2D3D;
  }
</style>
