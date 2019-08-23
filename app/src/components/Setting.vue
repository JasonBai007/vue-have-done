<template>
  <div class="setting-wrap">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="配置项目" name="1">
        <textarea class="el-textarea__inner" rows="3" @keyup.enter="submit" placeholder="请输入项目名称，以中文空格分隔，输入完，按Enter键完成配置，输入“清空”，回车后清空项目列表。" v-model="con"></textarea>
      </el-collapse-item>
      <el-collapse-item title="使用说明" name="2">
        <ol>
          <li>
            前往
            <a href="https://github.com/flowerxuegao" class="special" target="_blank" title="Github">全球最大男性交友社区</a> 为作者点赞
          </li>
          <li>配置项目（输入项目名称，以空格分隔，输入完，按Enter键完成配置。）</li>
          <li>开始使用</li>
        </ol>
      </el-collapse-item>
      <el-collapse-item title="勾搭作者" name="3">
        <div class="inner-wrap">
          <img src="../assets/weixin2.jpg" alt width="240" />
          <img src="../assets/weixin.jpg" alt width="240" height="334" />
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: "setting",
  data() {
    return {
      activeNames: ["2"],
      con: ""
    };
  },
  methods: {
    submit() {
      if (/^清空/.test(this.con)) {
        this.$emit("tellPapa", []);
        this.con = "";
      } else {
        let str = this.con.replace(/\n/g, "");
        let arr = str.split(/\s+/).map(_str => {
          return {
            label: _str,
            value: _str
          };
        });
        this.$emit("tellPapa", arr);
        this.con = "";
      }
    }
  }
};
</script>
<style scoped>
textarea {
  padding: 10px;
}

img {
  vertical-align: middle;
  margin: 10px;
}

.special {
  color: #20a0ff;
}

.inner-wrap {
  text-align: center;
}
</style>
