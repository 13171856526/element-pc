<template>
  <div class="echarts-box">
    <!-- 图标显示区域 -->
    <div class="echarts" id="echarts"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import option from "../../common/option";
export default {
  mounted() {
    this.DrawEcharts();
  },
  methods: {
    DrawEcharts() {
      // 初始化一个echarts对象
      let chart = echarts.init(document.getElementById("echarts"));
      // 设置配置项
      chart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.echarts-box {
  margin-top: 100px;
  .echarts {
    widows: 95%;
    height: 500px;
  }
}
</style>
