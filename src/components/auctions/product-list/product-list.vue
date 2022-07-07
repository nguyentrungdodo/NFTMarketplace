<template>
    <section class="live-auctions-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Intro -->
                    <div class="intro d-flex justify-content-between align-items-end m-0">
                        <div class="intro-content">
                            <span>Auctions</span>
                            <h3 class="mt-3 mb-0">Live Auctions</h3>
                        </div>
                        <div class="intro-btn">
                            <a class="btn content-btn" href="auctions">View All</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="auctions-slides ">
                <div class="swiper-container slider-mid items">
                    <div class="swiper-wrapper row">
                        <div v-for="media in medias" :key="media.id" class="swiper-slide item col-4">
                            <div @click="$router.push({name:'media-detail',params:{id:media.id}})" class="card">
                                <div class="image-over">
                                    <a >
                                        <img class="card-img-top" :src="media.image" alt="">
                                    </a>
                                </div>
                                <!-- Card Caption -->
                                <div class="card-caption col-12 p-0">
                                    <!-- Card Body -->
                                    <div class="card-body">
                                        <div class="countdown-times mb-3">
                                            <div class='countdown d-flex justify-content-center' data-date="2022-07-15"></div>
                                        </div>
                                        <a href="item-details">
                                            <h5 class="mb-0">Arts</h5>
                                        </a>
                                        <a class="seller d-flex align-items-center my-3" href="item-details">
                                            <img class="avatar-sm rounded-circle" src="../../../assets/img/avatar_3.jpg" alt="">
                                            <span class="ml-2">{{media.user.name}}</span>
                                        </a>
                                        <div class="card-bottom d-flex justify-content-between">
                                            <span>{{media.price}} BNB</span>
                                            <span>1 of 1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      // isShow: false,
    };
  },
  methods: {
    ...mapActions({
      getAllMedias: "media/ACT_FETCH_ALL_MEDIA",
    }),
  }, 
  computed: {
    ...mapGetters({
      medias: "media/GET_LIST_MEDIA",
    }),
  },
  created() {
    console.log("here");
    this.getAllMedias();
  },
}

</script>
    
<style scoped>
.swiper-slide{
flex: 0 0 30.333333%
}
</style>>

