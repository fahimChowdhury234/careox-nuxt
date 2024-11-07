<template>
   <section class="product">
      <div class="container">
         <div class="row">
            <div class="col-lg-9">
               <div class="product__info-top">
                  <div class="product__showing-text-box">
                     <p class="product__showing-text">Showing 1–9 of 12 Results</p>
                  </div>
                  <div class="product__showing-sort">
                     <v-select :options="options" v-model="selectedOption" placeholder="Sort by Popular" />
                  </div>
               </div>
               <ProductList exClass="col-sm-6 col-xl-4" />
            </div>
            <div class="col-lg-3">
               <div class="product__sidebar product__sidebar-right">
                  <div class="product__search">
                     <form action="#">
                        <input type="text" placeholder="Keyword..." />
                     </form>
                  </div>
                  <div class="product__price-ranger">
                     <div class="price-ranger">
                        <h3 class="product__sidebar--title">Price</h3>
                        <div class="slider-container">
                           <input type="range" :min="minPriceLimit" :max="maxPriceLimit" v-model="maxPrice" @input="onSliderInput" class="slider" />
                        </div>
                        <div class="ranger-min-max-block">
                           <input type="text" readonly :value="formattedMinPrice" class="min" />
                           <span>-</span>
                           <input type="text" readonly :value="formattedMaxPrice" class="max" />
                           <input type="submit" value="Filter" @click="filterPrices" />
                        </div>
                     </div>
                  </div>
                  <div class="product__categories">
                     <h3 class="product__sidebar--title">Categories</h3>
                     <ul class="list-unstyled">
                        <li><NuxtLink to="/products-right">Web Development</NuxtLink></li>
                        <li><NuxtLink to="/products-right">Social Marketing</NuxtLink></li>
                        <li><NuxtLink to="/products-right">Technology</NuxtLink></li>
                        <li><NuxtLink to="/products-right">Business & Finance</NuxtLink></li>
                        <li><NuxtLink to="/products-right">Graphics Design</NuxtLink></li>
                     </ul>
                  </div>
                  <!-- /.category-widget -->
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
const options = ["Sort by View", "Sort by Price", "Sort by Ratings"];
const selectedOption = ref(null);
const minPriceLimit = ref(50);
const minPrice = ref(50); // Min price is fixed
const maxPriceLimit = ref(1000); // Max price limit
const maxPrice = ref(500); // Initial max price

// Compute formatted values with the currency symbol
const formattedMinPrice = computed(() => `$${minPrice.value}`);
const formattedMaxPrice = computed(() => `$${maxPrice.value}`);

// Handle the slider input (only max price changes)
const onSliderInput = () => {
   if (maxPrice.value < minPrice.value) {
      maxPrice.value = minPrice.value;
   }
};

// Filter function (you can implement the logic for filtering based on min and max)
const filterPrices = () => {
   console.log(`Filtering prices between $${minPrice.value} and $${maxPrice.value}`);
};
</script>

<style scoped>
.slider-container {
   display: flex;
   gap: 10px;
}
.slider {
   flex: 1;
   -webkit-appearance: none;
   appearance: none;
   width: 100%;
   height: 6px;
   background: white;
   border-radius: 5px;
   outline: none;
   border: none;
}

/* Style the slider thumb */
.slider::-webkit-slider-thumb {
   -webkit-appearance: none;
   appearance: none;
   width: 18px;
   height: 18px;
   border-radius: 50%;
   background: var(--careox-base, #ff5528);
   cursor: pointer;
}

.slider::-moz-range-thumb {
   width: 18px;
   height: 18px;
   border-radius: 50%;
   background: var(--careox-base, #ff5528);
   cursor: pointer;
}
.ranger-min-max-block {
   display: flex;
   align-items: center;
   gap: 10px;
}
</style>
