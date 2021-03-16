<template>
  <section class="favorites">
    <div class="container">
      <h2 class="page__title">
        Wishlist
      </h2>
      <div class="section__event" v-if="!noFavorites">
        <div class="page__subtitle">
          Мероприятия
        </div>
        <div class="page__tours">
          <div class="row">
            <div 
              class="page__tours-favorite"
              v-for="tour in tourFavorites"
              :key="tour.id"
            >
              <tour-card 
                :data="tour"
              ></tour-card>
            </div>
          </div>
        </div>
        <div class="wrapper wrapper-tours">
          <div class="page__tours">
          <div class="row">
            <div 
              class="page__tours-favorite"
              v-for="tour in tourFavorites"
              :key="tour.id"
            >
              <tour-card 
                :data="tour"
              ></tour-card>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="no-favorites" v-else>
        <div class="no-favorites__title text">
          Don`t miss a thing
        </div>
        <div class="no-favorites__subtitle text">
          With wishlist, you can make a list of all your favorite travel ideas in one place.
        </div>
        <div class="search-block favorites-search">
            <div class="search-item">
                <input-fileds
                    search
                    placeholder="Find something specific"
                />
                <btn search class="desktop-search">Search</btn>
                <btn search class="mobile-search">
                    <img src="@/assets/images/svg/mobile-search.svg" alt="">
                </btn>
            </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="noFavorites">
        <vi-card-carousel
            :carousel_title = carouselTitle
            :carousel_data = cards
        />
    </div>
  </section>
</template>

<script>
import Btn from "../components/controls/Btn.vue";
import TourCard from '@/components/TourCard'
import InputFileds from '@/components/controls/InputFileds';
import ViCardCarousel from '../components/vi-card-carousel.vue';
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Favorites',
  data: () => ({
    cards:[],
    carouselTitle: 'Popular Adventures',
    noFavorites: true,
  }),
  computed: {
    ...mapState({
      tourFavorites: s => s.tourFavorites.tours
    })
  },
  created() {
    axios.get('/api/cards')
    .then(Response => {
    this.cards = Response.data
    })
    this.$store.dispatch('getTourFavourites')
  },
  components: {
    TourCard,
    ViCardCarousel,
    InputFileds,
    Btn
  }
}
</script>

<style lang="scss">
.page {
  &__title {
    font-weight: bold;
    font-size: 36px;
    color: $text-primary;
    margin-bottom: 24px;
    margin-top: 4px;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 24px;
    color: $text-primary;
  }

  &__tours-favorite {
    &:first-child{
      margin: 0;
    }
    margin-right: 25px;
  }
}

.no-favorites{
  .text{
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: $dark-blue;
  }
  &__title{
    margin-top: 24px;
    margin-bottom: 32px;
  }
  &__subtitle{
    margin-bottom: 49px;
  }
  .mobile-search{
    display: none;
  }
  .favorites-search{
    margin-bottom: 107px;
  }
}

.wrapper-tours{
  display: none;
}

@media (max-width: 992px){
  .page{
    &__title{
      font-weight: bold;
      font-size: 22px;
      line-height: 130%;
    }
    &__tours{
      display: none;
    }

  }
  .wrapper-tours{
    display: flex;
    overflow: hidden;
    .row{
      flex-wrap: inherit;
    }
    .page__tours{
      display: flex;
    }
  }
}

</style>