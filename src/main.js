import { createApp } from "vue";
import App from "./App.vue";
import router from "./app/routers";

createApp(App).use(router).mount("#app");
