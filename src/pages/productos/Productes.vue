<script setup lang="ts">
import { products } from '@/components/data/productes';
import { computed } from 'vue';
import { Heart } from '@lucide/vue';
import { useFavoritesStore } from '@/stores/favoritos'

const favorites = useFavoritesStore()

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
        <RouterLink
          v-for="product in filteredProducts"
          :key="product.id"
          :to="{ name: 'product-detail', params: { id: product.id } }"
          class="relative block bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
        >
          <button
            @click.stop.prevent="favorites.toggleFavorite(product.id)"
            class="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-sm hover:scale-110 transition"
          >
            <Heart
              class="w-5 h-5"
              :class="favorites.isFavorite(product.id) ? 'text-red-500' : 'text-forest'"
              :fill="favorites.isFavorite(product.id) ? 'currentColor' : 'none'"
            />
          </button>

          <img
            :src="product.image"
            :alt="product.name"
            class="bg-ivory aspect-square w-full rounded-lg object-cover"
          />

          <h2 class="text-xl font-bold mt-4 text-forest">
            {{ product.name }}
          </h2>

          <p class="text-gray-600">
            {{ product.shortDescription }}
          </p>

          <p class="font-bold text-forest mt-3">
            {{ product.price }} €
          </p>

        </RouterLink>

    </div>

  </section>

</template>



<style scoped>

</style>

