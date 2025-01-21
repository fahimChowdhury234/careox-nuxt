<template>
  <div class="donate-page__content">
    <div class="donate-page__notice">
      <div class="donate-page__notice__icon">
        <i class="icofont-alarm"></i>
      </div>
      <span>Notice:</span> Test mode is enabled. While in test mode no live donations are processed.
    </div>

    <!-- Donation Form -->
    <form @submit.prevent="submitDonation" class="donate-page__form">
      <!-- Donation Amount Input -->
      <div class="donate-page__form__amount">
        <span class="donate-page__form__amount__sign">$</span>
        <input type="text" v-model="donationAmount" @input="validateDonationAmount" :class="{ 'input-error': donationAmountError }" placeholder="Amount" class="donate-page__form__amount__input" />
        <div v-if="donationAmountError" class="error-message">{{ donationAmountError }}</div>
      </div>

      <!-- Suggested Amount Buttons -->
      <div class="donate-page__form__buttons">
        <button v-for="amount in donatePageData.suggestedAmounts" :key="amount" type="button" class="donate-page__form__buttons__item" :class="{ active: donationAmount == amount }" @click="setDonationAmount(amount)">
          $<span class="donate-page__form__buttons__amount">{{ amount }}</span>
        </button>
        <button type="button" class="donate-page__form__buttons__item" @click="donationAmount = ''">Custom Amount</button>
      </div>
      <div class="donate-page__form__payment">
        <h3 class="donate-page__form__title">Select Payment Method</h3>
        <!-- /.donate-page__form__title -->
        <div class="donate-page__form__payment__method">
          <div class="donate-page__form__payment__method__item">
            <input type="radio" id="account" name="donation" checked />
            <label for="account">test donation<span></span></label>
          </div>
          <div class="donate-page__form__payment__method__item">
            <input type="radio" id="ship" name="donation" />
            <label for="ship">offline donation<span></span></label>
          </div>
        </div>
      </div>
      <!-- /.donate-page__form__payment -->
      <!-- Personal Info -->
      <div class="donate-page__form__info form-one">
        <h3 class="donate-page__form__title">Personal Info</h3>
        <div class="form-one__group">
          <!-- Name -->
          <div class="form-one__control">
            <input type="text" v-model="personalInfo.name" @input="validateName" :class="{ 'input-error': nameError }" placeholder="Your Name" />
            <div v-if="nameError" class="error-message">{{ nameError }}</div>
          </div>

          <!-- Email -->
          <div class="form-one__control">
            <input type="email" v-model="personalInfo.email" @input="validateEmail" :class="{ 'input-error': emailError }" placeholder="Your Email" />
            <div v-if="emailError" class="error-message">{{ emailError }}</div>
          </div>

          <!-- Address -->
          <div class="form-one__control form-one__control--full">
            <input type="text" v-model="personalInfo.address" @input="validateAddress" :class="{ 'input-error': addressError }" placeholder="Address" />
            <div v-if="addressError" class="error-message">{{ addressError }}</div>
          </div>
        </div>

        <!-- Donation Total -->
        <div class="donate-page__form__donate-amount">
          Donation Total: <span>${{ donationAmount || 0 }}</span>
        </div>
        <button type="submit" class="careox-btn">
          <span>Donate Now</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
// Import data from the data.js file
import { donatePageData } from "~/data/Donate";
import { ref, reactive } from "vue";

// Local component state
const donationAmount = ref(donatePageData.initialAmount);
const selectedPaymentMethod = ref(donatePageData.paymentMethods[0].id);
const personalInfo = reactive({
  name: "",
  email: "",
  address: "",
});

// Error states for validation
const donationAmountError = ref("");
const nameError = ref("");
const emailError = ref("");
const addressError = ref("");

// Validation methods
const validateDonationAmount = () => {
  const amount = parseFloat(donationAmount.value);
  if (isNaN(amount) || amount <= 0) {
    donationAmountError.value = "Please enter a valid donation amount.";
  } else {
    donationAmountError.value = "";
  }
};
const setDonationAmount = (amount) => {
  donationAmount.value = amount;
};
const validateName = () => {
  if (!personalInfo.name.trim()) {
    nameError.value = "Name is required.";
  } else {
    nameError.value = "";
  }
};

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(personalInfo.email)) {
    emailError.value = "Please enter a valid email address.";
  } else {
    emailError.value = "";
  }
};

const validateAddress = () => {
  if (!personalInfo.address.trim()) {
    addressError.value = "Address is required.";
  } else {
    addressError.value = "";
  }
};

const submitDonation = async () => {
  validateDonationAmount();
  validateName();
  validateEmail();
  validateAddress();

  if (!donationAmountError.value && !nameError.value && !emailError.value && !addressError.value) {
    try {
      const response = await fetch("https://formspree.io/f/movqqqzw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donationAmount: donationAmount.value,
          personalInfo: {
            name: personalInfo.name,
            email: personalInfo.email,
            address: personalInfo.address,
          },
        }),
      });

      if (response.ok) {
        alert("Donation submitted successfully!");
        // Reset form
        donationAmount.value = "";
        personalInfo.name = "";
        personalInfo.email = "";
        personalInfo.address = "";
      } else {
        alert("Failed to submit the donation. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while submitting the donation.");
    }
  } else {
    alert("Please correct the errors before submitting.");
  }
};
</script>

<style scoped>
/* Add any scoped styles for DonatePageContent here */
.input-error {
  border-color: red;
}
.error-message {
  color: red;
  font-size: 0.875rem;
}
</style>
