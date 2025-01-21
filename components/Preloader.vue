<template>
  <div v-if="isLoading" class="preloader">
    <div class="preloader__image" :style="{ backgroundImage: `url(${loaderImage})` }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);
import loaderImage from "@/assets/images/loader.png";

const router = useRouter();

// Function to check if all CSS files are loaded
const checkStylesheetsLoaded = () => {
  return new Promise((resolve) => {
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    let loadedCount = 0;
    const totalStylesheets = stylesheets.length;

    if (totalStylesheets === 0) {
      resolve();
    }

    stylesheets.forEach((link) => {
      if (link.sheet) {
        loadedCount++;
        if (loadedCount === totalStylesheets) {
          resolve();
        }
      } else {
        link.onload = () => {
          loadedCount++;
          if (loadedCount === totalStylesheets) {
            resolve(); // All stylesheets have loaded
          }
        };
      }
    });
  });
};

// Show the loader before each route change
router.beforeEach((to, from, next) => {
  isLoading.value = true; // Show the loader
  next();
});

// After route navigation, wait for CSS to load, then hide the loader
router.afterEach(async (to, from) => {
  await checkStylesheetsLoaded(); // Wait for CSS files to load
  setTimeout(() => {
    isLoading.value = false; // Hide the loader
  }, 500); // Optional delay for smoother transition
});

// Handle initial page load
onMounted(async () => {
  await checkStylesheetsLoaded(); // Wait for CSS files to load
  setTimeout(() => {
    isLoading.value = false; // Hide the loader after initial load
  }, 500); // Optional delay for smoother transition
});
</script>

<style scoped>
/* Add your loader styles here */
</style>
