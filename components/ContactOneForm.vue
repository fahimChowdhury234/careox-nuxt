<template>
  <form class="contact-one__form contact-form-validated form-one wow fadeInUp" data-wow-duration="1500ms" action="#" @submit.prevent="handleSubmit">
    <div class="sec-title text-left">
      <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ formTagline }}</h6>
      <h3 class="sec-title__title bw-split-in-left">{{ formTitle }}</h3>
    </div>
    <p class="contact-one__text">{{ formDescription }}</p>

    <div class="form-one__group">
      <div class="form-one__control">
        <input type="text" v-model="form.name" placeholder="Your Name" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
      <div class="form-one__control">
        <input type="email" v-model="form.email" placeholder="Email Address" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      <div class="form-one__control">
        <input type="tel" v-model="form.phone" placeholder="Phone No" />
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>
      <div class="form-one__control">
        <div class="form-one__control__select">
          <client-only>
            <v-select :options="subjects" v-model="form.subject" placeholder="Subject" />
          </client-only>
          <span v-if="errors.subject" class="error">{{ errors.subject }}</span>
        </div>
      </div>
      <div class="form-one__control form-one__control--full">
        <textarea v-model="form.message" placeholder="Write a Message"></textarea>
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>
      <div class="form-one__control form-one__control--full">
        <button type="submit" class="careox-btn" :disabled="loading">
          <span v-if="loading">Submitting...</span>
          <span v-else>Send Request</span>
        </button>
      </div>
      <div class="result">
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { contactData } from "@/data/ContactOne";
// import VSelect from "vue-select-picker-bootstrap";

const { formTitle, formDescription, formTagline } = contactData;

const form = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const subjects = ["Volunteer", "Donations", "Food Support", "Education Support", "Medical Support", "Sports Support"];
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const handleSubmit = async () => {
  // Trim and validate inputs
  errors.name = form.name.trim() ? "" : "Name is required";
  errors.email = form.email.trim() && validateEmail(form.email) ? "" : "A valid email is required";
  errors.phone = form.phone.trim() ? "" : "Phone number is required";
  errors.subject = form.subject ? "" : "Subject is required";
  errors.message = form.message.trim() ? "" : "Message is required";

  if (!Object.values(errors).some((error) => error !== "")) {
    // Handle form submission
    loading.value = true;
    successMessage.value = "";
    errorMessage.value = "";

    const formDataToSend = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      subject: form.subject,
      message: form.message.trim(),
    };

    try {
      const response = await fetch("https://formspree.io/f/mdkovzae", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        successMessage.value = "Review submitted successfully!";
        // Reset the reactive form object
        Object.assign(form, {
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Clear the success message after 5 seconds
        setTimeout(() => {
          successMessage.value = "";
        }, 5000);
      } else {
        errorMessage.value = "Something went wrong. Please try again.";
      }
    } catch (error) {
      errorMessage.value = "An error occurred. Please try again.";
    } finally {
      loading.value = false;
    }
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
button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
