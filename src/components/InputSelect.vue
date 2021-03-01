<template>
    <div class="select__input select__country" v-if="country">
        <div class="select-lang">
            <div class="select__input__controls-language">
            <div class="select__input__controls-language-preview" @click="expandOpen">
                <div class="select__input__controls-language-preview-text">
                <label>Country *</label>
                {{ previewLanguage }}
                </div>
                <div class="select__input__controls-preview-btn">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L7 7L13 1" stroke="#8F93A1" stroke-width="1.5" />
                </svg>
                </div>
            </div>
            </div>
            <hr v-if="isOpen" />
            <transition name="select__inputFade">
                <div v-if="isOpen" class="select__input__controls-language-expand">
                    <div
                        v-for="(v, k) in languages"
                        :key="k"
                        class="select__input__controls-language-expand-item"
                        :class="{ active: v.isActive }"
                        @click="changeActiveLanguage(v)"
                    >
                        {{ v.title }}
                    </div>
                </div>
            </transition>
        </div>
    </div>

    <div class="select__input select__profileCountry" v-else-if="profileCountry">
        <div class="select-lang">
            <div class="select__input__controls-language">
            <div class="select__input__controls-language-preview" @click="expandOpen">
                <div class="select__input__controls-language-preview-text">
                {{ previewLanguage }}
                </div>
            </div>
            </div>
            <hr v-if="isOpen" />
            <transition name="select__inputFade">
                <div v-if="isOpen" class="select__input__controls-language-expand">
                    <div
                        v-for="(v, k) in languages"
                        :key="k"
                        class="select__input__controls-language-expand-item"
                        :class="{ active: v.isActive }"
                        @click="changeActiveLanguage(v)"
                    >
                        {{ v.title }}
                    </div>
                </div>
            </transition>
        </div>
    </div>

    <div class="select__input select__cardMonth" v-else-if="cardMonth">
        <div class="select-lang">
            <div class="select__input__controls-language">
            <div class="select__input__controls-language-preview" @click="expandOpen">
                <div v-if="previewMonth != 'Month'" class="select__input__controls-language-preview-text">
                  <label >Month</label>
                  {{ previewMonth }}
                </div>
                <div v-else class="not-active-select">
                  <label >Month</label>
                  {{ previewMonth }}
                </div>
                <div class="select__input__controls-preview-btn">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L7 7L13 1" stroke="#8F93A1" stroke-width="1.5" />
                </svg>
                </div>
            </div>
            </div>
            <transition name="select__inputFade" class="select__expand">
                <div v-if="isOpen" class="select__input__controls-language-expand">
                    <div
                        v-for="(v, k) in month"
                        :key="k"
                        class="select__input__controls-language-expand-item"
                        :class="{ active: v.isActive }"
                        @click="changeActiveMonth(v)"
                    >
                        {{ v.title }}
                    </div>
                </div>
            </transition>
        </div>
    </div>

    <div class="select__input select__cardMonth" v-else-if="cardYears">
        <div class="select-lang">
            <div class="select__input__controls-language">
            <div class="select__input__controls-language-preview" @click="expandOpen">
                <div v-if="previewYears != 'Years'" class="select__input__controls-language-preview-text">
                  <label >Year</label>
                  {{ previewYears }}
                </div>
                <div v-else class="not-active-select">
                  <label >Year</label>
                  {{ previewYears }}
                </div>
                <div class="select__input__controls-preview-btn">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1L7 7L13 1" stroke="#8F93A1" stroke-width="1.5" />
                </svg>
                </div>
            </div>
            </div>
            <transition name="select__inputFade" class="select__expand">
                <div v-if="isOpen" class="select__input__controls-language-expand">
                    <div
                        v-for="(v, k) in years"
                        :key="k"
                        class="select__input__controls-language-expand-item"
                        :class="{ active: v.isActive }"
                        @click="changeActiveYears(v)"
                    >
                        {{ v.title }}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    country: Boolean,
    profileCountry: Boolean,
    cardMonth: Boolean,
    cardYears: Boolean,
  },
  data() {
    return {
      isChecked: false,
      isOpen: false,
      languages: [
        {
          title: "English",
          isActive: true,
        },
        {
          title: "German",
          isActive: false,
        },
        {
          title: "French",
          isActive: false,
        },
        {
          title: "Russian",
          isActive: false,
        },
        {
          title: "Polish",
          isActive: false,
        },
      ],
      month: [
        {
          title: "01",
          isActive: true,
        },
        {
          title: "02",
          isActive: false,
        },
        {
          title: "03",
          isActive: false,
        },
        {
          title: "04",
          isActive: false,
        },
        {
          title: "05",
          isActive: false,
        },
        {
          title: "06",
          isActive: false,
        },
        {
          title: "07",
          isActive: false,
        },
        {
          title: "08",
          isActive: false,
        },
        {
          title: "09",
          isActive: false,
        },
        {
          title: "10",
          isActive: false,
        },
        {
          title: "11",
          isActive: false,
        },
        {
          title: "12",
          isActive: false,
        },
      ],
      years: [
        {
          title: "2032",
          isActive: true,
        },
        {
          title: "2031",
          isActive: false,
        },
        {
          title: "2030",
          isActive: false,
        },
        {
          title: "2029",
          isActive: false,
        },
        {
          title: "2028",
          isActive: false,
        },
        {
          title: "2027",
          isActive: false,
        },
        {
          title: "2026",
          isActive: false,
        },
        {
          title: "2025",
          isActive: false,
        },
        {
          title: "2024",
          isActive: false,
        },
        {
          title: "2023",
          isActive: false,
        },
        {
          title: "2022",
          isActive: false,
        },
        {
          title: "2021",
          isActive: false,
        },
      ],
      previewLanguage: "",
      previewMonth: "Month",
      previewYears: "Years"
    };
  },
  methods: {
    expandOpen() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.previewMonth = '';
        this.previewYears = '';
      }
    },
    changeActiveLanguage(item) {
      this.languages.forEach((item) => {
        item.isActive = false;
      });
      item.isActive = true;
      this.previewLanguage = item.title;
    },
    changeActiveMonth(item) {
      this.month.forEach((item) => {
        item.isActive = false;
      });
      item.isActive = true;
      this.previewMonth = item.title;
      this.isOpen = false;
    },
    changeActiveYears(item) {
      this.years.forEach((item) => {
        item.isActive = false;
      });
      item.isActive = true;
      this.previewYears = item.title;
      this.isOpen = false;
    },
  },
  mounted() {
    this.previewLanguage = this.languages[0].title;
  },
};
</script>

