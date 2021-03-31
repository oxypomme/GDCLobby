import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/mission",
    name: "Home",
    component: Home,
  },
  {
    path: "/mission/:id",
    name: "Mission",
    component: () => import(/* webpackChunkName: "about" */ "../views/errors/PageNotFound.vue"),
  },
  {
    path: "/login/:from?",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../views/errors/PageNotFound.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/*", component: () => import(/* webpackChunkName: "about" */ "../views/errors/PageNotFound.vue") }
];

const router = new VueRouter({
  routes,
});

export default router;
