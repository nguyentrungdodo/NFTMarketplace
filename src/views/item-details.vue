<template>
  <div class="main">
    <ItemDetailsSection />
  </div>
</template>

<script>
import ItemDetailsSection from "../components/item-details-section/item-details-section.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ItemDetails",
  components: {
    ItemDetailsSection,
  },
  methods: {
    ...mapActions({
      getMediaById: "media/ACT_FETCH_MEDIA_BY_ID",
    }),
  },
  computed: {
    ...mapGetters({
      media: "media/GET_MEDIA_BY_ID",
    }),
  },
  created() {
    console.log('route',this.$route);
    this.getMediaById(this.$route.params.id);
  },
};
</script>
<style></style>
