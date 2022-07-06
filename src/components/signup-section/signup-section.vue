<template>
  <section class="author-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-7">
          <!-- Intro -->
          <div class="intro text-center">
            <span>Signup</span>
            <h3 class="mt-3 mb-0">Create an Account</h3>
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
                    v-model="name"
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Enter your Name"
                    required="required"
                    @input="clearError('name')"
                  />
                  <span v-if="this.error.name" class="error">{{
                    this.error.name
                  }}</span>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mt-3">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Enter your Email"
                    required="required"
                    @input="clearError('email')"
                  />
                  <span v-if="this.error.email" class="error">{{
                    this.error.email
                  }}</span>
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
                    @input="clearError('password')"
                  />
                  <span v-if="this.error.password" class="error">{{
                    this.error.password
                  }}</span>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mt-3">
                  <input
                    v-model="confirmPassword"
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Enter your Confirm Password"
                    required="required"
                    @input="clearError('confirmPassword')"
                  />
                  <span v-if="this.error.confirmPassword" class="error">{{
                    this.error.confirmPassword
                  }}</span>
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
                    />
                    <label class="form-check-label" for="inlineRadio1"
                      >I agree to <a href="#">Privacy Policy</a></label
                    >
                  </div>
                </div>
              </div>
              <div class="col-12">
                <button
                  @click.prevent="handleSignUp"
                  class="btn w-100 mt-3 mt-sm-4"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div class="col-12">
                <span class="d-block text-center mt-4"
                  >Already have an account? <a href="login">Login</a></span
                >
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
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">OVERLINE</div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> Button </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn depressed color="primary"> Primary </v-btn>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signup: "user/ACT_SIGNUP",
    }),
    clearError(field) {
      console.log("v444444444", field, this.error[field]);
      if (this.error[field]) {
        console.log("aaa");
        this.error[field] = "";
      }
    },
    validate() {
      let isValid = true;
      if (!this.name) {
        this.error.name = "Please fill this field";
        isValid = false;
      }
      if (!this.email) {
        this.error.email = "Please fill this field";
        isValid = false;
      }
      if (!this.password) {
        this.error.password = "Please fill this field";
        isValid = false;
      }
      if (!this.confirmPassword) {
        this.error.confirmPassword = "Please fill this field";
        isValid = false;
      }
      let patternEmail = new RegExp(
        [
          '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|',
          '(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|',
          "(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        ].join("")
      );
      if (!patternEmail.test(this.email)) {
        this.error.email = "email wrong pattern";
        isValid = false;
      }
      if (this.password !== this.confirmPassword) {
        this.error.password = "password doesnot match";
        isValid = false;
      }
      return isValid;
    },

    async handleSignUp() {
      if (!this.validate()) return;
      console.log("1111111");
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      const result = await this.signup(formData);
      console.log("result", result);
      //   if (result) {
      //     this.$routerP.replace({ name: "home" });
      //   }
    },
  },
};
</script>

<style>
.error {
  margin-top: 8px;
  font-size: 14px;
  color: red;
  padding-left: 15px;
}
</style>
