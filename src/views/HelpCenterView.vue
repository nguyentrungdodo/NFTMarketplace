<template>
  <div class="main">
    <BreadcrumbHelpCenterSection />
    <HelpCenterSection />
    <FaqSection />
  </div>
</template>

<script>
import BreadcrumbHelpCenterSection from '../components/breadcrumb/breadcrumb-help-center/breadcrumb-help-center.vue'
import HelpCenterSection from '../components/help-center-section/help-center-section.vue'
import FaqSection from '../components/faq-section/faq-section.vue'

export default {
  name: 'HelpCenter',
  components: {
    BreadcrumbHelpCenterSection,
    HelpCenterSection,
    FaqSection,
  }
}
</script>

<style>

</style>