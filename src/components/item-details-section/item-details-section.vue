<template>
  <section class="item-details-area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-lg-5">
          <div class="item-info">
            <div class="item-thumb text-center">
              <img
                :src="
                  media.image ? media.image : '../../assets/img/auction_2.jpg'
                "
                alt=""
              />
            </div>
            <div class="card no-hover countdown-times my-4">
              <div
                class="countdown d-flex justify-content-center"
                data-date="2022-03-30"
              ></div>
            </div>
            <!-- DodoNFT Tab -->
            <ul class="netstorm-tab nav nav-tabs" id="nav-tab">
              <li>
                <a
                  class="active"
                  id="nav-home-tab"
                  data-toggle="pill"
                  href="#nav-home"
                >
                  <h5 class="m-0">Bids</h5>
                </a>
              </li>
              <li>
                <a id="nav-profile-tab" data-toggle="pill" href="#nav-profile">
                  <h5 class="m-0">History</h5>
                </a>
              </li>
              <li>
                <a id="nav-contact-tab" data-toggle="pill" href="#nav-contact">
                  <h5 class="m-0">Details</h5>
                </a>
              </li>
            </ul>
            <!-- Tab Content -->
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home">
                <ul class="list-unstyled">
                  <!-- Single Tab List -->
                  <li class="single-tab-list d-flex align-items-center">
                    <img
                      class="avatar-sm rounded-circle mr-3"
                      src="../../assets/img/avatar_1.jpg"
                      alt=""
                    />
                    <p class="m-0">
                      Bid listed for <strong>14 ETH</strong> 4 hours ago
                      <br />by <a href="author">@arham</a>
                    </p>
                  </li>
                  <!-- Single Tab List -->
                  <li class="single-tab-list d-flex align-items-center">
                    <img
                      class="avatar-sm rounded-circle mr-3"
                      src="../../assets/img/avatar_2.jpg"
                      alt=""
                    />
                    <p class="m-0">
                      Bid listed for <strong>10 ETH</strong> 8 hours ago
                      <br />by <a href="author">@junaid</a>
                    </p>
                  </li>
                  <!-- Single Tab List -->
                  <li class="single-tab-list d-flex align-items-center">
                    <img
                      class="avatar-sm rounded-circle mr-3"
                      src="../../assets/img/avatar_3.jpg"
                      alt=""
                    />
                    <p class="m-0">
                      Bid listed for <strong>12 ETH</strong> 3 hours ago
                      <br />by <a href="author">@yasmin</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div class="tab-pane fade" id="nav-profile">
                <ul class="list-unstyled">
                  <!-- Single Tab List -->
                  <li class="single-tab-list d-flex align-items-center">
                    <img
                      class="avatar-sm rounded-circle mr-3"
                      src="../../assets/img/avatar_6.jpg"
                      alt=""
                    />
                    <p class="m-0">
                      Bid listed for <strong>32 ETH</strong> 10 hours ago
                      <br />by <a href="author">@hasan</a>
                    </p>
                  </li>
                  <!-- Single Tab List -->
                  <li class="single-tab-list d-flex align-items-center">
                    <img
                      class="avatar-sm rounded-circle mr-3"
                      src="../../assets/img/avatar_7.jpg"
                      alt=""
                    />
                    <p class="m-0">
                      Bid listed for <strong>24 ETH</strong> 6 hours ago
                      <br />by <a href="author">@artnox</a>
                    </p>
                  </li>
                  <!-- Single Tab List -->
                  <li class="single-tab-list d-flex align-items-center">
                    <img
                      class="avatar-sm rounded-circle mr-3"
                      src="../../assets/img/avatar_8.jpg"
                      alt=""
                    />
                    <p class="m-0">
                      Bid listed for <strong>29 ETH</strong> 12 hours ago
                      <br />by <a href="author">@meez</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div class="tab-pane fade" id="nav-contact">
                <!-- Single Tab List -->
                <div class="owner-meta d-flex align-items-center mt-3">
                  <span>Owner</span>
                  <a class="owner d-flex align-items-center ml-2" href="author">
                    <img
                      class="avatar-sm rounded-circle"
                      src="../../assets/img/avatar_1.jpg"
                      alt=""
                    />
                    <h6 class="ml-2">Do Do</h6>
                  </a>
                </div>
                <p class="mt-2">Created : 15 Jul 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <!-- Content -->
          <div class="content mt-5 mt-lg-0">
            <h3 class="m-0">{{ media.name }}</h3>
            <p>
              {{ media.description }}
            </p>
            <!-- Owner -->
            <div class="owner d-flex align-items-center">
              <span>Owned By</span>
              <a
                class="owner-meta d-flex align-items-center ml-3"
                href="author"
              >
                <img
                  class="avatar-sm rounded-circle"
                  :src="media.user.avatar"
                  alt=""
                />
                <h6 class="ml-2">{{ media.user.name }}</h6>
              </a>
            </div>
            <!-- Item Info List -->
            <div class="item-info-list mt-4">
              <ul class="list-unstyled">
                <li class="price d-flex justify-content-between">
                  <span>{{ media.price }}</span>
                  <span> Current Price 5 ETH</span>
                  <span>$500.89</span>
                  <span>1 of 5</span>
                </li>
                <!-- <li>
                  <span>Volume Traded</span>
                  <span>64.1</span>
                </li> -->
              </ul>
            </div>
            <div class="row items">
              <div class="col-12 col-md-6 item px-lg-2">
                <div class="card no-hover">
                  <div class="single-seller d-flex align-items-center">
                    <a href="author">
                      <img
                        class="avatar-md rounded-circle"
                        :src="media.user.avatar"
                        alt=""
                      />
                    </a>
                    <!-- Seller Info -->
                    <div class="seller-info ml-3">
                      <a class="seller mb-2" href="author">@ArtNoxStudio</a>
                      <span>Creator</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 item px-lg-2">
                <div class="card no-hover">
                  <div class="single-seller d-flex align-items-center">
                    <a href="author">
                      <img
                        class="avatar-md rounded-circle"
                        src="../../assets/img/avatar_2.jpg"
                        alt=""
                      />
                    </a>
                    <!-- Seller Info -->
                    <div class="seller-info ml-3">
                      <a class="seller mb-2" href="explore-two"
                        >Virtual Worlds</a
                      >
                      <span>Collection</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 item px-lg-2">
                <div class="card no-hover">
                  <h4 class="mt-0 mb-2">Highest Bid</h4>
                  <div
                    class="price d-flex justify-content-between align-items-center"
                  >
                    <span>{{ media.price }} ETH</span>
                    <span>1 of 5</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              @click.prevent="handleBuy()"
              class="d-block btn btn-bordered-white mt-4"
              href="wallet-connect"
              >Buy It</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ethers } from "ethers";
