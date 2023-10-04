import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import GalleryPage from "./views/GalleryPage.vue";
import PdfPage from "./views/PdfPage.vue";

// import goTo from "vuetify/lib/services/goto";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/gallery/:id",
    component: GalleryPage,
    props: true,
  },
  {
    path: "/pdf/:id",
    component: PdfPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
