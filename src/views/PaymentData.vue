<template>
    <div class="container main__page">
        <div class="main__header">
            <div class="page-breadcrumbs">
                Catalog > Payment method
            </div>
            <div class="payment-page-title page-title">Billing details</div>
        </div>
        <div class="main__content">
            <div class="row justify-between">
                <div class="page__data-main-content">
                    <div class="payments-data">
                        <p class="rquired">* Required fields</p>
                        <form>
                            <input-float
                                v-model.trim="$v.form.firstName.$model"
                                :error="$v.form.firstName.$error"
                                :errorMessage="'Use only letters'"
                                :required="$v.form.firstName.$required"
                                :requiredMessage="'Is required fields'"
                                :sucsess="!$v.form.firstName.$invalid"
                                :floatText="'First Name *'"
                                information
                                type="text"
                                placeholder=" "
                            />
                            <input-float
                                v-model.trim="$v.form.lastName.$model"
                                :error="$v.form.lastName.$error"
                                :errorMessage="'Use only letters'"
                                :required="$v.form.lastName.$required"
                                :requiredMessage="'Is required fields'"
                                :sucsess="!$v.form.lastName.$invalid"
                                :floatText="'Last name *'"
                                information
                                type="text"
                                placeholder=" "
                            />
                            <div class="mail-input">
                                <input-float
                                v-model.trim="$v.form.email.$model"
                                :error="$v.form.email.$error"
                                :errorMessage="'Please enter a valid email address.'"
                                :sucsess="$v.form.email.$model != '' && !$v.form.email.$error"
                                :floatText="'Email'"
                                information
                                type="email"
                                placeholder=" "
                            />
                            <span class="successful-mail" v-if="$v.form.email.$model != '' && !$v.form.email.$error">Confirmation and tickets will be sent to {{ $v.form.email.$model }}</span>
                            </div>
                            <input-float
                                v-model.trim="$v.form.confirmEmail.$model"
                                :error="$v.form.confirmEmail.$error"
                                :errorMessage="'Email addresses do not match.'"
                                :sucsess="$v.form.confirmEmail.$model != '' && !$v.form.confirmEmail.$error"
                                :floatText="'Confirm email'"
                                information
                                type="email"
                                placeholder=" "
                            />
                            <InputSelect country/>
                            <div class="phone-input">
                                <input-float
                                    v-model.trim="$v.form.mobilePhone.$model"
                                    :error="$v.form.mobilePhone.$error"
                                    :errorMessage="'Invalid phone.'"
                                    :sucsess="!$v.form.mobilePhone.$invalid"
                                    :sucsessMessage="'We will sent you confirmation and contact you in case of important notifications or changes. Required by the supplier'"
                                    :required="$v.form.mobilePhone.$required"
                                    :requiredMessage="'Is required fields'"
                                    :floatText="'Mobile phone *'"
                                    information
                                    type="text"
                                    placeholder=" "
                                />
                                <span class="successful-mail" v-if="!$v.form.mobilePhone.$invalid">
                                    We will contact you in case of important notifications or changes.
                                    <br>
                                </span>
                                <span class="successful-mail" v-if="!$v.form.mobilePhone.$invalid">
                                    Required by the supplier
                                </span>
                            </div>
                            <div class="mobile-form-halper">
                                We will sent you confirmation 
                                and contact you in case of 
                                important notifications or changes.
                            </div>
                            <div class="traveler__details">
                                <p class="title-min">Traveler details</p>
                                <checkbox
                                    v-model="travelerDetailsChecked"
                                >
                                    <template v-slot:title>
                                        Same as billing details
                                    </template>
                                </checkbox>
                                <div class="traveler__details-form" v-if="!travelerDetailsChecked">
                                    <input-float
                                        v-model.trim="$v.form.sameFirstName.$model"
                                        :error="$v.form.sameFirstName.$error"
                                        :errorMessage="'Use only letters'"
                                        :required="$v.form.sameFirstName.$required"
                                        :requiredMessage="'Is required fields'"
                                        :sucsess="!$v.form.sameFirstName.$invalid"
                                        :floatText="'First Name *'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                    <input-float
                                        v-model.trim="$v.form.sameLastName.$model"
                                        :error="$v.form.sameLastName.$error"
                                        :errorMessage="'Use only letters'"
                                        :required="$v.form.sameLastName.$required"
                                        :requiredMessage="'Is required fields'"
                                        :sucsess="!$v.form.sameLastName.$invalid"
                                        :floatText="'Last name *'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                    <div class="mail-input">
                                        <input-float
                                        v-model.trim="$v.form.sameEmail.$model"
                                        :error="$v.form.sameEmail.$error"
                                        :errorMessage="'Please enter a valid email address.'"
                                        :sucsess="$v.form.sameEmail.$model != '' && !$v.form.sameEmail.$error"
                                        :floatText="'Email *'"
                                        information
                                        type="email"
                                        placeholder=" "
                                    />
                                    <span class="successful-mail" v-if="$v.form.sameEmail.$model != '' && !$v.form.sameEmail.$error">Confirmation and tickets will be sent to {{ $v.form.email.$model }}</span>
                                    </div>
                                    <input-float
                                        v-model.trim="$v.form.sameConfirmEmail.$model"
                                        :error="$v.form.sameConfirmEmail.$error"
                                        :errorMessage="'Email addresses do not match.'"
                                        :sucsess="$v.form.sameConfirmEmail.$model != '' && !$v.form.sameConfirmEmail.$error"
                                        :floatText="'Confirm email *'"
                                        information
                                        type="email"
                                        placeholder=" "
                                    />
                                    <div class="phone-input">
                                        <input-float
                                            v-model.trim="$v.form.sameMobilePhone.$model"
                                            :error="$v.form.mobilePhone.$error"
                                            :errorMessage="'Invalid phone.'"
                                            :sucsess="!$v.form.sameMobilePhone.$invalid"
                                            :sucsessMessage="'We will sent you confirmation and contact you in case of important notifications or changes. Required by the supplier'"
                                            :required="$v.form.sameMobilePhone.$required"
                                            :requiredMessage="'Is required fields'"
                                            :floatText="'Mobile phone *'"
                                            information
                                            type="text"
                                            placeholder=" "
                                        />
                                        <span class="successful-mail" v-if="!$v.form.sameMobilePhone.$invalid">
                                            We will contact you in case of important notifications or changes.
                                            <br>
                                        </span>
                                        <span class="successful-mail" v-if="!$v.form.sameMobilePhone.$invalid">
                                            Required by the supplier
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="info__requested">
                                <p class="title-min">Information requested by the local partner</p>
                                <p class="adult">Adult 1</p>
                                <div class="info__requested-form">
                                    <input-float
                                        v-model.trim="$v.form.partnerFirstName.$model"
                                        :error="$v.form.partnerFirstName.$error"
                                        :errorMessage="'Use only letters'"
                                        :required="$v.form.partnerFirstName.$required"
                                        :requiredMessage="'Is required fields'"
                                        :sucsess="!$v.form.partnerFirstName.$invalid"
                                        :floatText="'First Name *'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                    <input-float
                                        v-model.trim="$v.form.partnerLastName.$model"
                                        :error="$v.form.partnerLastName.$error"
                                        :errorMessage="'Use only letters'"
                                        :required="$v.form.partnerLastName.$required"
                                        :requiredMessage="'Is required fields'"
                                        :sucsess="!$v.form.partnerLastName.$invalid"
                                        :floatText="'Last Name *'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                    <input-float
                                        v-model.trim="$v.form.PasportNumber.$model"
                                        :error="$v.form.PasportNumber.$error"
                                        :errorMessage="'Use only letters'"
                                        :required="$v.form.PasportNumber.$required"
                                        :requiredMessage="'Is required fields'"
                                        :sucsess="!$v.form.PasportNumber.$invalid"
                                        :floatText="'Pasport number *'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                </div>
                                <div class="info__requested-content warning-text">
                                    <p>
                                        <span>With transfer. </span>Pickup will be at your hotel 
                                        reception or the nearest bus stop. 
                                        Please provide the name and address of the hotel. 
                                        The local supplier will then send you an email 
                                        with the exact pickup location and time.
                                    </p>
                                </div>
                            </div>
                            <div class="select__location">
                                <p class="title-min">La Graciosa Day trip to Fuerteventura and Corralejo</p>
                                <div class="text">Select where you’d like to be picked up from</div>
                                <input-fileds
                                    v-model.trim="$v.form.adress.$model"
                                    :error="$v.form.adress.$error"
                                    :errorMessage="'Invalid adress.'"
                                    adress
                                    type="text"
                                    placeholder="Enter your adress or hotel name"
                                />
                                <div class="select__location-map">
                                    <!-- <img src="../assets/images/map2.png" alt=""> -->
                                    <google-map></google-map>
                                </div>
                                <div class="select__location-check">
                                    <checkbox>
                                        <template v-slot:title>
                                            I will select my pickup location later
                                        </template>
                                    </checkbox>
                                </div>
                            </div>
                            <div class="hotel__adress">
                                <p class="title-min">Grand Tour Lanzarote</p>
                                <div class="subtitle-min">
                                    Select where you’d like to be picked up from
                                </div>
                                <input-fileds
                                    v-model.trim="$v.form.adress.$model"
                                    :error="$v.form.adress.$error"
                                    :errorMessage="'Invalid adress.'"
                                    adress
                                    type="text"
                                    placeholder="Enter your adress or hotel name"
                                />
                                <div class="hotel__adress-check">
                                    <checkbox>
                                        <template v-slot:title>
                                            I will select my pickup location later
                                        </template>
                                    </checkbox>
                                </div>
                            </div>
                            <div class="select__payment">
                                <p class="title-min">Select payment method</p>
                                <p class="subtitle-min">You will be asked to enter your payment details on the next step.</p>
                                <p class="encryption">We use SSL encryption to keep your data secure</p>
                                <div class="select__payment-pay">
                                    <div class="pay-input">
                                        <radio name="payData" id="sofortPay">
                                        </radio>
                                        <div class="pay-card">
                                            <img src="../assets/images/svg/visa.svg" alt="">
                                        </div>
                                        <div class="pay-card">
                                            <img src="../assets/images/svg/master-card.svg" alt="">
                                        </div>
                                        <div class="pay-card">
                                            <img src="../assets/images/svg/maestro.svg" alt="">
                                        </div>
                                        <div class="pay-input__selected">
                                            You will be asked to enter your card details on the next step.
                                        </div>
                                    </div>
                                    <div class="pay-input">
                                        <radio name="payData" id="sofortPay">
                                        </radio>
                                        <div class="pay-card">
                                            <img src="../assets/images/svg/pay-pal.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="pay-input">
                                        <radio name="payData" id="sofortPay">
                                        </radio>
                                        <div class="pay-card">
                                            <img src="../assets/images/svg/sofort.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="pay-input">
                                        <radio name="payData" id="sofortPay">
                                        </radio>
                                        <div class="pay-card">
                                            <img src="../assets/images/svg/google-pay.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <router-link 
                                to="/payment-details" 
                                tag="button" 
                                class="submit-pay"
                            >
                                Перейти к оплате
                            </router-link>
                        </form>
                        <p class="general-terms">
                            By proceeding, you confirm that you accept our <a href="#">Policy and Terms</a>
                        </p>
                    </div>
                </div>
                <div class="page__data-second-content">
                    <div class="page-data-container">
                        <div class="total__items">
                            <p class="total-text">Total (3 items):</p>
                            <div class="total__items-sum">
                                <p class="sum">340,00 € </p>
                                <p class="text">
                                    No additional fees
                                    <br>
                                    and commissions
                                </p>
                            </div>
                            <div class="total__items-mobile">
                                <p>Order information</p>
                                <div class="total__items-mobile__hide-content">
                                    <img src="@/assets/images/svg/arrow.svg" alt="">
                                </div>
                            </div>
                            <div class="total__items-content">
                                <div class="min-cards">
                                    <div class="min__card"
                                    v-for="el in card"
                                    :key="el.id"
                                    >
                                    <min-card :data="el" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page-data-gift">
                            <img src="../assets/images/svg/gift.svg" alt="">
                            <p>Your gift: <span>{{ gifts[0] }}</span></p>
                        </div>
                        <div class="data__security">
                            <div class="title">
                                Data security
                            </div>
                            <div class="text">
                                Your information is safe with us. 
                                All data is encrypted and transmitted 
                                securely using SSL.Vidodo respects your privacy. 
                                We do not sell your data to anyone.
                                <br>
                                <a href="">Privacy Statement</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile-footer">
            <p>By proceeding, you confirm that you accept our Policy and Terms</p>
            <p class="mobile-footer__copyright">© 2020, Vidodo Guide LLP</p>
        </div>
        <div class="mobile-footer__checkout">
            <div class="checkout-mobile">
                <div class="checkout-mobile__price">
                    <div class="checkout-mobile__price-total"><span>Total:</span> 2 items:</div>
                    <div class="checkout-mobile__price-price">245,00 € </div>
                </div>
                <div class="checkout-mobile__btn">
                    <router-link 
                    to="/payment-details" 
                    tag="button" 
                    class="btn_ordering"
                    >
                    Checkout
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, email, alpha, sameAs, minLength, numeric } from 'vuelidate/lib/validators'
import InputFloat from '@/components/controls/InputFloat'
import InputFileds from '@/components/controls/InputFileds'
import Checkbox from '@/components/controls/Checkbox'
import Icon from '@/components/Icon'
import Btn from '@/components/controls/Btn'
import InputSelect from '@/components/InputSelect'
import Radio from '@/components/controls/Radio.vue'
import GoogleMap from '@/components/GoogleMap'
import MinCard from '@/components/MinCard'

