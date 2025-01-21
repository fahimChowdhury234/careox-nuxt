<template>
  <section class="product">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="product__info-top">
            <div class="product__showing-text-box">
              <p class="product__showing-text">Showing 1–9 of 12 Results</p>
            </div>
            <div class="product__showing-sort">
              <v-select :options="options" v-model="selectedOption" placeholder="Sort by Popular" />
            </div>
          </div>
          <ProductList exClass="col-xl-3 col-lg-4 col-sm-6" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const options = ["Sort by View", "Sort by Price", "Sort by Ratings"];
const selectedOption = ref(null);
</script>

<style lang="scss" scoped></style>
