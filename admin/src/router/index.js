/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login.vue"; // Ensure the filename matches exactly (case-sensitive)
import Register from "@/views/register.vue"; // Ensure this file exists
import Dashboard from "@/views/dashboard.vue"; // Ensure this file exists
import Student from "@/views/student.vue"; // Ensure this file exists
import Performance from "@/views/performance.vue"; // Ensure this file exists

const routes = [
  { path: "/", redirect: "/login" }, // Redirect "/" to Login
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/student", component: Student },
  { path: "/performance", component: Performance },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