export default {
    name: 'paymentData',
    data: () => ({
        travelerDetailsChecked: false,
        gifts: [
            'Audiobook',
        ],
        card: [
        {
            id: 0,
            type: 'Entrance ticket',
            title: 'La Graciosa Day trip to Fuerteventura and Corralejo',
            datetime: 'August 21, 2020 11:00 - 17:00, English',
            people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
            price: {
                saving: 'savings 15.44 €',
                base: '155,00 €'
            }
        },  
        {
            id: 1,
            type: 'Entrance ticket',
            title: 'La Graciosa Day trip to Fuerteventura and Corralejo',
            datetime: 'August 21, 2020 11:00 - 17:00, English',
            people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
            price: {
                saving: 'savings 10.12 €',
                base: '90,00 €'
            }
        }
        ],
        form: {
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            country: '',
            mobilePhone: '',
            sameFirstName: '',
            sameLastName: '',
            sameEmail: '',
            sameConfirmEmail: '',
            sameMobilePhone: '',
            partnerFirstName: '',
            partnerLastName: '',
            PasportNumber: '',
            adress: ''
        },
    }),
    props: {
        state: Boolean
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
            confirmEmail: {
                sameAsEmail: sameAs('email')
            },
            country: {
                required,
            },
            mobilePhone: {
                required,
                numeric,
                minLength: minLength(11)
            },
            sameFirstName: {
                required,
                alpha,
            },
            sameLastName: {
                required,
                alpha
            },
            sameEmail: {
                email
            },
            sameConfirmEmail: {
                sameAsEmail: sameAs('sameEmail')
            },
            sameMobilePhone: {
                required,
                numeric,
                minLength: minLength(11)
            },
            partnerFirstName: {
                required,
                alpha
            },
            partnerLastName: {
                required,
                alpha
            },
            PasportNumber: {
                required,
                minLength: minLength(5)
            },
            adress:{

            }
        }
    },
    // mounted () {
    //     this.$refs.mapRef.$mapPromise.then((map) => {
    //     map.panTo({lat: 1.38, lng: 103.80})
    //     })
    // },
    components: {
        InputFloat,
        Checkbox,
        Btn,
        Icon,
        InputSelect,
        InputFileds,
        Radio,
        GoogleMap,
        MinCard
    }
}
</script>

