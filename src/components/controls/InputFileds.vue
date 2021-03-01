<template>
  <label 
    v-if="search"
    class="input"
  >
    <div class="input__inner">
      <div class="input__icon">
        <icon-base width="16" height="16" viewBox="0 0 16 16" name="search" />
      </div>
      <div class="input__title"></div>
    </div>

    <input :type="type" 
      class="input__field input__field_search" 
      :placeholder="placeholder"
      @input="setValue"
    >
  </label>

  <label 
    v-else-if="datepicker"
    class="input"
  >
    <div class="input__inner">
      <div class="input__icon">
        <icon-base width="15" height="15" viewBox="0 0 15 15" name="calendar" />
      </div>
      <div class="input__title"></div>
    </div>

    <input :type="type" 
      class="input__field input__field_datepicker" 
      :placeholder="placeholder"
      @input="setValue"
    >
  </label>

  <label 
    v-else-if="authorisation"
    class="input"
  >
    <div class="input__inner">
      <div class="input__title">{{ title }}</div>
    </div>

    <input :type="type" 
      class="input__field input__field_authorisation" 
      :class="{input__field_error: error}"
      :placeholder="placeholder"
      @input="setValue"
    >

    <div class="input__error" v-if="error">
      <p>{{ errorMessage }}</p>
    </div>
  </label>

  <label 
    v-else-if="password"
    class="input"
  >
    <div class="input__inner">
      <div class="input__title">{{ title }}</div>
    </div>

    <input :type="pass"
      class="input__field input__field_authorisation" 
      :class="{input__field_error: error}"
      :placeholder="placeholder"
      @input="setValue"
    >

    <div
      class="input__field_authorisation-show" 
      @click="showPassword"
    >
      <img v-if="eyePassword" src="@/assets/images/svg/eye-off.svg" alt="eye">
      <img v-else-if="!eyePassword" src="@/assets/images/svg/eye-on.svg" alt="eyeOn">
    </div>

    <div class="input__error" v-if="error">
      <p>{{ errorMessage }}</p>
    </div>
  </label>
  
  <label 
    v-else-if="adress"
    class="input"
  >
    <input :type="type" 
      class="input__field_adress" 
      :placeholder="placeholder"
      @input="setValue"
    >
  </label>

  <label 
    v-else-if="profile"
    class="input"
  >
    <input :type="type" 
      class="input__field input__field_profile" 
      :class="{input__field_error: error}"
      :placeholder="placeholder"
      @input="setValue"
    >
    <div class="input__error" v-if="error">
      <p>{{ errorMessage }}</p>
    </div>
  </label>

</template>

<script>
import '@/assets/inputFileds.scss'

import IconBase from '@/components/IconBase'

export default {
  name: 'InputFileds',
  data: () => ({
    eyePassword: true,
    type: String,
    pass: 'password'
  }),
  props: {
    placeholder: String,
    title: String,
    error: Boolean,
    type: String,
    errorMessage: String,
    value: [String, Number, Object, Array],
    // Input type
    search: Boolean,
    authorisation: Boolean,
    datepicker: Boolean,
    adress: Boolean,
    mail: Boolean,
    profile: Boolean,
    password: Boolean
  },
  methods: {
    setValue( event ) {
      this.$emit('input', event.target.value)
    },
    showPassword() {
       if(this.pass === 'password') {
          this.pass = 'text'
          this.eyePassword = false
       } else {
          this.pass = 'password'
          this.eyePassword = true
       }
    }
  },
  components: {
    IconBase
  }
}
</script>
