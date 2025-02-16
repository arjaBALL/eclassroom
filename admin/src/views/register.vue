<!-- @format -->

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

// Define validation schema
const schema = yup.object({
  username: yup.string().required("Username is required"),
  lastname: yup.string().required("Last name required"),
  firstname: yup.string().required("Firstname required"),
  email: yup.string().email("Invalid email").required("Email is required"),
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
const { value: lastname, errorMessage: lastnameError } = useField("lastname");
const { value: firstname, errorMessage: firstnameError } =
  useField("firstname");
const { value: email, errorMessage: emailError } = useField("email");
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
      <h2>Register</h2>
      <form @submit="register">
        <label>Username:</label>
        <input
          type="text"
          v-model="username"
          placeholder="Enter your username" />
        <p class="error-message">{{ usernameError }}</p>

        <div class="name-container">
          <div class="name-field">
            <label>First Name:</label>
            <input
              type="text"
              v-model="firstname"
              placeholder="Enter your first name" />
            <p class="error-message">{{ firstnameError }}</p>
          </div>

          <div class="name-field">
            <label>Last Name:</label>
            <input
              type="text"
              v-model="lastname"
              placeholder="Enter your last name" />
            <p class="error-message">{{ lastnameError }}</p>
          </div>
        </div>

        <label>Email:</label>
        <input type="email" v-model="email" placeholder="Enter your email" />
        <p class="error-message">{{ emailError }}</p>

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
          Already have an account?
          <router-link to="/login">Register</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
