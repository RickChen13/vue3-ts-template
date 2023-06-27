import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import RootRouter from "@/app/router/node/root";

let routes: RouteRecordRaw[] = RootRouter; //.concat(IndexRouter,ArticleRouter)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
