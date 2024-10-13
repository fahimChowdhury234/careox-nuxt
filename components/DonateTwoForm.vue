<template>
   <form action="#" class="donate-two__form">
      <div class="donate-two__form__amount">
         <span class="donate-two__form__amount__sign">$</span>
         <input type="text" v-model="donationAmount" placeholder="Amount" class="donate-two__form__amount__input" />
      </div>

      <div class="donate-two__form__buttons">
         <button v-for="amount in amounts" :key="amount" type="button" class="donate-two__form__buttons__item" :class="{ active: donationAmount === amount }" @click="donationAmount = amount">
            $<span class="donate-two__form__buttons__amount">{{ amount }}</span>
         </button>
         <button type="button" class="donate-two__form__buttons__item" @click="donationAmount = 'Custom'">Custom</button>
      </div>

      <div class="donate-two__form__submit">
         <button type="submit" class="careox-btn"><span>Donate Now</span></button>
         <img :src="arrow" alt="careox" />
      </div>
   </form>
</template>

<script setup>
// Props to accept donation amounts and default value from the parent component
const props = defineProps({
   defaultAmount: Number,
   amounts: Array,
   arrow: String,
});

const donationAmount = ref(props.defaultAmount);
</script>

<style scoped>
/* Add your styles for the form here */
</style>
