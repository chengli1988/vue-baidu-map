import Vue from 'vue'
import App from './App.vue'
import BaiduMap from './components/index'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'IOoDT3rPqITgYlvjspifaBEoYadIWANB',
  // 个性化地图styleId（可选）
  mapStyleId: "a92f57d31fe31648ab66e146aefb3552",
  // 中心点, 提供默认中心点配置，用户初始化地图获取该值设置地图中心点（可选）
  center: {lng: 110.9506387744665, lat: 36.70628310146949}
})

new Vue({
  render: h => h(App),
}).$mount('#app')
