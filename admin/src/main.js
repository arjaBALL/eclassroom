/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router); // Make sure Vue uses router
app.mount("#app"); // Mount app to HTML
