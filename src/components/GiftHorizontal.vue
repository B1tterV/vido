<template>
    <div class="gift successful__checkout-gift">
        <div class="gift-title">
            <img src="@/assets/images/svg/gift.svg" alt="gift">
            <p>Your gift</p>
        </div>
        <div class="gift__code">
            <div class="gift__code-title">Tour Grand Tour</div>
            <div class="gift__code-code">
                <p>Your code:</p>
                <p class="code">{{ giftCode }}</p>
            </div>
        </div>
        <div class="gift__help">
            <div class="text">
                You must enter this promotional code in the application, 
                <br>
                xxxxxx xxx x x xxxx xxx  x xx   xxxxxxxxxxxxxxx x x x:
                <div class="gift__help-step">
                    <p>Menu</p>
                    <img src="@/assets/images/svg/step-arrow.svg" alt="step">
                    <p>Settings</p>
                    <img src="@/assets/images/svg/step-arrow.svg" alt="step">
                    <p>Activation</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'gift',
    props: {
        giftCode: {
            type: String,
            default: () => "No code",
        },
    }
}
</script>

<style lang="scss">
    .gift{
        padding: 18px 31px 31px 31px;
        width: 262px;
        background: #F4F7FB;
        border-radius: 8px;
        &-title{
            display: flex;
            align-items: center;
            p{
                margin-left: 10px;
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
            }
        }
        &__code{
            margin: 12px 0;
            padding: 10px 15px;
            background: #FFFFFF;
            border: 1px dashed #00A1FF;
            box-sizing: border-box;
            border-radius: 8px;
            &-title{
                text-align: center;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
            }
            &-code{
                display: flex;
                p{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #9A9FAC;
                }
                .code{
                    margin-left: 4px;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #00A1FF;
                }
            }
        }
        &__help{
            .text{
                text-align: center;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
            }
            &-step{
                display: flex;
                align-items: center;
                justify-content: center;
                p{
                    font-size: 14px;
                    font-weight: 600;
                }
                img{
                    margin: 0 5px;
                }
            }
        }
    }
    
    .successful__checkout-gift{
        padding: 10px 9px;
        width: 848px;
        display: flex;
        align-items: center;
        margin-top: 48px;
        background: #F4F7FB;
        border-radius: 8px;
        .gift__code{
            margin-left: 21px;
            margin-right: 25px;
            width: 258px;
            &-title{
                text-align: left;
            }
        }
        .gift__help{
            .text{
                text-align: left;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
            }
            &-step{
                justify-content: left;
            }
        }
    }
</style>