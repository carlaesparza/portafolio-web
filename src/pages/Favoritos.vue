<script setup lang="ts">
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favoritos'
import { products } from '@/components/data/productes'

const favorites = useFavoritesStore()

const favoriteProducts = computed(() => {
  return products.filter(product =>
    favorites.favorites.includes(product.id)
  )
})
</script>



<template>
    <section class="min-h-screen bg-ivory p-6 md:p-12">
        <h1 class="text-3xl font-bold text-forest mb-8">
            Mis favoritos
        </h1>

        <div v-if="favoriteProducts.length === 0" class="text-center py-16">
            <p class="text-xl text-forest mb-4">
                Todavía no tienes productos favoritos.
            </p>
            <RouterLink
                to="/"
                class="inline-block bg-forest text-ivory px-6 py-3 rounded-xl"
            >
                Descubrir productos
            </RouterLink>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RouterLink
                v-for="product in favoriteProducts"
                :key="product.id"
                :to="{ name: 'product-detail', params: { id: product.id } }"
                class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
                <div class="w-full h-56 rounded-xl overflow-hidden bg-ivory flex items-center justify-center">
                <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-full object-contain"
                />
                </div>

                <h2 class="text-lg font-semibold text-forest mt-4">
                    {{ product.name }}
                </h2>

                <p class="text-forest font-medium mt-2">
                    {{ product.price }} €
                </p>
            </RouterLink>
        </div>
        <div class="mt-10 flex justify-center">
            <RouterLink
                to="/"
                class="inline-flex items-center justify-center bg-sage text-forest px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
                Seguir comprando
            </RouterLink>
        </div>
  </section>
</template>



<style scoped>

</style>