<template>
  <div id="MainPage">

    <!-- COOKIE -->
    <Cookie/>

    <!-- INTRO -->
    <div class="intro">
      <div class="intro__inner">
        <h2 class="intro__title">
          Find tours, activities and tickets for sightseeing in Lanzarote
        </h2>
        <div class="intro__action">
          <input class="intro__action-item" type="date"/>
          <btn class="btn_secondary intro__action-item">Search</btn>
          <btn class="btn_secondary intro__action-item intro__action-item-mobile">
            <img src="@/assets/images/svg/mobile-search.svg" alt="search">
          </btn>
        </div>
      </div>
    </div>

    <!-- FEATURES -->
    <div class="feature">
      <div class="container">
        <div class="feature__inner">
          <div class="feature__item">
            <div class="feature__item_icon">
              <img
                src="../../public/imgs/features/noqueues_icon.svg"
                alt=""
              />
            </div>
            <div class="feature__item_title">Free cancelation</div>
            <div class="feature__item_text">
              Have you changed your plans? No worries. Please cancel your
              booking 24 hours before the start of most tours and activities to
              receive a full refund.
            </div>
          </div>
          <div class="feature__item">
            <div class="feature__item_icon">
              <img src="../../public/imgs/features/message-square.svg" alt="" />
            </div>
            <div class="feature__item_title">Best price guaranty</div>
            <div class="feature__item_text">
              Have you changed your plans? No worries. Please cancel your
              booking 24 hours before the start of most tours and activities to
              receive a full refund.
            </div>
          </div>
          <div class="feature__item">
            <div class="feature__item_icon">
              <img src="../../public/imgs/features/users.svg" alt="" />
            </div>
            <div class="feature__item_title">Receive a gift</div>
            <div class="feature__item_text">
              When buying any tour we give a gift.
              <br>
              When buying any tour.
              <br>
              Receive a gift.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Adventures -->
    <div class="container">
      <vi-card-carousel
        :carousel_title = carouselTitle
        :carousel_data = cards
      />
    </div>

    <!-- Advertisement -->
    <div class="adv">
      <div class="container">
        <div class="adv__inner">
          <div class="adv__content">
            <div class="adv__icon">
              <img
                src="@/../public/imgs/MainPage/Advertisement/app_icon.svg"
                alt=""
              />
            </div>
            <div class="adv__main">
              <div class="adv__main-title">Download the Vidodo app</div>
              <div class="adv__main-description">
                <div>
                  Download the best travel app and get access to the most
                  popular tours and tickets to places of interest around
                  Lanzarote.
                </div>
                <div class="adv__main-description-sub">
                  Book in advance with Vidodo Guide. Get instant confirmation.
                  Access to offline booking information.
                </div>
              </div>
              <div class="adv__main-stores">
                <div class="adv__main-stores-app">
                  <img
                    src="@/../public/imgs/MainPage/Advertisement/app_store.svg"
                    alt=""
                  />
                </div>
                <div class="adv__main-stores-google">
                  <img
                    src="@/../public/imgs/MainPage/Advertisement/google_play.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="adv__qr">
              <img
                src="@/../public/imgs/MainPage/Advertisement/qr.png"
                alt=""
              />
              Сканируйте QR
            </div>
          </div>

          <div class="adv__picture">
            <img
              src="@/../public/imgs/MainPage/Advertisement/phone.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Popular Tags -->
    <div class="tags">
      <div class="container">
        <div class="tags__title">
          Popular tags
        </div>
        <div class="tags__inner">
          <div class="tags__inner-item">Tour</div>
          <div class="tags__inner-item">Event</div>
          <div class="tags__inner-item">Sale</div>
          <div class="tags__inner-item">Excursion</div>
          <div class="tags__inner-item">Map Tourist</div>
          <div class="tags__inner-item">Renta</div>
          <div class="tags__inner-item">All day</div>
          <div class="tags__inner-item">1-3 hours</div>
          <div class="tags__inner-item">3-6 hours</div>
          <div class="tags__inner-item">Up to 1 hour</div>
          <div class="tags__inner-item">Transfer</div>
          <div class="tags__inner-item">Tickets</div>
          <div class="tags__inner-item">3-6 hours</div>
          <div class="tags__inner-item">Up to 1 hour</div>
          <div class="tags__inner-item">Transfer</div>
          <div class="tags__inner-item">Tickets</div>
          <div class="tags__inner-item">Several days</div>
          <div class="tags__inner-item">Tour</div>
          <div class="tags__inner-item">Event</div>
          <div class="tags__inner-item">Sale</div>
          <div class="tags__inner-item">Excursion</div>
          <div class="tags__inner-item">Map Tourist</div>
          <div class="tags__inner-item">Renta</div>
          <div class="tags__inner-item">All day</div>
          <div class="tags__inner-item">1-3 hours</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "../components/controls/Btn.vue";