<style lang="scss">
    .payment-page-title{
        padding: 0;
        margin-bottom: 24px;
    }

    .page__data-main-content{
        width: 585px;
    }

    .page__data-second-content{
        width: 458px !important;
    }

    .payments-data{
        .rquired{
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #8E93A0;
            margin-bottom: 16px;
        }
        .select__payment{
            .subtitle-min{
                margin-top: 11px;
                margin-bottom: 24px;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
            }
        }
    }

    .traveler__details{
        margin-top: 32px;
        .title-min{
            margin-bottom: 10px;
        }
        &-form{
            margin-top: 16px;
        }
    }

    .info__requested{
        margin-top: 41px;
        .subtitle-min{
            margin-top: 8px;
        }
        .adult{
            margin-top: 16px;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
        }
        &-form{
            margin-top: 16px;
        }
        &-content{
            margin-top: 36px;
            padding: 16px 13px 16px 20px;
            background: #FFF4E1;
            border-radius: 8px;
            p{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #A48756;
                span{
                    font-weight: 700;
                }
            }
        }
    }

    .successful-mail{
        max-width: 368px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        margin-left: 16px;
        opacity: 0.5;
    }

    .mail-input{
        margin-bottom: 13px;
    }

    .phone-input{
        margin-bottom: 32px;
    }
    
    .select__location{
        overflow: hidden;
        margin-top: 39px;
        .text{
            padding-top: 10px;
            padding-bottom: 19px;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
        }
        &-map{
            margin-top: 24px;
        }
    }

    .total__items{
        position: relative;
        padding: 28px 16px 28px 32px;
        background: #FFFFFF;
        box-shadow: 0px 3px 12px rgba(30, 40, 67, 0.15);
        border-radius: 12px;
        .total-text{
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
        }
        .total__items-sum{
            position: absolute;
            top: 24px;
            right: 32px;
            .sum{
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
            }
            .text{
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                text-align: right;
                color: #8F93A1;
            }
        }
        &-mobile{
            display: none;
            justify-content: space-between;
            margin-bottom: 16px;
            p{
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
            }
            &__hide-content{
                padding: 6px;
                background: #FFFFFF;
                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                transform: matrix(1, 0, 0, -1, 0, 0);
            }
        }
    }

    .total__items-content{
        padding-right: 12px;
        max-height: 340px;
        overflow: auto;
        margin-top: 59px;
        ::-webkit-scrollbar-thumb {
            background: #DBE0E9;
            border-radius: 38px;
            margin-right: -10px;
        }
    }

    .total__items-card{
        display: flex;
    }

    .page-data-gift{
        margin-bottom: 24px;
        display: flex;
        margin-top: 32px;
        align-items: center;
        width: 100%;
        padding: 10px;
        place-content: center;
        background: #F4F7FB;
        border-radius: 8px;
        img{
            margin-right: 16px;
        }
        p{
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            color: #565E72;
            span{
                margin-left: 10px;
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
                color: #1E2843;
            }
        }
    }

    .mobile-form-halper{
        display: none;
    }

    .mobile-footer{
        display: none;
        margin-bottom: 30px;
        p{
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
        }
        &__copyright{
            margin-top: 16px;
            font-weight: 500;
            font-size: 10px;
            line-height: 120%;
            opacity: 0.5;
        }
        &__checkout{
            display: none;
        position: sticky;
        bottom: 0;
        background: white;
        padding-top: 12px;
        border-top: 1px solid #DBE0E9;
        .checkout-mobile{
            &__price{
                display: flex;
                align-items: center;
                justify-content: space-between;
                &-total{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 21px;
                    color: #B7BCCA;
                    span{
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 22px;
                    color: #1E2843;
                    }
                }
                &-price{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 21px;
                }
                }
                &__btn{
                .btn_ordering {
                        margin-bottom: 16px;
                        border-radius: 12px;
                        border: none;
                        outline: none;
                        background: $light-green-gradient;
                        margin-top: 15px;
                        padding: 15px;
                        width: 100%;
                        color: $white;
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .select__payment-pay{
        .pay-input{
            position: relative;
            display: flex;
            align-items: center;
            input{
                margin-right: 12px;
            }
            &:not(:last-child){
                margin-bottom: 20px;
            }
            .pay-card{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 66px;
                height: 42px;
                border: 1px solid #DCDEE7;
                box-sizing: border-box;
                border-radius: 4px;
                &:not(:last-child){
                    margin-right: 12px;
                }
            }
            &__selected{
                display: none;
                position: absolute;
                bottom: -30px;
                left: 40px;
            }
        }
    }

    .submit-pay{
        margin-top: 35px;
        padding: 14px 24px;
        background: linear-gradient(180deg, #15D79D -46%, #00875F 119%);
        border-radius: 12px;
        border: none;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: white;
    }

    .general-terms{
        margin-top: 24px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #1E2843;
        a{
            border-bottom: 1px solid #1E2843;
            color: #1E2843;
        }
    }

    // Mobile version

    @media (max-width: 1200px){
        .page__data-main-content{
            width: 475px;
        }
    }

    @media (max-width: 992px){
        .container{
            .main__content{
                .row{
                    display: block;
                }
            }
            .page__data-main-content{
                width: 100%;
                .submit-pay{
                    display: none;
                }
                .general-terms{
                    display: none;
                }
            }
            .phone-input{
                margin-bottom: 0;
            }
            .mobile-form-halper{
                display: block;
                font-weight: 500;
                font-size: 14px;
                line-height: 140%;
            }
            .page__data-second-content{
                width: 100% !important;
                .page-data-gift{
                    margin-top: 0;
                }
                .data__security{
                    display: none;
                }
            }
            .page-data-container{
                width: 100%;
                margin-top: 25px;
                .total__items{
                    padding: 0;
                    box-shadow: none;
                    .total-text{
                        display: none;
                    }
                    &-sum{
                        display: none;
                    }
                    &-content{
                        padding: 0;
                        margin-top: 0;
                    }
                    &-mobile{
                        display: flex;
                        img{
                            opacity: 0.5;
                        }
                    }
                }
            }
        }
        .select__location-map{
            .vue-map-container{
                width: 100% !important;
            }
        }
        .hotel__adress{
            .input{
                width: 100%;
                input{
                    width: 100% !important;
                }
            }
        }
        .info__requested{
            .warning-text{
                display: none;
            }
        }
        .mobile-footer{
            display: block;
            &__checkout{
                display: block;
            }
        }
    }

</style>