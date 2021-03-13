<template>
    <div class="container orders__page">
        <div class="orders__header">
            <div class="page-breadcrumbs">
                Catalog > Booking information
            </div>
            <div class="page-title">Orders</div>
        </div>
        <div class="main__content">
            <div v-if="card" class="ordering__information">
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
                    <div class="search-item">
                        <input-fileds
                            search
                            placeholder="Find something specific"
                        />
                        <btn search class="desktop-search">Search</btn>
                        <btn search class="mobile-search">
                            <img src="@/assets/images/svg/mobile-search.svg" alt="">
                        </btn>
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
            <div class="adv-mobile">
                <div class="container">
                    <div class="adv-mobile__inner">
                        <div class="adv-mobile__content">
                            <div class="adv-mobile__icon">
                                <img
                                    src="@/../public/imgs/MainPage/Advertisement/app_icon.png"
                                    alt=""
                                />
                            </div>
                            <div class="adv-mobile__main">
                                <div class="adv-mobile__main-title">Download the Vidodo app</div>
                                <div class="adv-mobile__main-description">
                                    <div>
                                        Access popular activities in Lanzarote 
                                        through our mobile app.
                                    </div>
                                    <div class="adv-mobile__main-description-sub">
                                        Book in advance, get instant confirmation 
                                        and access to offline booking information.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            <div class="carousel-mobile">
                <vi-card-carousel
                    :carousel_title = carouselTitle
                    :carousel_data = cards
                />
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
    .ordering__information{
        margin-top: 24px;
        .title-min{
            margin-bottom: 25px;
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
        }
        .order-cards{
            .order__card{
                &:first-child{
                    .ordering__information-card{
                        margin-top: 0;
                    }
                }
            }
        }
    }
    
    .past-reservations{
        margin-top: 100px;
        width: 100%;
    }

    .no-orders{
        &__text{
            width: 650px;
            font-weight: 500;
            font-size: 24px;
            line-height: 34px;
        }
        &__search{
            margin-top: 32px;
            input{
                width: 427px;
            }
            .search-item{
                display: flex;
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

    .adv-mobile{
        display: none;
        margin-top: 52px;
        min-height: 260px;
        background: no-repeat url(../../public/imgs/MainPage/Advertisement/bg.png);
        background-size: cover;
        background-position: center;
        &__inner{
            padding-top: 160px;
        }
        &__icon{
            text-align: -webkit-center;
        }
        &__main{
            margin-top: 23px;
            &-title{
                text-align: center;
                font-weight: bold;
                font-size: 22px;
                line-height: 130%;
            }
            &-description{
                margin-top: 8px;
                text-align: center;
                font-weight: 500;
                font-size: 14px;
                line-height: 140%;
                &-sub{
                    margin-top: 7px;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 130%;
                }
            }
        }
    }

    .mobile-search{
        display: none;
    }

    .carousel-mobile{
        display: none;
    }

    @media(max-width: 992px){
        .page-title{
            font-weight: bold;
            font-size: 22px;
            line-height: 130%;
        }
        .adv-mobile{
            display: block;
        }
        .past-reservations{
            margin-top: 47px;
            .title-min{
                margin-bottom: 0;
                font-weight: bold;
                font-size: 22px;
                line-height: 130%;
            }
            .card-content{
                &-top{
                    .card-title{
                        width: 203px;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 19px;
                    }
                    .card-time{
                        margin-top: 4px;
                        margin-bottom: 9px;
                    }
                }
                &-bottom{
                    .order-cancelled{
                        font-weight: 600;
                        font-size: 12px;
                        line-height: 14px;
                    }
                    .card-content-price{
                        bottom: 33px !important;
                    }
                }
            }
            .card-subtitle{
                &-mobile{
                    display: block;
                }
            }
            .card-buttons{
                display: none;
            }
        }
        .no-orders{
            .adv{
                display: none;
            }
            .vi-card-carousel{
                display: none;
            }
        }
        .search-item{
            display: flex;
            width: 100%;
            .input{
                width: 100%;
                input{
                width: 100% !important;
                }
            }
        }
        .desktop-search{
            display: none;
        }
        .mobile-search{
            margin-left: 8px;
            position: relative;
            min-width: 40px;
            width: 40px;
            display: block;
            img{
                position: absolute;
                top: 9px;
                right: 9px;
            }
        }
        .carousel-mobile{
            display: block;
        }
        .ordering__information{
            width: 100%;
        }
    }
</style>