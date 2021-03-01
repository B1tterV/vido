<template>

  <div class="container">
    <div class="main__header">
      <p class="main__breadcrumbs"> 
        Catalog > Basket 
      </p>
      <h1 class="main__title"> 
        Cart
      </h1>
    </div>
    <div class="main__content">

      <div class="row justify-between">
        <div class="basket">
          <div class="main__info-tip">
            We have reserved your tickets for 37:42 minutes
          </div>
          <div class="basket-cards">
            <div class="basket__card"
              v-for="el in card"
              :key="el.id"
            >
              <basket-card :data="el" />
            </div>
          </div>
          
          <div class="basket-gift">
            <div class="basket-gift__header">
              <img src="@/assets/images/svg/gift-basket.svg" alt="gift">
              Gift
            </div>
            <v-select 
              :items="sortGift" 
            />  
          </div>

        </div>

        <div class="basket-sidebar">
          <div class="basket-sidebar__ordering">
            <div class="ordering">
              <div class="ordering__total">Total (2 items):</div>
              <div class="ordering__price">245,00 € </div>
              <p>No additional fees and <br> commissions</p>
              <router-link 
                to="/payment-data" 
                tag="button" 
                class="btn_ordering"
              >
                Checkout
              </router-link>
              <router-link 
                to="/payment-data" 
                tag="button" 
                class="btn_enter-search"
              >
                Continue search
              </router-link>
              <span>
                <img src="@/assets/images/svg/ok.svg" alt="">
                Best Price Guaranteed
              </span>
            </div>
          </div>
          <div class="basket__faq">
            <div class="faq">
              <p>Frequently Asked Questions</p>
              <ul>
                <li @click="showQuestion1 = !showQuestion1">
                  <div class="faq__header">
                    <img src="@/assets/images/svg/chevron-down.svg" alt="">
                    Can I make changes to my order after booking?
                  </div>
                  <div class="faq__discription" v-if="showQuestion1">
                    You can modify all bookings (including prices and length of stay) on or after the check-in date 
                  </div>
                </li>
                <li @click="showQuestion2 = !showQuestion2">
                  <div class="faq__header">
                    <img src="@/assets/images/svg/chevron-down.svg" alt="">
                    How long are items added to the cart stored?
                  </div>
                  <div class="faq__discription" v-if="showQuestion2">
                    You can modify all bookings (including prices and length of stay) on or after the check-in date 
                  </div>
                </li>
                <li @click="showQuestion3 = !showQuestion3">
                  <div class="faq__header">
                    <img src="@/assets/images/svg/chevron-down.svg" alt="">
                    Are payments safe?
                  </div>
                  <div class="faq__discription" v-if="showQuestion3">
                    You can modify all bookings (including prices and length of stay) on or after the check-in date 
                  </div>
                </li>
                <li @click="showQuestion4 = !showQuestion4">
                  <div class="faq__header">
                    <img src="@/assets/images/svg/chevron-down.svg" alt="">
                    Is there a commission for the order?
                  </div>
                  <div class="faq__discription" v-if="showQuestion4">
                    You can modify all bookings (including prices and length of stay) on or after the check-in date 
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vi-card-carousel
      :carousel_title="carouselTitle"
      :carousel_data="cards"
    />
  </div>

</template>


<script>
import BasketCard from '@/components/BasketCard'
import ViCardCarousel from '../components/vi-card-carousel.vue'
import vSelect from '@/components/controls/vSelect'
import axios from 'axios'

export default {
  data: () => ({
    showQuestion1: false,
    showQuestion2: false,
    showQuestion3: false,
    showQuestion4: false,
    card: [
      {
        id: 0,
        imgUrl: 'https://i.ibb.co/BVrgttt/total-card.png',
        type: 'Outdoor Classes',
        subtitle: 'Feries ticket',
        title: 'Ferries round ticket to Fuertaventura',
        datetime: 'August 21, 2020 11:00 - 17:00, English',
        people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
        price: {
          old: '225,00 €',
          saving: 'savings 15.44 €',
          base: '65.00 €'
        }
      },  
      {
        id: 1,
        imgUrl: 'https://i.ibb.co/bQtg11Z/total-card2.png',
        type: 'Outdoor Classes',
        title: 'Ferries round ticket to Fuertaventura',
        subtitle: 'Feries ticket',
        datetime: 'August 21, 2020 11:00 - 17:00, English',
        people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
        price: {
          base: '90.00 €'
        }
      }
    ],
    sortGift: [
      {
        text: 'Audiobook',
        value: 'Audiobook'
      },
      {
        text: 'Sale 10%',
        value: 'Sale 10%'
      },
    ],
    cards:[],
    carouselTitle: 'Popular Adventures',
  }),
  created(){
    axios.get('/api/cards')
    .then(Response => {
      this.cards = Response.data
    })
  },
  components: {
    BasketCard,
    ViCardCarousel,
    vSelect
  }
}
</script>

<style lang="scss">

.btn_ordering {
  border-radius: 12px;
  border: none;
  outline: none;
  background: $light-green-gradient;
  margin-top: 15px;
  padding: 15px;
  width: 223px;
  color: $white;
  font-size: 18px;
  font-weight: bold;
}

.btn_enter-search {
  border-radius: 12px;
  border: 1px solid #0DB886;
  outline: none;
  background: $white;
  margin-top: 15px;
  padding: 15px;
  width: 223px;
  color: $green;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.basket {

  &__faq {
    margin-top: 25px  ;
    .faq {
      p {
        font-weight: bold;
        font-size: 18px;
        color: $text-primary;
      }
      ul {
        list-style: none;
        li {
          cursor: pointer;
          margin-top: 15px;
          line-height: 16px;
          color: $text-primary;
          img{
            align-self: start;
            margin-right: 8px;
          }
        }
      }
      &__header{
        display: flex;
        font-size: 14px;
        line-height: 16px;
      }
      &__discription{
        margin-left: 25px;
        color: $orange;
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }

  &__card {
    margin-bottom: 25px;
  }

  &-gift{
    margin-top: 45px;
    position: relative;
    display: flex;
    align-items: center;
    &__header{
      align-items: center;
      position: absolute;
      padding: 9px 46px 9px 14px;
      display: flex;
      background: #FF5134;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      img{
        margin-right: 6px;
      }
    }
    .select{
      margin-left: 96px;
    }
  }
  

  &-sidebar {
    width: 263px;
  
    &__ordering {
      background: #E9F9FF;
      border-radius: 12px;
      padding: 20px;
      text-align: center;

      .ordering {
        &__total {
          font-weight: normal;
          font-size: 16px;
          color: $text-primary;
        }

        &__price {
          padding: 8px 0 4px 0;
          font-weight: 600;
          font-size: 28px;
          color: $text-primary;
        }

        p {
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #6FA2B5;
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 25px;
          font-weight: 600;
          font-size: 14px;
          color: $secondary;
          img{
            margin-right: 9px;
          }
        }
      }
    }
  }
}
</style>
