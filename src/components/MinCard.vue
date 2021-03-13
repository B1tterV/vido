<template>
  <div class="min-card">
        <div class="min-card__card">
            <div class="card-picture">
                <img src="../assets/images/total-card.png" alt="">
            </div>
            <div class="min-card__content">
                <div class="content">
                    <div class="content__ticket">{{ data.type }}</div>
                    <div class="content__price">{{ data.price.base }}</div>
                    <div class="content__title">
                        {{ data.title }}
                    </div>
                    <div class="content__time">
                        {{ data.datetime }}
                    </div>
                    <div class="content__people">
                        {{ data.people }}
                    </div>
                </div>
            </div>
        </div>
        <div class="min-card__cancelation">
            <a href="javascript:;">
                <div class="free-cancel-btn">
                    Free cancelation
                </div>
            </a>
            <div class="text">
                Cancel before August 21th, 10АМ for a full refund.
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'minCard',
  props: {
    data: Object
  },
}
</script>

<style lang="scss">
    .min-card{
        margin-bottom: 60px;
        width: 100%;
        height: 110px;
        &__card{
            display: flex;
            .card-picture{
                position: relative;
                .offer{
                    position: absolute;
                    bottom: 12px;
                    left: 12px;
                }
            }
        }
        &__content{
            width: 100%;
            position: relative;
            margin-left: 16px;
            .content{
                &__ticket{
                    width: 100px;
                    padding: 3px 8px;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 14px;
                    background: #FFC47B;
                    border-radius: 4px;
                    color: white;
                }
                &__price{
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    text-align: right;
                }
                &__title{
                    margin-top: 4px;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 19px;
                }
                &__time{
                    margin: 5px 0;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                }
                &__people{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    opacity: 0.75;
                }
            }
        }
        &__cancelation{
            margin-top: 11px;
            display: flex;
            align-items: center;
            .text{
                padding-left: 16px;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                color: #0DB886;
            }
        }
    }

    @media (max-width: 992px){
        .min__card{
            margin-bottom: 16px;
            padding: 12px;
            border: 1px solid #D6DAE4;
            box-sizing: border-box;
            border-radius: 12px;
            .min-card{
                height: auto;
                margin-bottom: 0;
                &__card{
                    .card-picture{
                        display: none;
                    }
                }
                &__content{
                    margin-left: 0;
                    .content{
                        &__ticket{
                            display: none;
                        }
                        &__title{
                            width: 85%;
                        }
                        &__time{
                            margin-top: 4px;
                            margin-bottom: 9px;
                            font-weight: 600;
                            font-size: 12px;
                            line-height: 14px;
                        }
                        &__people{
                            width: 65%;
                            font-weight: 500;
                            font-size: 10px;
                            line-height: 120%;
                        }
                        &__price{
                            top: inherit;
                            bottom: 4px;
                            font-weight: 600;
                            font-size: 18px;
                            line-height: 21px;
                        }
                    }
                }
                &__cancelation{
                    margin-top: 4px;
                    .free-cancel-btn{
                        width: 105px;
                        padding: 4px;
                    }
                    .text{
                        font-weight: 500;
                        font-size: 10px;
                        line-height: 120%;
                    }
                }
            }
        }
    }

</style>