import Ciris from "@/pages/finestres/ciris/Ciris.vue";
import Diamants from "@/pages/finestres/diamants/Diamants.vue";
import Home from "@/pages/home/Home.vue";
import Sabons from "@/pages/finestres/sabons/Sabons.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/pages/Layout.vue";
import Productes from "@/pages/productos/Productes.vue";
import ProductesDetalls from "@/pages/ProductesDetalls.vue";
import Carro from "@/pages/Carro.vue";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/velas',
      component: Layout,
      children: [
        {
          path: '',
          component: Ciris,
        },
        {
          path: 'catalogo',
          component: Productes,
          props: { seccion: 'velas' }
        }
      ]
    },
    {
      path: "/jabones",
      component: Layout,
      children: [
        {
          path: '',
          component: Sabons
        },
        {
          path: 'productos',
          component: Productes,
          props: { seccion: 'jabones'}
        }
      ]
    },
    {
      path: "/diamond-painting",
      component: Layout,
      children: [
        {
          path: '',
          component: Diamants
        },
        {
          path: 'obras',
          component: Productes,
          props: { seccion: 'diamond-painting'}
        }
      ]
    },
    {
      path: '/producto/:id',
      name: 'product-detail',
      component: ProductesDetalls
    },
    {
      path: '/carrito',
      name: 'cart',
      component: Carro
    },
  
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})
    

    
    
