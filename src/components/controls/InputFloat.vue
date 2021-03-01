<template>

  <div v-if="information">
    <div
      class="pay-input-block"
    >
    <input :type="type" 
      class="input__float" 
      :class="{
        input__float_error: error,
        input__float_sucsess: sucsess
        }"
      :placeholder="placeholder"
      @input="setValue"
    >
    <label>{{ floatText }}</label>
    <div class="input__icon-ok" v-if="sucsess">
      <icon-base width="20" height="20" viewBox="0 0 20 20" name="checkmark"/>
    </div>
    <div class="input__float-error" v-if="error">
      <p>{{ errorMessage }}</p>
    </div>
    <div class="input__float-error" v-if="required">
      <p>{{ requiredMessage }}</p>
    </div>
    </div>
  </div>
  


</template>

<script>
import '@/assets/inputFloat.scss'
import IconBase from '@/components/IconBase'

export default {
  name: 'InputFloat',
  props: {
    placeholder: String,
    type: String,
    error: Boolean,
    errorMessage: String,
    required: Boolean,
    requiredMessage: String,
    sucsess: Boolean,
    sucsessMessage: String,
    floatText: {
      type: String,
      default: () => "",
    },
    // Input type
    information: Boolean
  },
  methods: {
    setValue( event ) {
      this.$emit('input', event.target.value)
    },
    
  },
  components: {
    IconBase
  }
}
</script>
