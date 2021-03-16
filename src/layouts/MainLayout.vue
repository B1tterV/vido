<template>
  <div>
    <header class="header">
      <div class="header-content">
        <router-link to="/" tag="div" class="header__logo">
          <img aria-hidden="true" src="@/assets/images/svg/logo.svg" alt="vidodo"/>
        </router-link>

        <div class="header__control">
          <div class="header__control-item">
            <img src="@/assets/images/svg/lanzarote_icon.svg" />
            <p>Lanzarote</p>
          </div>
          <div class="header__control-item">
            <img src="@/assets/images/svg/header_language_eng.svg" alt="">
            EN
          </div>
          <div class="header__control-item">
            <span>€</span> EUR
          </div>
        </div>

        <div class="header__links">
          
          <router-link 
            to="/catalog" 
            tag="div" 
            class="header__links-item"
          >
            <icon 
              name="icon icon_catalog" 
            />
            Catalog
          </router-link>

          <div class="header__links-item">
            <icon 
              name="icon icon_help" 
            />
            Help
          </div>

          <router-link 
            to="/favorites"
            tag="div"
            class="header__links-item"
          >
            <icon 
              name="icon icon_favorites" 
            />
            Wishlist
          </router-link>

          <router-link 
            tag="div"
            to="/basket"
            class="header__links-item"
          >
            <icon 
              name="icon icon_basket" 
            />
            Cart
          </router-link>
          
        </div>


        <div v-if="!login" class="header__action" @click="controlStateAuth">
          <btn class="btn_primary btn_singin">
            Sign in
          </btn>
        </div>

        <div 
          v-else 
          class="header__action header__action-item" 
          style="width: 125px !important; margin: 0; display: flex; align-items: center;"
          @click="openAccountMenu"
          v-click-outside="onClickOutside"
        >
            <icon 
              name="icon icon_account" 
            />
            My Account
            <div class="header__action-item-menu" v-if="isOpen">
              <AccountMenu/>
            </div>
        </div>
      </div>

    </header>

    <header class="mob-header header-hide">

      <div class="mob-header__menu">
        <div class="mob-header__menu-burger" @click="burgerOpen">
          <img src="@/assets/images/svg/burger.svg" alt="">
        </div>

        <router-link to="/" tag="div" class="header__logo">
          <img aria-hidden="true" src="@/assets/images/svg/logo.svg" alt="vidodo"/>
        </router-link>
      </div>

      <div class="header__links">
        <div class="header__links-item" @click="mobileSearch">
          <img class="icon" src="@/assets/images/svg/search-header.svg" alt="">
        </div>

        <router-link 
          to="/catalog" 
          tag="div" 
          class="header__links-item"
        >
          <icon 
            name="icon icon_catalog" 
          />
        </router-link>

        <router-link 
          to="/favorites"
          tag="div"
          class="header__links-item"
        >
          <icon 
            name="icon icon_favorites" 
          />
        </router-link>

        <router-link 
          tag="div"
          to="/basket"
          class="header__links-item"
        >
          <icon 
            name="icon icon_basket" 
          />
        </router-link>

      </div>

      <div class="mob-header__burger-window" :class="{'burger-active' : burgerActive}">
        <div class="mob-header__burger-window-header">
          <img src="@/assets/images/burger1.png" alt="" v-if="!login">
          <img src="@/assets/images/burger2.png" alt="" v-if="login">
          <div class="back" @click="burgerClose" v-if="!profileActive">
            <img src="@/assets/images/svg/back.svg" alt="">
          </div>
          <div class="back" @click="ProfileClose" v-if="profileActive">
            <img src="@/assets/images/svg/close-burger.svg" alt="">
          </div>
          <div class="text" v-if="!login">
            <div class="title">Sing in or create an account</div>
            <div class="subtitle">
              For add events to your favorites and have <br>
              access to your reservations from any device
            </div>
          </div>
          <div class="text" v-if="login">
            <div class="title">Hi, Angela</div>
            <div class="subtitle">
              Have a good day!
              <br>
              Promo offer
            </div>
          </div>
        </div>
        <div class="mob-header__burger-window-content">
          <div class="mob-header__burger-window-content__header">
            <div v-if="!login" class="header__action" @click="burgerSignIn">
              <img src="@/assets/images/svg/sign.svg" alt="">
              Sing in
            </div>
            <div class="mob-header__logout" @click="logout" v-if="login">
              <img src="@/assets/images/svg/logout-burger.svg" alt="">
              Logout
            </div>
            <div class="header__control">
              <div class="header__control-item">
                <img src="@/assets/images/svg/lanzarote_icon.svg" />
                <p>Lanzarote</p>
              </div>
            </div>
          </div>
          <div class="mob-header__burger-window-content__content">
            <div class="header__links">
              <div class="header__links-item" @click="burgerClose">
                <router-link
                    to="/orders"
                    tag="div"
                    class="header__links-item"
                >
                   <img src="@/assets/images/svg/orders-burger.svg" alt="">
                    Orders
                </router-link>
              </div>
              <div class="header__links-item" v-if="login" @click="openProfile">
                <img src="@/assets/images/svg/profile-burger.svg" alt="">
                Profile settings
              </div>
              <div class="header__links-item">
                <img src="@/assets/images/svg/lang-burger.svg" alt="">
                Language
                <div class="header__links-item-choice">
                  English
                  <img src="@/assets/images/svg/down-burger.svg" alt="">
                </div>
              </div>
              <div class="header__links-item">
                <img src="@/assets/images/svg/currency-burger.svg" alt="">
                Currency
                <div class="header__links-item-choice">
                  Euro  €
                  <img src="@/assets/images/svg/down-burger.svg" alt="">
                </div>
              </div>
              <div class="header__links-item">
                <img src="@/assets/images/svg/help-burger.svg" alt="">
                Help
              </div>
            </div>
          </div>
        </div>
        <div class="mob-header__burger-window-profile" v-if="profileActive">
            <Profile/>
          </div>
      </div>

      <div class="mob-search" v-if="searchActive">
        <div class="mob-search-input">
          <input-fileds
          search
          placeholder="Search"
          />
        </div>
        <div class="mob-search-wrapper" @click="searchActive = false">

        </div>
      </div>

    </header>

    <auth 
      :stateAuth="auth.state"
      @stateAuth="controlStateAuth"
    />


    <section class="main">
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </section>


    <footer class="footer">
      <div class="footer__wave">
        <svg class="editorial"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          width="100%">
          <defs>
          <path id="gentle-wave"
          d="M-160 44c30 0 
              58-18 88-18s
              58 18 88 18 
              58-18 88-18 
              58 18 88 18
              v44h-352z" />
          </defs>
        <g class="parallax">
        <use xlink:href="#gentle-wave" x="50" y="6" fill="#D1EBFD"/>  
        </g>
      </svg>
      </div>
      <div class="footer__content">
        <div class="container">
        <div class="footer__inner">
          <div class="footer__inner-forclients">
            <div class="footer__inner-forclients-item">Help</div>
            <div class="footer__inner-forclients-item">About Us</div>
            <div class="footer__inner-forclients-item">Blog</div>
            <div class="footer__inner-forclients-item">Contacts</div>
          </div>
          <div class="footer__inner-social-other">
            <div class="footer__inner-social-other-stores">
              <div class="footer__inner-social-other-stores-item">
                <img src="@/../public/imgs/footer/app_store.svg" alt="">
              </div>
              <div class="footer__inner-social-other-stores-item">
                <img src="@/../public/imgs/footer/google_play.svg" alt="">
              </div>
            </div>
            <div class="footer__inner-social">
              <div class="footer__inner-social-other-bottom">
              <div class="footer__inner-social-other-title">
                Share with friends
              </div>
              <div class="footer__inner-social-other-social">
                <div class="footer__inner-social-other-social-item">
                  <img src="@/../public/imgs/footer/facebook_icon.svg" alt="">
                </div>
                <div class="footer__inner-social-other-social-item">
                  <img src="@/../public/imgs/footer/twetter_icon.svg" alt="">
                </div>
                <div class="footer__inner-social-other-social-item">
                  <img src="@/../public/imgs/footer/google_icon.svg" alt="">
                </div>
              </div>
            </div>
            <div class="footer__inner-social-other-join">
              <div class="footer__inner-social-other-join-title">
                Join us
              </div>
              <div class="footer__inner-social-other-join-inner">
                <div class="footer__inner-social-other-join-inner-item">
                  <img src="@/../public/imgs/footer/join_facebook.svg" alt="">
                </div>
                <div class="footer__inner-social-other-join-inner-item">
                  <img src="@/../public/imgs/footer/join_instagram.svg" alt="">
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="footer__inner-paymentmethods">
            <div class="footer__inner-paymentmethods-inner">
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/visa.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/mastercard.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/american.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/paypal.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/apple.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/google.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="footer__info">
          © 2020, Vidodo Guide LLP | <a>Our policy and terms</a>
        </div>
        <div class="footer__guide">
          <div class="footer__guide-title">
            Island guide
          </div>
          <img src="@/../public/imgs/footer/guide.svg" alt="">
        </div>
        <div class="footer__message">
          <img src="@/../public/imgs/footer/message.svg" alt="">
        </div>
      </div>
      </div>
      <div class="footer__bottom-wave">
        <img src="@/assets/images/svg/wave-min.svg" alt="">
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/header.scss'
import Auth from '@/components/Auth'
import viSelect from '@/components/vi-select'
import Btn from '@/components/controls/Btn'
import Icon from '@/components/Icon'
import AccountMenu from '@/components/AccountMenu'
import { mapState } from 'vuex'
import vClickOutside from 'v-click-outside'
import Profile from '@/views/Profile'
import InputFileds from '@/components/controls/InputFileds'
export default {
  name: "main-layout",
  data: () => ({
    isOpen: false,
    burgerActive: false,
    profileActive: false,
    searchActive: false,
    auth: {
      state: false
    },
    selectedLanguage: { value: 0, img: require('@/../public/imgs/header_language_polish.png') },
  }),
  computed: {
    ...mapState({
      login: state => state.auth.auth
    })
  },
  created() {
    this.$store.dispatch('isLogin')
  },
  methods: {
    controlStateAuth (state) {
      this.auth.state = state,
      document.querySelector('body').style.cssText = 'overflow: hidden'
    },
    openAccountMenu(){
      this.isOpen = !this.isOpen;
    },
    onClickOutside (event, el) {
      this.isOpen = false;
    },
    burgerOpen () {
      this.burgerActive = true;
      document.querySelector('body').style.cssText = 'overflow: hidden'
      document.querySelector('mob-header__burger-windo').classList.add('burger-active')
    },
    burgerClose () {
      this.burgerActive = false;
      document.querySelector('body').style.cssText = ''
    },
    burgerSignIn() {
      this.burgerClose();
      this.auth.state = true;
    },
    openProfile() {
      this.profileActive = !this.profileActive
    },
    ProfileClose () {
      this.profileActive = false
    },
    mobileSearch () {
      document.querySelector('body').style.cssText = 'overflow: hidden'
      this.searchActive = !this.searchActive
    },
    logout: function () {
      this.$store.dispatch('logout');
    }
  },
  components: {
    Auth,
    viSelect,
    Btn,
    Icon,
    AccountMenu,
    vClickOutside,
    Profile,
    InputFileds
  },
};
</script>

