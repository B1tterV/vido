<template>
    <div class="container main__page">
        <div class="page-breadcrumbs">
          Catalog > Payment details
        </div>
        <div class=" page-title">Payment details</div>
        <div class="row justify-between">
            <div class="page__main-content">
                <form>
                <div class="payment__details">
                    <div class="payment__details-credentials">
                        <div class="row row-half">
                            <div class="payment__details-credentials-form">
                                <div class="card__data">
                                    <input-float
                                        v-model.trim="$v.form.cardName.$model"
                                        :error="$v.form.cardName.$error"
                                        :required="$v.form.cardName.$required"
                                        :requiredMessage="'Is required fields'"
                                        :sucsess="!$v.form.cardName.$invalid"
                                        :floatText="'Name on card *'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                    <input-float
                                        v-mask="form.cardNumberMask" 
                                        v-model.trim="$v.form.cardNumber.$model"
                                        :error="$v.form.cardNumber.$error"
                                        :required="$v.form.cardNumber.$required"
                                        :requiredMessage="'Is required fields'"
                                        :sucsess="!$v.form.cardNumber.$invalid"
                                        :floatText="'Card number *'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                    <div class="card__data-footer">
                                        <div class="cardMonth" v-on:click="isCheckedMonth = true">
                                            <InputSelect 
                                                cardMonth
                                                v-model.trim="$v.form.cardMonth.$model"
                                            />
                                        </div>
                                        <div class="cardYear" v-on:click="isCheckedYear = true">
                                            <InputSelect
                                                cardYears 
                                                class="select-years"
                                            />
                                        </div>
                                        <input-float
                                        class="cvc-code"
                                        v-mask="form.cardCvcMask" 
                                        v-model.trim="$v.form.cardCvc.$model"
                                        :error="$v.form.cardCvc.$error"
                                        :required="$v.form.cardCvc.$required"
                                        :requiredMessage="'Is required fields'"
                                        :floatText="'CVC'"
                                        information
                                        type="text"
                                        placeholder=" "
                                    />
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div class="row row-half">
                            <div class="payment__details-credentials-steps">
                            <p class="title">How to pay</p>
                            <div v-bind:class="[!$v.form.cardName.$invalid ? activeClass : '', errorClass]" >
                                <div class="step-item-complite">
                                    <img src="@/assets/images/svg/сheck-item.svg" alt="">
                                </div>
                                <p>Enter the Cardholder Name*</p>
                            </div>
                            <div v-bind:class="[!$v.form.cardNumber.$invalid ? activeClass : '', errorClass]">
                                <div class="step-item-complite">
                                    <img src="@/assets/images/svg/сheck-item.svg" alt="">
                                </div>
                                <p>Enter the Card Number*</p>
                            </div>
                            <div v-bind:class="[isCheckedYear && isCheckedMonth ? activeClass : '', errorClass]">
                                <div class="step-item-complite">
                                    <img src="@/assets/images/svg/сheck-item.svg" alt="">
                                </div>
                                <p>Enter the Expiration Date*</p>
                            </div>
                            <div v-bind:class="[!$v.form.cardCvc.$invalid ? activeClass : '', errorClass]">
                                <div class="step-item-complite">
                                    <img src="@/assets/images/svg/сheck-item.svg" alt="">
                                </div>
                                <p>Enter Security Code* (CVC / CVV code)</p>
                            </div>
                            <div class="ssl-halper">
                                <img src="@/assets/images/svg/ssl-lock.svg" alt="ssl">
                                <p>We use SSL encryption to keep your data secure</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="payment__details-pay">
                        <div class="row row-half">
                            <div class="payment__details-pay-price">
                            <p class="total-price">Total price:</p>
                            <p class="price">140,00 €</p>
                            <p class="fees">No additional fees and commissions</p>
                        </div>
                        </div>
                        <div class="row row-half">
                            <div class="payment__details-pay-now">
                                <div>
                                    <router-link to="/successful-checkout">
                                        <btn class="btn_primary btn_pay-now">
                                            Pay now
                                        </btn>
                                    </router-link>
                                </div>
                                <PaymentStatus/>
                            </div>
                        </div>
                    </div>
                    <div class="ordering__information">
                        <p class="title-min">Order information</p>
                        <div class="total__items-mobile">
                            <p>Order information</p>
                            <div class="total__items-mobile__hide-content">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="basket-cards">
                            <div class="basket__card"
                                v-for="el in card"
                                :key="el.id"
                            >
                            <basket-card :data="el" />
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            <div class="page__second-content">
                <AcceptPayments/>
                <div class="data__security payment-data__security">
                    <div class="title">
                        Data security
                    </div>
                    <div class="text">
                        Your information is safe with us. 
                        All data is encrypted and transmitted securely using SSL.
                        <br>
                        Vidodo respects your privacy. 
                        We do not sell your data to anyone 
                        and we do not store your payment details.
                        <br>
                        <a href="">Privacy Statement</a>
                    </div>
                </div>
                <div class="payment__details-gift">
                    <img src="@/assets/images/svg/gift.svg" alt="gift">
                    <p>You will reveive your gift on the next step</p>
                </div>
            </div>
            <div class="mobile-footer">
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
                        to="/successful-checkout" 
                        tag="button" 
                        class="btn_ordering"
                        >
                        Checkout
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import InputFloat from '../components/controls/InputFloat'
import InputFileds from '@/components/controls/InputFileds'
import Checkbox from '../components/controls/Checkbox'
import Icon from '../components/Icon'
import Btn from '../components/controls/Btn'
import InputSelect from '../components/InputSelect.vue'
import Radio from '../components/controls/Radio.vue'
import OrderCard from '@/components/OrderCard'
import AcceptPayments from '@/components/AcceptPayments'
import BasketCard from '@/components/BasketCard'
import PaymentStatus from '@/components/PaymentStatus'
import axios from 'axios'

