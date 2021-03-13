<template>
    <div class="cookie-manage" v-if="cookie">
        <div class="row cookie-row justify-between">
            <div class="text">
                We use cookies to tailor content, measure advertising, 
                and provide a safer experience on our site. To learn 
                more or manage your settings, go to Manage cookies.
            </div>
            <div class="buttons">
                <div class="button-default" @click="OpenCookiePrivacy">
                    <btn class="btn_defoult">
                        Manage Cookies
                    </btn>
                </div>
                <div class="button-cookie" @click="closeCookie">
                    <btn class="btn_cookie">
                        OK
                    </btn>
                </div>
            </div>
        </div>
    </div>

  <div class="cookie" v-else-if="cookiePrivacy">
      <div class="cookie-wrapper">
          <div class="cookie-content">
            <div class="cookie-content__title">
                Privacy Preference Centre
            </div>
            <div class="cookie-content__close" @click="closeCookie">
                <icon name="icon_close"/>
            </div>
            <div class="row justify-between">
                <div class="cookie-content__slidebar">
                    <div class="cookie-content__slidebar-item cookie-active" @click="OpenCookiePrivacy">
                        Your Privacy
                    </div>
                    <div class="cookie-content__mobile-description">
                        When you visit any website, it may store or 
                        retrieve information on your browser, mostly 
                        in the form of cookies. This information might 
                        be about you, your preferences or your device 
                        and is mostly used to make the site work as you 
                        expect it to. The information does not usually 
                        directly identify you, but it can give you a more 
                        personalised web experience. Because we respect 
                        your right to privacy, you can choose not to allow 
                        some types of cookies. Click on the different category 
                        headings to find out more and change our default settings. 
                        However, blocking some types of cookies may impact your 
                        experience of the site and the services we are able to offer.
                        <br>
                        <a>More information</a>
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieStrictly">
                        Strictly Necessary Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePerformance">
                        Performance Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieTargeting">
                        Targeting Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieFunctional">
                        Functional Cookies
                    </div>
                </div>
                <div class="cookie-content__description">
                    <div class="cookie-content__description-title">
                        Your Privacy
                    </div>
                    <div class="cookie-content__description-content">
                        When you visit any website, it may store or 
                        retrieve information on your browser, mostly 
                        in the form of cookies. This information might 
                        be about you, your preferences or your device 
                        and is mostly used to make the site work as you 
                        expect it to. The information does not usually 
                        directly identify you, but it can give you a more 
                        personalised web experience. Because we respect 
                        your right to privacy, you can choose not to allow 
                        some types of cookies. Click on the different category 
                        headings to find out more and change our default settings. 
                        However, blocking some types of cookies may impact your 
                        experience of the site and the services we are able to offer.
                        <br>
                        <a>More information</a>
                    </div>
                    <div class="cookie-content__description-buttons">
                        <div class="cookie-content__description-buttons-default" @click="acceptSettings" v-if="cookieChange">
                            <btn class="btn_defoult" >
                                Allow All
                            </btn>
                        </div>
                        <div class="cookie-content__description-buttons-cookie" @click="closeCookie">
                            <btn class="btn_cookie" >
                                Confirm My Choices
                            </btn>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>

  <div class="cookie" v-else-if="cookieStrictly">
      <div class="cookie-wrapper">
          <div class="cookie-content">
            <div class="cookie-content__title">
                Privacy Preference Centre
            </div>
            <div class="cookie-content__close" @click="closeCookie">
                <icon name="icon_close"/>
            </div>
            <div class="row justify-between">
                <div class="cookie-content__slidebar">
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePrivacy">
                        Your Privacy
                    </div>
                    <div class="cookie-content__slidebar-item cookie-active" @click="OpenCookieStrictly">
                        Strictly Necessary Cookies
                    </div>
                    <div class="cookie-content__mobile-description">
                        These cookies are necessary for the website to function 
                        and cannot be switched off in our systems. They are 
                        usually only set in response to actions made by you 
                        which amount to a request for services, such as setting 
                        your privacy preferences, logging in or filling in forms. 
                        You can set your browser to block or alert you about these 
                        cookies, but some parts of the site will not then work. 
                        These cookies do not store any personally identifiable information.
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePerformance">
                        Performance Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieTargeting">
                        Targeting Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieFunctional">
                        Functional Cookies
                    </div>
                </div>
                <div class="cookie-content__description">
                    <div class="row cookie-row">
                        <div class="cookie-content__description-title">
                            Strictly Necessary Cookies
                        </div>
                        <div class="cookie-content__description-active">
                            Always Active
                        </div>
                    </div>
                    <div class="cookie-content__description-content">
                        These cookies are necessary for the website to function 
                        and cannot be switched off in our systems. They are 
                        usually only set in response to actions made by you 
                        which amount to a request for services, such as setting 
                        your privacy preferences, logging in or filling in forms. 
                        You can set your browser to block or alert you about these 
                        cookies, but some parts of the site will not then work. 
                        These cookies do not store any personally identifiable information.
                    </div>
                    <div class="cookie-content__description-buttons">
                        <div class="cookie-content__description-buttons-default" @click="acceptSettings" v-if="cookieChange">
                            <btn class="btn_defoult" >
                                Allow All
                            </btn>
                        </div>
                        <div class="cookie-content__description-buttons-cookie" @click="closeCookie">
                            <btn class="btn_cookie" >
                                Confirm My Choices
                            </btn>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>

  <div class="cookie" v-else-if="cookiePerformance">
      <div class="cookie-wrapper">
          <div class="cookie-content">
            <div class="cookie-content__title">
                Privacy Preference Centre
            </div>
            <div class="cookie-content__close" @click="closeCookie">
                <icon name="icon_close"/>
            </div>
            <div class="row justify-between">
                <div class="cookie-content__slidebar">
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePrivacy">
                        Your Privacy
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieStrictly">
                        Strictly Necessary Cookies
                    </div>
                    <div class="cookie-content__slidebar-item cookie-active" @click="OpenCookiePerformance">
                        Performance Cookies
                    </div>
                    <div class="cookie-content__mobile-description">
                        These cookies allow us to count visits and traffic 
                        sources, so we can measure and improve the performance 
                        of our site. They help us know which pages are the most 
                        and least popular and see how visitors move around the site. 
                        All information these cookies collect is aggregated and 
                        therefore anonymous. If you do not allow these cookies, 
                        we will not know when you have visited our site.
                        <br>
                        <a>More information</a>
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieTargeting">
                        Targeting Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieFunctional">
                        Functional Cookies
                    </div>
                </div>
                <div class="cookie-content__description">
                    <div class="row cookie-row">
                        <div class="cookie-content__description-title">
                            Performance Cookies
                        </div>
                        <div class="slider" @click="cookieChange = true">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="cookie-content__description-content">
                        These cookies allow us to count visits and traffic 
                        sources, so we can measure and improve the performance 
                        of our site. They help us know which pages are the most 
                        and least popular and see how visitors move around the site. 
                        All information these cookies collect is aggregated and 
                        therefore anonymous. If you do not allow these cookies, 
                        we will not know when you have visited our site.
                        <br>
                        <a>Cookies details</a>
                    </div>
                    <div class="cookie-content__description-buttons">
                        <div class="cookie-content__description-buttons-default" @click="acceptSettings" v-if="cookieChange">
                            <btn class="btn_defoult" >
                                Allow All
                            </btn>
                        </div>
                        <div class="cookie-content__description-buttons-cookie" @click="closeCookie">
                            <btn class="btn_cookie" >
                                Confirm My Choices
                            </btn>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>

  <div class="cookie" v-else-if="cookieTargeting">
      <div class="cookie-wrapper">
          <div class="cookie-content">
            <div class="cookie-content__title">
                Privacy Preference Centre
            </div>
            <div class="cookie-content__close" @click="closeCookie">
                <icon name="icon_close"/>
            </div>
            <div class="row justify-between">
                <div class="cookie-content__slidebar">
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePrivacy">
                        Your Privacy
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieStrictly">
                        Strictly Necessary Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePerformance">
                        Performance Cookies
                    </div>
                    <div class="cookie-content__slidebar-item cookie-active" @click="OpenCookieTargeting">
                        Targeting Cookies
                    </div>
                    <div class="cookie-content__mobile-description">
                        These cookies may be set through our site by our 
                        advertising partners. They may be used by those 
                        companies to build a profile of your interests and 
                        show you relevant adverts on other sites. They do 
                        not store directly personal information, but are 
                        based on uniquely identifying your browser and 
                        internet device. If you do not allow these cookies, 
                        you will experience less targeted advertising.
                        <br>
                        <a>Cookies details</a>
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieFunctional">
                        Functional Cookies
                    </div>
                </div>
                <div class="cookie-content__description">
                    <div class="row cookie-row">
                        <div class="cookie-content__description-title">
                            Targeting Cookies
                        </div>
                        <div class="slider" @click="cookieChange = true">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="cookie-content__description-content">
                        These cookies may be set through our site by our 
                        advertising partners. They may be used by those 
                        companies to build a profile of your interests and 
                        show you relevant adverts on other sites. They do 
                        not store directly personal information, but are 
                        based on uniquely identifying your browser and 
                        internet device. If you do not allow these cookies, 
                        you will experience less targeted advertising.
                        <br>
                        <a>Cookies details</a>
                    </div>
                    <div class="cookie-content__description-buttons">
                        <div class="cookie-content__description-buttons-default" @click="acceptSettings" v-if="cookieChange">
                            <btn class="btn_defoult" >
                                Allow All
                            </btn>
                        </div>
                        <div class="cookie-content__description-buttons-cookie" @click="closeCookie">
                            <btn class="btn_cookie" >
                                Confirm My Choices
                            </btn>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>

  <div class="cookie" v-else-if="cookieFunctional">
      <div class="cookie-wrapper">
          <div class="cookie-content">
            <div class="cookie-content__title">
                Privacy Preference Centre
            </div>
            <div class="cookie-content__close" @click="closeCookie">
                <icon name="icon_close"/>
            </div>
            <div class="row justify-between">
                <div class="cookie-content__slidebar">
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePrivacy">
                        Your Privacy
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieStrictly">
                        Strictly Necessary Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookiePerformance">
                        Performance Cookies
                    </div>
                    <div class="cookie-content__slidebar-item" @click="OpenCookieTargeting">
                        Targeting Cookies
                    </div>
                    <div class="cookie-content__slidebar-item cookie-active" @click="OpenCookieFunctional">
                        Functional Cookies
                    </div>
                    <div class="cookie-content__mobile-description">
                        These cookies enable the website to provide 
                        enhanced functionality and personalisation. 
                        They may be set by us or by third-party providers
                        whose services we have added to our pages. 
                        If you do not allow these cookies then some 
                        or all of these services may not function properly.
                        <br>
                        <a>Cookies details</a>
                    </div>
                </div>
                <div class="cookie-content__description">
                    <div class="row cookie-row">
                        <div class="cookie-content__description-title">
                            Functional Cookies
                        </div>
                        <div class="slider" @click="cookieChange = true">
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="cookie-content__description-content">
                        These cookies enable the website to provide 
                        enhanced functionality and personalisation. 
                        They may be set by us or by third-party providers
                        whose services we have added to our pages. 
                        If you do not allow these cookies then some 
                        or all of these services may not function properly.
                        <br>
                        <a>Cookies details</a>
                    </div>
                    <div class="cookie-content__description-buttons">
                        <div class="cookie-content__description-buttons-default" @click="acceptSettings" v-if="cookieChange">
                            <btn class="btn_defoult" >
                                Allow All
                            </btn>
                        </div>
                        <div class="cookie-content__description-buttons-cookie" @click="closeCookie">
                            <btn class="btn_cookie" >
                                Confirm My Choices
                            </btn>
                        </div>
                    </div>
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
  name: 'Cookie',
  data: () => ({
    cookie: true,
    cookiePrivacy: false,
    cookieStrictly: false,
    cookiePerformance: false,
    cookieTargeting: false,
    cookieFunctional: false,
    cookieChange: false,
  }),
  methods: {
    closeCookie () {
        this.cookie = false
        this.cookiePrivacy = false
        this.cookieStrictly = false
        this.cookiePerformance = false
        this.cookieTargeting = false
        this.cookieFunctional = false
    },
    OpenCookiePrivacy () {
        this.cookie = false
        this.cookiePrivacy = true
        this.cookieStrictly = false
        this.cookiePerformance = false
        this.cookieTargeting = false
        this.cookieFunctional = false
    },
    OpenCookieStrictly () {
        this.cookiePrivacy = false
        this.cookieStrictly = true
        this.cookiePerformance = false
        this.cookieTargeting = false
        this.cookieFunctional = false
    },
    OpenCookiePerformance () {
        this.cookiePrivacy = false
        this.cookieStrictly = false
        this.cookiePerformance = true
        this.cookieTargeting = false
        this.cookieFunctional = false
    },
    OpenCookieTargeting () {
        this.cookiePrivacy = false
        this.cookieStrictly = false
        this.cookiePerformance = false
        this.cookieTargeting = true
        this.cookieFunctional = false
    },
    OpenCookieFunctional () {
        this.cookiePrivacy = false
        this.cookieStrictly = false
        this.cookiePerformance = false
        this.cookieTargeting = false
        this.cookieFunctional = true
    },
    acceptSettings () {
        this.closeCookie();
    }
  },
  components: {
      Icon,
      Btn
  }
}

