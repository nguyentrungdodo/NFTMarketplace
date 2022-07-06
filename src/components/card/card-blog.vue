<template>
  <div class="col-12 col-md-4 item">
    <!-- Single Blog -->
    <div class="card blog-card">
      <!-- Blog Thumb -->
      <div class="blog-thumb">
        <a href="blog-single"
          ><img :src="imgSrc" alt="" />
        </a>
      </div>
      <!-- Blog Content -->
      <div class="blog-content">
        <!-- Meta Info -->
        <ul class="meta-info d-flex justify-content-between list-unstyled mt-4">
          <li>
            By <a href="author">{{ author }}</a>
          </li>
          <li>
            <a href="blog-single">{{ timeCreate }}</a>
          </li>
        </ul>
        <!-- Blog Title -->
        <a href="blog-single">
          <h4>{{ title }}</h4>
        </a>
        <p>{{ briefDescription }}</p>
        <!-- Blog Button -->
        <a class="btn content-btn" href="blog-single">Read More</a>
        <!-- <p>{{blogContent}}}</p>  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        //  imgSrc: "../../assets/img/blog_1.jpg",
        //  author: "Junaid Hasan",
        //  timeCreate: "Feb 19, 2022",
        //  title: "Decentralizing NFT metadata on NetStorm",
        //  briefDescription: "Lorem ipsum dolor, sit voluptatem consectetur adipisicing elit.",
    };
  },
  props: {
    imgSrc: String,
    author: String,
    timeCreate: String,
    title: String,
    briefDescription: String,
  },
  methods: {
  },
};
</script>

<style></style>
