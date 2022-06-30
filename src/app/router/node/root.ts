import { RouteRecordRaw } from "vue-router";

const root: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/app/views/Home/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/app/views/About/About.vue"),
  },
];

export default root;
