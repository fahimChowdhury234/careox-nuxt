<template>
   <div class="checkout-page__your-order">
      <h2 class="checkout-page__your-order__title">{{ checkoutData.orderSummary.title }}</h2>
      <div class="row">
         <div class="col-xl-6 col-lg-6">
            <table class="checkout-page__order-table">
               <thead class="order_table_head">
                  <tr>
                     <th>Product</th>
                     <th class="right">Price</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="item in checkoutData.orderSummary.items" :key="item.name">
                     <td class="pro__title">{{ item.name }}</td>
                     <td class="pro__price">{{ item.price }}</td>
                  </tr>
                  <tr v-for="summary in checkoutData.orderSummary.summary" :key="summary.label">
                     <td class="pro__title">{{ summary.label }}</td>
                     <td class="pro__price">{{ summary.value }}</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <!-- Payment Options -->
         <ClientOnly>
            <div class="col-lg-6">
               <div class="checkout-page__payment">
                  <div
                     v-for="payment in checkoutData.paymentOptions"
                     :key="payment.id"
                     class="checkout-page__payment__item"
                     :class="{ 'checkout-page__payment__item--active': selectedPayment === payment.id }"
                     @click="selectedPayment = payment.id"
                  >
                     <h3 class="checkout-page__payment__title">
                        {{ payment.title }}
                        <img v-if="payment.image" :src="payment.image" alt="Payment image" />
                     </h3>
                     <div class="checkout-page__payment__content" v-if="selectedPayment === payment.id">
                        {{ payment.content }}
                     </div>
                  </div>
               </div>

               <div class="text-right d-flex justify-content-end">
                  <NuxtLink :to="checkoutData.placeOrder.href" class="careox-btn">
                     <span>{{ checkoutData.placeOrder.buttonText }}</span>
                  </NuxtLink>
               </div>
            </div>
         </ClientOnly>
      </div>
   </div>
</template>

<script setup>
const isOpen = ref(false);
defineProps({
   checkoutData: Object,
});
const selectedPayment = ref("bank");
</script>

<style scoped>
.active-content {
   opacity: 1;
   visibility: visible;
   transition: all 500ms ease-in;
}
.hide-content {
   opacity: 0;
   visibility: hidden;
}
</style>
