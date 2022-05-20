import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/app/views/home/Home.vue";
import LibraryRouter from "@/app/routers/library/index";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/libraries",
        ...LibraryRouter,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
