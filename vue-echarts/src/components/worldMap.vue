<template>
  <div class="echarts">
    <div :style="{ height: height, width: width }" ref="myEchart"></div>
    <canvas id="line" width="500" height="500"></canvas>
  </div>
</template>
<script>
import echarts from "echarts"; //引入组件
import "../../node_modules/echarts/map/js/world.js"; //引入组件
import { colorMapData, nameMap } from "./worldData";
export default {
  name: "echarts",
  props: {
    width: { type: String, default: "1000px" },
    height: { type: String, default: "500px" },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    console.log(nameMap, "sss");
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart);
      window.onresize = echarts.init(this.$refs.myEchart).resize;
      // 把配置和数据放这里
      this.chart.setOption({
        visualMap: {
          //图列显示柱
          type: "continuous",
          min: 1,
          max: 8,
          inRange: {
            color: [
              "#073436",  // 1
              "rgba(56, 197, 255, 1)", // 2 坦桑尼亚
              "rgba(255, 172, 99, 1)", // 3 尼泊尔
              "rgba(143, 255, 109, 1)", // 4 柬埔寨
              "rgba(8, 253, 204, 1)", // 5 中国
              "rgba(57, 113, 255, 1)", // 6 乌兹别克斯坦
              "rgba(255, 116, 204, 1)", // 7 吉尔吉斯斯坦
              "rgba(144, 70, 255, 1)", // 8 塔吉克斯坦
            ],
          },
          show: false,
        },

        series: [
          {
            name: "国家面积",
            type: "map",
            mapType: "world",
            roam: true,
            mapLocation: { y: 10 },
            data: colorMapData, //绑定数据
            nameMap: nameMap,
            symbolSize: 6,
            label: {
              normal: { show: false },
              emphasis: { show: false },
            },
            itemStyle: {
              normal: {
                color: "red",
              },
              emphasis: {
                borderColor: "#fff",
                borderWidth: 10,
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
    #line{
        border: 1px solid red;
    }
</style>