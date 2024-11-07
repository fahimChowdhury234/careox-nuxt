<!-- components/ShippingForm.vue -->
<template>
   <div class="col-xl-6 col-lg-6">
      <div class="checkout-page__shipping-address">
         <h2 class="checkout-page__shipping-address__title">
            <input type="checkbox" v-model="checkoutData.shippingDetails.checkbox.checked" />
            <label><span></span>{{ checkoutData.shippingDetails.title }}</label>
         </h2>
         <form class="checkout-page__form" v-if="checkoutData.shippingDetails.checkbox.checked">
            <div class="row" v-for="(field, index) in checkoutData.shippingDetails.formFields" :key="index">
               <div class="col-xl-12">
                  <div class="checkout-page__input-box">
                     <template v-if="field.type === 'select'">
                        <client-only>
                           <v-select :options="field.options" :placeholder="field.placeholder" />
                        </client-only>
                     </template>

                     <template v-else-if="field.type === 'textarea'">
                        <textarea :name="field.name" :placeholder="field.placeholder" class="form-control"></textarea>
                     </template>

                     <template v-else>
                        <input :type="field.type" :name="field.name" :placeholder="field.placeholder" :required="field.required" :pattern="field.pattern" class="form-control" />
                     </template>
                  </div>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>

<script setup>
defineProps({
   checkoutData: Object,
});
</script>

<style scoped>
/* Add styles here */
</style>
