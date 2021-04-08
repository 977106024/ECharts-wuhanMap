<template>
  <div class="hello" >
    <h1>{{ msg }}</h1>
    <div id="main" style="width: 600px; height: 400px"></div>
    
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts-liquidfill";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {

      

    console.log(echarts, "ssss");
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    // // 指定图表的配置项和数据
    // var option = {
    //     title: {
    //         text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     legend: {
    //         data:['销量']
    //     },
    //     xAxis: {
    //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //     },
    //     yAxis: {},
    //     series: [{
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //     }]
    // };
   var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3]
    }]
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
