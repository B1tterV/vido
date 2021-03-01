<template>
    <div class="container orders__page">
        <div class="orders__header">
            <div class="page-breadcrumbs">
                Catalog > Booking information
            </div>
            <div class="page-title">Orders</div>
        </div>
        <div class="main__content">
            <div v-if="card" class="current-teservation ordering__information">
                <p class="title-min">Your current reservations</p>
                <div class="order-cards">
                    <div class="order__card"
                        v-for="el in card"
                        :key="el.id"
                    >
                        <order-card :data="el" />
                    </div>
                </div>
            </div>
            <div v-else class="no-orders">
                <p class="no-orders__text">
                    There are no vouchers here, they will appear as soon as you make your reservation
                </p>
                <div class="no-orders__search">
                    <div>
                        <input-fileds
                            search
                            placeholder="Find something specific"
                        />
                        <btn search>Search</btn>
                    </div>
                </div>

                <div class="adv">
                    <div class="container">
                        <div class="adv__inner">
                        <div class="adv__content">
                            <div class="adv__icon">
                            <img
                                src="@/../public/imgs/MainPage/Advertisement/app_icon.png"
                                alt=""
                            />
                            </div>
                            <div class="adv__main">
                            <div class="adv__main-title">Download the Vidodo app</div>
                            <div class="adv__main-description">
                                <div>
                                Download the best travel app and get access to the most
                                popular tours and tickets to places of interest around
                                Lanzarote.
                                </div>
                                <div>
                                Book in advance with Vidodo Guide. Get instant confirmation.
                                Access to offline booking information.
                                </div>
                            </div>
                            <div class="adv__main-stores">
                                <div class="adv__main-stores-app">
                                <img
                                    src="@/../public/imgs/MainPage/Advertisement/app_store.png"
                                    alt=""
                                />
                                </div>
                                <div class="adv__main-stores-google">
                                <img
                                    src="@/../public/imgs/MainPage/Advertisement/google_play.png"
                                    alt=""
                                />
                                </div>
                            </div>
                            </div>
                            <div class="adv__qr">
                            <img
                                src="@/../public/imgs/MainPage/Advertisement/qr.png"
                                alt=""
                            />
                            Сканируйте QR
                            </div>
                        </div>

                        <div class="adv__picture">
                            <img
                            src="@/../public/imgs/MainPage/Advertisement/phone.png"
                            alt=""
                            />
                        </div>
                        </div>
                    </div>
                </div>
                
                <vi-card-carousel
                    :carousel_title = carouselTitle
                    :carousel_data = cards
                />

            </div>
            <div class="past-reservations ordering__information">
                <p class="title-min">Past and canceled reservations</p>
                <div class="order-cards">
                    <div class="order__card"
                        v-for="el in pastCard"
                        :key="el.id"
                    >
                        <order-card pastOrder :data="el" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Btn from "../components/controls/Btn.vue";
import ViCardVertical from '../components/vi-card-vertical.vue';
import ViCardCarousel from '../components/vi-card-carousel.vue';
import InputFileds from '@/components/controls/InputFileds';
import OrderCard from '@/components/OrderCard'
import axios from 'axios'

export default {
    name: 'Orders',
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
        pastCard: [
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
        ],
        cards:[],
        carouselTitle: 'Popular Adventures',
    }),
    components: {
        Btn, 
        ViCardVertical, 
        ViCardCarousel,
        InputFileds,
        OrderCard
    }
}
</script>

<style lang="scss">
    .current-teservation{
        margin-top: 0;
        width: 100% !important;
        .card-title{
            width: 600px !important;
        }
        .ordering__information .card-buttons {
            align-self: auto;
            margin-top: 24px;
        }
        .card-content-price{
            margin-right: 67px;
        }
    }
    
    .past-reservations{
        margin-top: 100px;
        width: 100%;
        .title-min{
            margin-bottom: 25px;
        }
    }

    .no-orders{
        &__text{
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
        }
        &__search{
            margin-top: 32px;
            input{
                width: 427px;
            }
        }
    }

    .adv {
        background: #E9F9FF;
        border-radius: 12px;
        margin-top: 100px;
        &__inner {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__content{
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
        &__main {
            padding-left: 24px;
            padding-right: 50px;
            &-title {
                font-size: 24px;
                font-weight: 700;
            }
            &-description {
                margin-top: 5px;
                font-size: 16px;
                line-height: 1.5;
                margin-top: 5px;
            }
            &-stores {
                display: flex;
                justify-content: start;
                align-items: center;
                margin-top: 13px;
            &-app {
                margin-right: 8px;
                cursor: pointer;
            }
            &-google{
                cursor: pointer;
            }
        }
        }
        &__qr{
            text-align: center;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
        }
    }
</style>