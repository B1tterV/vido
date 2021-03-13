<template>
  <div class="basket-card">
    <div class="row">
      <div class="basket-card__picture">
        <div class="picture">
          <img :src="data.imgUrl" alt="">
        </div>
      </div>
      <div class="basket-card__description">
        <div class="description">
          <div class="description__type">
            {{ data.type }}
          </div>
          <div class="description__title">
            {{ data.title }}
          </div>
          <div class="description__subtitle">
            {{ data.subtitle }}
          </div>
          <div class="description__properties">
            <div class="properties">
              <div class="properties__datetime">
                {{ data.datetime }}
              </div>
              <div class="properties__people">
                {{ data.people }}
              </div>
              <div class="properties__cancel-info">
                <div class="row">
                  <btn class="btn_primary btn_cancel">
                      Free cancelation
                  </btn>
                  <p>
                    Cancel your reservation by 11:00 on 31 August,
                    to receive a full refund
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-del-mobile">
              <btn class="card-del-mobile-button">
                  <img src="@/assets/images/svg/del-mobile.svg" alt="">
              </btn>
          </div>
        </div>
      </div>
      <div class="basket-card__price">
        <button @click="deliteCard">
          <icon-base name="delete"  width="20" height="20" viewBox="0 0 20 20" />
          Delete
        </button>
        <div class="price">
          <div class="price__old">
            {{ data.price.old }}
          </div>
          <div class="price__base">
            {{ data.price.base }}
          </div>
          <div class="price__saving">
            {{ data.price.saving }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from './IconBase'
import Btn from "../components/controls/Btn.vue";

export default {
  name: 'BasketCard',
  isOpen: false,
  props: {
    data: Object
  },
  methods: {
    deliteCard () {
      isOpen = true
    },
  },
  components: {
    IconBase,
    Btn,
  }
}
</script>


<style lang="scss">
  .basket-card {
    position: relative;
    width: 848px;
    padding: 24px 20px 18px 24px;
    background: $white;
    border: 1px solid $gray;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 25px;

    .picture {
      width: 110px;
      height: 110px;
      margin: 0 20px 70px 0;
      border-radius: 11px;
      border: 1px solid $gray;
    }

    .description {
      &__type {
        display: inline;
        background: $yellow;
        border-radius: 4px;
        color: $white;
        font-size: 12px;
        padding: 3px 8px;
        margin-bottom: 4px;
      }

      &__title {
        margin: 4px 0 4px 0;
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        color: $text-primary;
      }

      &__subtitle{
        margin-bottom: 5px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
      }

      .properties {
        &__datetime {
          font-weight: 500;
          font-size: 20px;
          color: $text-primary;
          margin-bottom: 9px;
        }

        &__people {
          margin-bottom: 18px;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }

        &__cancel-info {
          .row {
            align-items: center;
            .btn_cancel{
              height: 30px;
              padding: 7px 21px;
              color: white;
              border-radius: 4px;
              background: #0DB886;
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
            }
            p {
              padding-left: 16px;
              max-width: 325px;
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
              color: #0DB886;
            }
          }
        }
      }
    }

    &__price {
      position: absolute;
      right: 24px;
      button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 12px;
          color: #8F95A1;
          font-size: 14px;
          line-height: 16px;
          background: $white;
          border-radius: 8px;
          outline: none;
          border: 1px solid #D6DAE4;
          width: 91px;
        }
      .price {
        text-align: right;
        margin-top: 53px;
        &__saving {
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          text-align: right;
          color: $primary;
        }

        &__base {
          font-weight: 600;
          font-size: 22px;
          line-height: 26px;
          text-align: right;
          color: $text-primary;
        }
        &__old{
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-align: right;
          text-decoration-line: line-through;
        }
      }
    }

    .card-del-mobile{
        display: none;
        position: absolute;
        right: 12px;
        top: 12px;
        img{
            width: 100%;
        }
        &-button{
            background: white;
            padding: 0;
            width: 24px;
            height: 24px;
            border: 1px solid #D6DAE4;
            box-sizing: border-box;
            border-radius: 4px;
        }
    }
  }

  // Mobile version

  @media (max-width: 1200px){
    .basket-card{
      width: auto;
      position: relative;
      &__price{
        position: absolute;
        right: 22px;
        button{
          position: absolute;
          right: 0;
          font-size: 0;
          width: auto;
          padding: 4px;
        }
      }
      &__description{
        width: 75%;
      }
    }
  }

  @media (max-width: 1024px){
    .basket__card{
      .basket-card{
        &__description{
          .properties{
            &__cancel-info{
              .row{
                .btn_cancel{
                  font-weight: 500;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 992px){
    .main__content{
      .row{
      display: block;
    }
    }
    .container{
      .main__header{
        margin-bottom: 16px;
        .main__title{
          font-weight: bold;
          font-size: 22px;
          line-height: 130%;
        }
      }
      .main__breadcrumbs{
        display: none;
      }
    }
    .basket{
      .main__info-tip{
        padding: 11px;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
      }
      &-card{
        padding: 12px;
        position: relative;
        width: 100%;
        &__picture{
          display: none;
        }
        &__price{
          position: absolute;
          bottom: 55px;
          right: 12px;
          button{
            display: none;
          }
          .price{
            &__old{
              font-size: 12px;
              line-height: 14px;
            }
            &__base{
              font-size: 18px;
              line-height: 21px;
            }
            &__saving{
              font-size: 10px;
              line-height: 12px;
            }
          }
        }
        .card-del-mobile{
          display: block;
        }
        .description{
          &__type{
            display: none;
          }
          &__title{
            margin-top: 0;
            margin-bottom: 4px;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
          }
          &__subtitle{
            margin-bottom: 4px;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
          }
          &__properties{
            .properties{
              &__datetime{
                font-weight: 600;
                font-size: 12px;
                line-height: 14px;
              }
              &__people{
                margin-bottom: 6px;
                width: 150px;
                font-weight: 500;
                font-size: 10px;
                line-height: 120%;
              }
              &__cancel-info{
                .row{
                  display: flex;
                  .btn{
                    height: auto;
                    padding: 3px;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 14px;
                  }
                  p{
                    max-width: inherit;
                    width: 62%;
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 120%;
                  }
                }
              }
            }
          }
        }
      }
      &-gift{
        margin-top: 24px !important;
        .select{
          width: 100%;
        }
      }
      &-sidebar{
        display: none;
      }
    }
  }

  @media (max-width: 576px){
    .basket-card{
      .description{
        &__title{
          max-width: 250px;
        }
      }
    }
  }
</style>