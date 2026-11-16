<script setup lang="ts">
import { Button } from '@/components/ui/button'






</script>

<template>

  <div class="bg-green-200">
    <h1 class="flex justify-center min-width text-3xl sm:text-5xl md:text-8xl  text-green-950 font-bold h-auto pt-10">
      Página Principal
    </h1>

    <div class="flex flex-row gap-8 p-10 justify-center items-top h-screen ">
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
  
  </div>
  
  
  
  
  

</template>


<style scoped>

</style>