import Ciris from "@/pages/ciris/Ciris.vue";
import Diamants from "@/pages/diamants/Diamants.vue";
import Home from "@/pages/home/Home.vue";
import Sabons from "@/pages/sabons/Sabons.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/velas",
      name: "velas",
      component: Ciris
    },
    {
      path: "/jabones",
      name: "jabones",
      component: Sabons
    },
    {
      path: "/diamond-painting",
      name: "diamond-painting",
      component: Diamants
    },

    
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})