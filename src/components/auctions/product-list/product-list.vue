<template>
  <section class="live-auctions-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Intro -->
          <div class="intro d-flex justify-content-between align-items-end m-0">
            <div class="intro-content">
              <span>Market</span>
              <h3 class="mt-3 mb-0">Live Market</h3>
            </div>
            <div class="intro-btn">
              <a class="btn content-btn" href="auctions">View All</a>
            </div>
          </div>
        </div>
      </div>
      <div class="auctions-slides">
        <div class="swiper-container slider-mid items">
          <div class="swiper-wrapper row">
            <div
              v-for="media in marketMedias"
              :key="media.tokenId"
              class="swiper-slide item col-4"
            >
              <div
                @click="
                  $router.push({
                    name: 'media-detail',
                    params: { id: media.tokenId },
                  })
                "
                class="card"
              >
                <div class="image-over">
                  <a>
                    <img class="card-img-top" :src="media.image" alt="" />
                  </a>
                </div>
                <!-- Card Caption -->
                <div class="card-caption col-12 p-0">
                  <!-- Card Body -->
                  <div class="card-body">
                    <div class="countdown-times mb-3">
                      <div
                        class="countdown d-flex justify-content-center"
                        data-date="2022-07-15"
                      ></div>
                    </div>
                    <a href="item-details">
                      <h5 class="mb-0">Arts</h5>
                    </a>
                    <a
                      class="seller d-flex align-items-center my-3"
                      href="item-details"
                    >
                      <img
                        class="avatar-sm rounded-circle"
                        src="../../../assets/img/avatar_3.jpg"
                        alt=""
                      />
                      <span class="ml-2">{{ media.user.name }}</span>
                    </a>
                    <div class="card-bottom d-flex justify-content-between">
                      <span>{{ media.price }} ETH</span>
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
import { ethers } from "ethers";
import contractAddress from "@/contract/contractAddress";
import NFTMarketPlace from "@/contract/NFTMarketplace.json";
import axios from "axios";
export default {
  data() {
    return {
      // isShow: false,
      marketMedias: [],
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
  async created() {
    this.getAllMedias();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      NFTMarketPlace.abi,
      signer
    );
    let data = await contract.fetchMarketItems();
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        console.log("meta", tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
        };
        return item;
      })
    );
    const dataMarketMedias = items.filter((item) => item.image);

    console.log("data", dataMarketMedias);
    const fullDataMarketMedias = await Promise.all(
      dataMarketMedias.map(async (media) => {
        const dataMedia = await axios.post(
          "http://localhost:3000/media/cloud",
          {
            image: media.image,
          }
        );
        return dataMedia.data;
      })
    );
    console.log("promiseAll", fullDataMarketMedias);
    const finalMedia = dataMarketMedias.map((media, index) => {
      return { ...fullDataMarketMedias[index], ...media };
    });
    this.marketMedias = finalMedia;
    console.log("final", finalMedia);
  },
};
</script>

<style scoped>
.swiper-slide {
  flex: 0 0 30.333333%;
}
</style>
>
