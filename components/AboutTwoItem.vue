<template>
   <div class="col-lg-4 col-sm-4 wow fadeInUp" :style="{ '--accent-color': item.accentColor }">
      <div class="about-two__donate">
         <div class="about-two__donate__icon">
            <span :class="item.iconClass"></span>
         </div>
         <h4 class="about-two__donate__title">{{ item.title }}</h4>
         <div class="about-two__donate__text">{{ item.count }}</div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   item: Object,
});
</script>

<style scoped>
/* Scoped styles for the donation item */
</style>
