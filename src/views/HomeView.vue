<template>
  <div>
    <HeroSection />
    <ProductList />
    <TopSellerSection />
    <CollectionsSection />
    <ExploreOneSection />
    <WorkSection /> 
  </div>
   
</template>

<script>
// import HeroSection from '../components/hero-section/hero-section.vue'
import HeroSection from "../components/hero-section/hero-section.vue";
import ProductList from "@/components/auctions/product-list/product-list.vue";
import TopSellerSection from '../components/top-seller-section/top-seller-section.vue'
import CollectionsSection from '../components/collections-section/collections-section.vue'
import ExploreOneSection from '../components/explore/explore-one-section/explore-one-section.vue'
import WorkSection from '../components/work-section/work-section.vue'
export default {
  name: "HomeView",
  components: {
    HeroSection,
    ProductList,
    TopSellerSection,
    CollectionsSection,
    ExploreOneSection,
    WorkSection
  },
};
</script>
