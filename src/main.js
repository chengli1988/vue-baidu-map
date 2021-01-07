import Vue from 'vue'
import App from './App.vue'
import BaiduMap from './components/index'

Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '你申请到的ak',
  // 个性化地图styleId（可选）
  mapStyleId: "你创建的个性化地图styleId"
})

new Vue({
  render: h => h(App),
}).$mount('#app')
