<template>
  <GmapMap
    ref="mapRef"
    :center="{lat:29.100811, lng:-13.651651}"
    :zoom="12"
    :options="{
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
    }"
    map-type-id="roadmap"
    style="width: 585px; height: 350px; border-radius: 12px; overflow: hidden;"
  >
  </GmapMap>
</template>

<script>
export default {
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
 
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat:29.100811, lng:-13.651651})
    })
  }
}