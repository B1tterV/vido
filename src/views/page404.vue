<template>
        <div class="page404">
            <div class="container">
            <div class="error__block">
                <div class="error404">
                    <div class="page-not-found">
                        404 - Page not found
                    </div>
                    <div class="text">
                        That page cannot be found, or is <br>
                        located on an archived web page.
                    </div>
                    <div class="search-block page404-search">
                        <div>
                            <input-fileds
                                search
                                placeholder="Find something specific"
                            />
                            <btn search>Search</btn>
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
        </div>
</template>

<script>
import Btn from "../components/controls/Btn.vue";
import ViCardVertical from '../components/vi-card-vertical.vue';
import ViCardCarousel from '../components/vi-card-carousel.vue';
import InputFileds from '@/components/controls/InputFileds';
import axios from 'axios'

export default {
    name: "PageNotFound",
    components: { 
        Btn, 
        ViCardVertical, 
        ViCardCarousel,
        InputFileds
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
}
</script>

<style lang="scss" scoped>
.page-not-found{
    margin-bottom: 28px;
    font-weight: bold;
    font-size: 48px;
    line-height: 130%;
    text-align: center;
}

.error404{
    width: 917px;
    height: 512px;
    background-image: url(../assets/images/svg/404error.svg);
    .text{
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        text-align: center;
    }
    .search-input{
        width: 427px;
    }
    .page-not-found{
        padding-top: 165px;
    }
}

.error__block{
    text-align: center;
    text-align: -webkit-center;
}

.search-input{
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px 16px 12px 30px;
    background: #FFFFFF;
    border: 1px solid #DCDFE7;
    box-sizing: border-box;
    border-radius: 8px;
    &::after{
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 12px;
        left: 10px;
        background: url(../assets/images/svg/search.svg) no-repeat;
    }
    img{
        margin-right: 9px;
    }
}

.search-block{
    display: flex;
}

.page404-search{
    justify-content: center;
    margin-top: 72px;
    margin-bottom: 77px;
}

.search-btn{
    padding: 10px 16px;
    background: linear-gradient(180deg, #FF7C66 0%, #FF5134 167.86%);
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}
</style>