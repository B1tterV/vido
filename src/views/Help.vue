<template>
    <div class="container main__page">
        <div class="main__header">
            <div class="help-title page-title">Legal information</div>
        </div>
        <div class="main__content help">
            <div class="help__info-tip">
                We share your travel planning concerns and are here to help you. 
                To cancel your reservation, select "Cancel" in the options below. 
                This is the fastest way to process a request. If you have questions 
                or need help, our support team is available 24/7 and is ready 
                to advise you in several languages.
            </div>
            <div class="row justify-between">
                <div class="help-main-content">
                    <div class="help-main-content__how-we-help help-main-content__item">
                        How can we help you?
                    </div>
                    <div class="help-main-content__cancellation help-main-content__item">
                        <div class="row justify-between">
                            <div class="help-main-content__title">
                                Cancellation
                            </div>
                            <div class="help-main-content__drop">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="help-main-content__description">
                            <div class="description active">
                                <div class="row">
                                    <div class="description__title">
                                        Cancel reservation
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text">
                                    Если до начала мероприятия осталось более 24 часов, 
                                    вы сможете мгновенно отменить заказ, указав свой 
                                    код бронирования и PIN ниже. Вы получите полный 
                                    возврат средств тем же способом, которым вы совершили 
                                    оплату.
                                    <br>
                                    <br>
                                    Что бы отменить заказ, введите код бронирования и PIN
                                    <br>
                                    <br>
                                    <form>
                                        <input-float
                                            v-model.trim="$v.form.bookingCode.$model"
                                            :error="$v.form.bookingCode.$error"
                                            :errorMessage="'Use only numbers'"
                                            :required="$v.form.bookingCode.$required"
                                            :requiredMessage="'Is required fields'"
                                            :sucsess="!$v.form.bookingCode.$invalid"
                                            :floatText="'Booking code *'"
                                            information
                                            type="text"
                                            placeholder=" "
                                        />
                                        <input-float
                                            v-model.trim="$v.form.pin.$model"
                                            :error="$v.form.pin.$error"
                                            :errorMessage="'Use only numbers'"
                                            :required="$v.form.pin.$required"
                                            :requiredMessage="'Is required fields'"
                                            :sucsess="!$v.form.pin.$invalid"
                                            :floatText="'PIN *'"
                                            information
                                            type="text"
                                            placeholder=" "
                                        />
                                        <btn class="btn_save">
                                            Send
                                        </btn>
                                    </form>
                                    <br>
                                    Чтобы получить доступ к вашим заказам, <a>войдите в систему</a> или 
                                    <a>создайте учетную запись</a>, 
                                    <br>
                                    указав адрес эл. почты, который использовался при заказе.
                                    <br>
                                    Эти данные указаны в вашем ваучере.
                                    <img class="cencellation" src="@/assets/images/help_cencellation.png" alt="">
                                </div>
                            </div>
                            <div class="description active">
                                <div class="row">
                                    <div class="description__title">
                                        Отмена со стороны местного партнёра
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text">
                                    Если местный партнеротменил ваше бронирование, 
                                    пожалуйста, свяжитесь с нами через 
                                    форму ниже, чтобы получить возврат всей суммы.
                                    <br>
                                    <div class="help__info-tip">
                                        Что бы мы смогли ответить на ваш запрос, 
                                        эти данные должны совпадать с данными, 
                                        которые привязаны к вашему коду бронирования.
                                    </div>
                                    <form>
                                        <div class="row">
                                            <input-float
                                                v-model.trim="$v.form.bookingCode.$model"
                                                :error="$v.form.bookingCode.$error"
                                                :errorMessage="'Use only numbers'"
                                                :required="$v.form.bookingCode.$required"
                                                :requiredMessage="'Is required fields'"
                                                :sucsess="!$v.form.bookingCode.$invalid"
                                                :floatText="'Booking code *'"
                                                information
                                                type="text"
                                                placeholder=" "
                                            />
                                            <input-float
                                                v-model.trim="$v.form.pin.$model"
                                                :error="$v.form.pin.$error"
                                                :errorMessage="'Use only numbers'"
                                                :required="$v.form.pin.$required"
                                                :requiredMessage="'Is required fields'"
                                                :sucsess="!$v.form.pin.$invalid"
                                                :floatText="'PIN *'"
                                                information
                                                type="text"
                                                placeholder=" "
                                            />
                                        </div>
                                        <btn class="btn_save">
                                            Send
                                        </btn>
                                    </form>
                                    <br>
                                    Чтобы получить доступ к вашим заказам, <a>войдите в систему</a> или 
                                    <a>создайте учетную запись</a>, 
                                    <br>
                                    указав адрес эл. почты, который использовался при заказе.
                                    <br>
                                    Эти данные указаны в вашем ваучере.
                                    <img class="cencellation" src="@/assets/images/help_cencellation.png" alt="">
                                </div>
                            </div>
                            <div class="description">
                                <div class="row">
                                    <div class="description__title">
                                        Custom booking
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text" style="display:none;">
                                </div>
                            </div>
                            <div class="description">
                                <div class="row">
                                    <div class="description__title">
                                        Duration and start time
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text" style="display:none;">
                                </div>
                            </div>
                            <div class="description">
                                <div class="row">
                                    <div class="description__title">
                                        Availability
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text" style="display:none;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="help-main-content__booking-info help-main-content__item active">
                        <div class="row justify-between">
                            <div class="help-main-content__title">
                                Booking information
                            </div>
                            <div class="help-main-content__drop">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="help-main-content__description" style="display:none;">
                            <div class="description active">
                                <div class="row">
                                    <div class="description__title">
                                        Contacting a local partner via email
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text">
                                    You can send emails directly to the local partner 
                                    once your activity booking has been confirmed. All 
                                    of your contact information as well as your local 
                                    partner’s will be anonymous as every email will be 
                                    delivered with a temporary email address. However, 
                                    all communication between you and the local partner 
                                    will be stored, helping to protect you in case there's 
                                    a disagreement.
                                    <br>
                                    <br>
                                    <span class="text-bold">
                                        When to contact a local partner
                                    </span>
                                    <br>
                                    After booking an activity you might 
                                    need help with directions to a meeting point, 
                                    scheduling a pickup, making a special request 
                                    for your booking, or asking specific details 
                                    about your activity. By emailing local partners 
                                    directly, you can have your questions answered 
                                    quickly and easily.
                                    <br>
                                    <br>
                                    Keeping your email address private
                                    <br>
                                    <br>
                                    To protect your privacy and prevent unwanted 
                                    communication, your personal email address 
                                    will not be shared with local partners. 
                                    Instead, a unique, temporary GetYourGuide 
                                    address will be created for each booking you make.
                                    <br>
                                    <br>
                                    <div class="sub-text">
                                        All temporary email addresses have the domain name 
                                        @reply.getyourguide.com
                                        <br>
                                        Your temporary GetYourGuide email address will 
                                        look like:customer-12ab3456cd78@reply.getyourguide.com
                                        <br>
                                        The temporary address for our local partners will look
                                        <br>
                                        <a>like:local-partner-1a2b3c4d5678@reply.getyourguide.com</a>
                                    </div>
                                    <br>
                                    <br>
                                    Note: The temporary address expires 7 days after the 
                                    travel date of your booking. After that time period, 
                                    if you still need help, you can contact the GetYourGuide 
                                    customer service team.
                                    <br>
                                    <br>
                                    Sending an email to a local partner
                                    <br>
                                    <br>
                                    You can use your regular email provider to send messages 
                                    to the local partner’s temporary address. Using the 
                                    temporary email address also reduces the risk of your 
                                    emails ending up in spam folders and keeps your data 
                                    secure.
                                    <br>
                                    <br>
                                    Receiving emails from a local partner
                                </div>
                            </div>
                            <div class="description">
                                <div class="row">
                                    <div class="description__title">
                                        Included and excluded
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text" style="display:none;">
                                </div>
                            </div>
                            <div class="description">
                                <div class="row">
                                    <div class="description__title">
                                        Custom booking
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text" style="display:none;">
                                </div>
                            </div>
                            <div class="description">
                                <div class="row">
                                    <div class="description__title">
                                        Duration and start time
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text" style="display:none;">
                                </div>
                            </div>
                            <div class="description">
                                <div class="row">
                                    <div class="description__title">
                                        Availability
                                    </div>
                                    <div class="description__drop">
                                        <img src="@/assets/images/svg/arrow.svg" alt="">
                                    </div>
                                </div>
                                <div class="description__text" style="display:none;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="help-main-content__change-of-booking help-main-content__item">
                        <div class="row justify-between">
                            <div class="help-main-content__title">
                                Change of booking
                            </div>
                            <div class="help-main-content__drop">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="help-main-content__description" style="display:none;">

                        </div>
                    </div>
                    <div class="help-main-content__data-and-privacy help-main-content__item">
                        <div class="row justify-between">
                            <div class="help-main-content__title">
                                Data and privacy
                            </div>
                            <div class="help-main-content__drop">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="help-main-content__description" style="display:none;">

                        </div>
                    </div>
                    <div class="help-main-content__payment-and-return help-main-content__item">
                        <div class="row justify-between">
                            <div class="help-main-content__title">
                                Payment and return
                            </div>
                            <div class="help-main-content__drop">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="help-main-content__description" style="display:none;">

                        </div>
                    </div>
                    <div class="help-main-content__meeting-point help-main-content__item">
                        <div class="row justify-between">
                            <div class="help-main-content__title">
                                Meeting point and transfer
                            </div>
                            <div class="help-main-content__drop">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="help-main-content__description" style="display:none;">

                        </div>
                    </div>
                    <div class="help-main-content__voucher help-main-content__item">
                        <div class="row justify-between">
                            <div class="help-main-content__title">
                                Voucher
                            </div>
                            <div class="help-main-content__drop">
                                <img src="@/assets/images/svg/arrow.svg" alt="">
                            </div>
                        </div>
                        <div class="help-main-content__description" style="display:none;">

                        </div>
                    </div>
                    <div class="help-main-content__footer">
                        <div class="help-main-content__footer-title help-main-content__item">
                            Still need help?
                        </div>
                        <div class="help-main-content__footer-mail help-main-content__footer-item">
                            <div class="row">
                                <div class="help-main-content__footer-icon mail-icon">
                                    <img src="@/assets/images/svg/help-mail.svg" alt="">
                                </div>
                                <div class="help-main-content__footer-content">
                                    <div class="help-main-content__footer-content-title">
                                        Send an email
                                    </div>
                                    <div class="help-main-content__footer-content-description">
                                        Get in touch with our customer service team
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="help-main-content__footer-support help-main-content__footer-item">
                            <div class="row">
                                <div class="help-main-content__footer-icon support-icon">
                                    <img src="@/assets/images/svg/help-support.svg" alt="">
                                </div>
                                <div class="help-main-content__footer-content">
                                    <div class="help-main-content__footer-content-title">
                                        Сontact via support
                                    </div>
                                    <div class="help-main-content__footer-content-description">
                                        Use freshchat
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="help-second-content">
                    <vi-card-carousel
                        :carousel_title = carouselTitle
                        :carousel_data = cards
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, email, alpha, sameAs, minLength, numeric } from 'vuelidate/lib/validators'
import ViCardCarousel from '@/components/vi-card-carousel.vue'
import InputFloat from '@/components/controls/InputFloat'
import Btn from '@/components/controls/Btn'
import axios from 'axios'