<style lang="scss">
  .footer{
    position: relative;
    margin-top: 90px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    // .container{
    //   width: 100%;
    //   max-width: initial !important;
    // }
    &__wave{
      margin-bottom: 0px;
      ::selection{background-color: salmon; color: white;}
      .parallax > use{
        animation:move-forever 5s linear infinite;
        &:nth-child(1){animation-delay:-2s;}
        &:nth-child(2){animation-delay:-2s; animation-duration:5s}
        &:nth-child(3){animation-delay:-4s; animation-duration:3s}
      }
      @keyframes move-forever{
        0%{transform: translate(-90px , 0%)}
        100%{transform: translate(85px , 0%)} 
      }
      .editorial {
        display: block;
        width: 100%;
        height: 4em;
        max-height: 100vh;
        margin: 0;
      }
    }
    &__content{
      background: #D1EBFD;
    }
    &__inner{
      padding-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      &-forclients{
        margin-right: 150px;
        &-item{
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
          cursor: pointer;
          &:not(:last-child){
            margin-bottom: 17px;
          }
        }
      }
      
      &-paymentmethods{
        &-title{
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        &-inner{
          width: 235px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          &-item{
            margin-bottom: 17px;
            cursor: pointer;
            width: 33.33%;
          }
        }
      }
      &-social{
        display: flex;
        justify-content: space-between;
        &-other{
        &-stores{
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          &-item:first-child{
            margin-right:18px;
          }
          &-item{
            cursor: pointer;
          }
        }
        &-title{
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        &-social{
          display: flex;
          justify-content: space-between;
          max-width: 150px;
          margin-right: 39px;
          &-item{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            transition: .3s;
            &:not(:last-child){
              margin-right: 8px;
            }
          }
          &-item:hover{
            background: #DCDFE7;
          }
        }
        &-join{
          &-title{
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 10px;
          }
          &-inner{
            display: flex;
            justify-content: space-between;
            max-width: 80px;
            &-item{
              cursor: pointer;
              margin-right: 5px;
            }
          }
        }
      }
      }
    }
    &__info{
      color: #1E2843;
      margin-top: 105px;
      text-align: center;
      padding-bottom: 28px;
      opacity: 0.5;
      a{
        border-bottom: 1px solid #1E2843;
      }
    }
    &__guide{
      z-index: 2;
      position: absolute;
      right: 130px;
      bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 190px;
      &-title{
        font-weight: 700;
        font-size: 24px;
        margin-right: 10px;
      }
    }
    &__message{
      z-index: 2;
      position: absolute;
      right: 15px;
      bottom: 100px;
    }
    &__bottom-wave{
      position: absolute;
      width: 535px;
      bottom: 0;
      right: 0;
      ::selection{background-color: salmon; color: white;}
      .parallax > use{
        animation:move-forever 5s linear infinite;
      }
      @keyframes move-forever{
        0%{transform: translate(-90px , 0%)}
        100%{transform: translate(85px , 0%)} 
      }
      .editorial {
        display: block;
        width: 100%;
        height: 300px;
        max-height: 100vh;
        margin: 0;
      }
    }
  }
  @media (max-width: 1200px){
    .footer{
      &__guide{
        right: 40px;
      }
    }
  }
  @media (max-width: 1024px){
    .footer{
      &__info{
        margin-top: 95px;
        text-align: left;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        opacity: 0.5;
      }
      &__guide{
        right: 144px;
        bottom: 35px;
      }
      &__message{
        bottom: 65px;
        right: 40px;
      }
    }
  }
  @media (max-width: 992px){
    .footer{
      position: relative;
      &__inner{
        padding-top: 160px;
        display: block;
        &-forclients{
          margin: 0;
          text-align: center;
        }
        &-social{
          justify-content: center;
          &-other{
            &-bottom{
              margin-right: 20px;
            }
            &-stores{
              margin-top: 30px;
              justify-content: center;
            }
          }
        }
        &-paymentmethods{
          display: flex;
          justify-content: center;
          margin-top: 31px;
          &-inner{
            margin-bottom: 100px;
          }
        }
      }
      &__guide{
        right: 40px;
        bottom: 20px;
        width: auto;
        &-title{
          width: 34px;
          font-size: 12px;
          line-height: 14px;
        }
      }
      &__info{
        width: 90%;
        bottom: 20px;
        position: absolute;
        opacity: 0.5;
      }
      &__message{
        display: none;
      }
    }
  }
  @media (max-width: 768px){
    .footer{
      &__info{
        bottom: 30px;
        font-size: 11px;
        line-height: 130%;
        width: 150px;
      }
      &__guide{
        bottom: 30px;
      }
    }
  }
  @media (max-width: 576px){
    
  }
</style>