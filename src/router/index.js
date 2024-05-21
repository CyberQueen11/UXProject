import { createRouter, createWebHistory } from "vue-router";
import { isMobile } from "../utils/isMobile";
import Home from "../views/Home.vue";
import HomeStartMobile from "../views/HomeStartMobile.vue";
import JudgeTheBookByItsCover from "../views/JudgeTheBookByItsCover.vue";
import PhotoSwipe from "../views/PhotoSwipe.vue";
import OnceUponATime from "../views/OnceUponATime.vue";
import About from "../views/About.vue";
import ShowResult from "../views/ShowResult.vue";
import ShowResultOP from "../views/ShowResultOP.vue";

let isFirstLoad = true;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: (to, from, next) => {
        if (isFirstLoad) {
          isFirstLoad = false; // Set flag to false after first load
          if (isMobile()) {
            return next({ name: "HomeStartMobile" }); // Redirect to HomeStartMobile on initial load
          }
        }
        next();
      },
    },
    {
      path: "/home-start-mobile",
      name: "HomeStartMobile",
      component: HomeStartMobile,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/judge-the-book-by-its-cover",
      name: "Judge The Book By Its Cover",
      component: JudgeTheBookByItsCover,
    },
    {
      path: "/photo-swipe",
      name: "Photo Swipe",
      component: PhotoSwipe,
    },
    {
      path: "/once-upon-a-time",
      name: "Once Upon A Time",
      component: OnceUponATime,
    },
    {
      path: "/show-result",
      name: "Show Result",
      component: ShowResult,
      props: (route) => ({ book: JSON.parse(route.query.book) }),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0); // Reset scroll position
        next();
      },
    },
    {
      path: "/show-result-op",
      name: "Show Result OP",
      component: ShowResultOP,
      props: (route) => ({ book: JSON.parse(route.query.book) }),
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0); // Reset scroll position
        next();
      },
    },
  ],
});

export default router;
