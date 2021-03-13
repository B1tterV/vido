<template>
    <div class="booking__info-page">
        <div class="container main__page">
            <div class="page-breadcrumbs">
                Catalog > Booking information
            </div>
            <div class="page-title">Booking information</div>
            <div class="row justify-between">
                <div class="page__main-content">
                    <div class="banner">
                        <img src="../assets/images/banner1.png" alt="banner">
                    </div>
                    <div class="booking__info">
                        <div class="outdoor-classes">Outdoor Classes</div>
                        <div class="booking__info-title">
                            La Graciosa Day trip to Fuerteventura and Corralejo
                        </div>
                        <div class="booking__info-content">
                            <p class="info">Information</p>
                            <div class="booking__info-row">
                                <div class="booking__info-col">
                                    <div class="booking__info-table">
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">Status</p>
                                            </div>
                                            <div class="col">
                                                <p class="confirm">Order confirmed</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">Booking code</p>
                                            </div>
                                            <div class="col">
                                                <p>VDD9834023G8CDB</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">PIN-code</p>
                                            </div>
                                            <div class="col">
                                                <p>!FD=jsHdb</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">Traveler</p>
                                            </div>
                                            <div class="col">
                                                <p>Angela Merkel</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">Members</p>
                                            </div>
                                            <div class="col">
                                                <p>1 Adult (ages 13-65)</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">Date</p>
                                            </div>
                                            <div class="col">
                                                <p>September 1, 2021</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">Validity</p>
                                            </div>
                                            <div class="col">
                                                <p>1 Day</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="booking__info-table-title">Price</p>
                                            </div>
                                            <div class="col">
                                                <div class="price-block">
                                                    <p class="price">1 800 €</p>
                                                    <a href="javascript:;" class="show-receipt">
                                                        Show receipt
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="booking__info-col">
                                    <Gift
                                    :giftCode="giftCode" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="your__voucher">
                        <p class="title-min">Your voucher</p>
                        <div class="your__voucher-content">
                            <p>
                                You can print the voucher and show it to the staff,<br> 
                                or show the mobile voucher
                            </p>
                            <div class="your__voucher-print">
                                <img src="../assets/images/svg/green-printer.svg" alt="">
                                <p>Voucher for printing</p>
                            </div>
                        </div>
                    </div>
                    <div class="meeting__info">
                        <div class="title-min">Meeting point information</div>
                        <div class="map">
                            <img src="../assets/images/map.png" alt="">
                            <div class="map-info">
                                <div class="map-info-title">
                                    <img src="../assets/images/svg/truck.svg" alt="">
                                    <p>Meeting point address</p>
                                </div>
                                <div class="text">
                                    Calle La 0, Muelle de Qrozotta, 35476 Orzola, Spain
                                </div>
                            </div>
                        </div>
                        <div class="map-buttons">
                            <a href="#">Open in Google Maps</a>
                            <a href="#" class="print-map">
                                <img src="../assets/images/svg/print-map.svg" alt="">
                                Print map with meeting point
                            </a>
                        </div>
                        <div class="meeting-halper">
                            <div class="text">
                                This is your Vidodo voucher. 
                                Show it to the tour operator representative.
                                <br>
                                Vidodo speculator, organization XXXX is your 
                                tour operator.
                                <br> 
                                Or use the 
                                <a href="#">mobile app</a> 
                                (download our app and use the mobile voucher)
                            </div>
                            <p class="meeting-halper-subtitle">The event will start at the meeting point</p>
                            <p class="meeting-halper-subtitle">Pick up adress</p>
                            <p class="meeting-halper-description">
                                Вальесеко, Лас-Пальмас, Канарские острова, Испания
                            </p>
                            <p class="meeting-halper-subtitle">Finish point</p>
                            <p class="meeting-halper-description">
                                Your event will conclude at the location or destination
                            </p>
                        </div>
                    </div>
                    <div class="drop__off">
                        <p class="title-min">Drop off</p>
                        <p class="block-description">
                            Return transfer to the point of departure:
                            You will be dropped off at the same place 
                            where you were picked up
                        </p>
                    </div>
                    <div class="import__info">
                        <p class="title-min">Important information</p>
                        <div class="import__info-row">
                            <div class="import__info-note">
                                <p>What's included</p>
                            </div>
                            <div class="import__info-note-description">
                                <div class="import__info-item">
                                    <img src="../assets/images/svg/check.svg" alt="check">
                                    <p>Entrance to the Costa Teguise Aquapark</p>
                                </div>
                                <div class="import__info-item">
                                    <img src="../assets/images/svg/x.svg" alt="check">
                                    <p>Food and drink</p>
                                </div>
                                <div class="import__info-item">
                                    <img src="../assets/images/svg/x.svg" alt="check">
                                    <p>Indoor paintball</p>
                                </div>
                            </div>
                        </div>
                        <div class="import__info-row">
                            <div class="import__info-note">
                                <p>Tour operator notes</p>
                            </div>
                            <div class="import__info-note-description">
                                <div class="import__info-item">
                                    <p>Please bring your swimsuit and sunscreen</p>
                                </div>
                                <div class="import__info-item">
                                    <p>Please contact the supplier for local bus timetables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page__second-content">
                    <OrderManagement
                    :orderText="'Cancel your reservation <br> by 11:00 am on August <br> 31st to receive a full <br> refund'" />
                    <TourOperatorDetails/>
                    <div class="desktop-small-gift">
                        <Gift
                        :giftCode="giftCode" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <vi-card-carousel
                :carousel_title = carouselTitle
                :carousel_subtitle = carouselSubtitle
                :carousel_data = cards
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Btn from "../components/controls/Btn.vue";
import ViCardVertical from '../components/vi-card-vertical.vue';
import ViCardCarousel from '../components/vi-card-carousel.vue'
import Gift from '../components/Gift.vue'
import OrderManagement from '../components/OrderManagement.vue';
import TourOperatorDetails from '../components/TourOperatorDetails.vue';

