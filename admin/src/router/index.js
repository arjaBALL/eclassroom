/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue"; // Ensure this file exists
import Register from "@/views/Register.vue"; // Ensure this file exists

const routes = [
  { path: "/", redirect: "/login" }, // Redirect "/" to Login
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
