<template>
  <div id="app">
    <HeaderSection />
    <router-view/>
    <FooterSection/>
  </div>
</template>

<script>
import HeaderSection from "@/components/Header/HeaderSection.vue";
import FooterSection from '@/components/footer-section/footer-section.vue'
export default {
  name: "HomeView",
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>

<style>
 
</style>
