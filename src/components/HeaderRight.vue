<template>
  <div class="headerright">
    <el-row>
      <el-col class="right-col1" :span="6">
        <el-button icon="el-icon-d-arrow-left" circle></el-button>
        <el-button type="" icon="el-icon-refresh" circle></el-button>
        <el-button type="" icon="el-icon-rank" circle></el-button>
        <el-button type="" icon="el-icon-edit" circle></el-button>
      </el-col>
      <el-col :span="6" :offset="12">
        <span>{{ this.todayDate }}</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            ADMIN<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>个人资料</el-dropdown-item>
            <el-dropdown-item disabled>修改密码</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todayDate: "",
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      let y, m, d, w;
      let dt = new Date();
      y = dt.getFullYear();
      m = dt.getMonth();
      d = dt.getDate();
      w = dt.getDay();
      this.todayDate = y + "年" + m + "月" + d + "日" + "星期" + w;
    },
  },
};
</script>

<style lang="less" scoped>
.headerright {
  .right-col1 {
    i {
      margin: 0 10px;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  margin-left: 10px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
