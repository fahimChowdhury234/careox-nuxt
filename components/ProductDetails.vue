<template>
   <section class="product-details">
      <div class="container">
         <div class="row">
            <div class="col-lg-6 col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
               <ProductDetailsImage :imageSrc="productsDetails.image" :title="productsDetails.title" />
            </div>
            <div class="col-lg-6 col-xl-6 wow fadeInRight" data-wow-delay="300ms">
               <ProductDetailsInfo
                  :title="productsDetails.title"
                  :price="productsDetails.price"
                  :reviewStars="productsDetails.reviewStars"
                  :reviewsCount="productsDetails.reviewsCount"
                  :excerptText1="productsDetails.excerptText1"
                  :excerptText2="productsDetails.excerptText2"
                  :socialLinks="productsDetails.socialLinks"
               />
            </div>
         </div>
         <ProductDescription :description="productsDetails.description" />
         <ProductComments :comments="productsDetails.comments" />
         <ProductReviewForm />
      </div>
   </section>
</template>

<script setup>
import { productsDetails } from "@/data/ProductsDetails";
</script>
