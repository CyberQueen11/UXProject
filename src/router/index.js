import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import JudgeTheBookByItsCover from "../views/JudgeTheBookByItsCover.vue";
import PhotoSwipe from "../views/PhotoSwipe.vue";
import OnceUponATime from "../views/OnceUponATime.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
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
      component: PhotoSwipe,
    },
  ],
});

export default router;
