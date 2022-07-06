<template>
  <div class="home">
    <BreadcrumbBlogSection/>
    <BlogSection/>
  </div>
</template>

<script>

import BreadcrumbBlogSection from "@/components/breadcrumb/breadcrumb-blog/breadcrumb-blog.vue";
import BlogSection from "@/components/blog-section/blog-section.vue";


export default {
  name: "HomeView",
  components: {
    BreadcrumbBlogSection,
    BlogSection,
  },
};
</script>
