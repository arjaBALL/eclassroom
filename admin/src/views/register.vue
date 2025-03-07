<!-- @format -->

<template>
  <div class="login-container">
    <div class="pic">
      <img src="/image/logo.png" alt="Logo" class="logo-image" />
    </div>
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Register</h2>

      <div class="input-group">
        <label>Teacher ID</label>
        <input type="text" v-model="teacherid" placeholder="Enter your id" />
        <p class="error-message">{{ usernameError }}</p>
      </div>

      <div class="name-container">
        <div class="input-group">
          <label>First Name:</label>
          <input
            type="text"
            v-model="firstname"
            placeholder="Enter your first name" />
          <p class="error-message">{{ firstnameError }}</p>
        </div>

        <div class="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            v-model="lastname"
            placeholder="Enter your last name" />
          <p class="error-message">{{ lastnameError }}</p>
        </div>
      </div>

      <div class="input-group">
        <label>Teacher ID</label>
        <input type="text" v-model="teacherid" placeholder="Enter your id" />
        <p class="error-message">{{ usernameError }}</p>
      </div>

      <div class="input-group">
        <label>Password:</label>
        <div class="password-field">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Enter your password" />
          <font-awesome-icon
            :icon="showPassword ? 'eye-slash' : 'eye'"
            class="eye-icon"
            @click="togglePassword" />
        </div>
        <p class="error-message">{{ passwordError }}</p>
      </div>

      <div class="input-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          v-model="cpassword"
          placeholder="Confirm your password" />
        <p class="error-message">{{ passwordError }}</p>
      </div>

      <button type="submit">Login</button>
      <p class="link">
        Don't have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEye, faEyeSlash);

// Define validation schema
const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
});

// Setup form validation
const { handleSubmit } = useForm({ validationSchema: schema });

const { value: username, errorMessage: usernameError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");

// Password visibility toggle
const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

// Submit function
const handleLogin = handleSubmit((values) => {
  console.log("Form Submitted:", values);
  alert("Login successful!");
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #f4f4f4;
  gap: 4px;
}

.pic {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  max-width: 20%; /* Responsive sizing */
  border-radius: 12px;
  height: 59%;
}

.logo-image {
  width: 80%; /* Responsive image size */
  max-width: 250px;
  max-height: 240px;
  object-fit: contain; /* Better for logos */
}
.login-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 350px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  text-align: left;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #555;
}

input {
  display: block;
  height: 45px;
  width: 100%; /* Full width of container */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.875rem; /* 14px */
  box-sizing: border-box; /* Include padding in width calculation */
}

input:focus {
  border-color: royalblue;
  box-shadow: 0 0 5px rgba(65, 105, 225, 0.5);
  outline: none;
}

input:hover {
  border-color: royalblue;
  box-shadow: 0 0 5px rgba(65, 105, 225, 0.5);
  outline: none;
}

.name-container {
  display: flex;
  gap: 8px;
}

.eye-icon {
  position: absolute;
  right: 450px;
  bottom: 280px;
  cursor: pointer;
  color: #666;
}
button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.link {
  margin-top: 15px;
  font-size: 14px;
}

.link a {
  color: #007bff;
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    padding: 1em;
  }

  .pic,
  .register-form {
    max-width: 100%;
    width: 100%;
  }

  .logo-image {
    width: 60%;
    max-width: 200px;
  }

  .eye-icon {
    position: absolute;
    right: 45px;
    bottom: 115px;
    cursor: pointer;
    color: #666;
  }
}
</style>
