<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer" class="sidebar">
      <AppSidebar />
    </v-navigation-drawer>

    <!-- Header with Menu Toggle -->
    <v-app-bar app class="header">
      <v-btn icon @click="toggleSidebar">
        <v-icon>mdi-menu</v-icon> <!-- Menu Icon -->
      </v-btn>
      <AppHeader />
    </v-app-bar>

    <!-- Main Content Area -->
    <v-main class="content">
      <v-container fluid class="content-container">
        <slot /> <!-- Content will be injected here -->
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app class="footer">
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
  },
  data() {
    return {
      drawer: true, // Sidebar visibility
    };
  },
  methods: {
    // Method to toggle the sidebar visibility
    toggleSidebar() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

