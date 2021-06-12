<template>
  <bm-overlay ref="myOverlay" class="my_overlay" pane="labelPane" @draw="draw">
  </bm-overlay>
</template>
<script>
export default {
  name: "my-overlay",
  props: {
    overlay: Object,
  },
  watch: {
    overlay: {
      handler() {
        this.$refs.myOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    draw({ el, BMap, map }) {
      const { lng, lat } = this.overlay
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 10 + 'px'
      el.style.top = pixel.y - 10 + 'px'
    }
  }
}
</script>

<style scoped>
.my_overlay {
  position: absolute;
  width: 25px;
  height: 25px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  background-color: red;
}
</style>