<template>
    <div class="pay-input-block">
        <input 
            :type="type" 
            class="input__float" 
            :placeholder=" ' ' "
            @input="setValue">
    </div>
</template>

<script>
import '@/assets/inputFloat.scss'

export default {
  name: 'InputFloat',
  props: {
    placeholder: String,
    type: String,
  },
  methods: {
    setValue( event ) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>