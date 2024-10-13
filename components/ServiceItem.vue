<template>
   <div class="service-one__item text-center" :style="{ '--accent-color': item.accentColor }">
      <div class="service-one__item__icon">
         <span :class="item.icon"></span>
      </div>
      <h3 class="service-one__item__title">{{ item.title }}</h3>
      <p class="service-one__item__text">{{ item.text }}</p>
      <div class="service-one__item__rm">
         <NuxtLink :to="item.link">Read More</NuxtLink>
         <i class="icon-right-arrow"></i>
      </div>
   </div>
</template>

<script setup>
defineProps({
   item: {
      type: Object,
      required: true,
   },
});
</script>

<style scoped></style>
