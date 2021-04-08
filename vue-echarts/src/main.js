import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts';
// import './components/world.js'
// import '../node_modules/echarts/map/js/world.js' // 引入世界地图
// import './components/world.js'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
