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

.search-block{
    display: flex;
}

.page404-search{
    justify-content: center;
    margin-top: 72px;
    margin-bottom: 77px;
}

.mobile-search{
    display: none;
}

// Mobile version

@media (max-width: 992px){
    .error404{
        width: 100%;
    }
    .search-item{
        display: flex;
        width: 100%;
        .input{
            width: 100%;
            input{
            width: 100% !important;
            }
        }
    }
    .desktop-search{
        display: none;
    }
    .mobile-search{
        margin-left: 8px;
        position: relative;
        min-width: 40px;
        width: 40px;
        display: block;
        img{
            position: absolute;
            top: 9px;
            right: 9px;
        }
    }
}

</style>