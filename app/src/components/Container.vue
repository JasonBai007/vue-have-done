<template>
  <div>
    <el-row :gutter="20" type="flex" justify="center" class="animated bounceInDown topbar">
      <el-col :span="21">
        <el-col :span="6" style="padding-left:0;">
          <el-date-picker v-model="date" type="date" class="commonwidth" :clearable="false"></el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-select v-model="project" clearable placeholder="项目列表" class="commonwidth">
            <el-option v-for="(item,index) in options" :label="item.label" :value="item.value" :key="index"></el-option>
          </el-select>
        </el-col>

        <el-col :span="9">
          <el-input placeholder="页面功能" v-model="pagefunc" class="commonwidth" @keyup.enter.native="addOneRecord"></el-input>
        </el-col>
        <el-col :span="3">
          <el-input v-model="percent" placeholder="完成度" class="commonwidth" @keyup.enter.native="addOneRecord">
            <template slot="append">%</template>
          </el-input>
        </el-col>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="21">
        <el-col :span="12" class="animated bounceInUp leftlayout">
          <Setting @tellPapa="handleSetting"></Setting>
        </el-col>
        <el-col :span="12" class="animated bounceInUp">
          <List :listData="items" @tellFathor="deleteWeekRecord" @tellLi="delOne"></List>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import moment from "moment";
import List from "./List";
import Setting from "./Setting";

export default {
  name: "container",
  components: {
    List,
    Setting
  },
  data() {
    return {
      date: moment().format("YYYY-MM-DD"),
      project: "",
      options: [],
      pagefunc: "",
      // func: '',
      percent: 100,
      items: []
    };
  },
  mounted() {
    if (localStorage.havedone) {
      this.items = JSON.parse(localStorage.havedone).now;
    }
    if (localStorage.opt) {
      this.options = JSON.parse(localStorage.opt).opt;
    }
  },
  methods: {
    addOneRecord() {
      let record = {};
      let items = this.items;
      record.date = moment(this.date).format("YYYY-MM-DD");
      record.week = moment(this.date).format("dddd");
      record.project = this.project;
      record.pagefunc = this.pagefunc;
      if (record.project == "" || record.pagefunc == "") {
        alert("请选择项目并输入页面功能");
      } else {
        record.percent = this.percent;
        items.push(record);
        this.pagefunc = "";
        this.func = "";
        this.percent = 100;
        localStorage.havedone = JSON.stringify({
          now: items
        });
      }
    },
    deleteWeekRecord() {
      localStorage.clear();
      this.items = [];
    },
    delOne(i) {
      this.items.splice(i, 1);
      localStorage.havedone = JSON.stringify({
        now: this.items
      });
    },
    handleSetting(arr) {
      if (arr.length > 0) {
        let newArr = [...this.options, ...arr];
        this.options = newArr;
        localStorage.opt = JSON.stringify({
          opt: newArr
        });
      } else if (arr.length === 0) {
        this.options = [];
        localStorage.opt = JSON.stringify({
          opt: []
        });
      }
    }
  }
};
</script>
<style scoped>
.topbar {
  margin-bottom: 30px;
}

.leftlayout {
  padding-left: 0 !important;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.commonwidth {
  width: 100%;
}
</style>
