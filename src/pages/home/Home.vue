<script setup lang="ts">
import { Button } from '@/components/ui/button'






</script>

<template>

  <div class="bg-green-200 h-screen">
    <h1 class="flex justify-center min-width text-3xl sm:text-5xl md:text-8xl  text-green-950 font-bold h-auto pt-10">
      Página Principal
    </h1>

    <div>
      <div class="flex flex-row gap-8 p-10 justify-center items-top h-auto ">
        <div>
          <Button class="bg-green-200 text-gray-900 font-bold space-between hover:bg-green-300 border border-green-950">
            <RouterLink to="/velas">Velas</RouterLink>
          </Button>
        </div>
        <div>
          <Button class="bg-green-200 text-gray-900 font-bold hover:bg-green-300 border border-green-950">
            <RouterLink to="/jabones">Jabones</RouterLink>
          </Button>
        </div>
        <div>
          <Button class="bg-green-200 text-gray-900 font-bold hover:bg-green-300 border border-green-950">
            <RouterLink to="/diamond-painting">Diamond painting</RouterLink>
          </Button>
        </div>
      </div>
      
      <div class="flex justify-center items-center min-h-[60vh] px-6">
        <div class="bg-green-100 rounded-2xl p-8 max-w-5xl w-full shadow-md">
            <p class="text-center text-2xl text-green-950">
                "Encender una vela no es solo un detalle bonito, también es un respiro para el cuerpo. La luz suave ayuda a que la mente se calme, la respiración se vuelve más tranquila y el corazón baja revoluciones. Poco a poco el estrés se suelta y aparecen esas sensaciones de paz que tanto necesitamos en el día a día. A veces, cuidarnos empieza con algo tan sencillo como regalarnos este momento."
            </p>
        </div>
      </div>
    </div>
    
    
    
  
  </div>
  

</template>


<style scoped>

</style>