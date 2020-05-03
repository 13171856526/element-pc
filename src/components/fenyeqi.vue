<template>
  <div class="fenyeqi">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-size="queryInfo.pagesize"
      :page-sizes="[1, 2, 5, 10]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: "",
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条
        pagesize: 1,
      },
      userlist: [],
      // 总页数
      total: 0,
    };
  },
  methods: {
    //监听pagesizeChange
    handleSizeChange(newsize) {
      console.log(`每页 ${newsize} 条`);
      this.queryInfo.pagesize = newsize;
      this.userlist();
    },
    // 监听页码值
    handleCurrentChange(newpage) {
      console.log(`当前页: ${newpage}`);
      this.queryInfo.pagenum = newpage;
      this.userlist();
    },
  },
};
</script>
<style lang="less">
.fenyeqi {
  position: fixed;
  bottom: 30px;
  left: 200px;
}
</style>
