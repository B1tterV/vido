<template>
  <div class="auth" v-if="!state">
    
    <div 
      class="auth__close"
      @click="closeAuthForm"
    >
      <icon name="icon_close"/>
    </div>

    <div class="auth__head head">
      <h2 class="head__title">
        Sign up
      </h2>
      <!-- <p class="head__subtitle">
        Создайте аккаунт, чтобы добавлять мероприятия в избранное и иметь доступ к своим бронированиям с любого устройства
      </p> -->
    </div>
    <div class="auth__control control">
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.name.$model"
          :error="$v.form.name.$error"
          :errorMessage="'Please enter a name.'"
          authorisation
          placeholder="First name"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.lastName.$model"
          :error="$v.form.lastName.$error"
          :errorMessage="'Please enter a last name.'"
          authorisation
          placeholder="Last name"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.email.$model"
          :error="$v.form.email.$error"
          :errorMessage="'Enter a valid email - example@gmail.com.'"
          authorisation
          placeholder="E-mail"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.password.$model"
          :error="$v.form.password.$error"
          :errorMessage="'Password must have at least 6 letters.'"
          password
          placeholder="Password"
        />
      </div>
      <!-- <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.confirmPassword.$model"
          :error="$v.form.confirmPassword.$error"
          :errorMessage="'Passwords must be identical.'"
          password
          placeholder="Confirm password"
        />
      </div> -->
      
      <div class="control__item control_action"  @click="submit">
        <btn class="btn_primary btn_auth">
          <icon 
            name="icon icon_lock" 
            :opacity="0.5"
          />
          Создать аккаунт
        </btn>
      </div>

      <div class="control__item control_sign">
        <p>Or sign in with:</p>
        <div class="control_sign-items">
          <div class="control_sign-items-item">
            <img src="@/assets/images/svg/facebook-login.svg" alt="">
          </div>
          <div class="control_sign-items-item">
            <img src="@/assets/images/svg/google-login.svg" alt="">
          </div>
          <div class="control_sign-items-item">
            <img src="@/assets/images/svg/apple-login.svg" alt="">
          </div>
        </div>
      </div>

      <div class="auth__footer auth__footer-registration">
        Already have an account? <a @click="switchPopup">Sign in</a>
      </div>

      <div class="control__item">
        <checkbox>
          <template v-slot:title>
            I want to receive unique offers
          </template>
          <template v-slot:subtitle>
            You will also receive promotional communications from time to time. You can unsubscribe at any time
          </template>
        </checkbox>
      </div>
      
      <div class="control__agreement">
        By creating an account, you confirm that you accept our <br> <a>Policy and Terms</a>.
      </div>
    </div>
  </div>

</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import InputFileds from './controls/InputFileds'
import Checkbox from './controls/Checkbox'
import Icon from './Icon'
import Btn from './controls/Btn'
import axios from 'axios'

export default {
  name: 'Registration',
  data: () => ({
    info: null,
    form: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      // confirmPassword: ''
    }
  }),
  props: {
    state: Boolean
  },
  validations: {
    form: {
      name: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      // confirmPassword: {
      //   required,
      //   sameAsPassword: sameAs('password')
      // }
    }
  },
  methods: {
    closeAuthForm () {
      this.$emit('stateAuth', false)
    },
    switchPopup () {
      this.$emit('statePopup', true)
    },
    async submit () {
      try{
        this.$v.$touch()
      
        if (!this.$v.$invalid) {

          const res = await fetch('http://api.active-test.tech/api/register', {
            method: 'post',
            headers: {
              "Accept": "application/json",
              "Content-type": "application/json; charset=UTF-8"
            },
            credentials: 'include',
            body: JSON.stringify({
              name: this.form.name,
              email: this.form.email,
              password: this.form.password
            })
          })
          const data = await res.json()
          if (res.status === 200 || res.status === 201) {
            this.$store.dispatch('registration', this.form)
            this.closeAuthForm()
          } else {
            this.errors = data
            console.error(data)
          }
        }
      } catch (error) {
          console.error(error)
      }
    }
  },
  components: {
    InputFileds,
    Checkbox,
    Btn,
    Icon
  }
}
</script>