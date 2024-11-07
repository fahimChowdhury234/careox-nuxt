<template>
   <div class="testimonials-page__card" :style="{ '--accent-color': testimonial.accentColor }">
      <div class="testimonials-page__card__image">
         <img :src="testimonial.image" :alt="testimonial.name" />
      </div>
      <div class="testimonials-page__card__rating">
         <i class="icofont-star" v-for="n in testimonial.rating" :key="n"></i>
      </div>
      <div class="testimonials-page__card__content">
         {{ testimonial.content }}
      </div>
      <h3 class="testimonials-page__card__name">{{ testimonial.name }}</h3>
      <p class="testimonials-page__card__designation">{{ testimonial.designation }}</p>
      <div class="testimonials-page__card__quote">
         <i class="icofont-quote-left"></i>
      </div>
   </div>
</template>

<script setup>
defineProps({
   testimonial: {
      type: Object,
      required: true,
   },
});
</script>

<style scoped>
/* Add your styles here */
</style>
