<template>
    <div>
        <el-row :gutter="20" type="flex" justify="center" class="animated bounceInDown topbar">
            <el-col :span="4">
                <el-date-picker v-model="date" type="date">
                </el-date-picker>
            </el-col>
            <el-col :span="4">
                <el-select v-model="project" clearable placeholder="项目">
                    <el-option v-for="item in options" :label="item.label" :value="item.value">
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
                <el-input v-model="percent" placeholder="100">
                    <template slot="append">%</template>
                </el-input>
            </el-col>
            <el-col :span="3">
                <el-button type="primary" @click="addOneRecord">今天我做了这些</el-button>
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
import moment from 'moment';
import List from './List'
import Setting from './Setting'

export default {
    name: 'container',
    components: {
        List,
        Setting
    },
    data() {
        return {
            date: moment().format("YYYY-MM-DD"),
            project: '',
            options: [],
            page: '',
            func: '',
            percent: 100,
            items: []
        }
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
            record.page = this.page;
            record.func = this.func;
            record.percent = this.percent;

            items.push(record);
            this.project = '';
            this.page = '';
            this.func = '';
            this.percent = 100;

            localStorage.havedone = JSON.stringify({
                now: items
            });
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
            this.options = [];
            let opt = this.options;
            arr.forEach(function(v, i) {
                opt.push({
                    value: v,
                    label: v
                })
            })
            localStorage.opt = JSON.stringify({
                opt: opt
            });
        }
    }

}
</script>
<style scoped>
.topbar {
    margin-bottom: 30px;
}

.leftlayout {
    padding-left: 0 !important;
}
</style>
