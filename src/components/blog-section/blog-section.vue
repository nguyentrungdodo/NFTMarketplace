<template>
  <section class="blog-area pt-0 load-more">
    <div class="container">
      <div class="row items">
        <div
          v-for="blog in blogList"
          :key="blog.id"
          class="col-12 col-md-4 item"
        >
          <!-- Single Blog -->
          <div @click="handleOpenPopup(blog.id)" class="icon-delete">
            <i class="fa fa-remove" aria-hidden="true"></i>
          </div>
          <div @click="handleEdit(blog.id)" class="icon-delete icon-edit">
            <i class="fa fa-edit" aria-hidden="true"></i>
          </div>

          <div class="card blog-card ">
            <!-- Blog Thumb -->
            <div class="blog-thumb mt-3">
              <a href="blog-single"><img :src="blog.image" alt="" /></a>
            </div>
            <!-- Blog Content -->
            <div class="blog-content">
              <!-- Meta Info -->
              <ul
                class="meta-info d-flex justify-content-between list-unstyled mt-4"
              >
                <li>
                  By <a href="author">{{ blog.user.name }}</a>
                </li>
                <li><a href="blog-single">Jul 17, 2022</a></li>
              </ul>
              <!-- Blog Title -->
              <a href="blog-single">
                <h4>{{ blog.title }}</h4>
              </a>
              <p>
                {{ blog.description }}
              </p>
              <!-- Blog Button -->
              <a class="btn content-btn" href="blog-single">Read More</a>
            </div>
          </div>
        </div>
        <!-- <cardBlog
          v-for="(blog, index) in blogs"
          :key="index"
          :img="blog.img"
          :author="blog.author"
          :timeCreate="blog.timeCreate"
          :title="blog.title"
          :briefDescription="blog.briefDescription"
        /> -->
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <a id="load-btn" class="btn btn-bordered-white mt-5" href="#"
            >Load More</a
          >
        </div>
      </div>
    </div>
    <!-- <div class="box">
      <a class="button" href="#popup1">Let me Pop up</a>
    </div> -->

    <div v-if="dialogDelete" class="overlay">
      <div class="popup">
        <h3>Do you want to delete this blog</h3>
        <a class="close" @click="handleClosePopup" >&times;</a>

        <div class="button-group">
          <a @click="handleClosePopup" class="btn btn-bordered-white"
            ><i class="icon-note mr-2"></i>Cancel</a
          >
          <a class="btn btn-bordered-white" @click="handleDeleteConfirm"
            ><i class="icon-rocket mr-2"></i>Delete</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import cardBlog from "../card/card-blog.vue";

export default {
  // components: { cardBlog },
  data() {
    return {
      dialogDelete: false,
      idBlog: null,
    };
  },
  methods: {
    ...mapActions({
      getAllBlogs: "blog/ACT_FETCH_ALL_BLOG",
      deleteBlogById: "blog/ACT_DELETE_BY_ID",
    }),
    handleOpenPopup(id) {
      this.idBlog = id;
      this.dialogDelete = true;
    },
    handleClosePopup() {
      this.dialogDelete = false;
    },
    async handleDeleteConfirm() {
      await this.deleteBlogById(this.idBlog);
      await this.getAllBlogs();
      this.dialogDelete = false;
    },
    handleEdit(id){
      this.$router.push({name:'edit-blog',params:{id}})
    }
  },
  computed: {
    ...mapGetters({
      blogList: "blog/GET_LIST_BLOG",
    }),
  },
  created() {
    this.getAllBlogs();
  },
};
</script>

<style>
.blog-thumb {
  height: 300px;
}
.icon-delete {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  color: white;
  right: 15px;
  top: 5px;
  cursor: pointer;
}
.icon-delete:hover {
  opacity: 0.9;
}
.blog-card {
  position: relative;
}
.box {
  width: 40%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.button {
  font-size: 1em;
  padding: 10px;
  color: #fff;
  border: 2px solid #06d85f;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: #06d85f;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 1;
}
.overlay {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 250px auto;
  padding: 20px;
  background-color:#121117;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}
.popup h3 {
  margin-top: 15px;
  color: #ffffff;
  font-family: Tahoma, Arial, sans-serif;
  text-align: center;
}
.popup .close {
  position: absolute;
  top: 0px;
  right: 20px;
  transition: all 200ms;
  font-size: 30px !important;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06d85f;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}
.button-group a {
  color: white !important;
}
.icon-edit{
   right:40px;
   
}
.blog-thumb img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
