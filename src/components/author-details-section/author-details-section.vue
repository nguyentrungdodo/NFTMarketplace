<template>
  <section class="author-area explore-area popular-collections-area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-4">
          <!-- Author Profile -->
          <div class="card no-hover text-center">
            <div class="image-over">
              <img
                class="card-img-top"
                src="../../assets/img/auction_2.jpg"
                alt=""
              />
              <!-- Author -->
              <div class="author">
                <div class="author-thumb avatar-lg">
                  <img
                    class="rounded-circle"
                    :src="profile.user.avatar"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!-- Card Caption -->
            <div class="card-caption col-12 p-0">
              <!-- Card Body -->
              <div class="card-body mt-4">
                <h5 class="mb-3">Artnox</h5>
                <p class="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="ZqpthncaYTsd0579hasfu00st"
                  />
                  <div class="input-group-append">
                    <button><i class="icon-docs"></i></button>
                  </div>
                </div>
                <!-- Social Icons -->
                <div class="social-icons d-flex justify-content-center my-3">
                  <a
                    class="facebook"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="twitter"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    class="telegram"
                    target="_blank"
                    href="https://telegram.org/"
                  >
                    <i class="fab fa-telegram"></i>
                    <i class="fab fa-telegram"></i>
                  </a>
                  <a
                    class="discord"
                    target="_blank"
                    href="https://discord.com/"
                  >
                    <i class="fab fa-discord"></i>
                    <i class="fab fa-discord"></i>
                  </a>
                </div>
                <a class="btn btn-bordered-white btn-smaller" href="login"
                  >Follow</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="row justify-content-center text-center mt-5 mt-lg-0">
            <div class="col-12">
              <!-- Explore Menu -->
              <div
                class="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4"
                data-toggle="buttons"
              >
                <label
                  :class="isSellNFTTab ? 'active' : ''"
                  class="btn d-table text-uppercase p-2"
                  @click="() => toggleIsSellNFT(true)"
                >
                  <input type="radio" value="all" checked class="explore-btn" />
                  <span>Sell NFT</span>
                </label>
                <label
                  :class="!isSellNFTTab ? 'active' : ''"
                  @click="() => toggleIsSellNFT(false)"
                  class="btn d-table text-uppercase p-2"
                >
                  <input type="radio" value="art" class="explore-btn" />
                  <span>My NFT</span>
                </label>
              </div>
            </div>
          </div>
          <div class="row items explore-items">
            <div
              v-for="media in medias()"
              :key="media.id"
              class="col-12 col-md-6 item explore-item"
              data-groups='["art","sports"]'
            >
              <div class="card no-hover text-center">
                <div class="image-over">
                  <a href="item-details">
                    <img class="card-img-top" :src="media.image" alt="" />
                  </a>
                  <!-- Author -->
                  <a class="author" href="authors">
                    <div class="author-thumb avatar-lg">
                      <img
                        class="rounded-circle"
                        :src="profile.user.avatar"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <!-- Card Caption -->
                <div class="card-caption col-12 p-0">
                  <!-- Card Body -->
                  <div class="card-body mt-4">
                    <a href="item-details">
                      <h5 class="mb-2">{{ media.name }}</h5>
                    </a>
                    <span>ERC-729</span>
                    <hr />
                    <div class="card-bottom d-flex justify-content-between">
                      <span>{{ media.price }} ETH</span>
                      <span><i class="icon-heart mr-2"></i>154</span>
                    </div>
                    <div
                      v-if="!isSellNFTTab"
                      class="card-bottom d-flex justify-content-center align-items-center"
                    >
                      <input
                        type="text"
                        class="input-resell"
                        placeholder="resell price"
                        :id="media.tokenId"
                      />
                      <a
                        @click.prevent="() => handleResell(media.tokenId)"
                        class="btn btn-bordered-white btn-smaller m-3 resell-btn"
                        >Resell</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      myMedias: [],
      mySellMedias: [],
      isSellNFTTab: true,
      inputResell: [],
    };
  },
  methods: {
    ...mapActions({
      getMe: "user/ACT_GET_ME",
    }),
    toggleIsSellNFT(boolean) {
      console.log("zoooo");
      this.isSellNFTTab = boolean;
    },
    onChangeInput(e) {
      console.log("124124124", e.value);
    },
    medias() {
      if (this.isSellNFTTab) {
        return this.mySellMedias;
      } else {
        return this.myMedias;
      }
    },
    async handleResell(id) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        NFTMarketPlace.abi,
        signer
      );
      console.log({ contract });
      const inputValue = document.getElementById(id);
      console.log("input", inputValue.value);
      let listingPrice = await contract.getListingPrice();

      listingPrice = listingPrice.toString();
      const rePrice = ethers.utils.parseUnits( inputValue.value + "", "ether");
      console.log({rePrice},listingPrice);
      let transaction = await contract.resellToken(id,rePrice, {
        value: listingPrice,
      });
      await transaction.wait();
    },
  },
  computed: {
    ...mapGetters({
      profile: "user/GET_ME",
    }),
  },
  async created() {
    await this.getMe();
    console.log("zooo");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      NFTMarketPlace.abi,
      signer
    );
    let data = await contract.fetchMyNFTs();
    console.log("data", data);
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
    this.myMedias = items.filter((item) => item.image);
    this.myMedias.forEach(() => this.inputResell.push(0));
    let dataSell = await contract.fetchItemsListed();
    console.log("data", data);
    const sellItems = await Promise.all(
      dataSell.map(async (i) => {
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
    this.mySellMedias = sellItems;
    // const myFullMedias = await Promise.all(myMedias.map(async(i)=>{
    //     const data = await axios.get(`http:/localhost:3000/media/${}`)
    // }))
    // const recipe = await transaction.wait();
    // console.log({ recipe });
  },
};
</script>

<style>
.resell-btn {
  margin-right: 0px !important;
}
.input-resell {
  width: 80%;
}
</style>
