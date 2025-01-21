<template>
  <div class="row gutter-y-30">
    <div v-for="product in products" :key="product.id" :class="`${exClass}`">
      <div class="product__item wow fadeInUp">
        <div class="product__item__img">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="product__item__btn">
          <NuxtLink to="/cart"><span class="far fa-heart"></span></NuxtLink>
          <NuxtLink :to="product.link"><span class="fas fa-eye"></span></NuxtLink>
        </div>
        <div class="product__item__content">
          <h4 class="product__item__title">
            <NuxtLink :to="product.link">{{ product.title }}</NuxtLink>
          </h4>
          <div class="product__item__price">
            <span class="product__item__price__regular">{{ product.regularPrice }}</span>
            <span class="product__item__price__offer">{{ product.offerPrice }}</span>
          </div>
          <div class="product__item__ratings">
            <span v-for="n in product.rating" :key="n" class="icon-star"></span>
          </div>
          <NuxtLink to="/cart" class="careox-btn product__item__link">
            <span>Add to Cart</span>
          </NuxtLink>
          <a href="cart.html" class="careox-btn product__item__link"><span>Add to Cart</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import product data
import { products } from "@/data/Products";
defineProps({
  exClass: String,
});
</script>

<style scoped>
/* Add any custom styles for the product list here */
</style>
