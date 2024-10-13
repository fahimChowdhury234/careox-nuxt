<template>
   <div class="product-details__comment">
      <h3 class="product-details__review-title">Comments ({{ comments.length }})</h3>
      <div v-for="comment in comments" :key="comment.id" class="product-details__comment-box">
         <figure class="product-details__comment-box__thumb">
            <img :src="comment.avatar" :alt="comment.author" />
         </figure>
         <h4 class="product-details__comment-box__meta">
            {{ comment.author }}
            <span class="product-details__comment-box__date">{{ comment.date }} . {{ comment.time }}</span>
         </h4>
         <div class="product-details__comment-box__ratings">
            <span v-for="star in comment.rating" :key="star" class="fa fa-star"></span>
         </div>
         <p class="product-details__comment-box__text">{{ comment.text }}</p>
      </div>
   </div>
</template>

<script setup>
defineProps({
   comments: Array,
});
</script>

<style scoped>
/* Your CSS here */
</style>
