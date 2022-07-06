<template>
  <div class="main">
    <BreadcrumbContactSection />
    <ContactSection />
  </div>
</template>

<script>
import BreadcrumbContactSection from '@/components/breadcrumb/breadcrumb-contact/breadcrumb-contact.vue'
import ContactSection from '@/components/contact-section/contact-section.vue'


export default {
  name: 'ContactView',
  components: {
    BreadcrumbContactSection,
    ContactSection,
  }
}
</script>

<style>

</style>