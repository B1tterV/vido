<template>
    <div class="container">
        <div class="title reset__password-title">Reset password</div>
        <div class="password-subtitle">
            Enter your e-mail address used with 
            your account and we will send you a 
            link to reset your password.
        </div>
        <div class="reset_password-form">
            <form>
                <div class="reset__password-mail">
                    <input-float
                            v-model.trim="$v.form.email.$model"
                            :error="$v.form.email.$error"
                            :errorMessage="'Please enter a valid email address.'"
                            :floatText="'Email'"
                            information
                            type="email"
                            placeholder=" "
                        />
                </div>
                <div class="reset__password-btn ">
                    <btn class="btn green-btn" @click="submit">
                        Send reset link
                    </btn>
                </div>
            </form>
        </div>
        <div class="reset_password-sent block-inactive">
            <p>
                Password reset link sent. Check your mail.
                <br>
                <br>
                If you do not see emails - check your spam folder
            </p>
        </div>
    </div>
</template>


<script>
import { required, email } from 'vuelidate/lib/validators'
import Btn from "@/components/controls/Btn.vue";
import InputFloat from '../components/controls/InputFloat'

export default {
    name: 'resetPassword',
    components: {
        Btn,
        InputFloat,
    },
    data: () => ({
        form:{
            email: ''
        }
    }),
    validations: {
        form: {
            email: {
                required,
                email
            }
        }
    },
    methods: {
        submit () {
            this.$v.$touch()
            
            if (!this.$v.$invalid) {
                this.$store.dispatch('registration', this.form)
                this.closeAuthForm()
            }
        }
    },
    computed: {
        isComplete () {
            return this.form.email;
        }
    }
}
</script>


<style lang="scss">

.title{
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
}

.reset__password-title{
    margin-bottom: 32px;
}

.password-subtitle{
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
}

.reset__password-mail{
    margin-top: 40px;
    input[type='email']{
        width: 380px;
    }
}

.reset__password-btn{
    margin-bottom: 287px;
    margin-top: 34px;
}

.reset_password-sent{
    align-items: center;
    margin-top: 32px;
    p{
        font-weight: 500;
        font-size: 20px;
        line-height: 32px; 
    }
    img{
        margin-left: 24px;
    }
}

.new__password{
    position: relative;
    width: 380px;
    align-items: center;
    .password-control{
        position: absolute;
        top: 12px;
        right: 16px;
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url(../assets/images/svg/eye-off.svg) 0 0 no-repeat;
    }
    .view {
        background: url(../assets/images/svg/eye-on.svg) 0 0 no-repeat;
    }
}

.password-error-block{
    align-items: center;
    margin-top: 20px;
    display: flex;
    .error-password{
        margin-left: 16px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #D80027;
    }
}

.error-password-input{
    border: 1px solid #D80027 !important;
}

.block-flex{
    display: flex;
}

@media (max-width: 992px) {
    .title{
        font-weight: bold;
        font-size: 22px;
        line-height: 130%;
        margin-bottom: 24px;
    }
    .password-subtitle{
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
    }
    .reset_password-form{
        .pay-input-block{
            width: 100%;
        }
        .green-btn{
            width: 100%;
        }
    }
}

</style>