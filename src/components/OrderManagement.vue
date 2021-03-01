<template>
    <div class="order__management">
        <div class="order__management-title">
            Order management
        </div>
        <div class="text" v-html="orderText"></div>
        <router-link 
            to="/change-date" 
            tag="button"
            class="change-date-btn"
        >
            Change date
        </router-link>
        <router-link 
            to="/cancel-order" 
            tag="button"
            class="cancle-order-btn"
        >
            Cancel the order
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'OrderManagement',
    props: {
        orderText: {
            String,
            default: () => "Cancel your reservation"
        }
    }
}
</script>

<style lang="scss">
    .order__management{
        padding: 24px 20px;
        background: #E9F9FF;
        border-radius: 8px;
        text-align: center;
        .text{
            margin-bottom: 16px;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
        }
    }

    .order__management-title{
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
    }

    .change-date-btn{
        width: 100%;
        border: none;
        text-align: center;
        margin-bottom: 12px;
        padding: 14px 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        background: #78BBD4;
        box-shadow: 0px 1px 4px rgba(166, 215, 233, 0.5);
        border-radius: 8px;
        color: white;
    }

    .cancle-order-btn{
        width: 100%;
        border: none;
        text-align: center;
        padding: 14px 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        color: black;
    }
</style>