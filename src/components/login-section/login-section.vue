<template>
  <section class="author-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-7">
          <!-- Intro -->
          <div class="intro text-center">
            <span>Login</span>
            <h3 class="mt-3 mb-0">Login to your Account</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
          <!-- Item Form -->
          <form class="item-form card no-hover">
            <div class="row">
              <div class="col-12">
                <div class="form-group mt-3">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Enter your Email"
                    required="required"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mt-3">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Enter your Password"
                    required="required"
                     v-on:keyup.enter="handleLogin"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mt-3">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="inlineRadio1"
                      >Remember Me</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button
                  class="btn w-100 mt-3 mt-sm-4"
                  @click.prevent="handleLogin"
                >
                  Sign In
                </button>
              </div>
              <div class="col-12">
                <hr />
                <div class="other-option">
                  <span class="d-block text-center mb-4">Or</span>
                  <!-- Social Icons -->
                  <div class="social-icons d-flex justify-content-center">
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
                      class="discord"
                      target="_blank"
                      href="https://discord.com/"
                    >
                      <i class="fab fa-discord"></i>
                      <i class="fab fa-discord"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginSection",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      login: "user/ACT_LOGIN",
    }),
    async handleLogin() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      const result = await this.login(formData);
      if (result) {
        this.$router.replace('/');
      }
    },
  },
};
</script>

<style></style>
