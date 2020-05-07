<template>
  <div class="gerenxinxi">
    <!-- 导航标签 -->
    <div class="nav_tabs">
      <el-tabs type="border-card">
        <el-tab-pane label="个人信息">
          <!-- <span slot="label"><i class="el-icon-date"></i> 我的行程</span> -->
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input id="elinput" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input maxlength="11" v-model="form.dianhua"></el-input>
            </el-form-item>
            <el-form-item label="在职时间">
              <el-input v-model="form.nianxian"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="求职意向"
          ><el-form ref="form1" :model="form" label-width="80px">
            <el-form-item label=" 期望岗位">
              <el-input v-model="form1.gangwei"></el-input>
            </el-form-item>
            <el-form-item label="期望月薪">
              <el-input v-model="form1.yuexin"></el-input>
            </el-form-item>
            <el-form-item label="工作性质">
              <el-input maxlength="11" v-model="form1.xingzhi"></el-input>
            </el-form-item>
            <el-form-item label=" 工作地点">
              <el-input v-model="form1.didian"></el-input>
            </el-form-item>
            <el-form-item label="工作状态">
              <el-input v-model="form1.zhuangtai"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="教育背景">教育背景</el-tab-pane>
        <el-tab-pane label="专业技能"
          ><template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="index"> </el-table-column>
              <el-table-column
                prop="shuxijineng"
                label="熟悉技能"
                width="200px"
              >
              </el-table-column>
              <el-table-column
                prop="shuxikuangjia"
                label="熟悉框架"
                width="200px"
              >
              </el-table-column>
              <el-table-column
                prop="shulianjineng"
                label="熟练技能"
                width="200px"
              >
              </el-table-column>
              <el-table-column
                prop="shuliankuangjia"
                label="熟练框架"
                width="200px"
              >
              </el-table-column>
            </el-table> </template
        ></el-tab-pane>
        <el-tab-pane label="项目">
          <!-- <swiper></swiper> -->
        </el-tab-pane>
        <el-tab-pane label="自我评价">自我评价</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// 引入轮播图
import swiper from "../swiper";
// 引入分页器
import fenyeqi from "../fenyeqi";
export default {
  data() {
    return {
      // 个人信息
      form: {
        name: "杨鑫行",
        age: 24,
        dianhua: 13171856526,
        email: "13171856526@163.com",
        nianxian: "一年",
      },
      // 求职意向
      form1: {
        gangwei: "前端工程师",
        yuexin: "面议",
        xingzhi: "全职",
        didian: "北京",
        zhuangtai: "离职，可以随时到岗",
      },
      // 专业技能
      tableData: [
        {
          shuxijineng: "ES6,7,8",
          shuxikuangjia: "lazyload",
          shulianjineng: "HTML",
          shuliankuangjia: "Jquey",
        },
        {
          shuxijineng: "Node.js",
          shuxikuangjia: "",
          shulianjineng: "CSS",
          shuliankuangjia: "Vue/Vuex/Vue-router",
        },
        {
          shuxijineng: "微信小程序",
          shuxikuangjia: "",
          shulianjineng: "ajax",
          shuliankuangjia: "Swiper",
        },
        {
          shuxijineng: "web语义化",
          shuxikuangjia: "",
          shulianjineng: "axios",
          shuliankuangjia: "Bootstrap",
        },
        {
          shuxijineng: "浏览器兼容性",
          shuxikuangjia: "",
          shulianjineng: "移动端开发",
          shuliankuangjia: "Mint-UI",
        },
        {
          shuxijineng: "rem布局/vw,vh",
          shuxikuangjia: "",
          shulianjineng: "JavaScript",
          shuliankuangjia: "element-UI",
        },
        {
          shuxijineng: "Less/Sass",
          shuxikuangjia: "",
          shulianjineng: "PC端开发",
          shuliankuangjia: "animate",
        },
        {
          shuxijineng: "MySql",
          shuxikuangjia: "",
          shulianjineng: "",
          shuliankuangjia: "vant",
        },
        {
          shuxijineng: "Github",
          shuxikuangjia: "",
          shulianjineng: "",
          shuliankuangjia: "",
        },
        {
          shuxijineng: "JsonServer",
          shuxikuangjia: "",
          shulianjineng: "",
          shuliankuangjia: "",
        },
        {
          shuxijineng: "响应式布局",
          shuxikuangjia: "",
          shulianjineng: "",
          shuliankuangjia: "",
        },
        {
          shuxijineng: "webpack",
          shuxikuangjia: "",
          shulianjineng: "",
          shuliankuangjia: "",
        },
      ],
    };
  },
  created() {},
  methods: {},
  components: {
    // 绑定分页器
    fenyeqi,
    // 绑定轮播图
    swiper,
  },
  // 进入组件内守卫
  // beforeRouteEnter: (to, from, next) => {
  //   console.log(from.path);
  //   if (from.path == "/") {
  //     next("/Login");
  //   } else {
  //     next();
  //   }
  // },
  // beforeRouteLeave: (to, from, next) => {
  //   if (confirm("忍心离开吗") == true) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // },
};
</script>
//
<style lang="less">
.gerenxinxi {
  width: 100%;
  height: 100%;
  // 导航
  .nav_tabs,
  .el-tabs {
    width: 100%;
    height: 100%;
    .el-tabs__content {
      // 个人信息
      .el-tab-pane {
        overflow: scroll;
        height: 545px;
        // 表单
        .el-form {
          display: flex;
          flex-wrap: wrap;

          .el-form-item {
            margin-right: 100px;
            .el-form-item__content {
              .el-input {
                width: 110%;
                .el-input__inner {
                  border: none !important;
                  outline: none !important;
                }
              }
            }
          }
        }
      }
      // 求职意向
    }
  }
  //
}
</style>
