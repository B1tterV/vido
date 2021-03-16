<template>
    <div class="container main__page">
        <div class="main__header">
            <div class="contacts-title page-title">Contacts</div>
        </div>
        <div class="main__content contacts">
            <div class="row justify-between">
                <div class="contacts-main-content">
                    <div class="contacts-main-content__adress row">
                        <div class="contacts-type">
                            Address:
                        </div>
                        <div class="contacts-type-description">
                            Calle Benahore 20,
                            <br>
                            35571 Yaiza (Las Palmas),
                            <br> 
                            Lanzarote
                        </div>
                    </div>
                    <div class="contacts-main-content__mail row">
                        <div class="contacts-type">
                            E-mail:
                        </div>
                        <div class="contacts-type-description">
                            info@vidodoguide.com
                        </div>
                    </div>
                    <div class="contacts-main-content__phone row">
                        <div class="contacts-type">
                            Phone:
                        </div>
                        <div class="contacts-type-description">
                            +34 638 172 324
                        </div>
                    </div>
                    <div class="text">
                        "Vidodo Guide" is a trade names of Vidodo Guide LLP,
                        a limited liability partnership incorporated 
                        in England under number OC431341
                    </div>
                </div>
                <div class="contacts-second-content">
                    <div class="contacts-second-content__letter">
                        <div class="letter">
                            <div class="letter__title">
                                Contact us
                            </div>
                            <div class="letter__content">
                                <div class="row justify-between">
                                    <div class="letter__data">
                                        <div class="letter__data-name">
                                            <input class="input-contacts" type="text" placeholder="Your Name">
                                        </div>
                                        <div class="letter__data-mail">
                                            <input class="input-contacts" type="email" placeholder="E-mail address">
                                        </div>
                                        <div class="letter__data-phone">
                                            <input class="input-contacts" type="tel" placeholder="Your phone number">
                                        </div>
                                    </div>
                                    <div class="letter__message" contenteditable="true">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="letter__footer row justify-between">
                                <div class="text">
                                    By clicking "Send" I agree to the privacy policy.   
                                </div>
                                <div class="button">
                                    <btn class="btn_contact">
                                        Send
                                        <img src="@/assets/images/svg/contact-send.svg" alt="">
                                    </btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Btn from '@/components/controls/Btn'
export default {
    name: 'contacts',
    data: () => ({
    }),
    components: {
        Btn
    }
}
</script>

<style lang="scss">
    .contacts{
        .input-contacts{
            border: none;
            padding: 12px 16px 13px 16px;
            background: #FFFFFF;
            border-radius: 12px;
        }
        &-type{
            width: 71px;
            font-weight: 600;
            font-size: 18px;
            line-height: 150%;
            opacity: 0.5;
            margin-right: 15px;
            &-description{
                font-weight: 500;
                font-size: 18px;
                line-height: 150%;
            }
        }
        &-main-content{
            width: 35%;
            .text{
                margin-left: 86px;
                width: 244px;
                font-weight: 500;
                font-size: 14px;
                line-height: 140%;
                color: #565E72;
            }
            &__adress{
                margin-bottom: 14px;
            }
            &__mail{
                margin-bottom: 14px;
            }
            &__phone{
                margin-bottom: 33px;
            }
        }
        &-second-content{
            &__letter{
                padding: 30px 50px 40px 50px;
                background: #D1EBFD;
                border-radius: 16px;
                .letter{
                    &__title{
                        margin-bottom: 27px;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 24px;
                        color: #1E2843;
                    }
                    &__content{
                        margin-bottom: 37px;
                    }
                    &__data{
                        margin-right: 30px;
                        &-name{
                            margin-bottom: 16px;
                        }
                        &-mail{
                            margin-bottom: 16px;
                        }
                    }
                    &__message{
                        padding: 12px 16px;
                        width: 370px;
                        height: 170px;
                        background: white;
                        border-radius: 12px;
                    }
                    &__footer{
                        align-items: center;
                        .text{
                            margin-left: 15px;
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 140%;
                            color: #565E72;
                        }
                        .button{
                            .btn_contact{
                                display: flex;
                                img{
                                    margin-left: 22px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>