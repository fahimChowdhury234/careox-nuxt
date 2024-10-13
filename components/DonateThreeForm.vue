<!-- ~/components/DonateForm.vue -->

<template>
   <form @submit.prevent="submitDonation" class="donate-three__form">
      <div class="donate-three__form__amount">
         <span class="donate-three__form__amount__sign">$</span>
         <input type="text" v-model="donateAmount" placeholder="Amount" class="donate-three__form__amount__input" />
      </div>
      <div class="donate-three__form__buttons">
         <button v-for="amount in presetAmounts" :key="amount" :class="{ active: donateAmount == amount }" @click="setAmount(amount)" type="button" class="donate-three__form__buttons__item">
            $<span class="donate-three__form__buttons__amount">{{ amount }}</span>
         </button>
         <button type="button" class="donate-three__form__buttons__item" @click="setCustomAmount">Custom</button>
      </div>
      <div class="donate-three__form__submit">
         <button type="submit" class="careox-btn"><span>Donate Now</span></button>
         <div class="donate-three__form__volunter">
            <img :src="volunteers.volunteer1" alt="volunteer-1" />
            <img :src="volunteers.volunteer2" alt="volunteer-2" />
            <img :src="volunteers.volunteer3" alt="volunteer-3" />
            <div class="donate-three__form__volunter__total">+1K</div>
            <h5 class="donate-three__form__volunter__active">Active Donor’s</h5>
         </div>
      </div>
   </form>
</template>

<script setup>
import { ref } from "vue";
import { volunteers } from "~/data/DonateThree";

// Donation logic
const donateAmount = ref(200);
const presetAmounts = [100, 200, 500, 300];

const setAmount = (amount) => {
   donateAmount.value = amount;
};

const setCustomAmount = () => {
   donateAmount.value = "";
};

const submitDonation = () => {
   alert(`You have donated $${donateAmount.value}`);
};
</script>

<style scoped>
/* Add any styles specific to the donation form here */
</style>
