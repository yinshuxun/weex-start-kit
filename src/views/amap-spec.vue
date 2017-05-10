<template>
    <div class="container">
        <weex-amap class="map" id="map2017" :scale="true" :geolocation="true" :center="pos">
            <weex-amap-marker :position="point.position" :title="point.title"></weex-amap-marker>
        </weex-amap>
    </div>
</template>

<style>
    .container {
        position: relative;
        flex: 1;
        background-color: #fff;
    }

    .map {
        flex: 1;
        position: relative;
        background-color: #fff;
        min-height: 600;
    }
</style>

<script>
//  import weexAmap from '../../plugins/weex-amap/js/weex-amap.vue';

  export default{
    data(){
      return {
        pos: [116.487, 40.00003],
        point: {
          position: [112, 36],
          title: 'this is a marker'
        }
      }
    },
    components: {
//      weexAmap
    }
  }
</script>