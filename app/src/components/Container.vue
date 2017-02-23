<template>
  <div>
    <el-row :gutter="20" type="flex" justify="center" class="animated bounceInDown">
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
          <el-select v-model="project" clearable placeholder="项目">
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
          <el-button type="primary" @click="addOneRecord">今天我做了这些</el-button>
        </div>
      </el-col>
    </el-row>
    <list :listData="items"></list>
  </div>
</template>

<script>
import moment from 'moment';
import list from './List'

export default {
  name: 'container',
  components: {list},
  data () {
    return {      
      date:moment().format("YYYY-MM-DD"),
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
      percent: 0,
      items:[],
      index:1
    }
  },
  methods: {
    addOneRecord() {
      let record = {};
      let items = this.items;

      record.index = this.index;
      record.date = this.date;
      record.project = this.project;
      record.page = this.page;
      record.func = this.func;
      record.percent = this.percent;

      items.push(record);
      this.index++;
      this.project = '';
      this.page = '';
      this.func = '';
      this.percent = '';

      localStorage.havedone = JSON.stringify({now:items});
      localStorage.index = this.index;
    }
  },
  mounted() {
    if( localStorage.havedone ) {
      this.items = JSON.parse( localStorage.havedone ).now;      
    }
    if(localStorage.index) {
      this.index = localStorage.index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
