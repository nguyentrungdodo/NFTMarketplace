<template>
  <div class="main">
    <BreadcrumbAuthorsSection />
    <AuthorsSection />
    <TopSellerTwoSection />
  </div>
</template>

<script>
import BreadcrumbAuthorsSection from "@/components/breadcrumb/breadcrumb-authors/breadcrumb-authors.vue";
import AuthorsSection from "@/components/authors-section/authors-section.vue";
import TopSellerTwoSection from "@/components/top-seller-two-section/top-seller-two-section.vue";

export default {
  name: "AuthorsView",
  components: {
    BreadcrumbAuthorsSection,
    AuthorsSection,
    TopSellerTwoSection,
  },
};
</script>

<style></style>
