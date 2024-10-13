<template>
   <div class="product-details__img">
      <img :src="imageSrc" :alt="title" />
      <div class="product-details__img-search">
         <a :href="imageSrc" class="img-popup"><span class="icon-magnifying-glass"></span></a>
      </div>
   </div>
</template>

<script setup>
defineProps({
   imageSrc: String,
   title: String,
});
onMounted(async () => {
   new GLightbox({
      selector: ".img-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped>
/* Your CSS here */
</style>
