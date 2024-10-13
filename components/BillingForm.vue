<template>
   <div class="col-xl-6 col-lg-6">
      <div class="checkout-page__billing-address">
         <h2 class="checkout-page__billing-address__title">{{ checkoutData.billingDetails.title }}</h2>
         <form class="checkout-page__form">
            <div class="row">
               <div class="col-xl-12" v-for="(field, index) in checkoutData.billingDetails.formFields" :key="index">
                  <div class="checkout-page__input-box">
                     <template v-if="field.type === 'select'">
                        <client-only>
                           <v-select :options="field.options" :placeholder="field.placeholder" />
                        </client-only>
                     </template>

                     <div v-else-if="field.type === 'checkbox'" class="checkout-page__check-box">
                        <input type="checkbox" :name="field.name" :checked="field.checked" :id="field.name" />
                        <label :for="field.name">{{ field.label }}<span></span></label>
                     </div>

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
