<template>
    <div class="container main__page">
        <div class="page-breadcrumbs">
          Catalog > Successful checkout
        </div>
        <div class="page-title successful-page-title">Successful checkout</div>
        <div class="row justify-between">
            <div class="page__main-content">
                <div class="order-good">
                    <p>Thank you for your order!</p>
                    <img src="../assets/images/svg/good.svg" alt="">
                </div>
                <GiftHorizontal
                    :giftCode="giftCode" 
                />
                <div class="help__steps">
                    <div class="help__steps-item">
                        <img src="../assets/images/svg/info.svg" alt="">
                        <p>
                            Thank you for your order. Event details sent 
                            by address mail@mail.ru. If there is no confirmation, 
                            check spam and ad folders.
                        </p>
                    </div>
                    <div class="help__steps-item">
                        <img src="../assets/images/svg/info.svg" alt="">
                        <p>
                            If you want to make changes to your 
                            booking, you will need your booking code and PIN.
                        </p>
                    </div>
                </div>
                <div class="ordering__information">
                    <p class="title-min">Информация о заказе</p>
                    <div class="total__items-mobile">
                        <p>Order information</p>
                        <div class="total__items-mobile__hide-content">
                            <img src="@/assets/images/svg/arrow.svg" alt="">
                        </div>
                    </div>
                    <div class="order-cards">
                        <div class="order__card"
                            v-for="el in card"
                            :key="el.id"
                        >
                            <order-card :data="el" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="page__second-content">
                <div class="help__block">
                    <div class="title">
                        Help is needed?
                    </div>
                    <div class="text">
                        Feedback form and the contact 
                        phone number for your country 
                        can be found on the <a> help page </a>
                    </div>
                </div>
                <vi-card-carousel
                    :carousel_title = carouselTitle
                    :carousel_data = cards
                />
            </div>
            <div class="checkout-mobile__price">
                <div class="checkout-mobile__price-total"><span>Total:</span> 2 items:</div>
                <div class="checkout-mobile__price-price">245,00 € </div>
            </div>
        </div>
    </div>
</template>

<script>
import Btn from "@/components/controls/Btn.vue";
import OrderCard from '@/components/OrderCard'
import ViCardCarousel from '@/components/vi-card-carousel.vue'
import axios from 'axios'
import GiftHorizontal from '../components/GiftHorizontal.vue';

export default {
    name: "SuccessfulCheckout",
    components: { 
        Btn, 
        OrderCard,
        ViCardCarousel,
        GiftHorizontal,
    },
    created(){
        axios.get('/api/cards')
            .then(Response => {
            this.cards = Response.data
            })
    },
    data: () => ({
        card: [
        {
            id: 0,
            type: 'Entrance ticket',
            title: 'Adult-only sailing trip to Papagayo with lunch',
            datetime: 'August 21, 2020 11:00 - 17:00, English',
            people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
            price: {
                saving: 'savings 15.44 €',
                base: '65.00 €'
            }
        },  
        {
            id: 1,
            type: 'Entrance ticket',
            title: 'La Graciosa Day trip to Fuerteventura and Corralejo',
            datetime: 'August 21, 2020 12:00 - 17:00, English',
            people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
            price: {
                base: '40.00 €'
            }
        }
        ],
        cards:[],
        carouselTitle: 'Popular avtivities',
        giftCode: '5536bx88jG'
    }),
}
</script>

<style lang="scss">
    .successful-page-title{
        margin-bottom: 41px;
    }

    .page__second-content{
        width: 270px !important;
    }

    .order-good{
        display: flex;
        align-items: center;
        p{
            padding-right: 23px;
            font-weight: 500;
            font-size: 30px;
            line-height: 35px;
        }
    }

    .help__steps{
        margin-top: 34px;
        &-item{
            display: flex;
            align-items: flex-start;
            p{
                width: 510px;
                padding-left: 10px;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
            }
            &:not(:last-child){
                margin-bottom: 14px;
            }
            &.warning-item{
                p{
                    color: #D80027;
                }
            }
        }
    }

    .ordering__information{
        margin-top: 50px;
        width: 848px;
    }

    .help__block{
        padding: 20px;
        background: #E9F9FF;
        border-radius: 8px;
        .title{
            font-weight: 600;
            font-size: 22px;
            line-height: 26px;
        }
        .text{
            padding-top: 12px;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            a{
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: $light-blue-two;
            }
        }
    }

    .page__second-content{
        .carousel__controls-title{
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
        }
    }

    .carousel__controls-buttons{
        display: flex;
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

    .checkout-mobile{
        &__price{
            display: none;
            margin-top: 16px;
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
    }

    // Mobile version

    @media (max-width: 1200px){
        .page__main-content{
            width: 100%;
            .successful__checkout-gift{
                width: 100%;
            }
            .ordering__information{
                width: 100%;
            }
        }
        .help__block{
            width: 270px;
            position: absolute;
            top: 140px;
            right: 40px;
        }
        .vi-card-carousel{
            display: none;
        }
    }

    @media (max-width: 992px){
        .main__page{
            .row{
                display: block;
            }
        }
        .container{
            .page-title{
                margin-bottom: 0;
                font-weight: bold;
                font-size: 22px;
                line-height: 130%;
            }
            .page__main-content{
                .order-good{
                    p{
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 130%;
                    }
                    img{
                        width: 32px;
                        height: 32px;
                    }
                }
                .successful__checkout-gift{
                    margin-top: 23px;
                    width: 100%;
                    display: block;
                    .gift__code{
                        margin-left: 0;
                    }
                    .gift-title{
                        img{
                            width: 46px;
                            height: 46px;
                        }
                    }
                    .gift__help{
                        .text{
                            br{
                                display: none;
                            }
                        }
                    }
                }
                .ordering__information{
                    width: 100%;
                }
                .title-min{
                    display: none;
                }
                .total__items-mobile{
                    display: flex;
                }
            }
            .page__second-content{
                display: none;
            }
            .checkout-mobile__price{
                display: flex;
            }
        }
        .footer{
            display: block;
        }
    }
</style>