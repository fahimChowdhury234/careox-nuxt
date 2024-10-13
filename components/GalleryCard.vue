<template>
   <div class="gallery-one__card">
      <img :src="image" alt="Gallery Image" />
      <div class="gallery-one__card__hover">
         <a :href="image" class="img-popup">
            <span class="gallery-one__card__icon"></span>
         </a>
      </div>
   </div>
</template>

<script setup>
defineProps({
   image: String,
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
