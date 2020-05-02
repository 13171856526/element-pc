<template>
  <div class="menu">
    <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect_2"
      background-color="#1f222b"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 主页 -->
      <el-menu-item index="/zhuye">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>主页</span>
        </template>
      </el-menu-item>
      <!-- 用户 -->
      <el-menu-item index="/yonghu">
        <i class="el-icon-menu"></i>
        <span slot="title">用户</span>
      </el-menu-item>
      <!-- 文章 -->
      <el-menu-item index="/wenzhang">
        <i class="el-icon-document"></i>
        <span slot="title">文章</span>
      </el-menu-item>
      <!-- 设置 -->
      <el-submenu index="/shezhi">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/4-1">选项1</el-menu-item>
          <el-menu-item index="/4-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 图表 -->
      <el-menu-item index="/tubiao">
        <i class="el-icon-share"></i>
        <span slot="title">图表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect_2(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped></style>
