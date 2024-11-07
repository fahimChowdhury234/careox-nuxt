<template>
   <div class="product-details__description">
      <h3 class="product-details__description__title">{{ description.title }}</h3>
      <p class="product-details__description__text">{{ description.text }}</p>
      <ul class="list-unstyled product-details__description__lists">
         <li v-for="(item, index) in description.list" :key="index"><span class="icon-right-arrow"></span>{{ item }}</li>
      </ul>
   </div>
</template>

<script setup>
defineProps({
   description: Object,
});
</script>

<style scoped>
/* Your CSS here */
</style>
