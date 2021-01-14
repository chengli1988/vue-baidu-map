<template>
  <div id="app">
    <button @click="changeStyleId">更改StyleId</button>
    <button @click="changeStyleJson">更改StyleJson</button>
    <button @click="changeMapCenterStr">更改地图中心</button>
    <button @click="changeMapCenter">更改地图中心</button>
    <baidu-map :center="center" :zoom="zoom" :mapStyleId="mapStyleId" :mapStyleJson="mapStyleJson" style="width: 100%; height: 400px;"></baidu-map>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 13,
      mapStyleId: "",
      mapStyleJson: []
    }
  },
  methods: {
    changeMapCenter() {
      this.center = {
        lng: 116.404,
        lat: 39.915
      }
    },
    changeMapCenterStr() {
      this.center = "广州"
    },
    changeStyleId() {
      this.mapStyleId = "e0d337d0612a6e9d857803a6f5bc738d"
    },
    changeStyleJson() {
      this.mapStyleId = ""
      this.mapStyleJson = [{
        "featureType": "land",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "color": "#091220ff"
        }
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "color": "#113549ff"
        }
      }, {
        "featureType": "green",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "color": "#0e1b30ff"
        }
      }, {
        "featureType": "building",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "building",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#ffffffb3"
        }
      }, {
        "featureType": "building",
        "elementType": "geometry.stroke",
        "stylers": {
          "color": "#dadadab3"
        }
      }, {
        "featureType": "subwaystation",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "color": "#b15454B2"
        }
      }, {
        "featureType": "education",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "color": "#e4f1f1ff"
        }
      }, {
        "featureType": "medical",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "color": "#f0dedeff"
        }
      }, {
        "featureType": "scenicspots",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "color": "#e2efe5ff"
        }
      }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "weight": 4
        }
      }, {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#f7c54dff"
        }
      }, {
        "featureType": "highway",
        "elementType": "geometry.stroke",
        "stylers": {
          "color": "#fed669ff"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#8f5a33ff"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "highway",
        "elementType": "labels.icon",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "arterial",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "weight": 2
        }
      }, {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#d8d8d8ff"
        }
      }, {
        "featureType": "arterial",
        "elementType": "geometry.stroke",
        "stylers": {
          "color": "#ffeebbff"
        }
      }, {
        "featureType": "arterial",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "arterial",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#525355ff"
        }
      }, {
        "featureType": "arterial",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "local",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "weight": 1
        }
      }, {
        "featureType": "local",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#d8d8d8ff"
        }
      }, {
        "featureType": "local",
        "elementType": "geometry.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "local",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "local",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#979c9aff"
        }
      }, {
        "featureType": "local",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "railway",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "weight": 1
        }
      }, {
        "featureType": "railway",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#123c52ff"
        }
      }, {
        "featureType": "railway",
        "elementType": "geometry.stroke",
        "stylers": {
          "color": "#12223dff"
        }
      }, {
        "featureType": "subway",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on",
          "weight": 1
        }
      }, {
        "featureType": "subway",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#d8d8d8ff"
        }
      }, {
        "featureType": "subway",
        "elementType": "geometry.stroke",
        "stylers": {
          "color": "#ffffff00"
        }
      }, {
        "featureType": "subway",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "subway",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#979c9aff"
        }
      }, {
        "featureType": "subway",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels.icon",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#333333ff"
        }
      }, {
        "featureType": "continent",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "city",
        "elementType": "labels.icon",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "city",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "city",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#454d50ff"
        }
      }, {
        "featureType": "city",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "town",
        "elementType": "labels.icon",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "town",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "town",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#454d50ff"
        }
      }, {
        "featureType": "town",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": {
          "color": "#12223dff"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "districtlabel",
        "elementType": "labels",
        "stylers": {
          "visibility": "off"
        }
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": {
          "visibility": "on"
        }
      }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
          "visibility": "off"
        }
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": {
          "color": "#ffffff00"
        }
      }, {
        "featureType": "district",
        "elementType": "labels",
        "stylers": {
          "visibility": "off"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels.icon",
        "stylers": {
          "visibility": "off"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels.text.fill",
        "stylers": {
          "color": "#2dc4bbff"
        }
      }, {
        "featureType": "poilabel",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffff00"
        }
      }, {
        "featureType": "manmade",
        "elementType": "geometry",
        "stylers": {
          "color": "#12223dff"
        }
      }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "entertainment",
        "elementType": "geometry",
        "stylers": {
          "color": "#ffffffff"
        }
      }, {
        "featureType": "shopping",
        "elementType": "geometry",
        "stylers": {
          "color": "#12223dff"
        }
      }]
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