<template>
  <div id="app">
    <HeaderSection />
    <router-view />
    <FooterSection />
    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.color"
      :multi-line="snackbar.mode === 'multi-line'"
      :timeout="snackbar.timeout"
      :bottom="true"
      :right="true"
    >
      <v-layout align-center pr-4>
        <v-layout column>
          <div>
            <strong>{{ snackbar.title }}</strong>
          </div>
          <div>{{ snackbar.text }}</div>
        </v-layout>
      </v-layout>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
import HeaderSection from "@/components/Header/HeaderSection.vue";
import FooterSection from "@/components/footer-section/footer-section.vue";
export default {
  name: "HomeView",
  components: {
    HeaderSection,
    FooterSection,
  },
  computed: {
    ...mapGetters({
      snackbar: "GET_SNACKBAR",
    }),
  },
};
</script>

<style></style>
