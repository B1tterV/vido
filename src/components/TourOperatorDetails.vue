<template>
    <div class="tour__operator">
        <div class="tour__operator-title">
            Tour operator contact details
        </div>
        <div class="phone tour__operator-item">
            <img src="../assets/images/svg/phone.svg" alt="phone">
            <p>+ 34 928 59 64 34</p>
        </div>
        <div class="mail tour__operator-item">
            <img src="../assets/images/svg/mail-send.svg" alt="mail">
            <p>support@suport.com</p>
        </div>
        <div class="tour__operator-guide">Contact Vidodo Guide</div>
        <router-link
            to="/help-page"
            tag="div"
            class="help-page"
        >
            Go to the help page
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'TourOperatorDetails',
}
</script>

<style lang="scss">
    .tour__operator{
        margin-top: 20px;
        padding: 20px 20px 35px 20px;
        background: #FFFFFF;
        border: 1px solid #DCDFE7;
        box-sizing: border-box;
        border-radius: 8px;
        .help-page{
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: $blue;
        }
        &-title{
            margin-bottom: 16px;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
        }
        &-item{
            display: flex;
            align-items: center;
            p{
                margin-left: 8px;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                color: $blue;
            }
            &:not(:last-child){
                margin-bottom: 8px;
            }
        }
        &-guide{
            margin-bottom: 8px;
            margin-top: 28px;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
        }
    }
</style>