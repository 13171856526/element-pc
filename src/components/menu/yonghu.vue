<template>
  <div>
    <!-- <el-button type="primary">新增</el-button>
      <el-button type="danger">批量删除</el-button> -->
    <!-- 用户列表区域 -->
    <el-table
      ref="multipleTable"
      :data="usereslist"
      border
      tooltip-effect="dark"
      stripe
    >
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="bornDate" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="userName" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="手机" width="150"> </el-table-column>
      <el-table-column prop="Address" label="地址" width="265">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ scope.row.status ? "启用" : "禁用" }}
          <!-- <el-switch
              v-model="scope.row.zhuangtai"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="userStateChange(scope.row)"
            >
            </el-switch> -->
        </template>
      </el-table-column>
      <el-table-column prop="zhuangtai" label="操作">
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-tooltip
            class="item"
            effect="dark"
            content="修改按钮"
            placement="top"
          >
            <el-button
              type="primary"
              size="mini"
              @click="bianji(scope.$index, scope.row)"
            >
              <i class="el-icon-edit"></i>
            </el-button>
          </el-tooltip>

          <!-- 删除按钮 -->
          <el-tooltip
            class="item"
            effect="dark"
            content="删除按钮"
            placement="top"
            :enterable="false"
          >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="">
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
    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="dialogVisible" width="30%">
      <el-form
        :model="editFrom"
        :rules="editFromrules"
        ref="editFromref"
        label-width="60px"
      >
        <el-form-item label="日期" prop="bornDate">
          <el-input v-model="user.bornDate"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="user.userName"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="shouji">
          <el-input v-model="user.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="province">
          <el-input v-model="user.status"></el-input>
        </el-form-item>
        <el-switch
          v-model="user.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-value="1"
          :inactive-value="0"
        >
        </el-switch>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import fenyeqi from "../fenyeqi";
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
      // mack渲染的this接口
      userlist: [],

      usereslist: [],
      // 总页数
      total: 0,
      // 控制修改用户对象框的显示与隐藏
      dialogVisible: false,
      // 查询到的用户信息对象
      editFrom: {},
      editFromrules: {},
      user: {
        id: "",
        userName: "",
        bornDate: "",
        phone: "",
        status: 0,
        Address: "",
      },
    };
  },
  created() {},
  mounted() {
    this.usersAxios();
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
    // 监听swiper 状态
    userStateChange(userinfo) {
      console.log(userinfo);

      this.$axios.put(`data/data/${userinfo.id}/users/${userinfo.zhuangtai}`);

      this.$message.success("更新状态成功");
    },
    // 修改编辑用户的对话框
    bianji(index, row) {
      console.log(index, row);
      this.user = Object.assign({},row)
      this.dialogVisible = true;
    },
    // 用户axios的接口
    usersAxios() {
      this.$axios("/api/users").then((res) => {
        console.log(res.data);
        this.usereslist = res.data;
      });
    },
  },

  components: {
    fenyeqi,
  },
};
</script>
<style lang="less" scoped>
.fenyeqi {
  position: fixed;
  bottom: 30px;
  left: 200px;
}
</style>
