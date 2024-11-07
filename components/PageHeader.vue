<template>
   <section class="page-header">
      <div class="page-header__bg"></div>
      <!-- /.page-header__bg -->
      <div class="container">
         <h2 class="page-header__title bw-split-in-left">{{ title }}</h2>
         <ul class="careox-breadcrumb list-unstyled">
            <li>
               <NuxtLink href="/">Home</NuxtLink>
            </li>
            <li>
               <span>{{ currentPage }}</span>
            </li>
         </ul>
      </div>
      <!-- /.container -->
   </section>
   <!-- /.page-header -->
</template>

<script setup>
defineProps({
   title: {
      type: String,
      required: true,
   },
   homeText: {
      type: String,
      default: "Home",
   },
   homeLink: {
      type: String,
      default: "/",
   },
   currentPage: {
      type: String,
      required: true,
   },
});
</script>

<style scoped>
/* Add any component-specific styles if needed */
</style>