export default {
    name: 'paymentDetails',
    created(){
    axios.get('/api/cards')
        .then(Response => {
        this.cards = Response.data
        })
    },
    data: () => ({
        activeClass: 'step-item-active',
        errorClass: 'step-item',
        isCheckedYear: false,
        isCheckedMonth: false,
        form: {
            cardName: '',
            cardNumber: '',
            cardMonth: '12',
            cardYear: '',
            cardCvc: '',
            cardNumberMask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
            cardCvcMask: [/\d/, /\d/, /\d/],
        },
        card: [
        {
            id: 0,
            imgUrl: 'https://i.ibb.co/BVrgttt/total-card.png',
            type: 'Outdoor Classes',
            subtitle: 'Feries ticket',
            title: 'Ferries round ticket to Fuertaventura',
            datetime: 'August 21, 2020 11:00 - 17:00, English',
            people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
            price: {
            old: '225,00 €',
            saving: 'savings 15.44 €',
            base: '65.00 €'
            }
        },  
        {
            id: 1,
            imgUrl: 'https://i.ibb.co/bQtg11Z/total-card2.png',
            type: 'Outdoor Classes',
            title: 'Ferries round ticket to Fuertaventura',
            subtitle: 'Feries ticket',
            datetime: 'August 21, 2020 11:00 - 17:00, English',
            people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
            price: {
            base: '90.00 €'
            }
        }
        ],
        }),
    props: {
        state: Boolean
    },
    // methods:{
    //     getWidth: function(){
    //         if(screen.width <= 992){
    //             document.querySelector('footer').style.cssText = 'display: none'
    //         }
    //     }
    // },
    // beforeMount(){
    // 	this.getWidth()
    // },
    validations: {
        form: {
            cardName: {
                required,
                minLength: minLength(5)
            },
            cardNumber: {
                required,
                minLength: minLength(19)
            },
            cardMonth: {
                required
            },
            cardYear: {
                required
            },
            cardCvc: {
                required,
                minLength: minLength(3)
            }
        }
    },
    components: {
        InputFloat,
        Checkbox,
        Btn,
        Icon,
        InputSelect,
        InputFileds,
        Radio,
        OrderCard,
        AcceptPayments,
        BasketCard,
        PaymentStatus
    },
}
</script>

