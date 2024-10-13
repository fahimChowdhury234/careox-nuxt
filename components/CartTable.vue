<template>
   <div class="table-responsive">
      <table class="table cart-page__table">
         <thead>
            <tr>
               <th>Item</th>
               <th>Price</th>
               <th>Quantity</th>
               <th>Total</th>
               <th>Remove</th>
            </tr>
         </thead>
         <tbody>
            <!-- Check if cartItems has data -->
            <template v-if="cartItems.length">
               <tr v-for="item in cartItems" :key="item.id">
                  <td>
                     <div class="cart-page__table__meta">
                        <div class="cart-page__table__meta-img">
                           <img :src="item.image" alt="Product Image" />
                        </div>
                        <h3 class="cart-page__table__meta-title">{{ item.title }}</h3>
                     </div>
                  </td>
                  <td>${{ item.price }}</td>
                  <td>
                     <div class="product-details__quantity">
                        <div class="quantity-box">
                           <button type="button" class="sub" @click="updateQuantity(item.id, 'decrease')">
                              <i class="fa fa-minus"></i>
                           </button>
                           <input type="text" :value="item.quantity" readonly />
                           <button type="button" class="add" @click="updateQuantity(item.id, 'increase')">
                              <i class="fa fa-plus"></i>
                           </button>
                        </div>
                     </div>
                  </td>
                  <td>${{ item.total }}</td>
                  <td>
                     <p class="cart-page__table__remove" @click="removeItem(item.id)">
                        <span class="icofont-close-line"></span>
                     </p>
                  </td>
               </tr>
            </template>

            <!-- If no items, show 'No Data' row -->
            <template v-else>
               <tr>
                  <td colspan="5" class="text-center">No Data Found</td>
               </tr>
            </template>
         </tbody>
      </table>
   </div>
</template>

<script setup>
const props = defineProps({
   cartItems: Array,
});

const emit = defineEmits(["updateQuantity", "removeItem"]);

const updateQuantity = (id, action) => {
   emit("updateQuantity", id, action);
};

const removeItem = (id) => {
   emit("removeItem", id);
};
</script>

<style scoped>
/* Add styles if necessary */
.table-responsive {
   overflow-x: auto;
}

.text-center {
   text-align: center;
   font-size: 16px;
   color: #888;
}
</style>
