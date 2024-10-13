<template>
   <div class="blog-card wow fadeInUp" data-wow-duration="1500ms" :style="{ '--accent-color': accentColor }">
      <div class="blog-card__image">
         <img :src="blog.image" :alt="blog.altText" />
         <img :src="blog.image" :alt="blog.altText" />

         <NuxtLink :to="blog.link" class="blog-card__image__link">
            <span class="sr-only">{{ blog.altText }}</span>
         </NuxtLink>
         <div class="blog-card__date"><i class="icofont-ui-calendar"></i>{{ blog.date }}</div>
      </div>
      <div class="blog-card__content">
         <ul class="list-unstyled blog-card__meta">
            <li>
               <NuxtLink :to="blog.author.link"><img :src="blog.author.image" alt="careox" />{{ blog.author.name }}</NuxtLink>
            </li>
            <li>
               <NuxtLink :to="blog.link"><i class="icofont-comment"></i>Comment ({{ blog.comments }})</NuxtLink>
            </li>
         </ul>
         <h3 class="blog-card__title">
            <NuxtLink :to="blog.link">{{ blog.title }}</NuxtLink>
         </h3>
         <p class="blog-card__text">{{ blog.text }}</p>
         <NuxtLink :to="blog.link" class="blog-card__link">
            <span class="blog-card__link__front"><span class="icofont-double-right"></span></span>
            <span class="blog-card__link__back"><span class="icofont-double-right"></span>Read More</span>
         </NuxtLink>
      </div>
   </div>
</template>

<script setup>
defineProps({
   blog: Object,
   accentColor: String,
});
</script>

<style scoped>
/* Add your specific styles for BlogCard here */
</style>
