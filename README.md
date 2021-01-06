# VUE BAIDU MAP

## 声明

基于大神 [Dafrok](https://dafrok.github.io) 开发的VUE 2.x 的百度地图组件：[vue-baidu-map](https://dafrok.github.io/vue-baidu-map) 的升级。

相关文档：[https://dafrok.github.io/vue-baidu-map](https://dafrok.github.io/vue-baidu-map)

如遇文档打不开的情况，尝试使用以下DNS：

223.5.5.5

223.6.6.6


## 版本说明

0.0.7

修改 components/map/Map.vue 

1.升级api版本 2.0 => 3.0

2.移除 theme 属性

3.增加 mapStyleId 属性，支持通过设置styleId设置 [个性化地图](https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/custom)


## 开始

### 安装

```bash
npm i --save @chengli1988/vue-baidu-map
```

### 初始化

```javascript
import Vue from 'vue'
import BaiduMap from '@chengli1988/vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥
  ak: 'YOUR_APP_KEY'
})
```

### 使用
```vue
<template>
  <baidu-map class="map">
  </baidu-map>
</template>

<style>
/* 地图容器必须设置宽和高属性 */
.map {
  width: 400px;
  height: 300px;
}
</style>
```

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)
