<template>
   <ul class="cart-page__cart-total list-unstyled">
      <li>
         <span>Subtotal</span><span class="cart-page__cart-total-amount">${{ totalSection.subtotal }} USD</span>
      </li>
      <li>
         <span>Shipping Cost</span><span class="cart-page__cart-total-amount">${{ totalSection.shipping }} USD</span>
      </li>
      <li>
         <span>Total</span><span class="cart-page__cart-total-amount">${{ totalSection.total }} USD</span>
      </li>
   </ul>
</template>

<script setup>
defineProps({
   totalSection: Object,
});
</script>

<style scoped>
/* Add your styles here */
</style>
