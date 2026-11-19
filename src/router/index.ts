import Ciris from "@/pages/finestres/ciris/Ciris.vue";
import Diamants from "@/pages/finestres/diamants/Diamants.vue";
import Home from "@/pages/home/Home.vue";
import Sabons from "@/pages/finestres/sabons/Sabons.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/pages/Layout.vue";



import Productes from "@/pages/productos/Productes.vue";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      component: Layout,
      children: [
       {
          path: "/velas",
          component: Ciris,
          children: [
            {
              path: 'catalogo',
              component: Productes,
              props: { seccion: 'velas'}
            }
          ]
        },
        {
          path: "/jabones",
          component: Sabons,
          children: [
            {
              path: 'productos',
              component: Productes,
              props: { seccion: 'jabones'}
            }
          ]
        },
        {
          path: "/diamond-painting",
          component: Diamants,
          children: [
            {
              path: 'obras',
              component: Productes,
              props: { seccion: 'diamond-painting'}
            }
          ]
        }
      ]
    },
    

    
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})