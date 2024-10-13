<template>
   <div class="product-details__socials">
      <h4 class="product-details__socials__title">Share with friends</h4>
      <a v-for="social in socialLinks" :key="social.name" :href="social.href">
         <i :class="social.icon" aria-hidden="true"></i>
         <span class="sr-only">{{ social.name }}</span>
      </a>
   </div>
</template>

<script setup>
defineProps({
   socialLinks: Array,
});
</script>

<style scoped>
/* Your CSS here */
</style>
