<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ShoppingCart } from '@lucide/vue';


import { useCartStore } from '@/stores/carrito'

const cart = useCartStore()


</script>

<template>

  <div class="bg-beige h-screen">

    <div class="flex justify-end pt-4 pr-3 mb-6">
      <RouterLink
        to="/carrito"
        class="relative flex items-center justify-center w-12 h-12 text-forest"
      >
        <ShoppingCart class="w-7 h-7" />

        <span
          v-if="cart.items.length > 0"
          class="absolute top-0 right-0 bg-forest text-ivory text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >
          {{ cart.items.length }}
        </span>
      </RouterLink>
    </div>
    <h1 class="flex justify-center idiqlat-regular min-width text-6xl  md:text-7xl lg:text-8xl text-forest font-bold h-auto pt-8">
      MARETTA
    </h1>

    <div>
      <div class="flex flex-row gap-8 pt-20 justify-center items-top h-auto ">
        <div>
          <Button class="bg-beige text-forest font-bold space-between hover:bg-sage border border-sage">
            <RouterLink to="/velas">Velas</RouterLink>
          </Button>
        </div>
        <div>
          <Button class="bg-beige text-forest font-bold hover:bg-sage border border-sage">
            <RouterLink to="/jabones">Jabones</RouterLink>
          </Button>
        </div>
        <div>
          <Button class="bg-beige text-forest font-bold hover:bg-sage border border-sage">
            <RouterLink to="/diamond-painting">Diamond painting</RouterLink>
          </Button>
        </div>
      </div>
      
      <div class="flex justify-center items-center min-h-[60vh] px-6">
        <div class="marck-script bg-ivory rounded-2xl shadow-md p-6 max-w-3xl w-full mx-auto">
          <p class=" text-justify text-xl md:text-2xl text-forest">
            "Encender una vela no es solo un detalle bonito, también es un respiro para el cuerpo. La luz suave ayuda a que la mente se calme, la respiración se vuelve más tranquila y el corazón baja revoluciones. Poco a poco el estrés se suelta y aparecen esas sensaciones de paz que tanto necesitamos en el día a día. A veces, cuidarnos empieza con algo tan sencillo como regalarnos este momento."
          </p>
        </div>
      </div>
    </div>  
  </div>
</template>


<style scoped>


</style>