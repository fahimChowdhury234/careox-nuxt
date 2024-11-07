<!-- pages/CheckoutPage.vue -->
<template>
   <section class="checkout-page">
      <div class="container">
         <div>
            {{ checkoutData.notice.text }} <NuxtLink :to="checkoutData.notice.href">{{ checkoutData.notice.linkText }}</NuxtLink>
         </div>
         <div class="row">
            <BillingForm :checkoutData="checkoutData" />
            <ShippingForm :checkoutData="checkoutData" />
         </div>
         <div class="row">
            <OrderSummary :checkoutData="checkoutData" />
         </div>
      </div>
   </section>
</template>

<script setup>
import checkoutData from "@/data/Checkout";
</script>

<style scoped>
/* Add styles here */
</style>
