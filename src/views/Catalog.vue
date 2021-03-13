<template>

  <div class="page-section">
    <div class="page-section__header">
      <div>
        <div class="page-breadcrumbs">
          Catalog > Search
        </div>
        <div class="page-title">
          Lanzarote, Canary Islands
        </div>
      </div>
      <div class="page-search">
        <input-fileds
          search
          placeholder="Find something specific"/>
        <btn search>Search</btn>
      </div>
    </div>

    <div class="page-catalog catalog">
      <div class="mobile-sorting">
        <div class="row">
          <div class="mobile-sorting__calendar">
            <img src="@/assets/images/svg/red-calendar.svg" alt="">
            Date
          </div>
          <div class="mobile-sorting__day day-today day-active">
            Today
          </div>
          <div class="mobile-sorting__day day-today">
            Tomorrow
          </div>
        </div>
        <div class="row">
          <div class="mobile-sorting__slidebar" @click="catalogOpen">
            <img src="@/assets/images/svg/mobile-filter.svg" alt="">
          </div>
          <div class="mobile-sorting__events">
            <v-select 
              :items="sortCard" 
              @input="sortTours"
            />  
          </div>
        </div>
      </div>
      
      <!-- category -->
      <div class="catalog-category category">
        <div class="category__item"
          v-for="el in category"
          :key="el"
        >
          <p>{{ el }}</p>
          <img src="@/../public/imgs/wooman.png">
        </div>
      </div>

      <div class="catalog-main">

        <!-- catalog-sidebar -->
        <div class="catalog-sidebar" :class="{'catalog-sidebar-active' : catalogActive}">
          <form ref="form" @submit.prevent="filtersEvents">
            <div class="catalog-sidebar__select-dates">
              <p>When are you traveling?</p>
              <input-fileds
                datepicker
                placeholder="Select Dates"/>
            </div>
            <div class="catalog-sidebar__mobile-select-dates">
              <p>Filters (6)</p>
              <div class="close" @click="catalogClose">
                <img src="@/assets/images/svg/dark-close.svg" alt="">
              </div>
            </div>

            <!-- <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title" >
                Time
              </div>
              <div class="catalog-sidebar__control"
                v-for="el in sidebarFilters.time"
                :key="el.title"
              >
                <checkbox 
                  :value="el.value"
                  @input="filter"
                >
                  <template v-slot:title>
                    {{ el.title }}
                  </template>
                </checkbox>
              </div>
            </div> -->

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Time
                <div class="catalog-sidebar__title-hide sidebar-active">
                  <img src="@/assets/images/svg/arrow.svg" alt="">
                </div>
              </div>
              <div class="catalog-sidebar__control"
                v-for="(el, i) in filters.time.options"
                :key="i"
              >
                <checkbox 
                  @input="filtration({ time: el.value })"
                >
                  <template v-slot:title>
                    {{ el.name }}
                  </template>
                </checkbox>
              </div>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Categories
                <div class="catalog-sidebar__title-hide sidebar-active">
                  <img src="@/assets/images/svg/arrow.svg" alt="">
                </div>
              </div>
              <div class="catalog-sidebar__control"
                v-for="(el, i) in filters.travel.options"
                :key="i"
              >
                <checkbox 
                  @input="filtration({ travel: el.value })"
                >
                  <template v-slot:title>
                    {{ el.name }}
                  </template>
                </checkbox>
              </div>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Duration
                <div class="catalog-sidebar__title-hide sidebar-active">
                  <img src="@/assets/images/svg/arrow.svg" alt="">
                </div>
              </div>
              <div class="page-row">
                <div class="catalog-sidebar__control catalog-sidebar__control_tag"
                  v-for="(el, i) in filters.duration.options"
                  :key="i"
                >
                  <checkbox-tag @input="filtration({ duration: el.value })">
                    {{ el.name }}
                  </checkbox-tag>
                </div>
              </div>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Languages
                <div class="catalog-sidebar__title-hide sidebar-active">
                  <img src="@/assets/images/svg/arrow.svg" alt="">
                </div>
              </div>
              <div class="page-row">
                <div class="catalog-sidebar__control catalog-sidebar__control_tag"
                  v-for="(el, i) in filters.languages.options"
                  :key="i"
                >
                  <checkbox-tag @input="filtration({ languages: el.value })">
                    {{ el.name }}
                  </checkbox-tag>
                </div>
              </div>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Other filters
                <div class="catalog-sidebar__title-hide sidebar-active">
                  <img src="@/assets/images/svg/arrow.svg" alt="">
                </div>
              </div>
              <div class="catalog-sidebar__control"
                v-for="el in sidebarFilters.other"
                :key="el"
              >
                <checkbox 
                  @isChecked="isChecked($event, 'other')"
                >
                  <template v-slot:title>
                    {{ el }}
                  </template>
                </checkbox>
              </div>
            </div>

            <div class="catalog-sidebar__item catalog-sidebar__footer">
              <div class="events__found">
                {{ tours.length }} activities
              </div>

              <div class="reset-btn">
                  <btn sidebarReset>Reset all</btn>
                </div>
                <div class="show-btn">
                  <btn sidebarShow>Show {{ tours.length }}</btn>
                </div>
            </div>
          </form>

          <div class="catalog-sidebar__banner">
            <img src="@/assets/images/sidebar-banner.png" alt="">
          </div>

        </div>

        <!-- catalog-events -->
        <div class="catalog-events events" id="eventsCatalog">
          <div class="page-info">
            <img src="@/assets/images/svg/covid-info.svg" alt="">
            Special measures are in place to ensure health and safety in connection with COVID-19 
            <a>More information ... </a>
            <div class="close">
              <img src="@/assets/images/svg/close.svg" alt="">
            </div>
          </div>
          <div class="events__header">
            <div class="events__found">
              {{ tours.length }} of {{ tours.length }} activities found 
            </div>

            <div class="desktop-small-sorting">
              <div class="row">
                <div class="mobile-sorting__calendar desktop-small-sorting__calendar">
                  <img src="@/assets/images/svg/red-calendar.svg" alt="">
                  Date
                </div>
                <div class="mobile-sorting__day desktop-small-sorting__day day-today day-active">
                  Today
                </div>
                <div class="mobile-sorting__day desktop-small-sorting__day day-today">
                  Tomorrow
                </div>
              </div>
            </div>

            <div class="desktop-small-filter" @click="catalogOpen">
              <a href="#" class="desktop-small-filter__btn">
                <img src="@/assets/images/svg/desktop-filter.svg" alt="">
                <p>Filter</p>
              </a>
            </div>

            <div class="events__sorting">
              <span>Sorting by:</span> 
              <v-select 
                :items="sortCard" 
                @input="sortTours"
              />  
            </div>
          </div>

          <transition-group name="list" tag="div">
            <div class="catalog-events__item"
              v-for="tour in tours"
              :key="tour.id"
            >
              <tour-card 
                horizontal
                :data="tour"
              ></tour-card>
            </div>
          </transition-group>

          <div class="catalog-main__show-more">
            <btn showMore>Show  more offers</btn>
          </div>

        </div>

      </div>
    </div>
    
  </div>

