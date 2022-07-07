<template>
  <section class="author-area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-4">
          <!-- Author Profile -->
          <div class="card no-hover text-center">
            <div class="image-over">
              <img class="card-img-top" :src="uploadImage?uploadImage:'assets/img/auction_2.jpg'" alt="" />
              <!-- Author -->
              <div class="author">
                <!-- <div class="author-thumb avatar-lg">
                  <img
                    class="rounded-circle"
                    src="assets/img/avatar_8.jpg"
                    alt=""
                  />
                </div> -->
              <!-- nho mo unlock ra -->
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
        <div class="col-12 col-md-7">
          <!-- Intro -->
          <div class="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
            <div class="intro-content">
              <span>Get Started</span>
              <h3 class="mt-3 mb-0">Create Blog</h3>
            </div>
          </div>
          <!-- Item Form -->
          <form class="item-form card no-hover">
            <div class="row">
              <div class="col-12">
                <div class="input-group form-group">
                  <div class="custom-file">
                    <input
                      type="file"
                      id="files"
                      class="custom-file-input"
                      @change="handleImageUpload()"
                    />
                    <label class="custom-file-label" for="inputGroupFile01"
                      >Choose file</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mt-3">
                  <input
                    v-model="title"
                    type="text"
                    class="form-control"
                    name="title"
                    placeholder="Title Blog"
                    required="required"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    v-model="description"
                    class="form-control"
                    name="textarea"
                    placeholder="Description"
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div class="col-12">
                <button @click.prevent="handleCreate()" class="btn w-100 mt-3 mt-sm-4" >
                  Create Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {  mapActions } from "vuex";
import uploadCloudinary from "@/api/cloudinary"
export default {
  name: "CreateSection",
  components: {},
  data() {
    return {
      title: "",
      description: "",
      uploadImage:"",
    };
  },
  methods: {
    ...mapActions({
      createBlog: "blog/ACT_CREATE_BLOG",
    }),
    handleCreate(){
        const media = {
            title:this.title,
            description:this.description,
            image:this.uploadImage,
        }
        console.log('form Data',media)
        this.createBlog(media);
    },
    async handleImageUpload (){
      const file = document.getElementById('files').files[0];
      console.log('file',file);
      // const url = `${process.env.VUE_APP_SERVER}/form/upload/${this.$route.params.id}`;
      const res = await uploadCloudinary(file);
      this.uploadImage  = res.data.secure_url;
      console.log('res',res);
    //   this.$emit('closeLoader');
    }
  },
};
</script>

<style></style>
