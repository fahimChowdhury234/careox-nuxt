<template>
   <div class="item">
      <NuxtLink :to="item.link">
         <img :src="item.image" :alt="item.title" />
         <h5 class="instagram-one__sub-title">{{ item.subtitle }}</h5>
         <h4 class="instagram-one__title">{{ item.title }}</h4>
      </NuxtLink>
   </div>
</template>

<script setup>
defineProps({
   item: Object,
});
</script>

<style scoped>
/* Add custom styles for InstagramItem if needed */
</style>
