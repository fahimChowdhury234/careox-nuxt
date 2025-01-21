<template>
  <section class="login-page">
    <div class="container">
      <div class="login-page__wrap">
        <h3 class="login-page__wrap__title">Login your Account:</h3>
        <form @submit.prevent="handleSubmit(onSubmit)" class="login-page__form">
          <div class="login-page__form-input-box">
            <input type="email" v-model="email" :class="{ 'input-error': errors.email }" placeholder="Username or email address *" />
            <span v-if="errors.email">{{ errors.email }}</span>
          </div>
          <div class="login-page__form-input-box">
            <input type="password" v-model="password" :class="{ 'input-error': errors.password }" placeholder="Password *" />
            <span v-if="errors.password">{{ errors.password }}</span>
          </div>
          <div class="login-page__check-forgot">
            <div class="login-page__checked-box">
              <input type="checkbox" v-model="rememberMe" id="save-data" />
              <label for="save-data"><span></span>Remember Me?</label>
            </div>
            <div class="login-page__form-forgot-password">
              <NuxtLink to="/login">Forgot your Password?</NuxtLink>
            </div>
          </div>
          <button type="submit" class="careox-btn"><span>Login</span></button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  setup() {
    const { handleSubmit, errors } = useForm({
      validationSchema: yup.object({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      }),
    });

    const { value: email } = useField("email");
    const { value: password } = useField("password");
    const { value: rememberMe } = useField("rememberMe", false); // Optional for checkbox

    const onSubmit = (values) => {
      console.log(values);
    };

    return {
      email,
      password,
      rememberMe,
      handleSubmit,
      errors,
      onSubmit,
    };
  },
};
</script>

<style>
/* Optional styling */
.input-error {
  border-color: red;
}
</style>