export default {
    name: "PageNotFound",
    components: { 
        Btn, 
        ViCardVertical, 
        ViCardCarousel,
        Gift,
        OrderManagement,
        TourOperatorDetails
    },
    created(){
    axios.get('/api/cards')
    .then(Response => {
      this.cards = Response.data
    })
    },
    data(){
        return{
        cards:[],
        carouselTitle: 'More Popular Tours & Activities',
        carouselSubtitle: 'Recommended activities near Aquapark Costa Teguise',
        giftCode: '5536bx88jG'
        }
    }
}
</script>

<style lang="scss">
    .page__main-content{
        width: 751px;
    }

    .page__second-content{
        width: 262px;
    }

    .page-title{
        padding: 0 !important;
        padding-top: 4px;
        margin-bottom: 24px;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        color: #1E2843;
    }

    .booking__info{
        margin-top: 24px;
        &-title{
            margin-top: 4px;
            font-weight: bold;
            font-size: 28px;
            line-height: 34px;
        }
        &-content{
            margin-top: 32px;
            p.info{
                margin-bottom: 16px;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
            }
        }
        &-row{
            display: flex;
            justify-content: space-between;
        }
        &-table{
            width: 430px;
            .row{
                display: flex;
                justify-content: space-between;
                p{
                    text-align: left;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                }
                .confirm{
                    color: #4CD964;
                }
                &:not(:last-child){
                    margin-bottom: 22px;
                }
                .price{
                    font-weight: 600;
                }
                .price-block{
                    position: relative;
                    align-items: center;
                    display: flex;
                    a{
                        position: absolute;
                        right: 0;
                    }
                }
            }
        }
    }

    .show-receipt{
        margin-left: 25px;   
        padding: 6px 18px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        background: #FFFFFF;
        border: 1px solid #D1D6E3;
        box-sizing: border-box;
        border-radius: 8px;
        color: #1E2843;
    }

    .outdoor-classes{
        width: 109px;
        padding: 3px 8px;
        background: #4F9CF8;
        border-radius: 4px;
        color: white;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
    }

    .your__voucher{
        margin-top: 74px;
        .title{
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
        }
        &-content{
            display: flex;
            justify-content: space-between;
            margin-top: 9px;
            align-items: center;
            p{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #8F95A1;
            }
        }
        &-print{
            display: flex;
            align-items: center;
            padding: 13px 16px;
            border: 1px solid #0DB886;
            border-radius: 8px;
            p{
                padding-left: 7px;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #0DB886;
            }
        }
    }

    .meeting__info{
        margin-top: 56px;
    }

    .map{
        position: relative;
        overflow: hidden;
        margin: 24px 0;
        border-radius: 12px;
        &-info{
            position: absolute;
            width: 288px;
            bottom: 20px;
            left: 20px;
            padding: 14px 26px 21px 16px;
            background: #FFFFFF;
            border: 2px solid #FF4734;
            box-sizing: border-box;
            border-radius: 8px;
            .text{
                padding-top: 4px;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #8F93A1;
            }
            &-title{
                display: flex;
                align-items: center;
                p{
                    margin-left: 6px;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 19px;
                }
            }
        }
        &-buttons{
            display: flex;
            justify-content: space-between;
            a{
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                color: #1E2843;
                opacity: 0.5;
            }
            .print-map{
                display: flex;
                align-items: center;
                img{
                    margin-right: 8px;
                }
            }
        }
    }

    .meeting-halper{
        margin-top: 67px;
        padding: 24px 32px;
        background: #FFFFFF;
        border: 1px dashed #D80027;
        box-sizing: border-box;
        border-radius: 8px;
        .text{
            font-weight: 500;
            font-size: 18px;
            line-height: 30px;
            a{
                color: $blue;
            }
        }
    }

    .meeting-halper-subtitle{
        margin-top: 20px;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
    }

    .meeting-halper-description{
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #868C9C;
    }

    .drop__off{
        margin-top: 47px;
        .title-min{
            padding-bottom: 8px;
        }
    }

    .block-description{
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
    }

    .import__info{
        margin-top: 32px;
        &-row{
            margin-top: 26px;
            display: flex;
            &:not(:last-child){
                margin-bottom: 41px;
            }
        }
        &-note{
            width: 134px;
            margin-right: 34px;
            p{
                font-weight: 600;
                font-size: 18px;
                line-height: 21px;
            }
        }
        &-item{
            display: flex;
            align-items: center;
            p{
                padding-left: 4px;
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
            }
            &:not(:last-child){
                margin-bottom: 18px;
            }
        }
    }

    .desktop-small-gift{
        display: none;
    }

    // Mobile version

    @media (max-width: 1200px){
        .page__main-content{
            width: 70%;
            .banner{
                img{
                    width: 100%;
                }
            }
            .gift{
                display: none;
            }
        }
        .desktop-small-gift{
            display: block;
            margin-top: 20px;
        }
    }

    @media (max-width: 992px){
        .page-title{
            font-weight: bold;
            font-size: 22px;
            line-height: 130%;
        }
        .page-breadcrumbs{
            display: none;
        }
        .booking__info-page{
            .container{
                .row{
                    .page__main-content{
                        width: 100%;
                        .banner{
                            margin-top: 12px;
                            img{
                                width: 100%;
                            }
                        }
                        .booking__info{
                            &__title{
                                font-weight: bold;
                                font-size: 18px;
                                line-height: 22px;
                            }
                            &-table{
                                width: 100%;
                                .show-receipt{
                                    display: none;
                                }
                                &-title{
                                    font-weight: bold;
                                }
                                .row{
                                    .col:last-child{
                                        text-align-last: right;
                                    }
                                    .price-block{
                                        .price{
                                            width: 100%;
                                            text-align-last: right;
                                        }
                                    }
                                }
                            }
                            &-row{
                                display: block;
                            }
                            &-col{
                                margin-top: 26px;
                                .gift{
                                    width: 100%;
                                    &-title{
                                        place-content: center;
                                    }
                                    &__code{
                                        &-code{
                                            justify-content: center;
                                        }
                                    }
                                }
                            }
                        }
                        .your__voucher{
                            margin-top: 26px;
                            .title-min{
                                text-align: center;
                            }
                            &-content{
                                display: block;
                                p{
                                    br{
                                        display: none;
                                    }
                                }
                            }
                            &-print{
                                margin-top: 8px;
                                justify-content: center;
                            }
                        }
                        .meeting__info{
                            .map{
                                &-info{
                                    display: none;
                                }
                                &-buttons{
                                    display: block;
                                    text-align: center;
                                    a{
                                        font-weight: 500;
                                        font-size: 14px;
                                        line-height: 140%;
                                        color: #00A1FF;
                                        opacity: 1;
                                    }
                                    .print-map{
                                        margin-top: 12px;
                                        justify-content: center;
                                    }
                                }
                            }
                        }
                        .meeting-halper{
                            padding: 16px;
                            .text{
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 140%;
                                a{
                                    font-size: 14px;
                                }
                            }
                            &-subtitle{
                                margin-top: 12px;
                                font-weight: bold;
                                font-size: 14px;
                                line-height: 17px;
                            }
                            &-description{
                                margin-top: 6px;
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 140%;
                            }
                        }
                        .drop__off{
                            .title-min{
                                font-weight: bold;
                            }
                            .block-description{
                                font-weight: 600;
                                font-size: 12px;
                                line-height: 14px;
                            }
                        }
                        .import__info{
                            .title-min{
                                font-weight: bold;
                            }
                            &-note{
                                width: 100%;
                                margin-bottom: 8px;
                                font-weight: bold;
                                font-size: 14px;
                                line-height: 17px;
                                &-description{
                                    .import__info-item{
                                        margin-bottom: 8px;
                                        p{
                                            padding: 0;
                                            font-weight: 500;
                                            font-size: 14px;
                                            line-height: 140%;
                                        }
                                    }
                                }
                            }
                            &-row{
                                display: block;
                            }
                        }
                    }
                    .page__second-content{
                        width: 100%;
                        .order__management{
                            .text{
                                br{
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
        .desktop-small-gift{
            display: none;
        }
        .map{
            img{
                width: 100%;
            }
        }
    }

</style>