import contractAddress from "@/contract/contractAddress";
import NFTMarketPlace from "@/contract/NFTMarketplace.json";
import axios from "axios";
export default {
  data() {
    return {
      // isShow: false,
      media: null,
    };
  },
  computed: {},
  methods: {
    async handleBuy() {
      console.log("this", this.media);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        NFTMarketPlace.abi,
        signer
      );
      const price = ethers.utils.parseUnits(
        this.media.price.toString(),
        "ether"
      );
      console.log({price});
      const transaction = await contract.createMarketSale(+this.media.tokenId, {
        value: price,
      });
      const result = await transaction.wait();
      if(result) this.$router.push('/')
      console.log({result});
    },
  },
  async created() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      NFTMarketPlace.abi,
      signer
    );
    const tokenUri = await contract.tokenURI(this.$route.params.id);
    let data = await contract.fetchMarketItems();
    const currentMedia = data.find(
      (media) => media.tokenId.toNumber() === +this.$route.params.id
    );
    console.log({currentMedia});
    const meta = await axios.get(tokenUri);
    const dataMedia = await axios.post("http://localhost:3000/media/cloud", {
      image: meta.data.image,
    });
    console.log({ dataMedia });
    const finalMedia = {
      ...dataMedia.data,
      seller: currentMedia.seller,
      owner: currentMedia.owner,
      price: ethers.utils.formatUnits(currentMedia.price.toString(), "ether"),
      tokenId:currentMedia.tokenId.toNumber()
    };
    this.media = finalMedia;
    console.log("final", finalMedia);
  },
};
</script>

<style></style>
