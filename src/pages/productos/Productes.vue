<script setup lang="ts">
import { products } from '@/components/data/productes';
import { computed } from 'vue';

const props = defineProps<{
  seccion: 'velas' | 'jabones' | 'diamond-painting'
}>()

const filteredProducts = computed(() =>
  products.filter(product =>
    product.category === props.seccion
  )
)

</script>

<template>
  
  <section class="bg-ivory min-h-screen p-8">

    <h1 class="text-4xl font-bold text-forest text-center mb-8">
      Catálogo
    </h1>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-xl shadow-md p-4"
        >

            <img
            :src="product.image"
            :alt="product.name"
            class="bg-ivory aspect-square w-full rounded-lg object-cover"
            />

            <h2 class="text-xl font-bold mt-4 text-forest">
            {{ product.name }}
            </h2>

            <p class="text-gray-600">
            {{ product.description }}
            </p>

            <p class="font-bold text-forest mt-3">
            {{ product.price }} €
            </p>

      </div>

    </div>

  </section>

</template>



<style scoped>

</style>

