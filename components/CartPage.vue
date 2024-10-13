<template>
   <section class="cart-page">
      <div class="container">
         <!-- Cart Table Component -->
         <CartTable :cartItems="cartItems" @updateQuantity="updateQuantity" @removeItem="removeItem" />

         <div class="row">
            <div class="col-xl-8 col-lg-7">
               <!-- Coupon Form Component -->
               <CouponForm :couponSection="couponSection" />
            </div>
            <div class="col-xl-4 col-lg-5">
               <!-- Cart Totals Component -->
               <CartTotal :totalSection="totalSection" />
               <div class="cart-page__buttons">
                  <a href="#" class="careox-btn"><span>Update</span></a>
                  <NuxtLink to="/checkout" class="careox-btn"><span>Checkout</span></NuxtLink>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { cartItems as initialCartItems, couponSection, totalSection } from "@/data/CartData";
import { ref } from "vue";

const cartItems = ref([...initialCartItems]);

const updateQuantity = (id, action) => {
   const item = cartItems.value.find((item) => item.id === id);
   if (item) {
      if (action === "increase") {
         item.quantity += 1;
      } else if (action === "decrease" && item.quantity > 1) {
         item.quantity -= 1;
      }
      item.total = item.quantity * item.price;
   }
};

const removeItem = (id) => {
   cartItems.value = cartItems.value.filter((item) => item.id !== id);
};
</script>

<style scoped>
/* Add your styles here */
</style>