<style lang="scss">
.select__input {
    position: relative;
    margin-bottom: 15px;
    width: 360px;
    border: 1px solid #DCDFE7;
    background: #FFFFFF;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    &__controls {
        width: 360px;
        &-language-preview-text{
            padding: 18px 16px 7px 16px;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            height: 45px;
            label{
                position: absolute;
                left: 16px;
                font-weight: 500;
                color: #B1B6C1;
                font-size: 10px;
                top: 4px;
                cursor: text;
                transition: all 0.3s;
                line-height: 12px;
            }
        }
        &-preview-btn{
            position: absolute;
            width: 20px;
            height: 20px;
            top: 18px;
            right: 12px;
        }
        &-language-expand {
            overflow: auto;
            height: 210px;
            &-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 16px;
            cursor: pointer;
            &-text {
                display: flex;
                align-items: center;
                font-size: 14px;
                line-height: 16px;
                &-title {
                padding-right: 3px;
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                }
            }
            &-control {
                display: flex;
                align-items: center;
                &-value {
                width: 20px;
                text-align: center;
                }
            }
            }
            &-item:hover {
            background-color: #d5e1e6;
            border-radius: 12px;
            }
      }
    }
    hr{
        position: absolute;
        top: 46px;
        left: 0;
        width: 100%;
        height: 2px;
        border: 1px solid #DCDFE7;
    }
}

.select__profileCountry{
  .select__input__controls-language-preview-text{
    padding: 12px 16px;
  }
  hr{
        position: absolute;
        top: 44px;
        left: 0;
        width: 100%;
        height: 2px;
        border: 1px solid #DCDFE7;
    }
}

.select__cardMonth{
  width: 115px;
  height: 48px;
  .select__input__controls-language-expand{
    border: 1px solid #DCDFE7;
    background: #FFFFFF;
    border-radius: 12px;
    margin-top: 2px;
  }
}

.not-active-select{
    position: absolute;
    padding-left: 18px;
    font-weight: 500;
    color: #B1B6C1;
    font-size: 16px;
    top: 10px;
    left: 0;
    cursor: text;
  label{
    display: none;
  }
}

</style>