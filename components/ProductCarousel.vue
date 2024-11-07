<template>
   <section class="product">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div class="product__carousel">
                  <client-only>
                     <div ref="slider" class="my-slider">
                        <div class="slide" v-for="product in products" :key="product.id" :class="`${exClass}`">
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
                              </div>
                           </div>
                        </div>
                     </div>
                  </client-only>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { products } from "@/data/Products";

const slider = ref(null);

onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         loop: true,
         autoplay: false,
         gutter: 30,
         mouseDrag: true,
         preventScrollOnTouch: "auto",
         nav: true,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         navPosition: "bottom",
         autoplayTimeout: 6000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            500: { items: 2 },
            992: { items: 4 },
         },
      });
   }
});
</script>

<style lang="scss" scoped></style>
