<template>
    <div class="account-menu">
        <div class="account-menu__items">
                <router-link
                    to="/orders"
                    tag="div"
                    class="account-menu__items-item"
                >
                    <img src="@/assets/images/svg/order-item.svg" alt="Orders">
                    Orders
                </router-link>
                <router-link
                    to="/profile"
                    tag="div"
                    class="account-menu__items-item"
                >
                    <img src="@/assets/images/svg/profile-item.svg" alt="Profile">
                    Profile
                </router-link>
            <div class="account-menu__items-item" @click="logout">
                <img src="@/assets/images/svg/logout-item.svg" alt="Logout">
                Logout
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'accountMenu',
    methods: {
        logout: function () {
            this.$store.dispatch('logout')
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .account-menu{
        width: 120px;
        padding: 4px;
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(30, 40, 67, 0.1);
        border-radius: 8px;
        &__items{
            &-item{
                display: flex;
                align-items: center;
                padding: 8px 10px;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                img{
                    margin-right: 10px;
                    width: 20px;
                    height: 20px;
                }
                &:hover{
                    background: #e9e9e9;
                    border-radius: 8px;
                    transform: scale(1.05);
                }
                &:not(:last-child){
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>>