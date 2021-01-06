<template>
  <div id="app">
    <baidu-map :center="center" :zoom="zoom" ak="你申请到的密钥" 
    :mapStyle="mapStyle" mapStyleId="a92f57d31fe31648ab66e146aefb3552"
    style="width: 100%; height: 400px;"></baidu-map>
  </div>
</template>

<script>
import BaiduMap from './components/map/Map.vue'

export default {
  name: 'App',
  components: {
    BaiduMap
  },
  data() {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 13,
      mapStyle: {
        style: "light",
        features: ["land"]
      }
    }
  }
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
