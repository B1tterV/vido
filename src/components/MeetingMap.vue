<template>
  <div>
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
  apiKey: "AIzaSyC4viWtBofqHACiUPly7WmxopLmfAi9t8U",
  version: "weekly"
});
export default {
  name: "GoogleMap",
  data: ()=>({
    map: null
  }),
  methods: {
    getAddressFromCords(lat, long) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyC4viWtBofqHACiUPly7WmxopLmfAi9t8U`)
        .then((response)=>{
          console.log(response)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    createMap(latitude = -34.397, longitude = 150.644) {
      this.map = new google.maps.Map(this.$refs.map, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      });
      this.setMarker(latitude, longitude)
    },
    setMarker(latitude = -34.397, longitude = 150.644) {
      new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        icon: require('@/assets/images/svg/map-pin.svg')
      })
      new google.maps.Circle({
        fillColor: "#FF5134",
        fillOpacity: 0.5,
        strokeWeight: 0,
        center: { lat: latitude, lng: longitude },
        radius: 250,
        map: this.map
      })
    },
    autocomplete() {
      new google.maps.places.Autocomplete(
        this.$refs.inputSearch
      )
    },
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.createMap(position.coords.latitude, position.coords.longitude)
          this.getAddressFromCords(position.coords.latitude, position.coords.longitude)
        },
        positionError => {
          this.createMap()
          console.log(positionError)
        }
      )
    } else {
      this.createMap()
      console.log('yor browser huita')
    }
    this.autocomplete()
  },
}
</script>

<style scoped>
</style>