</template>

<script>
import '@/assets/catalog.scss'

import Checkbox from '@/components/controls/Checkbox'
import CheckboxTag from '@/components/controls/CheckboxTag'
import InputFileds from '@/components/controls/InputFileds'
import vSelect from '@/components/controls/vSelect'
import TourCard from '@/components/TourCard'
import Btn from '@/components/controls/Btn'

import { mapState } from 'vuex'

 

export default {
  name: 'Catalog',
  data: () => ({
    catalogActive: false,
    category: [
      'Outdoor Activities',
      'Tours & Adventure',
      'Tickets & Passes',
      'Travel Services'
    ],

    sortCard: [
      {
        text: 'Popular',
        value: 'popular'
      },
      {
        text: 'Price (low to high)',
        value: 'low'
      },
      {
        text: 'Price (high to low)',
        value: 'high'
      },
    ],

    sidebarFilters: {
      travel: [
        'Transportation',
        'Transfer',
        'Rentals',
        'Photography',
        'Other',
      ],
      other: [
        'Private Tours',
        'Kid friendly',
        'Deals & Discounts',
        'Free Cancellation',
        'Pickup possible',
        'Wheelchair accessible',
      ],
      duration: [
        'All day',
        '1-3 hours',
        '3-6 hours',
        'Up to 1 hour',
        'Several days'
      ],
      languages: [
        {
          title: 'English',
          value: 'english'
        },
        {
          title: 'Spanish',
          value: 'spanish'
        },
        {
          title: 'German',
          value: 'german'
        },
        {
          title: 'French',
          value: 'french'
        }
      ]
    },

    filters: {
      time: {
        name: 'time',
        options: [
          {
            name: '8:00 - 12:00 hr',
            value: { to: '8:00', from: '12:00' }
          },
          {
            name: '12:00 - 17:00 hr',
            value: { to: '12:00', from: '17:00' }
          },
          {
            name: '17:00 - 23:59 hr',
            value: { to: '17:00', from: '23:59' }
          }
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            if (parameters.includes(event.properties.time)) {
              if(!array.includes(event)) {
                array.push(event)
              }
            }
          })
          return array
        }
      },
      languages: {
        name: 'languages',
        options: [
          {
            name: 'english', 
            value: 'english'
          },
          { 
            name: 'spanish', 
            value: 'spanish'
          },
          { 
            name: 'german', 
            value: 'german'
          },
          {
            name: 'french',
            value: 'french'
          }
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            event.properties.languages.forEach( el => {
              if (parameters.includes(el)) {
                if (!array.includes(event)) {
                  array.push(event)
                }
              }
            })
          })
          return array
        }
      },
      duration: {
        name: 'duration',
        options: [
          { 
            name: 'All day', 
            value: 720
          },
          { 
            name: '1-3 hours', 
            value: 60
          },
          { 
            name: '3-6 hours', 
            value: 180
          },
          { 
            name: 'Up to 1 hour', 
            value: 20
          },
          { 
            name: 'Several days', 
            value: 120
          },
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            if (parameters.includes(event.properties.duration)) {
              if(!array.includes(event)) {
                array.push(event)
              }
            }
          })
          return array
        }
      },
      service: {
        name: 'service',
        options: [
          { 
            name: 'Private Tours', 
            value: 'Private Tours'
          },
          { 
            name: 'Kid friendly', 
            value: 'Kid friendly'
          },
          { 
            name: 'Deals & Discounts', 
            value: 'Deals & Discounts'
          },
          { 
            name: 'Free Cancellation', 
            value: 'Free Cancellation'
          },
          { 
            name: 'Wheelchair accessible', 
            value: 'Wheelchair accessible'
          },
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            if (parameters.includes(event.properties.service)) {
              if(!array.includes(event)) {
                array.push(event)
              }
            }
          })
          return array
        }
      },
      travel: {
        name: 'travel',
        options: [
          { 
            name: 'Transportation', 
            value: 'Transportation'
          },
          { 
            name: 'Transfer', 
            value: 'Transfer'
          },
          { 
            name: 'Rentals', 
            value: 'Rentals'
          },
          { 
            name: 'Photography', 
            value: 'Photography'
          },
          { 
            name: 'Other', 
            value: 'Other'
          },
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            if (parameters.includes(event.properties.service)) {
              if(!array.includes(event)) {
                array.push(event)
              }
            }
          })
          return array
        }
      }
  
    }

  }),
  computed: {
    ...mapState({
      tours: s => s.tours.tours
    })
  },
  methods: {
    sortTours (el) {
      this.$store.commit('sortTours', el.value)
    },

    filtration (options) {
      const prop = Object.keys(options)

      if(!this.filters[prop].parameters.includes(options[prop])) {
        this.filters[prop].parameters.push(options[prop])
      } else {
        this.filters[prop].parameters.splice(this.filters[prop].parameters.indexOf(options[prop]), 1)
      }  

      this.$store.commit('filterEvents', this.filters[prop])
    },

    catalogOpen () {
      this.catalogActive = true;
      document.getElementById('eventsCatalog').style.cssText = 'display: none'
      document.querySelector('catalog-sidebar').classList.add('atalog-sidebar-active')
    },

    catalogClose () {
      this.catalogActive = false;
      document.getElementById('eventsCatalog').style.cssText = 'display: block'
    },
    
  },
  created () {
    this.$store.dispatch('getTours')
  },
  components: {
    Checkbox,
    CheckboxTag,
    TourCard,
    Btn,
    InputFileds,
    vSelect
  }
}
</script>