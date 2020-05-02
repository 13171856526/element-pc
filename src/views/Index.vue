<template>
  <div class="about">
    <!-- 外容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-row>
          <!-- 头部left -->
          <el-col :span="4">
            <!-- <img src="../assets/logo.png" alt="" /> -->
            <div>Element-ui</div>
          </el-col>
          <!-- 头部right -->
          <el-col :span="20">
            <HeaderRight></HeaderRight>
          </el-col>
        </el-row>
      </el-header>
      <!-- 内容器 -->
      <el-container>
        <!-- 左侧 -->
        <el-aside width="200px">
          <!-- 左侧导航栏 -->
          <Menu></Menu>
        </el-aside>
        <!-- 右侧主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Menu from "../components/menu/menu";
import HeaderRight from "../components/HeaderRight";
export default {
  components: {
    HeaderRight,
    Menu,
  },
};
</script>
<style lang="less" scoped>
.el-aside {
  background-color: #1f222b;
}
.el-container {
  box-sizing: border-box;
  min-height: 91vh;
}

.el-header {
  padding: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  border-bottom: 1px solid #f5f5f5;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col {
      height: 100%;
      &:nth-child(1) {
        width: 199px;
        box-sizing: border-box;
        background-color: #1f222b;
        margin-right: 10px;
        div {
          color: #fff;
          text-align: center;
        }
      }

      .grid-content {
        height: 100%;
      }
    }
  }
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.el-submenu .el-menu-item {
  min-width: 199px;
}
.el-header,
.el-footer {
  color: #333;
  line-height: 60px;
}
</style>
