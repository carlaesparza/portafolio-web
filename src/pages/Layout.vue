<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { House } from '@lucide/vue';
import { RouterLink, RouterView } from 'vue-router';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ShoppingCart } from '@lucide/vue';
import { useCartStore } from '@/stores/carrito'

const cart = useCartStore()

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
                    <div class="relative flex items-center justify-center w-10 h-10 text-forest">
                        <ShoppingCart class="w-6 h-6" />
                        <span
                            v-if="cart.items.length > 0"
                            class="absolute top-0 right-0 bg-forest text-ivory text-xs rounded-full w-5 h-5 flex items-center justify-center"
                        >
                            {{ cart.items.length }}
                        </span>
                    </div>
                    
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