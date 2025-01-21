<template>
  <div class="container">
    <div class="main-footer__top">
      <div class="row">
        <div class="col-md-6">
          <div class="main-footer__top__left">
            <div class="main-footer__top__left__icon">
              <i :class="newsletterData.icon"></i>
            </div>
            <h5 class="main-footer__top__left__title">{{ newsletterData.title }}</h5>
            <p class="main-footer__top__left__text">{{ newsletterData.text }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <form @submit.prevent="handleSubmit" class="main-footer__newsletter">
            <input type="text" v-model="email" placeholder="Enter email address" :class="{ 'is-invalid': emailError }" />

            <button type="submit" class="" :disabled="loading">
              <span v-if="loading" class="spinner"></span>
              <i class="fas fa-paper-plane" v-else></i>
              <span class="sr-only">submit</span>
            </button>
          </form>
          <span v-if="emailError" class="error-text">{{ emailError }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define props for newsletter data
defineProps({
  newsletterData: Object,
});

// State variables
const email = ref("");
const emailError = ref("");
const loading = ref(false);

// Validate email format
const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

// Handle form submission
const handleSubmit = async () => {
  // Reset any previous error
  emailError.value = "";

  // Email validation
  if (!email.value) {
    emailError.value = "Email address is required";
    return;
  } else if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  // Set loading state
  loading.value = true;

  // Simulate form submission to a URL (replace with your API)
  try {
    const response = await fetch("https://formspree.io/f/xvgooolv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value }),
    });

    const result = await response.json();

    // Handle success or failure response
    if (response.ok) {
      alert("Email submitted successfully!");
      email.value = ""; // Reset email field after submission
    } else {
      alert("Failed to submit email. Try again later.");
    }
  } catch (error) {
    alert("An error occurred while submitting the email.");
  } finally {
    loading.value = false; // Reset loading state
  }
};
</script>

<style scoped>
.is-invalid {
  border: 1px solid red;
}
.error-text {
  display: block;
  color: red;
  font-size: 14px;
  max-width: 400px;
  margin-left: auto;
  margin-top: 5px;
}
</style>
