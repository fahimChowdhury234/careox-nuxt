<template>
   <li :style="{ '--accent-color': item.accentColor }">
      <div class="info__icon"><span :class="item.icon"></span></div>
      <div class="info__content">
         <h5 class="info__title">{{ item.title }}</h5>
         <p class="info__text">
            <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
         </p>
      </div>
   </li>
</template>

<script setup>
defineProps({
   item: Object,
});
</script>

<style scoped>
/* Add any specific styles for the component here */
</style>
