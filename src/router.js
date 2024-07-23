import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
];

const router = createRouter({
<<<<<<< HEAD
  history: createWebHistory("/"),
  routes: routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: "smooth",
  //       top: 30,
  //     };
  //   }
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { top: 0 };
  // },
=======
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 30,
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
>>>>>>> 49f26bd987c53cbc57b05d7a44834fced59dab52
});

export default router;
