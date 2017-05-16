<template>
    <div class="list-wrap">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="list-title">本周已做以下事项：</span>
                <i class="el-icon-delete2" @click="deleteWeek"></i>
            </div>
            <div v-for="(list,index) in listData" class="animated flipInX listItem">
                {{index+1 +'、'}}{{list.date}} {{list.week | handleWeek}} {{list.project}} {{list.page}} {{list.func}} {{list.percent + '%'}}
                <i class="el-icon-circle-cross delBtn" @click="deleteOne(index)"></i>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'list',
    props: ['listData'],
    data() {
        return {}
    },
    methods: {
        deleteWeek() {
            this.$emit('tellFathor')
        },
        deleteOne(index) {
            this.$emit('tellLi', index)
        }
    },
    filters: {
        handleWeek(value) {
            switch (value) {
                case 'Monday':
                    return '周一';
                    break;
                case 'Tuesday':
                    return '周二';
                    break;
                case 'Wednesday':
                    return '周三';
                    break;
                case 'Thursday':
                    return '周四';
                    break;
                case 'Friday':
                    return '周五';
                    break;
                case 'Saturday':
                    return '周六';
                    break;
                case 'Sunday':
                    return '周日';
                    break;
                default:
                    return '';
            }
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

.list-title {
    line-height: 31px;
    color: #48576a;
}

.listItem {
    margin-bottom: 5px;
    color: #1f2d3d;
}

.delBtn {
    font-size: 1.2em;
    margin-top: 2px;
}
</style>