export default {
    name: 'help',
    data: () => ({
        cards:[],
        carouselTitle: 'Popular avtivities',
        form: {
            bookingCode: '',
            pin: '',
        },
    }),
    created(){
        axios.get('/api/cards')
            .then(Response => {
            this.cards = Response.data
            })
    },
    validations: {
        form: {
            bookingCode: {
                required,
                numeric
            },
            pin: {
                required,
                numeric
            }
        }
    },
    components: {
        ViCardCarousel,
        InputFloat,
        Btn
    }
}
</script>

<style lang="scss">
    .help{
        &__info-tip{
            margin-bottom: 57px;
            padding: 20px 27px;
            background: #D1EBFD;
            border-radius: 12px;
            font-weight: 500;
            font-size: 20px;
            line-height: 150%;
        }
        &-main-content{
            width: 65%;
            &__title{
                font-weight: bold;
                font-size: 22px;
                line-height: 27px;
            }
            &__description{
                margin-top: 20px;
                margin-left: 20px;
                font-weight: 500;
                font-size: 14px;
                line-height: 130%;
                .btn{
                    width: 200px;
                }
                .description{
                    &.active{
                        .description__drop{
                            transform: rotateX(180deg);
                        }
                    }
                    &__title{
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 22px;
                        color: #565E72;
                        margin-bottom: 18px;
                    }
                    &__drop{
                        padding: 5px;
                        cursor: pointer;
                        margin-left: 14px;
                        margin-bottom: 18px;
                        img{
                            width: 10px;
                            height: 4px;
                        }
                    }
                    &__text{
                        margin-bottom: 25px;
                        span{
                            &.text-bold{
                                font-weight: bold;
                            }
                        }
                        .sub-text{
                            margin-left: 20px;
                        }
                        a{
                            cursor: pointer;
                            color: $light-blue-two;  
                        }
                    }
                }
                .help__info-tip{
                    margin-top: 9px;
                    margin-bottom: 18px;
                    padding: 12px 27px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 130%;
                }
            }
            &__drop{
                cursor: pointer;
                padding: 9px;
                background: #FFFFFF;
                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
            }
            &__item{
                margin-bottom: 13px;
                padding-bottom: 14px;
                border-bottom: 1px solid #D6DAE4;
                .row{
                    align-items: center;
                }
                &.active{
                    .help-main-content__drop{
                        img{
                            transform: rotateX(180deg);
                        }
                    }
                }
            }
            &__how-we-help{
                margin-bottom: 13px;
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
            }
            &__footer{
                margin-top: 82px;
                &-title{
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 29px;
                }
                &-icon{
                    display: flex;
                    align-items: center;
                    place-content: center;
                    margin-right: 17px;
                    width: 45px;
                    height: 45px;
                    border-radius: 100px;
                    img{
                        width: 25px;
                        height: 20px;
                    }
                    &.mail-icon{
                        background: #8DF0B4;
                    }
                    &.support-icon{
                        background: #FFDA44;
                    }
                }
                &-item{
                    margin-bottom: 13px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid #D6DAE4;
                    .row{
                        align-items: center;
                    }
                }
                &-content{
                    &-title{
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 24px;
                    }
                    &-description{
                        font-weight: normal;
                        font-size: 15px;
                        line-height: 24px;
                    }
                }
            }
            &__cancellation{
                input{
                    width: 200px;
                }
                img{
                    &.cencellation{
                        margin-top: 7px;
                        margin-bottom: 158px;
                    }
                }
            }
        }
        &-second-content{
            width: 25%;
            .carousel{
                margin-top: 0;
            }
            .carousel__controls{
                margin-left: 5px;
            }
            .carousel__controls-title{
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
            }
        }
    }
</style>