<style lang="scss">
    .payment__details{
        &-credentials{
            border-bottom: 1px solid #F0F2F5;
            padding-bottom: 26px;
            margin-bottom: 38px;
            display: flex;
            &-form {
                width: 370px;
            }
            &-steps{
                margin-left: 50px;
                .title{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 21px;
                    margin-bottom: 13px;
                }
                .step-item{
                    display: flex;
                    align-items: center;
                    &-complite{
                        display: flex;
                        place-content: center;
                        width: 16px;
                        height: 16px;
                        background: #E3E8EF;
                        // background: #0DB886;
                        border-radius: 100px;
                        margin-right: 8px;
                        img{
                            align-self: center;
                            width: 8px;
                            height: 8px;
                        }
                    }
                    p{
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 115%;
                        color: #A7ADBF;
                    }
                    &:not(:last-child){
                        margin-bottom: 19px;
                    }
                }
                .step-item-active{
                    display: flex;
                    align-items: center;
                    .step-item-complite{
                        display: flex;
                        place-content: center;
                        width: 16px;
                        height: 16px;
                        background: #0DB886 !important;
                        border-radius: 100px;
                        margin-right: 8px;
                        img{
                            align-self: center;
                            width: 8px;
                            height: 8px;
                        }
                    }
                    p{
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 115%;
                        color: #1E2843;
                    }
                    &:not(:last-child){
                        margin-bottom: 19px;
                    }
                }
            }
        }
        &-pay{
            margin-bottom: 65px;
            display: flex;
            &-price{
                .total-price{
                    margin-bottom: 4px;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #868C9C;
                }
                .price{
                    margin-bottom: 8px;
                    font-weight: bold;
                    font-size: 28px;
                    line-height: 34px;
                    color: #1E2843;
                }
                .fees{
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    color: #0DB886;
                }
            }
            &-now{
                margin-left: 50px;
                width: 175px;
            }
        }
        &-gift{
            display: flex;
            margin-top: 20px;
            padding: 12px 25px;
            background: #F4F7FB;
            border-radius: 8px;
            img{
                width: 22px;
                height: 22px;
            }
            p{
                padding-left: 9px;
                width: 180px;
                font-weight: 500;
                font-size: 14px;
                line-height: 130%;
            }
        }
        .ordering__information{
            .title-min{
                margin-bottom: 22px;
            }
            .basket-card{
                &__price{
                    button{
                        display: none;
                    }
                    .price{
                        margin-top: 85px;
                    }
                }
            }
        }
    }
    .card__data{
        &-footer{
            display: flex;
        }
    }
    
    .select-years{
        margin-left: 16px;
    }

    .cvc-code{
        margin-left: 39px;
        .input__float{
            width: 75px;
        }
        .pay-input-block{
            width: 75px;
        }
    }

    .page__second-content {
        width: 270px !important;
    }
    .page__main-content{
        width: 848px;
    }

    .ssl-halper{
        display: flex;
        img{
            margin-left: -4px;
            width: 24px;
            height: 24px;
        }
        p{
            width: 196px;
            padding-left: 10px;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #0DB886;
        }
    }

    .btn_pay-now{
        width: 175px;
        padding: 14px 52px !important;
    }

    .row-half{
        width: 50%;
    }

    .payment-data__security{
        margin-top: 20px;
        padding: 14px 16px;
        .title{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
        }
        .text{
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            a{
                font-size: 12px;
            }
        }
    }

    .total__items-mobile{
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

    .mobile-footer{
        display: none;
        margin-bottom: 46px;
        margin-top: 19px;
        width: 100%;
        &__copyright{
            text-align: center;
            font-weight: 500;
            font-size: 10px;
            line-height: 120%;
            opacity: 0.5;
            letter-spacing: -0.005em;
        }
        &__checkout{
            width: 100%;
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

    @media (max-width: 1200px){
        .page__main-content{
            width: 700px;
        }
        .payment__details{
            .basket-cards{
                .basket__card{
                    .basket-card{
                        &__price{
                            button{
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1024px){
        .page__main-content{
            width: 670px;
        }
    }

    @media (max-width: 992px){
        .page-title{
            font-weight: bold;
            font-size: 22px;
            line-height: 130%;
        }
        .page__main-content{
            width: 100% !important;
            .payment__details{
                &-pay{
                    display: none;
                }
                &-credentials{
                    border-bottom: none;
                    margin-bottom: 0;
                    display: block;
                    &-form{
                        width: 100%;
                        .card__data{
                            &-footer{
                                justify-content: space-between;
                                .cardMonth{
                                    width: 100%;
                                }
                                .cardYear{
                                    width: 100%;
                                }
                                .cvc-code{
                                    width: 100%;
                                }
                                .not-active-select{
                                    font-size: 14px;
                                    padding-left: 12px;
                                    top: 12px;
                                }
                                .select__input__controls-preview-btn{
                                    right: 4px;
                                }
                            }
                        }
                    }
                    &-steps{
                        margin-left: 0;
                        width: 100%;
                        .title{
                            display: none;
                        }
                        .step-item{
                            display: none;
                        }
                        .ssl-halper{
                            margin-top: 32px;
                            align-items: center;
                            place-content: center;
                            img{
                                width: 14px;
                                height: 14px;
                            }
                            p{
                                padding-left: 8px;
                                width: 280px;
                                font-weight: 600;
                                font-size: 12px;
                                line-height: 14px;
                            }
                        }
                    }
                }
                .row-half{
                    width: 100%;
                }
            }
            .title-min{
                display: none;
            }
        }
        .page__second-content{
            width: 100% !important;
            .accept__payments{
                display: none;
            }
            .data__security{
                display: none;
            }
            .payment__details-gift{
                margin-top: 0;
                padding: 12px 16px;
                align-items: center;
                place-content: center;
                p{
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 14px;
                    width: 250px;
                }
            }
        }
        .total__items-mobile{
            display: flex;
        }
        .mobile-footer{
            display: block;
            &__checkout{
                display: block;
            }
        }
    }

    @media (max-width: 576px){
        .container {
            width: 93%!important;
            max-width: none!important;
        }
    }
</style>