<template>
    <div class="container main__page">
        <div class="main__header">
            <div class="page-breadcrumbs">
                Catalog > Personal Area
            </div>
            <div class="page-title">Profile settings</div>
        </div>
        <div class="main-content">
            <div class="profile">
                <div class="row">
                    <div class="profile-menu">
                        <div
                            v-bind:class="{ 'profile-menu__item-not-active': !profileActive }"
                            class="profile-menu__item" 
                            @click="changeProfile"
                        >
                            <img src="@/assets/images/svg/profile-user.svg" alt="Profile">
                            Profile
                        </div>
                        <div
                            v-bind:class="{ 'profile-menu__item-not-active': profileActive }" 
                            class="profile-menu__item" 
                            @click="changePassword"
                        >
                            <img src="@/assets/images/svg/profile-lock.svg" alt="Change password">
                            Change password
                        </div>
                    </div>

                    <div class="profile-settings" v-if="profileActive">
                        <input-fileds
                            profile
                            v-model.trim="$v.form.firstName.$model"
                            :error="$v.form.firstName.$error"
                            :errorMessage="'Invalid name.'"
                            type="text"
                            placeholder="Name"
                        />
                        <input-fileds
                            profile
                            v-model.trim="$v.form.lastName.$model"
                            :error="$v.form.lastName.$error"
                            :errorMessage="'Invalid surname.'"
                            type="text"
                            placeholder="Surname"
                        />
                        <input-fileds
                            profile
                            v-model.trim="$v.form.email.$model"
                            :error="$v.form.email.$error"
                            :errorMessage="'Invalid surname.'"
                            type="text"
                            placeholder="E-mail"
                        />
                        <input-fileds
                            profile
                            v-model.trim="$v.form.mobilePhone.$model"
                            :error="$v.form.mobilePhone.$error"
                            :errorMessage="'Invalid surname.'"
                            type="text"
                            placeholder="Phone"
                        />
                        <InputSelect profileCountry/>
                        <div class="profile-settings__save">
                            <btn save>Save changes</btn>
                        </div>
                    </div>

                    <div class="profile-password" v-else>
                        <div class="profile__control control">
                            <div class="control__item">
                                <input-fileds
                                v-model.trim="$v.form.OldPassword.$model"
                                :error="$v.form.OldPassword.$error"
                                :errorMessage="'Password must have at least 6 letters.'"
                                password
                                placeholder="Old password"
                                />
                            </div>
                            <div class="control__item">
                                <input-fileds
                                v-model.trim="$v.form.NewPassword.$model"
                                :error="$v.form.NewPassword.$error"
                                :errorMessage="'Password must have at least 6 letters.'"
                                password
                                placeholder="New password"
                                />
                            </div>
                            <div class="control__item">
                                <input-fileds
                                v-model.trim="$v.form.ConfirmPassword.$model"
                                :error="$v.form.ConfirmPassword.$error"
                                :errorMessage="'Password must have at least 6 letters.'"
                                authorisation
                                placeholder="Confirm password"
                                />
                            </div>
                        </div>
                        <div class="profile-settings__save">
                            <btn save>Save changes</btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, email, alpha, minLength, numeric, sameAs } from 'vuelidate/lib/validators'
import InputFileds from '@/components/controls/InputFileds'
import InputSelect from '@/components/InputSelect'
import Btn from '@/components/controls/Btn'

export default {
    name: 'profile',
    data: () => ({
        profileActive: true,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            mobilePhone: '',
            country: '',
            OldPassword: '',
            NewPassword: '',
            ConfirmPassword: ''
        },
    }),
    methods: {
        changeProfile () {
            this.profileActive = true;
        },
        changePassword () {
            this.profileActive = false;
        }
    },
    validations: {
        form: {
            firstName: {
                required,
                alpha
            },
            lastName: {
                required,
                alpha
            },
            email: {
                email
            },
            mobilePhone: {
                required,
                numeric,
                minLength: minLength(11)
            },
            country: {
                required,
            },
            OldPassword: {
                required
            },
            NewPassword: {
                required
            },
            ConfirmPassword: {
                required,
                sameAsNewPassword: sameAs('NewPassword')
            }
        }
    },
    components: {
        InputFileds,
        InputSelect,
        Btn
    }
}
</script>

<style lang="scss">
    .profile {
        &-menu{
            &__item{
                cursor: pointer;
                display: flex;
                align-items: center;
                img{
                    margin-right: 8px;
                }
                &:not(:last-child){
                    margin-bottom: 35px;
                }
                &-not-active{
                    opacity: 0.5;
                }
            }
        }
        &-settings{
            margin-left: 109px;
            .input{
                display: block;
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
            &__save{
                width: 243px;
                margin-top: 32px;
            }
        }
        &-password{
            margin-left: 109px;
        }
        &__control{
            .control{
                &__item{
                    margin-bottom: 12px;
                }
            }
        }
    }
</style>