<template>
  <!-- 登录页面 -->
  <div class="login">
    <el-form
      class="login-from"
      :model="loginFrom"
      :rules="loginFromRulses"
      ref="ruleForm"
    >
      <span>{{fromtop}}</span>
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-goods"
          placeholder="请输入登录账号"
          v-model="loginFrom.username"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-time"
          placeholder="请输入密码"
          v-model="loginFrom.password"
          clearable
          show-password
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        @click="login"
        size="medium"
        icon="el-icon-search"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromtop:"系统登录",
      // 登录表单的数据绑定对象
      loginFrom: {
        username: "admin",
        password: "123456",
      },
      // 表单验证规则对象
      loginFromRulses: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 登录跳转到的路由路径
    login() {
      this.$refs.ruleForm.validate((valid) => {
        // 判断是否符合正则标准，符合则进入，不符合则 return
        if (!valid) return this.$message.error("登录失败");
        // console.log(valid);
        this.$message.success("登录成功");
        this.$router.push("/zhuye");
      });
    },
  },
};
</script>
<style lang="less" scoped>
// Login界面
.login {
  width: 100%;
  height: 100%;
  background-color: #1f222b;
  position: relative;
  // 表单
  .login-from {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f5f5f5;
    box-sizing: border-box;
    border-radius: 5px;
    // 系统登录
    > span {
      display: block;
      text-align: center;
      margin: 20px auto;
    }
    // 底部登录
    .el-button {
      width: 100%;
    }
  }
}
</style>