import ViCardVertical from '../components/vi-card-vertical.vue';
import ViCardCarousel from '../components/vi-card-carousel.vue'
import Cookie from '../components/Cookie.vue'
import axios from 'axios'
export default {
  name: "MainPage",
  components: { 
    Btn, ViCardVertical, ViCardCarousel, Cookie
  },
  created(){
    axios.get('/api/cards')
    .then(Response => {
      this.cards = Response.data
    })
  },
  data(){
    return{
      cards:[],
      carouselTitle: 'Popular Adventures',
    }
  }
};
</script>

<style lang="scss" scoped>
/* Tags */
.tags{
  
  &__title{
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
  &__inner{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 20px auto;
    flex-wrap: wrap;
    &-item{
      font-size: 12px;
      padding: 8px;
      border: 1px solid #DCDFE7;
      border-radius: 8px;
      margin: 4px;
      cursor: pointer;
      transition: .3s;
    }
    &-item:hover{
      background-color:#DCDFE7;
    }
  }
}

/* Advertisement */
.adv {
  min-height: 454px;
  margin-top: 75px;
  background: no-repeat url(../../public/imgs/MainPage/Advertisement/bg.png);
  background-size: cover;
  background-position: center;
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 160px;
  }
  &__content{
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  &__main {
    padding-left: 24px;
    padding-right: 50px;
    &-title {
      font-size: 24px;
      font-weight: 700;
    }
    &-description {
      margin-top: 5px;
      font-size: 16px;
      line-height: 1.5;
      margin-top: 5px;
    }
    &-stores {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 13px;
      &-app {
        margin-right: 8px;
        cursor: pointer;
      }
      &-google{
        cursor: pointer;
      }
    }
  }
  &__qr{
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
  }
}

/* Adventures */
/* .adventures {
  margin-top: 70px;
  &__title {
    font-size: 36px;
    font-weight: 600;
  }
  &__slider {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
}
.adventures__slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slider {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__item {
    flex-basis: 25%;
    width: 262px;
    
  }
}
.card {
  width: 262px;
  position: relative;

  &__picture {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    /* background-image: url(../../public/imgs/MainPage/PopularAdventures/item_picture_01.png);
    height: 144px; 
    &-heart {
      position: absolute;
      top: 16px;
      left: 16px;
      cursor: pointer;
      // border: 1px solid transparent;
      padding: 5px 5px 0px 5px;
      border-radius: 50%;
      transition: 0.2s;
      filter: contrast(0.18);
      
    }
    &-heart:hover {
      filter: contrast(1);
      //background-color: $primary;
      // border: 1px solid $primary;
    }
  }
  &__about {
    position: absolute;
    left: 0;
    top: 132px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
  &__info {
    display: flex;
    margin-top: 12px;
    justify-content: space-between;
    align-items: center;
    &-type {
      padding: 3px 8px;
      background-color: #4f9cf8;
      color: white;
      border-radius: 4px;
      font-size: 12px;
    }
    &-rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-vidodo {
        display: flex;
        align-items: center;
        margin: 0 5px;
        padding: 3px 7px;
        border: 1px solid #dcdfe7;
        border-radius: 4px;
        font-size: 12px;
        img {
          padding-right: 4px;
          border-right: 1px solid #dcdfe7;
        }
      }
      &-general {
        display: flex;
        align-items: center;
        margin: 0 5px;
        padding: 2px 6px;
        border: 1px solid #dcdfe7;
        border-radius: 4px;
        font-size: 12px;
        img {
          padding-right: 2px;
          border-right: 1px solid #dcdfe7;
        }
      }
    }
  }
  &__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 8px;
  }
  &__description {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 4px;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 12px;
    margin-top: 30px;
    &-time {
      margin-top: 20px;
      font-size: 12px;
      color: #b7bcca;
    }
    &-transport {
      margin-top: 20px;
    }
    &-price {
      margin-left: 75px;
      font-size: 22px;
      font-weight: 600;
      text-align: right;
      small {
        font-size: 12px;
        color: #b7bcca;
      }
    }
  }
} */
/* INTRO */
.intro {
  min-height: calc(100vh - 108px);
  /* max-height: 750px; */
  background: url("../../public/imgs/mainpage_bg_wave.png") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.intro__inner {
  height: 252px;
  width: 820px;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2.5px);
  border-radius: 12px;
}
.intro__title {
  color: #fff;
  padding: 32px 58px;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
}
.intro__action {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
}

.intro__action-item {
  margin-left: 7px;
  display: inline-block;
  appearance: none;
  border: none;
  border-radius: 5px; 
  padding: 11px 26px;
  font-weight: 500;
  font-size: 16px;
  transition: .2s ease;
  &-mobile{
    display: none;
    padding: 9px;
  }
}
.intro__action-item:hover{
  opacity: 0.8;
  cursor: pointer;
  transition: .2s ease;
}
.intro__action-item:first-child{
  padding: 8.5px 26px;
}

/* FEATURES */
.feature {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.feature__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.feature__item {
  max-width: 300px;
  &:last-child{
    height: 170px;
  }
}
.feature__item_icon {
  max-width: 300px;
  margin-bottom: 8px;
}
.feature__item_title {
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 7px;
}
.feature__item_text {
  line-height: 1.5;
}


// Mobile version

@media (max-width: 1200px){

}

@media (max-width: 992px){
  .intro{
    &__inner{
      height: auto;
      width: 700px;
    }
    &__action{
      &-item{
        &.btn_secondary{
          display: none;
        }
        &-mobile{
          display: block !important;
        }
      }
    }
  }
  .feature{
    text-align: -webkit-center;
    &__inner{
      display: block;
    }
    &__item{
      &:not(:last-child){
        margin-bottom: 40px;
      }
      &_text{
        text-align: center;
      }
    }
  }
  .adv{
    &__content{
      display: block;
    }
    &__icon{
      text-align: -webkit-center;
      margin-bottom: 23px;
    }
    &__main{
      padding: 0;
      text-align: center;
      &-description{
        max-width: 500px;
        &-sub{
          margin-top: 8px;
          font-weight: 500;
          font-size: 12px;
          line-height: 130%;
        }
      }
      &-stores{
        margin-top: 24px;
        justify-content: center;
      }
    }
    &__qr{
      display: none;
    }
    &__picture{
      display: none;
    }
  }
  .tags{
    margin-top: 64px;
    &__title{
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
    }
  }
}

@media (max-width: 768px){
  .intro{
    min-height: 50vh;
    &__inner{
      width: 90%;
    }
    &__title{
      font-weight: bold;
      font-size: 30px;
      line-height: 130%;
    }
  }
}

@media (max-width: 576px){
  .intro{
    &__inner{
      width: 90%;
    }
    &__title{
      padding: 10px;
      font-weight: bold;
      font-size: 22px;
      line-height: 130%;
    }
  }
}

</style>