</script>

<style lang="scss">
.cookie {
    position: relative;
    min-width: 320px;
    max-width: 416px;
    margin: 10px;
    padding: 40px 30px;
    border-radius: 20px;
    background-color: $white;

    &-manage{
        z-index: 10;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100px;
        padding: 25px 175px !important;
        background: white;
        .row{
            justify-content: center;
        }
        .text{
            width: 640px;
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            margin-right: 81px;
        }
        .buttons{
            display: flex;
            .btn_defoult{
                margin-right: 30px;
                height: 50px;
                width: 200px;
            }
            .btn_cookie{
                width: 140px;
            }
        }
    }

    .cookie-row{
        align-items: center;
        justify-content: space-between;
    }

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
        width: 900px;
        height: 650px;
        background: white;
        border-radius: 12px;
        padding: 50px 70px 65px 0;

        &__title{
            margin-left: 70px;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            margin-bottom: 50px;
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
        }

        &__slidebar{
            width: 37%;
            &-item{
                cursor: pointer;
                height: 40px;
                align-items: center;
                padding-top: 7px;
                padding-left: 25px;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                &.cookie-active{
                    padding-left: 15px;
                    border-left: 10px solid #FF7C66;
                    border-radius: 2px;
                }
            }
        }

        &__description{
            width: 57%;
            &-title{
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
            }
            &-active{
                color: #FF7C66;
            }
            &-content{
                margin-top: 26px;
                margin-bottom: 23px;
                font-weight: 500;
                font-size: 16px;
                line-height: 26px;
                a{
                    cursor: pointer;
                    color: $light-blue-two;
                }
            }
            &-buttons{
                position: absolute;
                display: flex;
                bottom: 62px;
                right: 60px;
                &-cookie{
                    .btn_cookie{
                        width: 223px;
                    }
                }
                &-default{
                    .btn_defoult{
                        margin-right: 30px;
                        height: 50px;
                        width: 137px;
                    }
                }
            }
            .slider{
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 45px;
                    height: 10px;
                    }

                    .switch input { 
                    opacity: 0;
                    width: 0;
                    height: 0;
                    }

                    .slider {
                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: #ccc;
                        -webkit-transition: .4s;
                        transition: .4s;
                        &::before{
                            position: absolute;
                            content: "";
                            height: 22px;
                            width: 22px;
                            left: -2px;
                            bottom: -6px;
                            background: #717686;
                            -webkit-transition: .4s;
                            transition: .4s;
                        }
                    }

                    input:checked + .slider {
                    background-color: #ff7d663b;
                    }

                    input:focus + .slider {
                    box-shadow: 0 0 1px #FF7C66;
                    }

                    input:checked + .slider:before {
                        -webkit-transform: translateX(26px);
                        -ms-transform: translateX(26px);
                        transform: translateX(26px);
                        background: linear-gradient(180deg, #FF7C66 0%, #FF5134 167.86%);
                    }

                    /* Rounded sliders */
                    .slider.round {
                    border-radius: 34px;
                    }

                    .slider.round:before {
                    border-radius: 50%;
                    }
            }
        }

        &__mobile-description{
            display: none;
            padding-left: 25px;
            padding-right: 16px;
            overflow: scroll;
            max-height: 200px;
            margin-top: 10px;
            font-weight: 500;
            font-size: 14px;
            line-height: 140%;
            a{
                color: $light-blue-two; 
            }
        }
    }
}

// Mobile version

@media(max-width: 992px){
    .cookie{
        &-wrapper{
            z-index: 10000;
        }
        &-content{
            border-radius: 0;
            overflow: scroll;
            padding: 0;
            width: 100%;
            height: 100%;

            &__title{
                margin-top: 15px;
                margin-left: 16px;
                font-weight: bold;
                font-size: 22px;
                line-height: 130%;
            }

            &__close {
                display: none;
            }

            &__slidebar{
                width: 100%;
                &-item{
                    cursor: pointer;
                    height: 40px;
                    align-items: center;
                    padding-top: 7px;
                    padding-left: 25px;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    &.cookie-active{
                        padding-left: 15px;
                        border-left: 10px solid #FF7C66;
                        border-radius: 2px;
                    }
                }
            }

            &__description{
                &-title{
                    display: none;
                }
                &-content{
                    display: none;
                }
                &-button{
                    text-align: right;
                    position: absolute;
                    width: 100%;
                    bottom: 16px;
                    text-align: right;
                    padding: 0 16px;
                    .btn{
                        width: 100%;
                    }
                }
            }

            &__mobile-description{
                display: block;
            }
        }
    }
}
</style>