import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import ContactPage from "./views/ContactPage.vue";
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
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/gallery/:prop",
    component: GalleryPage,
    props: true,
  },
  {
    path: "/pdf",
    component: PdfPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    let scrollTo = 0;
    if (to.hash) {
      scrollTo = to.hash;
    }
    if (savedPosition) {
      scrollTo = savedPosition.y;
    }
    return scrollTo;
  },
});

export default router;
