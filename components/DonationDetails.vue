<template>
   <section class="donation-details">
      <div class="container">
         <div class="row">
            <div class="col-lg-8">
               <div class="donation-details__content">
                  <div class="donation-details__image">
                     <img :src="donationDetails.image" :alt="donationDetails.alt" />
                     <div class="donation-details__image__bottom">
                        <div class="donation-details__image__progress" v-observe-visibility="visibilityChanged">
                           <div class="donation-details__image__progress__inner count-bar" :style="{ width: startCounter ? Number(donationDetails.percent) + '%' : '0%' }">
                              <div class="donation-details__image__progress__number count-text">
                                 <count-up :startVal="0" :endVal="startCounter ? donationDetails.percent : 0"></count-up>
                                 %
                              </div>
                           </div>
                        </div>
                        <div class="donation-details__image__text">
                           <span>${{ donationDetails.goals }} Goals</span>
                           <span>${{ donationDetails.donated }} Donate</span>
                        </div>
                        <div class="donation-details__image__border"></div>
                        <NuxtLink to="/donate" class="careox-btn"><span>Donate Now</span></NuxtLink>
                     </div>
                  </div>
                  <p class="donation-details__text">{{ donationDetails.text1 }}</p>
                  <p class="donation-details__text">{{ donationDetails.text2 }}</p>
                  <h3 class="donation-details__title">{{ donationDetails.summaryTitle }}</h3>
                  <p class="donation-details__text">{{ donationDetails.summaryText }}</p>
                  <div class="row gutter-y-30">
                     <div class="col-md-6">
                        <div class="donation-details__image-two">
                           <img :src="donationDetails.additionalImages[0]" alt="careox" />
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="donation-details__image-two">
                           <img :src="donationDetails.additionalImages[1]" alt="careox" />
                        </div>
                     </div>
                  </div>
                  <ul class="donation-details__list">
                     <li v-for="(item, index) in donationDetails.listItems" :key="index">
                        <span class="donation-details__list__icon"><i class="icofont-check-circled"></i></span>
                        {{ item }}
                     </li>
                  </ul>
                  <NuxtLink to="donate" class="careox-btn"><span>Donate Now</span></NuxtLink>
                  <form @submit.prevent="handleSubmit" class="contact-one__form form-one">
                     <h3 class="contact-one__form__title">Leave a Contact</h3>
                     <div class="form-one__group">
                        <!-- Name Field -->
                        <div class="form-one__control">
                           <input type="text" v-model="formData.name" name="name" placeholder="Your Name" />
                           <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
                        </div>
                        <!-- Email Field -->
                        <div class="form-one__control">
                           <input type="email" v-model="formData.email" name="email" placeholder="Email Address" />
                           <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
                        </div>
                        <!-- Phone Field -->
                        <div class="form-one__control">
                           <input type="tel" v-model="formData.phone" name="phone" placeholder="Phone No" />
                           <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
                        </div>
                        <!-- Subject Select Field -->
                        <div class="form-one__control">
                           <div class="form-one__control__select">
                              <v-select v-model="formData.subject" :options="subjects" placeholder="Subject" />
                           </div>
                           <p v-if="errors.subject" class="error-message">{{ errors.subject }}</p>
                        </div>
                        <!-- Message Field -->
                        <div class="form-one__control form-one__control--full">
                           <textarea v-model="formData.message" name="message" placeholder="Write a Message"></textarea>
                           <p v-if="errors.message" class="error-message">{{ errors.message }}</p>
                        </div>
                        <!-- Submit Button -->
                        <div class="form-one__control form-one__control--full">
                           <button type="submit" class="careox-btn" :disabled="loading">
                              <span v-if="loading" class="spinner"></span>
                              <span v-else>Send Request</span>
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="donation-details__author">
                  <div class="donation-details__author__top">
                     <img :src="author.image" :alt="author.name" />
                     <div class="donation-details__author__content">
                        <h3 class="donation-details__author__title">{{ author.name }}</h3>
                        <p class="donation-details__author__designation">{{ author.designation }}</p>
                     </div>
                  </div>
                  <ul class="donation-details__author__list">
                     <li><i class="icofont-ui-calendar"></i>{{ author.date }}</li>
                     <li><i class="icofont-ui-folder"></i>{{ author.category }}</li>
                     <li><i class="icofont-location-pin"></i>{{ author.location }}</li>
                  </ul>
               </div>
               <div class="donation-details__posts">
                  <h4 class="sidebar__title">Recent Campaigns</h4>
                  <ul class="sidebar__posts list-unstyled">
                     <li v-for="(post, index) in recentCampaigns" :key="index" class="sidebar__posts__item">
                        <div class="sidebar__posts__image">
                           <img :src="post.image" :alt="post.title" />
                        </div>
                        <div class="sidebar__posts__content">
                           <p class="sidebar__posts__meta"><i class="icofont-calendar"></i>{{ post.date }}</p>
                           <h4 class="sidebar__posts__title">
                              <a :href="post.link">{{ post.title }}</a>
                           </h4>
                        </div>
                     </li>
                  </ul>
               </div>
               <div class="donation-details__share">
                  <h4 class="sidebar__title">Share Causes:</h4>
                  <div class="donation-details__share__social">
                     <NuxtLink v-for="(social, index) in socialLinks" :key="index" :to="social.link" :style="`--accent-color: ${social.color}`">
                        <i :class="social.icon" aria-hidden="true"></i>
                        <span class="sr-only">{{ social.name }}</span>
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
import { donationDetails, recentCampaigns, socialLinks, author } from "@/data/DonationDetails";
import CountUp from "vue-countup-v3";
const startCounter = ref(false);
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};

// Form data and subjects
const formData = ref({
   name: "",
   email: "",
   phone: "",
   subject: "",
   message: "",
});
const subjects = ["Volunteer", "Donations", "Foods Support", "Education Support", "Medical Support", "Sports Support"];
const errors = ref({});
const loading = ref(false);

// Form validation
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
      errors.value.email = "Invalid email address";
      isValid = false;
   }

   if (!formData.value.phone) {
      errors.value.phone = "Phone number is required";
      isValid = false;
   }

   if (!formData.value.subject) {
      errors.value.subject = "Subject is required";
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
   if (!validateForm()) return;

   loading.value = true;

   try {
      const response = await fetch("https://formspree.io/f/xzzbbbqe", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData.value),
      });

      if (response.ok) {
         alert("Form submitted successfully!");
         // Reset form data
         formData.value = {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
         };
      } else {
         alert("Failed to submit the form. Please try again.");
      }
   } catch (error) {
      alert("An error occurred while submitting the form.");
   } finally {
      loading.value = false;
   }
};
</script>
<style scoped></style>
