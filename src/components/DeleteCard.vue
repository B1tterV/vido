<template>
  <div class="delete-card" v-if="deleteCard">
    <div class="delete-card-wrapper">
        <div class="delete-card-content">
            <div class="delete-card-content__title">
                Are you sure you want to remove
                <br>
                the event from the cart?
            </div>
            <div class="delete-card-content__close" @click="closeDelete">
                <icon name="icon_close"/>
            </div>
            <div class="delete-card-content__buttons">
                <div class="row justify-between">
                    <btn class="btn_standard" >
                        Delete
                    </btn>
                    <btn class="btn_cancellation" >
                        Cancel
                    </btn>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import Btn from './controls/Btn'

export default {
  name: 'DeleteCard',
  data: () => ({
    deleteCard: true,
  }),
  methods: {
    closeDelete () {
        this.deleteCard = false
    },
  },
  components: {
      Icon,
      Btn
  }
}

</script>

<style lang="scss">
.delete-card {
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
        width: 574px;
        height: 272px;
        background: white;
        border-radius: 12px;
        padding: 52px 55px 55px 54px;

        &__title{
            font-size: 28px;
            line-height: 34px;
            text-align: center;
            margin-bottom: 47px;
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
        }

        &__buttons{
            display: flex;
            justify-content: center;
            .btn_standard{
                margin-right: 16px;
            }
        }
    }
}

// Mobile version

@media(max-width: 992px){
    
}
</style>