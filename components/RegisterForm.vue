<template>
   <section class="register-page">
      <div class="container">
         <div class="register-page__wrap">
            <h3 class="register-page__wrap__title">Register your Account:</h3>
            <form @submit.prevent="onSubmit" class="register-page__form">
               <div class="row">
                  <div class="col-md-6">
                     <div class="register-page__form-input-box">
                        <input v-model="form.firstName" type="text" placeholder="First Name *" :class="{ 'input-error': errors.firstName }" />
                        <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="register-page__form-input-box">
                        <input v-model="form.lastName" type="text" placeholder="Last Name *" :class="{ 'input-error': errors.lastName }" />
                        <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                     </div>
                  </div>
                  <div class="col-md-12">
                     <div class="register-page__form-input-box">
                        <input v-model="form.email" type="email" placeholder="Email *" :class="{ 'input-error': errors.email }" />
                        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="register-page__form-input-box">
                        <input v-model="form.password" type="password" placeholder="Password *" :class="{ 'input-error': errors.password }" />
                        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="register-page__form-input-box">
                        <input v-model="form.confirmPassword" type="password" placeholder="Confirm Password *" :class="{ 'input-error': errors.confirmPassword }" />
                        <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
                     </div>
                  </div>
               </div>

               <div class="register-page__checked-box">
                  <input type="checkbox" v-model="form.agreeTerms" id="save-data" :class="{ 'input-error': errors.agreeTerms }" />
                  <label for="save-data"> <span></span>I agree with the Terms of Service </label>
                  <span v-if="errors.agreeTerms" class="error-message">{{ errors.agreeTerms }}</span>
               </div>

               <button type="submit" class="careox-btn"><span>Register Now</span></button>
            </form>
         </div>
      </div>
   </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   confirmPassword: "",
   agreeTerms: false,
});

const errors = reactive({
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   confirmPassword: "",
   agreeTerms: "",
});

// Basic validation logic
const validateForm = () => {
   let isValid = true;
   Object.keys(errors).forEach((key) => {
      errors[key] = ""; // Reset errors
   });

   if (!form.firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
   }

   if (!form.lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
   }

   const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
   if (!form.email || !emailPattern.test(form.email)) {
      errors.email = "A valid Email is required";
      isValid = false;
   }

   if (!form.password) {
      errors.password = "Password is required";
      isValid = false;
   } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
   }

   if (!form.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
      isValid = false;
   } else if (form.confirmPassword !== form.password) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
   }

   if (!form.agreeTerms) {
      errors.agreeTerms = "You must agree to the Terms of Service";
      isValid = false;
   }

   return isValid;
};

const onSubmit = () => {
   if (validateForm()) {
      alert("Form submitted successfully");
      // Handle form submission logic (e.g., send data to backend)
   } else {
      console.log("Form validation failed");
   }
};
</script>

<style scoped>
.input-error {
   border-color: red;
}

.error-message {
   color: red;
   font-size: 12px;
}
</style>
