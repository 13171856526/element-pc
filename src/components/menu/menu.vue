<template>
  <div class="menu">
    <!-- 侧边栏 -->
    <el-menu
      background-color="#1f222b"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      unique-opened
      :default-active="activePath"
    >
      <!-- 一级菜单 -->
      <el-submenu
        :index="item1.id + ''"
        v-for="item1 in menu_item"
        :key="item1.id"
      >
        <!-- 一级菜单模板 -->
        <template slot="title">
          <i :class="iconList[item1.id]"></i>
          <span>{{ item1.authName1 }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item
          :index="'/' + item1.path"
          v-for="item2 in item1.chidren"
          :key="item2.id"
          @click="sevaNavState('/' + item1.path)"
        >
          {{ item2.authName2 }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
let { log } = console;
export default {
  data() {
    return {
      menu_item: [],
      iconList: {
        "1": "el-icon-location",
        "2": "el-icon-menu",
        "3": "el-icon-document",
        "4": "el-icon-setting",
        "5": "el-icon-share",
      },
      activePath: "",
    };
  },
  created() {
    this.activePath = window.sessionStorage.getItem('activePath');
  },
  methods: {
    sevaNavState(activePath) {
      window.sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
  },
  mounted() {
    this.$axios.get("menu.json").then((res) => {
      log(res.data.menu.data);
      this.menu_item = res.data.menu.data;
    });
  },
};
</script>
<style lang="less" scoped>
.el-aside {
  .el-menu {
    border: none;
  }
}
</style>
