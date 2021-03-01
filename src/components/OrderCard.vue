<template>
    <div v-if="pastOrder" class="order-card past-order-card">
        <div class="row">
            <div class="ordering__information-card">
            <div class="card-img">
                <img src="@/assets/images/total-card.png" alt="img">
            </div>
            <div class="card-content">
                <div class="card-content-top">
                    <div class="ticket">{{ data.type }}</div>
                    <div class="card-title">
                        {{ data.title }}
                    </div>
                    <div class="card-subtitle">
                        Entrance ticket with transfer from Playa Blanka 
                    </div>
                    <div class="card-time">
                        {{ data.datetime }}
                    </div>
                    <div class="card-people">
                        {{ data.people }}
                    </div>
                </div>
                <div class="card-content-bottom">
                    <div class="row">
                        <p class="order-cancelled">Order cancelled</p>
                        <div class="card-content-price">{{ data.price.base }}</div>
                    </div>
                </div>
            </div>
            <div class="card-buttons">
                <a href="javascript:;">
                    <div class="delete-btn">
                        <img src="../assets/images/svg/del-card.svg" alt="">
                        Delete from history
                    </div>
                </a>
            </div>
        </div>
        </div>
    </div>

    <div v-else class="order-card">
        <div class="row">
            <div class="ordering__information-card">
            <div class="card-img">
                <img src="@/assets/images/total-card.png" alt="img">
                <!-- <div class="offer">
                    Special offer
                </div> -->
            </div>
            <div class="card-content">
                <div class="card-content-top">
                    <div class="ticket">{{ data.type }}</div>
                    <div class="card-content-price">{{ data.price.base }}</div>
                    <div class="card-title">
                        {{ data.title }}
                    </div>
                    <div class="card-subtitle">
                        Entrance ticket with transfer from Playa Blanka 
                    </div>
                    <div class="card-time">
                        {{ data.datetime }}
                    </div>
                    <div class="card-people">
                        {{ data.people }}
                    </div>
                </div>
                <div class="card-content-bottom">
                    <div class="row">
                        <p class="order-confirm">Order confirmed</p>
                        <p class="cancellation-possible">Cancellation possible until 11:00 20 August</p>
                    </div>
                    <div class="row">
                        <router-link 
                            to="/booking-info" 
                            tag="div" 
                            class="blue-info order-info"
                        >
                            View booking information
                        </router-link>
                        <p class="blue-info">Add to calendar</p>
                    </div>
                </div>
            </div>
            <div class="card-buttons">
                <a href="javascript:;">
                    <div class="voucher-btn">
                        <img src="../assets/images/svg/mobile.svg" alt="">
                        <p>Mobile voucher</p>
                    </div>
                </a>
                <a href="javascript:;">
                    <div class="voucher-btn printer-btn">
                        <img src="../assets/images/svg/bx-printer.svg" alt="">
                        <p>Voucher for printing</p>
                    </div>
                </a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OrderCard',
  props: {
    data: Object,
    pastOrder: Boolean
  },
}
</script>

<style lang="scss">

.ordering__information{
    margin-top: 50px;
    &-card{
        width: 100%;
        display: flex;
        margin-top: 25px;
        padding: 24px;
        background: #FFFFFF;
        border: 1px solid #DBE0E9;
        box-sizing: border-box;
        border-radius: 8px;
        .card-img{
            position: relative;
            .offer{
                position: absolute;
                left: 12px;
                bottom: 95px;
                padding: 3px 8px;
                font-weight: 600;
                font-size: 12px;
                line-height: 14px;
                background: #FF5134;
                box-shadow: 0px 1px 4px rgba(30, 40, 67, 0.12);
                border-radius: 4px;
                color: white;
            }
        }
    }
    .card-content{
        width: 100%;
        position: relative;
        margin-left: 16px;
        .card-content-top{
            position: relative;
            .card-content-price{
                position: absolute;
                top: inherit;
                bottom: 0;
            }
            .ticket {
                width: 100px;
                padding: 3px 8px;
                font-weight: 600;
                font-size: 12px;
                line-height: 14px;
                background: #FFC47B;
                border-radius: 4px;
                color: white;
            }
        }
        .card-content-price{
            position: absolute;
            top: inherit;
            bottom: 0;
            right: 0;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            text-align: right;
        }
        .card-title{
            margin-top: 4px;
            width: 390px;
            font-weight: bold;
            font-size: 22px;
            line-height: 27px;
        }
        .card-subtitle{
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
        }
        .card-time{
            margin-top: 8px;
            margin-bottom: 10px;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            color: #565E72;
        }
        .card-people{
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            opacity: 0.75;
        }
        &-bottom{
            .order-confirm{
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                color: #0DB886;
                margin-right: 23px;
            }
            .cancellation-possible{
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: #8F95A1;
            }
            .row{
                align-items: center;
                margin-top: 15px;
            }
            .blue-info{
                cursor: pointer;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                color: $blue;
            }
            .order-info{
                margin-right: 26px;
            }
        }
    }
    .card-buttons{
        margin-left: 30px;
        align-self: flex-end;
        .voucher-btn{
            justify-content: center;
            width: 209px !important;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 11px 15px;
            background: #0DB886;
            border-radius: 8px;
            color: white;
            p{
                padding-left: 8px;
                font-weight: 600;
                font-size: 15px;
                line-height: 19px;
            }
        }
        .printer-btn{
            border: 1px solid #0DB886;
            background: #FFFFFF;
            color: #0DB886;
            margin-top: 8px;
        }
    }
}

.past-order-card{
    .ordering__information-card{
        .card-img{
            opacity: 0.6;
            img{
                filter: grayscale(100%);
            }
        }
    }
    .order-cancelled{
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #FF5134;
    }

    .delete-btn{
        display: flex;
        width: 209px;
        padding: 13px 24px;
        border: 1px solid #D6DAE4;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        line-height: 19px;
        color: #B7BCCA;
    }

    .card-content-price{
        bottom: 10px !important;
    }
}
</style>