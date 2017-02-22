<template>
  <div class="list-wrap">
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="21">
        <div v-for="list in listData">
          <div class="date">{{list.index}} {{list.date}} {{list.project}} {{list.page}} {{list.func}} {{list.percent + '%'}} </div>          
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.list-wrap {
		margin-top: 40px;
	}
</style>
