<template>
   <section class="become-volunter">
      <div class="container">
         <div class="row">
            <div class="col-lg-6">
               <div class="become-volunter__content">
                  <h3 class="become-volunter__title">{{ content.title }}</h3>
                  <p class="become-volunter__text">{{ content.text }}</p>
                  <div class="become-volunter__highlight">{{ content.highlight }}</div>

                  <ul class="become-volunter__list">
                     <li v-for="(item, index) in content.list" :key="index">
                        <span class="become-volunter__list__icon"><i :class="item.icon"></i></span>
                        {{ item.text }}
                        <a v-if="item.linkText" :href="item.linkUrl">{{ item.linkText }}</a>
                     </li>
                  </ul>

                  <div class="row">
                     <div v-for="(image, index) in content.images" :key="index" class="col-md-6">
                        <div class="become-volunter__image">
                           <img :src="image" alt="careox" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="col-lg-6">
               <form @submit.prevent="handleSubmit" class="contact-one__form contact-form-validated form-one wow fadeInUp" data-wow-duration="1500ms">
                  <div class="form-one__group">
                     <div
                        v-for="(field, index) in content.form.fields"
                        :key="index"
                        :class="['form-one__control', { 'form-one__control--full': field.name !== 'occupation' && field.name !== 'address' }]"
                     >
                        <!-- Input fields -->
                        <input v-if="field.type !== 'textarea' && field.type !== 'select'" :type="field.type" v-model="formData[field.name]" :name="field.name" :placeholder="field.placeholder" />
                        <!-- Textarea field -->
                        <textarea v-if="field.type === 'textarea'" v-model="formData[field.name]" :name="field.name" :placeholder="field.placeholder"></textarea>
                        <!-- Select field -->
                        <div v-if="field.type === 'select'" class="form-one__control__select">
                           <v-select v-model="formData[field.name]" :options="field.options" :placeholder="field.placeholder" />
                        </div>
                        <!-- Error message -->
                        <p v-if="errors[field.name]" class="error-message">{{ errors[field.name] }}</p>
                     </div>

                     <div class="form-one__control form-one__control--full">
                        <button type="submit" class="careox-btn" :disabled="loading">
                           <span v-if="loading" class="spinner"></span>
                           <span v-else>{{ content.form.submitText }}</span>
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </section>
</template>

<!-- <script setup>
import { volunteerContent } from "@/data/BecomeVolunteer";
const content = ref(volunteerContent);
</script> -->
<script setup>
import { ref } from "vue";
import { volunteerContent } from "@/data/BecomeVolunteer";

// Data and form state
const content = ref(volunteerContent);
const formData = ref({
   name: "",
   email: "",
   message: "",
   occupation: "",
});
const errors = ref({});
const loading = ref(false);

// Validation logic
const validateForm = () => {
   errors.value = {};
   let isValid = true;

   if (!formData.value.name) {
      errors.value.name = "Name is required";
      isValid = false;
   }

   if (!formData.value.email) {
      errors.value.email = "Email is required";
      isValid = false;
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
      errors.value.email = "Email is invalid";
      isValid = false;
   }

   if (!formData.value.message) {
      errors.value.message = "Message is required";
      isValid = false;
   }

   return isValid;
};

// Handle form submission
const handleSubmit = async () => {
   // Validate form before submission
   if (!validateForm()) return;

   // Set loading state
   loading.value = true;

   try {
      // Simulate form submission to the given URL
      const response = await fetch("https://formspree.io/f/xjkvvvzq", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData.value),
      });

      if (response.ok) {
         alert("Form submitted successfully!");
         // Reset form data after successful submission
         formData.value = {
            name: "",
            email: "",
            message: "",
            occupation: "",
         };
      } else {
         alert("Failed to submit the form. Please try again.");
      }
   } catch (error) {
      alert("An error occurred during form submission.");
   } finally {
      // Reset loading state
      loading.value = false;
   }
};
</script>
<style scoped></style>
