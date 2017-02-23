<template>
  <div>
    <el-row :gutter="20" type="flex" justify="center" class="animated bounceInDown topbar">
      <el-col :span="4">        
          <el-date-picker
            readonly
            v-model="date"
            type="date"
          >
          </el-date-picker>        
      </el-col>
      <el-col :span="4">        
          <el-select v-model="project" clearable placeholder="项目">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>        
      </el-col>
      <el-col :span="4">        
          <el-input placeholder="页面" v-model="page"></el-input>        
      </el-col>
      <el-col :span="4">        
          <el-input placeholder="功能" v-model="func"></el-input>        
      </el-col>
      <el-col :span="2">        
          <el-input v-model="percent" placeholder="0">
            <template slot="append">%</template>
          </el-input>        
      </el-col>
      <el-col :span="3">        
          <el-button type="primary" @click="addOneRecord">今天我做了这些</el-button>        
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="21">
        <el-col :span="11" class="animated fadeInLeft">
          <list :listData="items"></list>          
        </el-col>
      </el-col>
    </el-row>
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
.topbar {
  margin-bottom: 30px;
}
</style>
