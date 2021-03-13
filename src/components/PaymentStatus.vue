<template>
  <div class="payment-status" v-if="payStatus">
    <div class="payment-status-wrapper">
        <div class="payment-status-content">
            <div class="payment-status-content__loader">
                <div class="cssload-container">
                    <div class="cssload-speeding-wheel"></div>
                </div>
            </div>
            <div class="payment-status-content__title">
                Your payment is being processed
            </div>
            <!-- <div class="payment-status-content__close" @click="closeModal">
                <icon name="icon_close"/>
            </div> -->
            <div class="payment-status-content__text">
                In order for the payment to be successful, 
                do not close this window and do not click "back"
            </div>
        </div>
    </div>
  </div>

    <div class="payment-status" v-else-if="payOk">
        <div class="payment-status-wrapper">
            <div class="payment-status-content">
                <div class="payment-status-content__loader">
                    <img src="@/assets/images/svg/statusOk.svg" alt="">
                </div>
                <div class="payment-status-content__title">
                    Done!
                </div>
                <div class="payment-status-content__close" @click="closeModal">
                    <icon name="icon_close"/>
                </div>
                <div class="payment-status-content__text">
                    Your payment was successful
                </div>
            </div>
        </div>
    </div>

    <div class="payment-status" v-else-if="payDeclined">
        <div class="payment-status-wrapper">
            <div class="payment-status-content">
                <div class="payment-status-content__loader">
                    <img src="@/assets/images/svg/payDeclined.svg" alt="">
                </div>
                <div class="payment-status-content__title">
                    Payment declined!
                </div>
                <div class="payment-status-content__close" @click="closeModal">
                    <icon name="icon_close"/>
                </div>
                <div class="payment-status-content__text">
                    Probably not enough funds on the card, top up your account and come back.
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Icon from './Icon'
import Btn from './controls/Btn'

export default {
  name: 'paymentStatus',
  data: () => ({
    payStatus: false,
    payOk: false,
    payDeclined: true,
  }),
  methods: {
    closeModal () {
        this.payStatus = false;
        this.payOk = false;
        this.payDeclined = false;
    },
  },
  components: {
      Icon,
      Btn
  }
}

</script>

<style lang="scss">
.payment-status {
    position: relative;
    min-width: 320px;
    max-width: 416px;
    margin: 10px;
    padding: 40px 30px;
    border-radius: 20px;
    background-color: $white;

    &-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(30, 40, 67, 0.8);
        backdrop-filter: blur(50px);
        z-index: 100;
    }

    &-content{
        position: relative;
        width: 516px;
        height: 400px;
        background: white;
        border-radius: 12px;
        padding: 47px 43px 115px 44px;

        &__loader{
            display: flex;
            justify-content: center;
            .cssload-container {
                width: 100%;
                height: 84px;
                text-align: center;
            }

            .cssload-speeding-wheel {
                width: 84px;
                height: 84px;
                margin: 0 auto;
                border: 5px solid rgb(255,0,0);
                border-radius: 100px;
                border-left-color: transparent;
                border-right-color: transparent;
                animation: cssload-spin 575ms infinite linear;
                    -o-animation: cssload-spin 575ms infinite linear;
                    -ms-animation: cssload-spin 575ms infinite linear;
                    -webkit-animation: cssload-spin 575ms infinite linear;
                    -moz-animation: cssload-spin 575ms infinite linear;
            }



            @keyframes cssload-spin {
                100%{ transform: rotate(360deg); transform: rotate(360deg); }
            }

            @-o-keyframes cssload-spin {
                100%{ -o-transform: rotate(360deg); transform: rotate(360deg); }
            }

            @-ms-keyframes cssload-spin {
                100%{ -ms-transform: rotate(360deg); transform: rotate(360deg); }
            }

            @-webkit-keyframes cssload-spin {
                100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
            }

            @-moz-keyframes cssload-spin {
                100%{ -moz-transform: rotate(360deg); transform: rotate(360deg); }
            }
        }

        &__title{
            text-align: center;
            margin-top: 31px;
            margin-bottom: 8px;
            font-weight: bold;
            font-size: 28px;
            line-height: 34px;
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
        }

        &__text{
            max-width: 423px;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            text-align: center;
        }
    }
}

// Mobile version

@media(max-width: 992px){
    
}
</style>