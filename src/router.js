import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; // import components that you wish to became Routes

Vue.use(Router); // tell Vue to action with Router

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [ // All the routes are described here
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});