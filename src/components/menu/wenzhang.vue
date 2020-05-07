<template>
  <!-- 文章 -->
  <div class="wenzhang">
    <el-table :data="wenzhanglist">
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="biaoti" label="标题" width="500">
      </el-table-column>
      <el-table-column prop="userName" label="作者"></el-table-column>
      <el-table-column prop="bornDate" sortable label="日期"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          {{ scope.row.status ? "启用" : "禁用" }}
        </template>
      </el-table-column>
      <el-table-column prop="zhuangtai" label="操作">
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-button
            type="primary"
            size="mini"
            @click="bianji(scope.$index, scope.row)"
          >
            <i class="el-icon-edit"></i>
          </el-button>
          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <i class="el-icon-delete"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="标题" prop="bornDate">
          <el-input v-model="wenzhang.biaoti"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="name">
          <el-input v-model="wenzhang.userName"></el-input>
        </el-form-item>
        
        <el-form-item label="日期"  prop="shouji">
          <el-input v-model="wenzhang.bornDate"></el-input>
        </el-form-item>
        <el-switch
          v-model="wenzhang.status"
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
      wenzhanglist: [],
      wenzhang: {
        id: "",
        userName: "",
        bornDate: "",
        status: "",
        biaoti: "",
      },
      dialogVisible: false,
    };
  },
  mounted() {
    this.wenzhangget();
  },
  methods: {
    wenzhangget() {
      this.$axios.get("/api/wenzhang").then((res) => {
        console.log(res);
        this.wenzhanglist = res.data;
      });
    }, // 修改编辑用户的对话框
    bianji(index, row) {
      console.log(index, row);
      this.wenzhang = Object.assign({}, row);
      this.dialogVisible = true;
    },
  },
  components: {
    fenyeqi,
  },
};
</script>
<style lang="less">
.wenzhang,
.el-table,
.el-table__body-wrapper {
  height: 100%;
}
</style>
