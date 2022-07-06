<template>
  <div class="main">
    <BreadcrumbActivitySection />
    <ActivitySection />
  </div>
</template>

<script>

import BreadcrumbActivitySection from '@/components/breadcrumb/breadcrumb-activity/breadcrumb-activity.vue'
import ActivitySection from '@/components/activity-section/activity-section.vue'

export default {
  name: 'ActivityView',
  components: {
    BreadcrumbActivitySection,
    ActivitySection,
  }
}
</script>

<style>

</style>