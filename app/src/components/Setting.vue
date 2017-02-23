<template>
  <div class="setting-wrap">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="配置项目" name="1">        
        <textarea 
        	rows="3"  
        	@keyup.enter="submit"  
        	placeholder="请输入项目名称，以中文逗号分隔，输入完，按Enter键完成配置" 
        	v-model="con">        		
        </textarea>
      </el-collapse-item>
      <el-collapse-item title="使用说明" name="2">
      	<ol>
      		<li>默念“作者真帅”3遍</li>
      		<li>前往 <a href="https://github.com/JasonBai007" target="_blank" title="Github">全球最大男性交友社区</a> 为作者点赞</li>
      		<li>配置项目（输入项目名称，以中文逗号分隔，输入完，按Enter键完成配置）</li>
      		<li>开始使用</li>
      	</ol>
      </el-collapse-item>
      <el-collapse-item title="作者介绍" name="3">
        <img src="../assets/weixin.jpg" alt="" width="240">
      </el-collapse-item>      
    </el-collapse>     
  </div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {     
    	activeNames: ['2'],
    	con:''
    }
  },
  methods: {
    handleChange() {
    },
    submit() {
    	let str = this.con;
      let arr = str.split('，');
      this.$emit('tellPapa',arr);
    }
  }
}
</script>

<style scoped>	   
  textarea {
    width: 96%;
    padding: 10px;
  }
  img {
    display: block;
    margin: 0 auto;
  }

</style>
