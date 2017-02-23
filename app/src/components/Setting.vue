<template>
  <div class="setting-wrap">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="配置项目" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="使用说明" name="2">
        <div>配置完项目即可使用</div>
      </el-collapse-item>
      <el-collapse-item title="作者介绍" name="3">
        <div>白延云 @ Github</div>
        <div>白延云 @ Wechat</div>
      </el-collapse-item>      
    </el-collapse>     
  </div>
</template>

<script>
export default {
  name: 'setting',
  // props:['listData'],
  data () {
    return {     
    	activeNames: ['1']
    }
  },
  methods: {
    handleChange() {
    }
  },
  // filters: {
  //   handleWeek(value) {
  //     switch (value) {
  //       case 'Monday': return '周一'; break;
  //       case 'Tuesday': return '周二'; break;
  //       case 'Wednesday': return '周三'; break;
  //       case 'Thursday': return '周四'; break;
  //       case 'Friday': return '周五'; break;
  //       case 'Saturday': return '周六'; break;
  //       case 'Sunday': return '周日'; break;
  //       default: return '';
  //     }
  //   }
  // }
}
</script>

<style scoped>	   
  
</style>
