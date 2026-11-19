<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { House } from '@lucide/vue';
import { RouterLink, RouterView } from 'vue-router';

import { computed } from 'vue'
import { useRoute } from 'vue-router'

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
            <div class="flex p-2 bg-green-300">
                <RouterLink to="/">
                    <Button class="flex justify-start h-full bg-green-200 text-gray-900 hover:bg-green-300">
                        <House />
                    </Button>
                </RouterLink>

                <div class="flex justify-end gap-3 p-3 w-screen">
                    <RouterLink :to="rutaSeccion">
                        <Button class="bg-green-200 text-gray-900 hover:bg-green-300">
                            ¿De donde vienen?
                        </Button>
                    </RouterLink>
                    <RouterLink :to="rutaCatalogo">
                        <Button class="bg-green-200 text-gray-900 hover:bg-green-300">
                            Catálogo
                        </Button>
                    </RouterLink>
                    
                    
                </div>

                
            </div>
            
        </header>
    </div>
    <main>
        <RouterView/>
    </main>
    <footer class="bg-green-950 text-green-200 text-center py-6 w-full ">
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