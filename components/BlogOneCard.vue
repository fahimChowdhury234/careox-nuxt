<template>
   <div class="blog-card wow fadeInUp" :class="{ 'blog-card--reverse': reverse }" data-wow-duration="1500ms" :data-wow-delay="`${delay}ms`" :style="{ '--accent-color': accentColor }">
      <div class="blog-card__image">
         <img :src="blog.image" :alt="blog.title" />
         <img :src="blog.image" :alt="blog.title" />

         <NuxtLink :to="blog.link" class="blog-card__image__link">
            <span class="sr-only">{{ blog.title }}</span>
         </NuxtLink>
         <div class="blog-card__date"><i class="icofont-ui-calendar"></i>{{ blog.date }}</div>
      </div>
      <div class="blog-card__content">
         <ul class="list-unstyled blog-card__meta">
            <li>
               <NuxtLink to="/blog-list-right">
                  <img :src="blog.authorImage" alt="author" />
                  Admin: {{ blog.author }}
               </NuxtLink>
            </li>
            <li>
               <NuxtLink :to="blog.link"><i class="icofont-comment"></i>Comment ({{ blog.comments }})</NuxtLink>
            </li>
         </ul>
         <h3 class="blog-card__title">
            <NuxtLink :to="blog.link">{{ blog.title }}</NuxtLink>
         </h3>
         <p class="blog-card__text">{{ blog.content }}</p>
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
   reverse: Boolean,
   delay: Number,
   accentColor: String,
});
</script>
