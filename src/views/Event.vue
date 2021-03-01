<template>
  <div class="event">
    <div class="container">
      <div class="row justify-between">
        <div class="main__header">
          <p class="main__breadcrumbs"> 
            Catalog > Outdoot Activities > {{ event_data.title }}
          </p>
          <h1 class="main__title"> 
            {{ event_data.title }}
          </h1>
        </div>
        <div class="row">
          <div class="event__heart">
            <img src="@/../public/imgs/Event/heart.png" alt="" />
          </div>
          <div class="event__price">
            <p class="event__price-other">from</p>
            <p class="event__price-amount">{{ event_data.price }} €</p>
          </div>
        </div>
      </div>
      <div class="event__info">
        <div class="event__info-ratingVidodo">
          <img src="@/../public/imgs/Event/rating_vidodo.png" alt="" />
          {{ event_data.ratingVidodo }}
          <div class="event__info-ratingVidodo-reviews">
            Reviews: {{ event_data.reviewsVidodo }}
          </div>
        </div>
        <div class="event__info-ratingGeneral">
          <img src="@/../public/imgs/Event/rating_general.png" alt="" />
          {{ event_data.ratingGeneral }}
          <div class="event__info-ratingVidodo-reviews">
            Reviews: {{ event_data.reviewsGeneral }}
          </div>
        </div>
        <div class="event__info-location">
          <div class="event__info-location-poi">
            <img src="@/assets/images/svg/place-event.svg" alt="">
          </div>
          <div class="event__info-location-name">
            {{ event_data.location }}
          </div>
        </div>
      </div>
      <div class="event__photo">
        <div class="row justify-between">
          <div class="event__photo-main">
            <div class="event__photo-main-controls">
              <div
                class="event__photo-main-controls-prev"
                @click="prevMainPhoto(pictures[pictures.length - 1])"
              >
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.79688 0.800781L1.59687 5.00078L5.79688 9.20078"
                    stroke="#1E2843"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                class="event__photo-main-controls-next"
                @click="nextMainPhoto(pictures[0])"
              >
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.20312 0.800781L5.40313 5.00078L1.20313 9.20078"
                    stroke="#1E2843"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <img v-if="mainPicture !== ''"
              :src="require(`@/../public/imgs/Event/${mainPicture}`)"
              alt=""
            />
          </div>
          <div class="event__photo-others">
            <div
              class="event__photo-others-picture"
              v-for="pic in pictures"
              :key="pic"
              @click="changeMainPhoto(pic)"
            >
              <img 
                v-if="pic !== undefined"
                :src="require(`@/../public/imgs/Event/${pic}`)" 
                alt="" 
              />
              <div class="event__photo-others-onhover">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="event__shortdesc">
        {{event_data.shortDesc}}
      </div>
      <div class="event__about">
        <div class="event__about-title">About this activity</div>
        <div class="row">
          <div class="event__about-item">
            <img src="@/assets/images/svg/bx-history.svg" alt="Duration">
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">
                 {{event_data.about != null ? event_data.about.duration.title : ''}}
              </div>
              <div class="event__about-item-desc-text">{{event_data.about.duration.desc}}</div>
            </div>
          </div>
          <div class="event__about-item">
            <img src="@/assets/images/svg/voucher.svg" alt="Vouchers">
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">{{event_data.about.vouchers.title}}</div>
              <div class="event__about-item-desc-text">{{event_data.about.vouchers.desc}}</div>
            </div>
          </div>
          <div class="event__about-item">
            <img src="@/assets/images/svg/not-suit.svg" alt="Suitable">
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">
                {{event_data.about.notSuitable.title}}
              </div>
              <div class="event__about-item-desc-text">{{event_data.about.notSuitable.desc}}</div>
            </div>
          </div>
          <div class="event__about-item">
            <img src="@/assets/images/svg/tour-guide.svg" alt="tour-guide">
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">{{event_data.about.tourGuide.title}}</div>
              <div class="event__about-item-desc-text">
                {{event_data.about.tourGuide.desc}}
              </div>
            </div>
          </div>
          <div class="event__about-item">
            <img src="@/assets/images/svg/cancellation.svg" alt="cancellation">
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">{{event_data.about.cancellation.title}}</div>
              <div class="event__about-item-desc-text">
                {{event_data.about.cancellation.desc}}
              </div>
            </div>
          </div>
          <div class="event__about-item">
            <img src="@/assets/images/svg/transfer-activity.svg" alt="transfer-activity">

            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">{{event_data.about.transfer.title}}</div>
              <div class="event__about-item-desc-text">
                {{event_data.about.transfer.desc}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="event__highlights">
        <div class="event__highlights-title">Highlights</div>
        <div class="event__highlights-text">
          <ul>
            <li 
              v-for="(item, i) in event_data.highlights"
              :key="i"
            >{{item}}
            </li>
          </ul>
        </div>
      </div>
      <CheckAvailability/>
      <div class="event__fulldesc">
        <h1>Experience</h1>
        <div class="event__fulldesc-title">Full description</div>
        <div class="event__fulldesc-text" v-if="showShort">
          {{ event_data.fullDesc | limitTo }}
        </div>
        <div class="event__fulldesc-text" v-else>
          {{ event_data.fullDesc }}
        </div>
        <div class="event__fulldesc-control" @click="showShort = !showShort">
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 4.5L11 1"
              stroke="#C4C4C4"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="event__included">
        <div class="event__included-title">What's included</div>
        <div class="event__included-text">
          <ul>
            <li
              v-for="(item, i) in event_data.included"
              :key="i" 
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="event__notincluded">
        <div class="event__notincluded-title">Not suitable for</div>
        <div class="event__notincluded-text">
          <ul>
            <li
              v-for="(item, i) in event_data.notIncluded"
              :key="i"
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="event__covidInfo">
        <div class="event__covidInfo-title">COVID-19 Special information</div>
        <div class="event__covidInfo-text">
          <div class="event__covidInfo-text-measures">
            Security measures are taken:
            <ul>
              <li
                v-for="(item, i) in event_data.covidInfo.measures"
                :key="i"
              >{{item}}</li>
            </ul>
          </div>
          <div class="event__covidInfo-text-demands">
            Requirements for participants
            <ul>
              <li
                v-for="(item, i) in event_data.covidInfo.demands"
                :key="i"
              >{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="event__importantInfo">
        <div class="event__importantInfo-title">Important information</div>
        <div class="event__importantInfo-text">
          <ul>
            <li
              v-for="(item, i) in event_data.importantInfo"
              :key="i" 
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="event__meetingPoint">
        <div class="event__meetingPoint-title">Meeting point</div>
        <div class="event__meetingPoint-text" v-html="event_data.meetingPoint">
          {{event_data.meetingPoint}}
        </div>
        <btn class="btn_defoult event__meetingPoint-button">Show on the map</btn>
      </div>
      <div class="event__rate-reviews">
        <div class="event__rate-reviews-title">Rate & reviews</div>
        <div class="event__rate-reviews-raiting">
          <div class="event__rate-reviews-raiting-vido">
            <div class="event__rate-reviews-raiting-vido__header">
              Vidodo
            </div>
            <div class="event__rate-reviews-raiting-vido__content">
              <div class="event__rate-reviews-raiting-vido__content-raiting">
                <img src="@/assets/images/svg/raiting-vido.svg" alt="">
                4.5
              </div>
              <div class="event__rate-reviews-raiting-vido__content-star">
                <img src="@/assets/images/svg/ion_star.svg" alt="">
                <img src="@/assets/images/svg/ion_star.svg" alt="">
                <img src="@/assets/images/svg/ion_star.svg" alt="">
                <img src="@/assets/images/svg/ion_star.svg" alt="">
                <img src="@/assets/images/svg/ion_star_inactive.svg" alt="">
              </div>
              <div class="event__rate-reviews-raiting-vido__content-reviews">
                32 reviews
              </div>
            </div>
            <div class="event__rate-reviews-raiting-vido__stars">
              <ul>
                <li>
                  <p>5</p>
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="star">
                  <div class="star-line"></div>
                  <p>12</p>
                </li>
                <li>
                  <p>4</p>
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="star">
                  <div class="star-line"></div>
                  <p>7</p>
                </li>
                <li>
                  <p>3</p>
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="star">
                  <div class="star-line"></div>
                  <p>3</p>
                </li>
                <li>
                  <p>2</p>
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="star">
                  <div class="star-line"></div>
                  <p>1</p>
                </li>
                <li>
                  <p>1</p>
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="star">
                  <div class="star-line"></div>
                  <p>5</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="event__rate-reviews-raiting-average">
            <div class="event__rate-reviews-raiting-average__header">
              Average
            </div>
            <div class="event__rate-reviews-raiting-average__content">
              <div class="row">
                <div class="event__rate-reviews-raiting-average__content-description">
                  Average rating of the largest travel sites
                </div>
                <div class="event__rate-reviews-raiting-average__content-main">
                  <div class="event__rate-reviews-raiting-average__content-main-raiting">
                    <img src="@/assets/images/svg/average-raiting.svg" alt="avg">
                    4.2
                  </div>
                  <div class="event__rate-reviews-raiting-average__content-main-star">
                    <img src="@/assets/images/svg/ion_star.svg" alt="">
                    <img src="@/assets/images/svg/ion_star.svg" alt="">
                    <img src="@/assets/images/svg/ion_star.svg" alt="">
                    <img src="@/assets/images/svg/ion_star.svg" alt="">
                    <img src="@/assets/images/svg/ion_star_inactive.svg" alt="">
                  </div>
                  <div class="event__rate-reviews-raiting-average__content-main-reviews">
                    157 reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="event__rate-reviews-review">
          <div class="event__rate-reviews-review__header">
            <div class="event__rate-reviews-review__header__items">
              <div class="event__rate-reviews-review__header__items-item item-active">
                New
              </div>
              <div class="event__rate-reviews-review__header__items-item">
                Old
              </div>
              <div class="event__rate-reviews-review__header__items-item">
                High
              </div>
              <div class="event__rate-reviews-review__header__items-item">
                Low
              </div>
            </div>
            <div class="event__rate-reviews-review__header__sorting">
              <span>Sorting by:</span> 
              <v-select 
                :items="sortComments" 
              />  
            </div>
          </div>
          <div class="event__rate-reviews-review-content">
            <div class="event__rate-reviews-review-content-comment">
              <div class="event__rate-reviews-review-content-comment__photo">
                <!-- <img src="@/assets/images/svg/user.svg" alt="user"> -->
              </div>
              <div class="event__rate-reviews-review-content-comment__raiting">
                <div class="event__rate-reviews-review-content-comment__raiting-star">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="">
                </div>
                <div class="event__rate-reviews-review-content-comment__raiting-name">
                  @traveler
                </div>
                <div class="event__rate-reviews-review-content-comment__raiting-date">
                  October 20, 2020
                </div>
              </div>
              <div class="event__rate-reviews-review-content-comment__text">
                It's very nice, very interesting. It's not just having fun 
                because at the same time you will learn a glimpse of history 
                about Lanzarote. The Tour Guide are nice too very approachable 
                and the drivers are good too for keeping a slow pace in a 
                mountainous area to see the view clearly.
                <br>
                <a>Show original</a>
              </div>
            </div>
            <div class="event__rate-reviews-review-content-comment">
              <div class="event__rate-reviews-review-content-comment__photo">
                <!-- <img src="@/assets/images/svg/user.svg" alt="user"> -->
              </div>
              <div class="event__rate-reviews-review-content-comment__raiting">
                <div class="event__rate-reviews-review-content-comment__raiting-star">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="">
                </div>
                <div class="event__rate-reviews-review-content-comment__raiting-name">
                  @traveler
                </div>
                <div class="event__rate-reviews-review-content-comment__raiting-date">
                  October 20, 2020
                </div>
              </div>
              <div class="event__rate-reviews-review-content-comment__text">
                It's very nice, very interesting. It's not just having fun 
                because at the same time you will learn a glimpse of history 
                about Lanzarote. The Tour Guide are nice too very approachable 
                and the drivers are good too for keeping a slow pace in a 
                mountainous area to see the view clearly.
                <br>
                <a>Show original</a>
              </div>
            </div>
            <div class="event__rate-reviews-review-content-comment">
              <div class="event__rate-reviews-review-content-comment__photo">
                <!-- <img src="@/assets/images/svg/user.svg" alt="user"> -->
              </div>
              <div class="event__rate-reviews-review-content-comment__raiting">
                <div class="event__rate-reviews-review-content-comment__raiting-star">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star.svg" alt="">
                  <img src="@/assets/images/svg/ion_star_inactive.svg" alt="">
                </div>
                <div class="event__rate-reviews-review-content-comment__raiting-name">
                  @traveler
                </div>
                <div class="event__rate-reviews-review-content-comment__raiting-date">
                  October 20, 2020
                </div>
              </div>
              <div class="event__rate-reviews-review-content-comment__text">
                It's very nice, very interesting. It's not just having fun 
                because at the same time you will learn a glimpse of history 
                about Lanzarote. The Tour Guide are nice too very approachable 
                and the drivers are good too for keeping a slow pace in a 
                mountainous area to see the view clearly.
                <br>
                <a>Show original</a>
              </div>
            </div>
            <div class="event__rate-reviews-review-content-button">
              <btn class="btn_review">All reviews</btn>
            </div>
          </div>
        </div>
      </div>
      <vi-card-carousel
        :carousel_title="carouselTitle"
        :carousel_data="cards"
      />
    </div>
  </div>
</template>
<script>
import ViCardCarousel from "@/components/vi-card-carousel.vue";
import CheckAvailability from "@/components/CheckAvailability.vue";
import Btn from "../components/controls/Btn.vue";
import vSelect from '@/components/controls/vSelect'
import axios from "axios";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Event",
  components: {
    ViCardCarousel, CheckAvailability, Btn, vSelect
  },
  data() {
    return {
      cards: [],
      sortComments: [
        {
        text: 'Company of friends',
        value: 'Company of friends'
        },
        {
          text: 'Newlyweds',
          value: 'Newlyweds'
        },
        {
          text: 'Individual travelers',
          value: 'Individual travelers'
        },
        {
          text: 'With kids',
          value: 'With kids'
        },
      ],
      carouselTitle: "You may also like",
      mainPicture: "",
      pictures: [],
      showShort: true,
    };
  },
  computed: {
    ...mapState({
      event_data: (state) => state.event.Event,
    }),
  },
  created() {
    this.interval = setInterval(
      () => this.nextMainPhoto(this.pictures[0]),
      20000
    );
    axios.get("/api/cards").then((Response) => {
      this.cards = Response.data;
    });
  },
  async mounted() {
    await this.$store.dispatch("getEvent", 1);
    console.log("-------------->", this.event_data);
    this.mainPicture = this.event_data.photos[0];
    this.pictures = this.event_data.photos.filter(
      (el) => el !== this.event_data.photos[0]
    );
    
  },

  methods: {
    changeMainPhoto(img) {
      this.pictures[this.pictures.indexOf(img)] = this.mainPicture;
      this.mainPicture = img;
      // this.pictures.splice(this.pictures.indexOf(img), 1);
    },
    nextMainPhoto(img) {
      this.pictures.push(this.mainPicture);
      this.mainPicture = img;
      this.pictures.splice(this.pictures.indexOf(img), 1);
    },
    prevMainPhoto(img) {
      this.pictures.unshift(this.mainPicture);
      this.mainPicture = img;
      this.pictures.splice(this.pictures.indexOf(img), 1);
    },
  },
  filters: {
    limitTo: function (value) {
      if (!value) return "";
      return value.substring(0, 480) + "...";
    },
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
  align-items: center;
}
.event {
  color: #1e2843;
  font-size: 20px;
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.1;
  }
  &__heart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin-right: 24px;
    cursor: pointer;
  }
  &__price {
    text-align: right;
    margin-bottom: 6px;
    &-amount {
      font-weight: 600;
      font-size: 24px;
      text-align: right;
      color: #1e2843;
    }
    &-other {
      font-weight: 500;
      line-height: 12px;
      font-size: 12px;
      color: #8f95a1;
    }
  }
  &__info {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    &-type {
      padding: 3px 8px;
      background-color: #4f9cf8;
      color: white;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 0;
      margin-right: 40px;
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }
    &-ratingVidodo {
      margin-right: 40px;
      display: flex;
      align-items: center;
      padding: 3px 7px;
      border: 1px solid #dcdfe7;
      border-radius: 4px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #1e2843;
      img {
        padding-right: 4px;
        border-right: 1px solid #dcdfe7;
        margin-right: 3px;
      }
      &-reviews {
        margin-left: 12px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #8f95a1;
      }
    }
    &-ratingGeneral {
      margin-right: 40px;
      display: flex;
      align-items: center;
      padding: 3px 7px;
      border: 1px solid #dcdfe7;
      border-radius: 4px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #1e2843;
      img {
        padding-right: 2px;
        border-right: 1px solid #dcdfe7;
        margin-right: 3px;
      }
      &-reviews {
        margin-left: 12px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #8f95a1;
      }
    }
    &-location {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      &-poi {
        margin: auto;
      }
      &-name {
        margin-left: 7px;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: $light-blue-two;
      }
    }
  }
  &__photo {
    margin-top: 30px;
    &-main {
      position: relative;
      img {
        max-width: 72vw;
        width: 970px;
        height: 401px;
        border-radius: 12px;
      }
      &-controls {
        &-next {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 24px;
          height: 24px;
          right: 17px;
          top: 200px;
          z-index: 2;
          background: #ffffff;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          cursor: pointer;
          svg {
            width: 4.2px;
            height: 8.4px;
          }
        }
        &-prev {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 24px;
          height: 24px;
          left: 17px;
          top: 200px;
          z-index: 2;
          background: #ffffff;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          cursor: pointer;
          svg {
            width: 4.2px;
            height: 8.4px;
          }
        }
      }
    }
    &-others {
      display: flex;
      flex-direction: column;
      height: 401px;
      justify-content: space-between;
      &-picture {
        position: relative;
        img {
          // margin: 11px 10px;
          width: 150px;
          height: 70.71px;
          border-radius: 8px;
        }
      }
      &-onhover {
        width: 150px;
        height: 70.71px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: $primary;
        border-radius: 8px;
        opacity: 0;
        transition: 0.3s;
        cursor: pointer;
        svg {
          position: absolute;
          top: 23px;
          left: 63px;
          z-index: 2;
        }
      }
      &-onhover:hover {
        opacity: 0.8;
      }
    }
  }
  &__shortdesc {
    margin-top: 40px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #1e2843;
  }
  &__about {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-item {
      margin-top: 25px;
      flex-basis: 33%;
      display: flex;
      justify-content: start;
      align-items: flex-start;
      &-desc {
        margin-top: 3px;
        margin-left: 11px;
        &-title {
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          margin-bottom: 6px;
        }
        &-text {
          width: 188px;
          font-weight: 500;
          font-size: 14px;
          line-height: 140%;
          color: #565E72;
        }
      }
    }
  }
  &__highlights {
    margin-top: 25px;
    margin-bottom: 35px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        list-style-type: none;
        margin-bottom: 6px;
      }
      li:before {
        width: 10px;
        color: $light-blue-two;
        content: "•";
        font-weight: 700;
        font-size: 28px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__fulldesc {
    margin-top: 40px;
    position: relative;
    transition: 0.2s ease;
    h1{
      margin-bottom: 28px;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
    }
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 16px;
      font-size: 20px;
      line-height: 32px;
      text-align: justify;
    }
    &-control {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      background: #ffffff;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      cursor: pointer;
    }
  }
  &__included {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        list-style-type: none;
        padding: 6px 0;
      }
      li:before {
        width: 10px;
        color: $secondary;
        content: "•";
        font-weight: 700;
        font-size: 28px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__notincluded {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        list-style-type: none;
        padding: 6px 0;
      }
      li:before {
        width: 10px;
        color: $primary;
        content: "•";
        font-weight: 700;
        font-size: 28px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__importantInfo {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        list-style-type: none;
        padding: 6px 0;
      }
      li:before {
        width: 10px;
        color: $primary;
        content: "•";
        font-weight: 700;
        font-size: 28px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__covidInfo {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;

      &-measures {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        ul {
          list-style-position: inside;
        }
        li {
          font-weight: 500;
          font-size: 20px;
          line-height: 26px;
          list-style-type: none;
          padding: 6px 0;
        }
        li:before {
          width: 10px;
          color: $secondary;
          content: "•";
          font-weight: 700;
          font-size: 28px;
          padding-right: 12px;
          vertical-align: middle;
        }
      }
      &-demands {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        ul {
          list-style-position: inside;
        }
        li {
          font-weight: 500;
          font-size: 20px;
          line-height: 26px;
          list-style-type: none;
          padding: 6px 0;
        }
        li:before {
          width: 10px;
          color: $primary;
          content: "•";
          font-weight: 700;
          font-size: 28px;
          padding-right: 12px;
          vertical-align: middle;
        }
      }
    }
  }
  &__meetingPoint {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
    }
    &-button{
      margin-top: 38px;
    }
  }
  &__rate-reviews{
    margin-top: 74px;
    &-title{
      font-weight: 600;
      font-size: 36px;
      line-height: 43px;
    }
    &-raiting{
      margin-top: 32px;
      display: flex;
      justify-content: space-between;
      &-vido{
        display: flex;
        position: relative;
        width: 141px;
        height: 140px;
        background: #FF5134;
        border-radius: 12px;
        &__header{
          padding: 10px 61px 4px 16px;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: white;
        }
        &__content{
          padding: 9px;
          width: 139px;
          height: 100px;
          position: absolute;
          left: 1px;
          bottom: 1px;
          background: #FFFFFF;
          border: 1px solid #FF5134;
          box-sizing: border-box;
          border-radius: 12px;
          &-raiting{
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 28px;
            line-height: 33px;
            img{
              margin-right: 13px;
            }
          }
          &-star{
            margin-top: 10px;
            display: flex;
            justify-content: center;
            img{
              &:not(:last-child){
                margin-right: 7px;
              }
            }
          }
          &-reviews{
            text-align: center;
            font-size: 12px;
            line-height: 14px;
            margin-top: 8px;
          }
        }
        &__stars{
          margin-left: 36px;
          ul{
            li{
              display: flex;
              align-items: center;
              p{
                text-align: center;
                width: 15px;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
              }
              img{
                margin-left: 5px;
              }
              .star-line{
                margin-left: 11px;
                margin-right: 16px;
                width: 425px;
                height: 12px;
                background: #E5E7EC;
                border-radius: 3px;
              }
              &:not(:last-child){
                margin-bottom: 11px;
              }
            }
          }
        }
      }
      &-average{
        display: flex;
        position: relative;
        width: 293px;
        height: 140px;
        background: #00A1FF;
        border-radius: 12px;
        &__header{
          padding: 10px 172px 4px 21px;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: white;
        }
        &__content{
          padding: 14px 20px;
          width: 291px;
          height: 100px;
          position: absolute;
          left: 1px;
          bottom: 1px;
          background: #FFFFFF;
          border: 1px solid #00A1FF;
          box-sizing: border-box;
          border-radius: 12px;
          &-description{
            width: 125px;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #1E2843;
          }
          &-main{
            margin-left: 11px;
            &-raiting{ 
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 28px;
            line-height: 33px;
              img{
                margin-right: 13px;
              }
            }
            &-star{
              margin-top: 4px;
              display: flex;
              justify-content: center;
              img{
                &:not(:last-child){
                  margin-right: 7px;
                }
              }
            }
            &-reviews{
              text-align: center;
              font-size: 12px;
              line-height: 14px;
              margin-top: 8px;
            }
          }
        }
      }
    }
    &-review{
      margin-top: 65px;
      &__header{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #EAEDF3;
        padding-bottom: 25px;
        &__items{
          display: flex;
          &-item{
            cursor: pointer;
            height: 40px;
            padding: 9px 15px;
            background: #FFFFFF;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            &:not(:last-child){
              margin-right: 12px;
            }
            &.item-active{
              border: 1px solid #FF5134;
              color: #FF5134;
            }
          }
        }
        &__sorting{
          span{
            margin-right: 16px;
          }
        }
      }
      &-content{
        &-comment{
          display: flex;
          margin-top: 40px;
          border-bottom: 1px solid #EAEDF3;
          padding-bottom: 20px;
          &__photo{
            margin-right: 2px;
            display: flex;
            justify-content: center;
            min-width: 80px;
            min-height: 80px;
            width: 80px;
            height: 80px;
            background: #EAEDF3;
            border-radius: 100px;
          }
          &__raiting{
            width: 122px;
            margin-left: 23px;
            &-star{
              display: flex;
              margin-bottom: 7px;
              img{
                &:not(:last-child){
                  margin-right: 3px;
                }
              }
            }
            &-name{
              font-weight: 600;
              font-size: 20px;
              line-height: 26px;
            }
            &-date{
              margin-top: 14px;
              width: 120px;
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
            }
          }
          &__text{
            margin-left: 46px;
            font-weight: 500;
            font-size: 20px;
            line-height: 150%;
            a{
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
              color: $light-blue-two;
            }
          }
        }
        &-button{
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }
      }
    }
  }
}
</style>