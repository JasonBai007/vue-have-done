<template>
  <div>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-date-picker
            readonly
            v-model="date"
            type="date"
          >
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <el-select v-model="project" clearable placeholder="选择项目">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-input placeholder="页面" v-model="page"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <el-input placeholder="功能" v-model="func"></el-input>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-input v-model="percent" placeholder="0">
            <template slot="append">%</template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">
          <el-button type="primary">今天我做了这些</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'bar',
  data () {
    return {      
      date:moment().format(),
      project: '',
      options: [{
        value: '舆情监控',
        label: '舆情监控'
      }, {
        value: 'AUTODSP-RTB',
        label: 'AUTODSP-RTB'
      }],
      page: '',
      func: '',
      percent: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
