<template>
  <div class="radio-incomplete">
    <input type="radio" :name="name" :id="id" class="radio__incomplete">
  </div>
</template>

<script>
import '@/assets/radio.scss'

export default {
  name: 'Radio',
  data: () => ({
    isChecked: false
  }),
  props: {
    type: String,
    name: String,
    id: String
  },
  methods: {
    checked() {
      this.isChecked = !this.isChecked
      this.$emit('input', this.isChecked)
    }
  }

}
</script>