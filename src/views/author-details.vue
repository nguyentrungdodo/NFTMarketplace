<template>
  <div class="main">
    <BreadcrumbAuthorSection />
    <AuthorSection />
  </div>
</template>

<script>
import BreadcrumbAuthorSection from '@/components/breadcrumb/breadcrumb-author/breadcrumb-author.vue'
import AuthorSection from '@/components/author-details-section/author-details-section.vue'

export default {
  name: 'AuthorDetails',
  components: {
    BreadcrumbAuthorSection,
    AuthorSection,
  }
}
</script>

<style>

</style>