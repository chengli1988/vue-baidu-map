<template>
<div>
  <div v-if="!hasBmView" ref="view" style="width: 100%; height: 100%">
  </div>
  <slot></slot>
</div>
</template>

<script>
import bindEvents from '../base/bindEvent.js'
import {checkType} from '../base/util.js'

export default {
  name: 'bm-map',
  props: {
    ak: {
      type: String
    },
    center: {
      type: [Object, String]
    },
    zoom: {
      type: Number
    },
    minZoom: {
      type: Number
    },
    maxZoom: {
      type: Number
    },
    highResolution: {
      type: Boolean,
      default: true
    },
    mapClick: {
      type: Boolean,
      default: true
    },
    mapType: {
      type: String
    },
    dragging: {
      type: Boolean,
      default: true
    },
    scrollWheelZoom: {
      type: Boolean,
      default: false
    },
    doubleClickZoom: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    inertialDragging: {
      type: Boolean,
      default: true
    },
    continuousZoom: {
      type: Boolean,
      default: true
    },
    pinchToZoom: {
      type: Boolean,
      default: true
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    mapStyleId: {
      type: String
    },
    mapStyleJson: {
      type: Array
    }
  },
  watch: {
    center: {
      handler(val) {
        const {BMap, map, zoom} = this
        if (checkType(val) === 'String') {
          map.centerAndZoom(val, zoom)
        } else {
          map.centerAndZoom(new BMap.Point(val.lng, val.lat), zoom)
        }
      },
      deep: true
    },
    zoom (val, oldVal) {
      const {map} = this
      if (val !== oldVal && val >= 3 && val <= 19) {
        map.setZoom(val)
      }
    },
    minZoom (val) {
      const {map} = this
      map.setMinZoom(val)
    },
    maxZoom (val) {
      const {map} = this
      map.setMaxZoom(val)
    },
    highResolution () {
      this.reset()
    },
    mapClick () {
      this.reset()
    },
    mapType (val) {
      const {map} = this
      map.setMapType(global[val])
    },
    dragging (val) {
      const {map} = this
      val ? map.enableDragging() : map.disableDragging()
    },
    scrollWheelZoom (val) {
      const {map} = this
      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom()
    },
    doubleClickZoom (val) {
      const {map} = this
      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom()
    },
    keyboard (val) {
      const {map} = this
      val ? map.enableKeyboard() : map.disableKeyboard()
    },
    inertialDragging (val) {
      const {map} = this
      val ? map.enableInertialDragging() : map.disableInertialDragging()
    },
    continuousZoom (val) {
      const {map} = this
      val ? map.enableContinuousZoom() : map.disableContinuousZoom()
    },
    pinchToZoom (val) {
      const {map} = this
      val ? map.enablePinchToZoom() : map.disablePinchToZoom()
    },
    autoResize (val) {
      const {map} = this
      val ? map.enableAutoResize() : map.disableAutoResize()
    },
    mapStyleId (val) {
      if (val) {
        const {map} = this
        map.setMapStyleV2({ styleId: val })
      }
    },
    mapStyleJson (val) {
      if (val) {
        const {map, mapStyleId} = this
        !mapStyleId && map.setMapStyleV2({ styleJson: val })
      }
    }
  },
  methods: {
    setMapOptions () {
      const {map, minZoom, maxZoom, mapType, dragging, scrollWheelZoom, doubleClickZoom, keyboard, inertialDragging, continuousZoom, pinchToZoom, autoResize} = this
      minZoom && map.setMinZoom(minZoom)
      maxZoom && map.setMaxZoom(maxZoom)
      mapType && map.setMapType(global[mapType])
      dragging ? map.enableDragging() : map.disableDragging()
      scrollWheelZoom ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom()
      doubleClickZoom ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom()
      keyboard ? map.enableKeyboard() : map.disableKeyboard()
      inertialDragging ? map.enableInertialDragging() : map.disableInertialDragging()
      continuousZoom ? map.enableContinuousZoom() : map.disableContinuousZoom()
      pinchToZoom ? map.enablePinchToZoom() : map.disablePinchToZoom()
      autoResize ? map.enableAutoResize() : map.disableAutoResize()
    },
    init (BMap) {
      if (this.map) {
        return
      }
      let $el = this.$refs.view
      for (let $node of this.$slots.default || []) {
        if ($node.componentOptions && $node.componentOptions.tag === 'bm-view') {
          this.hasBmView = true
          $el = $node.elm
        }
      }
      const map = new BMap.Map($el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      this.map = map
      const {setMapOptions, zoom, getCenterPoint } = this
      
      setMapOptions()
      bindEvents.call(this, map)
      map.centerAndZoom(getCenterPoint(), zoom)

      const {mapStyleId, mapStyleJson } = this
      // setMapStyleV2方法需要在地图初始化（centerAndZoom）完成后执行；
      let styleId = mapStyleId || this._BMap().mapStyleId
      if (styleId) {
        map.setMapStyleV2({"styleId": styleId})
      } else if (mapStyleJson) {
        map.setMapStyleV2({styleJson: mapStyleJson})
      }

      this.$emit('ready', {BMap, map})
    },
    getCenterPoint () {
      const {center, BMap} = this
      switch (checkType(center)) {
        case 'String': return center
        case 'Object': return new BMap.Point(center.lng, center.lat)
        default: return new BMap.Point()
      }
    },
    initMap (BMap) {
      this.BMap = BMap
      this.init(BMap)
    },
    getMapScript () {
      if (!global.BMap) {
        const ak = this.ak || this._BMap().ak
        global.BMap = {}
        global.BMap._preloader = new Promise((resolve, reject) => {
          global._initBaiduMap = function () {
            resolve(global.BMap)
            global.document.body.removeChild($script)
            global.BMap._preloader = null
            global._initBaiduMap = null
          }
          const $script = document.createElement('script')
          global.document.body.appendChild($script)
          $script.src = `https://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=_initBaiduMap`
        })
        return global.BMap._preloader
      } else if (!global.BMap._preloader) {
        return Promise.resolve(global.BMap)
      } else {
        return global.BMap._preloader
      }
    },
    reset () {
      const {getMapScript, initMap} = this
      getMapScript().then(initMap)
    }
  },
  mounted () {
    this.reset()
  },
  data () {
    return {
      hasBmView: false
    }
  }
}
</script>
