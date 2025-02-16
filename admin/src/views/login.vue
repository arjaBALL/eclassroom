<!-- @format -->

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

// Define validation schema
const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

// Setup form validation
const { handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: username, errorMessage: usernameError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: confirmPassword, errorMessage: confirmPasswordError } =
  useField("confirmPassword");

// Submit function
const register = handleSubmit((values) => {
  console.log("Form Submitted:", values);
  alert("Registration successful!");
});
</script>

<template>
  <div class="container">
    <div class="cover">
      <img src="/image/logo.png" alt="Logo" class="logo-image" />
    </div>

    <div class="register-form">
      <h2>Login</h2>
      <form @submit="register">
        <label>Username:</label>
        <input
          type="text"
          v-model="username"
          placeholder="Enter your username" />
        <p class="error-message">{{ usernameError }}</p>

        <label>Password:</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your password" />
        <p class="error-message">{{ passwordError }}</p>

        <label>Confirm Password:</label>
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm your password" />
        <p class="error-message">{{ confirmPasswordError }}</p>

        <button type="submit">Register</button>
        <p class="link">
          Don't have an account?
          <router-link to="/register">Register</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
