<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { products } from '@/components/data/productes'

const route = useRoute()

const product = computed(() =>
  products.find(p => p.id === Number(route.params.id))
)

const catalogPath = computed(() => {
  const category = product.value?.category?.toLowerCase()

  if (category === 'velas') return '/velas/catalogo'
  if (category === 'jabones') return '/jabones/productos'
  if (category === 'diamond-painting') return '/diamond-painting/obras'

  return '/'
})
</script>

<template>
    <section class="min-h-screen bg-ivory p-6 md:p-12">

    <!-- Volver al catálogo -->
        <RouterLink
            v-if="product"
            :to="catalogPath"
            class="inline-block bg-forest text-ivory px-5 py-3 rounded-xl hover:opacity-90 transition"
            >
            ← Volver al catálogo
        </RouterLink>

        <!-- Producto encontrado -->
        <div
            v-if="product"
            class="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-10 items-center"
        >

        <!-- Fotografía -->
        <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-auto max-h-[600px] object-cover rounded-2xl"
        />

        <!-- Información -->
        <div>
            <p class="uppercase tracking-widest text-sage text-sm mb-3">
            {{ product.category }}
            </p>

            <h1 class="text-4xl font-bold text-forest">
            {{ product.name }}
            </h1>

            <p class="text-2xl font-semibold text-forest mt-5">
            {{ product.price.toFixed(2) }} €
            </p>

            <p class="text-gray-600 leading-relaxed mt-6">
            {{ product.description }}
            </p>

            <button
            class="mt-8 bg-forest text-ivory px-8 py-3 rounded-xl hover:bg-sage transition"
            >
            Añadir al carrito
            </button>
        </div>

        </div>

        <!-- Producto no encontrado -->
        <div v-else class="text-center py-20">
        <h1 class="text-3xl font-bold text-forest">
            Producto no encontrado
        </h1>

        <RouterLink to="/" class="text-sage underline mt-4 inline-block">
            Volver a la tienda
        </RouterLink>
        </div>

    </section>
</template>



<style scoped>

</style>