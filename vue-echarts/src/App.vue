<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <mapPoit/>
    <swiperCom /> 
    <world />
    <worldMap :msg=msg />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mapPoit from './components/mapPoit.vue'
import swiperCom from './components/swiper.vue'
import World from './components/world.vue'
import WorldMap from './components/worldMap.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,mapPoit,swiperCom,
    World,WorldMap
  },
  data:()=>({
    msg:[{}]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
