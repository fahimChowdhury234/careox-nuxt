<template>
   <div class="product-details__content">
      <div class="product-details__top">
         <h3 class="product-details__title">{{ title }}</h3>
         <div class="product-details__price">${{ price.toFixed(2) }}</div>
      </div>
      <div class="product-details__review">
         <span v-for="star in reviewStars" :key="star" class="fa fa-star"></span>
         <NuxtLink to="/product-details">{{ reviewsCount }} Customer Reviews</NuxtLink>
      </div>
      <div class="product-details__divider"></div>
      <div class="product-details__excerpt">
         <p class="product-details__excerpt-text1">{{ excerptText1 }}</p>
         <p class="product-details__excerpt-text2">{{ excerptText2 }}</p>
      </div>
      <ProductQuantityBox />
      <div class="product-details__buttons">
         <NuxtLink to="/cart" class="careox-btn"><span>Add to Cart</span></NuxtLink>
         <NuxtLink to="/cart" class="careox-btn"><span>Add to wishlist</span></NuxtLink>
      </div>

      <!-- /.qty-btn -->
      <ProductDetailsSocials :socialLinks="socialLinks" />
   </div>
</template>

<script setup>
defineProps({
   title: String,
   price: Number,
   reviewStars: Number,
   reviewsCount: Number,
   excerptText1: String,
   excerptText2: String,
   cartLink: String,
   socialLinks: Array,
});
</script>

<style scoped>
/* Your CSS here */
</style>
