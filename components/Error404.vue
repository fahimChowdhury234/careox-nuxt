<template>
   <section class="error-404">
      <div class="container">
         <div class="error-404__image wow fadeInUp" data-wow-duration="1500ms">
            <img src="/assets/images/resources/error-404.jpg" alt="404" />
         </div>
         <!-- /.error-404__image -->
         <h3 class="error-404__title">Page not found</h3>
         <!-- /.error-404__title -->
         <p class="error-404__text">Sorry, this page was not found. Take a look at our most popular pages below.</p>
         <!-- /.error-404__text -->
         <form @submit.prevent="onSearch" class="error-404__search">
            <input v-model="searchQuery" type="text" id="error-search" placeholder="Search Here..." />
            <button type="submit" class="error-404__search__btn" aria-label="search submit">
               <span>
                  <i class="icon-magnifying-glass"></i>
               </span>
            </button>
         </form>
         <!-- /.error-404__search -->
         <div class="error-404__btns">
            <NuxtLink to="/" class="careox-btn careox-btn--base error-404__btn">
               <span>Back to Home</span>
            </NuxtLink>
         </div>
         <!-- /.error-404__btns -->
      </div>
      <!-- /.container -->
   </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const router = useRouter();

// Simulate a search function for the search form
const onSearch = () => {
   if (searchQuery.value) {
      // Handle the search logic or navigate to a search results page
      router.push({ path: "/search", query: { q: searchQuery.value } });
   }
};
</script>

<style scoped>
/* Add necessary styles here if needed, re-use existing styles from the original design */
</style>
