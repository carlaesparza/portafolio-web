<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { House } from '@lucide/vue';
import { RouterLink, RouterView } from 'vue-router';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ShoppingCart, Heart } from '@lucide/vue';
import { useCartStore } from '@/stores/carrito'
import { useFavoritesStore } from '@/stores/favoritos'

const cart = useCartStore()
const favorites = useFavoritesStore()

const route = useRoute()

const rutaCatalogo = computed(() => {
  if (route.path.startsWith('/velas')) {
    return '/velas/catalogo'
  }

  if (route.path.startsWith('/jabones')) {
    return '/jabones/productos'
  }

  if (route.path.startsWith('/diamond-painting')) {
    return '/diamond-painting/obras'
  }

  return '/'
})

const rutaSeccion = computed(() => {
  if (route.path.startsWith('/velas')) {
    return '/velas'
  }

  if (route.path.startsWith('/jabones')) {
    return '/jabones'
  }

  if (route.path.startsWith('/diamond-painting')) {
    return '/diamond-painting'
  }

  return '/'
})

</script>


<template>
    <div>
        <header>
            <div class="flex p-2 bg-beige">
                <RouterLink to="/">
                    <Button class="flex justify-start h-full bg-ivory text-forest hover:bg-sage">
                        <House />
                    </Button>
                </RouterLink>

                <div class="flex items-center justify-end gap-3 p-3 w-screen">
                    <RouterLink :to="rutaSeccion">
                        <Button class="bg-ivory text-forest hover:bg-sage">
                            Inicio
                        </Button>
                    </RouterLink>
                    <RouterLink :to="rutaCatalogo">
                        <Button class="bg-ivory text-forest hover:bg-sage">
                            Catálogo
                        </Button>
                    </RouterLink>
                    <RouterLink to="/carrito">
                        <div class="relative flex items-center justify-center w-10 h-10 text-forest">
                            <ShoppingCart class="w-6 h-6" />
                            <span
                                v-if="cart.items.length > 0"
                                class="absolute top-0 right-0 bg-forest text-ivory text-xs rounded-full w-5 h-5 flex items-center justify-center"
                            >
                                {{ cart.items.length }}
                            </span>
                        </div>
                    </RouterLink>
                    <RouterLink
                        to="/favoritos"
                        class="relative flex items-center justify-center w-12 h-12 text-forest"
                    >
                        <Heart class="w-7 h-7" />
                        <span
                            v-if="favorites.favorites.length > 0"
                            class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                        >
                            {{ favorites.favorites.length }}
                        </span>
                    </RouterLink>
                    
                    
                </div>

                
            </div>
            
        </header>
    </div>
    <main>
        <RouterView/>
    </main>
    <footer class="bg-forest text-ivory text-center py-6 w-full ">
        <div>
	        <strong>All Rights Reserved</strong>
        </div>

        <small>
	        This web was done by Carla Esparza
        </small>
    </footer>
</template>



<style scoped>

</style>