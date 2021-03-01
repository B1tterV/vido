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
        </div>
      </div>
      <div class="basket-card__price">
        <button>
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

export default {
  name: 'BasketCard',
  props: {
    data: Object
  },
  components: {
    IconBase
  }
}
</script>


<style lang="scss">
  .basket-card {
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
      margin: 0 0 0 106px;
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
        margin-top: 61px;
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
  }
</style>