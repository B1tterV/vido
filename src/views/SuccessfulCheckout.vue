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
                        can be found on the help page
                    </div>
                </div>
                <vi-card-carousel
                    :carousel_title = carouselTitle
                    :carousel_data = cards
                />
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
        carouselTitle: 'Popular Adventures',
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
</style>