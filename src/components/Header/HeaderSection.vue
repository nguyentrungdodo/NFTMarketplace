<template>
  <header id="header">
    <!-- Navbar -->
    <nav
      data-aos="zoom-out"
      data-aos-delay="800"
      class="navbar navbar-expand"
      :class="{ 'navbar-sticky': haveBackground, fadeout: !haveBackground }"
    >
      <div class="container header">
        <!-- Navbar Brand-->
        <a class="navbar-d" href="/">
          <img
            class="navbar-brand-sticky"
            src="../../assets/img/logo.png"
            alt="sticky brand-logo"
          />
        </a>
        <div class="ml-auto"></div>
        <!-- Navbar -->
        <ul class="navbar-nav items mx-auto">
          <li class="nav-item dropdown">
            <a class="nav-link" href="/">Home</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link" href="#"
              >Explore <i class="fas fa-angle-down ml-1"></i
            ></a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a href="/explore-one" class="nav-link">Explore Style 1</a>
              </li>
              <li class="nav-item">
                <a href="/explore-two" class="nav-link">Explore Style 2</a>
              </li>
              <li class="nav-item">
                <a href="/explore-three" class="nav-link">Explore Style 3</a>
              </li>
              <li class="nav-item">
                <a href="/explore-four" class="nav-link">Explore Style 4</a>
              </li>
              <li class="nav-item">
                <a href="/auctions" class="nav-link">Live Auctions</a>
              </li>
              <li class="nav-item">
                <a href="/item-details" class="nav-link">Item Details</a>
              </li>
            </ul>
          </li> -->
          <li class="nav-item">
            <a href="/activity" class="nav-link">Activity</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#"
              >Community <i class="fas fa-angle-down ml-1"></i
            ></a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a href="/blogs" class="nav-link">Blog</a>
              </li>
              <li class="nav-item">
                <a href="/blog-single" class="nav-link">Blog Single</a>
              </li>
              <li class="nav-item">
                <a href="/help-center" class="nav-link">Help Center</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#"
              >Pages <i class="fas fa-angle-down ml-1"></i
            ></a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a href="/authors" class="nav-link">Authors</a>
              </li>
              <li class="nav-item">
                <a href="/author-detail" class="nav-link">Author</a>
              </li>
              <!-- <li class="nav-item">
                <a href="/wallet-connect" class="nav-link">Wallet Connect</a>
              </li> -->
              <!-- nho mo ra -->
              <li class="nav-item">
                <a href="/create" class="nav-link">Create</a>
              </li>
              <li class="nav-item">
                <a href="/login" class="nav-link">Login</a>
              </li>
              <li class="nav-item">
                <a href="/signup" class="nav-link">Signup</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link">Contact</a>
          </li>
        </ul>
        <!-- Navbar Icons -->
        <ul class="navbar-nav icons">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              data-toggle="modal"
              data-target="#search"
            >
              <i class="fas fa-search"></i>
            </a>
          </li>
        </ul>

        <!-- Navbar Toggler -->
        <ul class="navbar-nav toggle">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              data-toggle="modal"
              data-target="#menu"
            >
              <i class="fas fa-bars toggle-icon m-0"></i>
            </a>
          </li>
        </ul>

        <!-- Navbar Action Button -->
        <ul class="navbar-nav action">
          <li class="nav-item ml-3">
            <div
              v-if="isConnectedWallet === false"
              @click="connectWallet()"
              class="btn ml-lg-auto btn-bordered-white"
            >
              <i class="icon-wallet mr-md-2"></i>Wallet Connect
            </div>
            <p v-else>{{ address }}</p>
          </li>
          <li v-if="!userName" class="nav-item iconLogin">
            <a href="/login" class="nav-link"><span>Login</span> </a>
          </li>
          <li v-if="userName" class="nav-item ml-3">
            <a href="">
              <i class="fas fa-user"></i>
              <span class="ml-2">{{ userName }}</span>
              <i @click="handleLogout" class="fas fa-sign-out-alt ml-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import jwt_decode from "jwt-decode";
// import { ethers } from "ethers";
import localStorageService from "@/utils/localStorage.js";
export default {
  name: "HeaderSection",
  data() {
    return {
      isOnTop: false,
      haveBackground: false,
      isConnectedWallet: false,
      position: window.top.scrollY,
      userName: "",
      address: "",
    };
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters({
      user: "user/GET_USER",
    }),
  },
  methods: {
    handleScroll: function () {
      let scroll = window.top.scrollY;
      if (scroll < this.position) {
        this.haveBackground = true;
      } else if (scroll > this.position) {
        this.haveBackground = false;
      }
      this.position = scroll;
    },
    handleMouseDown() {},
    handleLogout() {
      localStorageService.getService().clearToken();
      this.$router.reppace("/home");
    },
    async connectWallet() {
      this.isConnectedWallet = true;
      if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          console.log(error);
        }
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        this.address = accounts[0];
      } else {
        console.log("cannot connect wallet");
      }
    },
  },
  mounted() {
    setTimeout(() => {
      const token = localStorageService.getService().getToken();
      const user = jwt_decode(token);
      "user", user;
      this.userName = user.name;
    }, 1000);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.fadeout {
  display: none;
  /* opacity: 0;
  transition: 1s;
    */
}
.iconLogin a i {
  margin-left: 8px;
}
.iconLogin a p {
  margin-left: 8px;
  margin-top: 0px !important;
}
</style>
