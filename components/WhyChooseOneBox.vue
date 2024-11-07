<template>
   <div class="why-choose-one__box" :style="{ '--accent-color': box.color }" data-wow-delay="00ms">
      <div class="why-choose-one__box__icon">
         <span :class="box.icon"></span>
      </div>
      <h3 class="why-choose-one__box__title">{{ box.title }}</h3>
      <ul class="why-choose-one__box__list">
         <li v-for="(item, index) in box.items" :key="index">
            <span class="why-choose-one__box__list__icon">
               <i class="icofont-check-circled"></i>
            </span>
            {{ item }}
         </li>
      </ul>
      <NuxtLink :to="box.link" class="why-choose-one__box__rm">
         <span class="icon-up-arrow-two"></span>
      </NuxtLink>
   </div>
</template>

<script setup>
defineProps({
   box: {
      type: Object,
      required: true,
   },
});
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
