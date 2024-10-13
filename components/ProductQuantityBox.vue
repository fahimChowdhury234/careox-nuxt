<template>
   <div class="product-details__quantity">
      <h3 class="product-details__quantity-title">Quantity</h3>
      <div class="quantity-box">
         <button type="button" class="sub" @click="decrementQuantity"><i class="fa fa-minus"></i></button>
         <input type="text" id="quantity" :value="quantity" @input="updateQuantity" />
         <button type="button" class="add" @click="incrementQuantity"><i class="fa fa-plus"></i></button>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";

const quantity = ref(1);

// Function to increase the quantity
const incrementQuantity = () => {
   quantity.value++;
};

// Function to decrease the quantity
const decrementQuantity = () => {
   if (quantity.value > 1) {
      quantity.value--;
   }
};

// Function to update quantity from user input
const updateQuantity = (event) => {
   const value = parseInt(event.target.value);
   if (!isNaN(value) && value > 0) {
      quantity.value = value;
   } else {
      quantity.value = 1; // Default to 1 if the input is invalid
   }
};
</script>

<style scoped>
/* Your CSS here */
</style>
