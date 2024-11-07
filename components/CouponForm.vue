<template>
   <form @submit.prevent="submitForm" class="cart-page__coupone-form">
      <input v-model="couponCode" type="text" :placeholder="couponSection.placeholder" class="cart-cupon__input" />
      <button type="submit" class="careox-btn careox-btn--base"><span>Apply Coupon</span><span></span></button>
   </form>
</template>

<script setup>
defineProps({
   couponSection: Object,
});

const couponCode = ref("");
const submitForm = () => {
   if (couponCode.value) {
      // Emit the coupon code to parent component
      console.log(couponCode.value);
   } else {
      alert("Please enter a coupon code.");
   }
};
</script>

<style scoped>
/* Add your styles here */
</style>
