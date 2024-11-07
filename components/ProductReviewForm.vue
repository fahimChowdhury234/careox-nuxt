<template>
   <div class="product-details__form">
      <h3 class="product-details__form-title">Add a review</h3>

      <div class="product-details__form-ratings">
         <p class="product-details__form-ratings__label">Rate this product?</p>
         <span v-for="star in 5" :key="star" class="fa fa-star"></span>
      </div>

      <form @submit.prevent="submitForm" class="comments-form__form contact-form-validated product-details__form__form form-one">
         <div class="form-one__group">
            <div class="form-one__control form-one__control--full">
               <textarea v-model="formData.message" name="message" placeholder="Write a message"></textarea>
               <p v-if="errors.message" class="error">{{ errors.message }}</p>
            </div>
            <div class="form-one__control">
               <input v-model="formData.name" type="text" name="name" placeholder="Your name" />
               <p v-if="errors.name" class="error">{{ errors.name }}</p>
            </div>
            <div class="form-one__control">
               <input v-model="formData.email" type="email" name="email" placeholder="Email address" />
               <p v-if="errors.email" class="error">{{ errors.email }}</p>
            </div>
            <div class="form-one__control form-one__control--full">
               <button type="submit" class="careox-btn">
                  <span v-if="!loading">Submit Review</span>
                  <span v-else>Submitting...</span>
               </button>
            </div>
         </div>
      </form>

      <div class="result">
         <p v-if="successMessage" class="success mt-2">{{ successMessage }}</p>
         <p v-if="errorMessage" class="error mt-2">{{ errorMessage }}</p>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";

// Form data and state
const formData = ref({
   name: "",
   email: "",
   message: "",
});

const errors = ref({
   name: null,
   email: null,
   message: null,
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// Form validation
const validateForm = () => {
   let valid = true;
   errors.value = { name: null, email: null, message: null };

   if (!formData.value.name) {
      errors.value.name = "Name is required";
      valid = false;
   }
   if (!formData.value.email || !/\S+@\S+\.\S+/.test(formData.value.email)) {
      errors.value.email = "Valid email is required";
      valid = false;
   }
   if (!formData.value.message) {
      errors.value.message = "Message is required";
      valid = false;
   }

   return valid;
};

// Submit form
const submitForm = async () => {
   if (!validateForm()) return;

   loading.value = true;
   successMessage.value = "";
   errorMessage.value = "";

   const formDataToSend = {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
   };

   try {
      const response = await fetch("https://formspree.io/f/xgveeebz", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
         // Assuming the form is submitted successfully
         successMessage.value = "Review submitted successfully!";
         formData.value = { name: "", email: "", message: "" }; // Reset form data

         // Clear the success message after 5 seconds
         setTimeout(() => {
            successMessage.value = "";
         }, 5000);
      } else {
         // Handle errors
         errorMessage.value = "Something went wrong. Please try again.";
      }
   } catch (error) {
      // Catch network or other errors
      errorMessage.value = "An error occurred. Please try again.";
   } finally {
      loading.value = false;
   }
};
</script>

<style scoped>
.error {
   color: red;
   font-size: 14px;
}

.success {
   color: green;
   font-size: 14px;
}
</style>
