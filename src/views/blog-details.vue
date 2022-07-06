<template>
  <div class="main">
    <BreadcrumbBlogSingleSection/>
    <BlogSingleSection />

  </div>
</template>

<script>

import BreadcrumbBlogSingleSection from '../components/breadcrumb/breadcrumb-blog-single/breadcrumb-blog-single.vue'
import BlogSingleSection from '../components/blog-single-section/blog-single-section.vue'

export default {
  name: 'BlogDetails',
  components: {
    BreadcrumbBlogSingleSection,
    BlogSingleSection,
  }
}
</script>

<style>

</style>