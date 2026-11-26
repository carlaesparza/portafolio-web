<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/carrito'
import { products } from '@/components/data/productes'

const cart = useCartStore()

const cartProducts = computed(() => {
  return products.flatMap(product => {
    const quantity = cart.items.filter(
      id => id === product.id
    ).length

    return quantity > 0
      ? [{ ...product, quantity }]
      : []
  })
})

const total = computed(() => {
  return cartProducts.value.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )
})

</script>


<template>
    <section class="min-h-screen bg-ivory p-6 md:p-12">

        <h1 class="text-3xl font-bold text-forest mb-8">
            Mi carrito
        </h1>

        <div
            v-if="cartProducts.length === 0"
            class="text-center py-16"
        >
            <p class="text-xl text-forest mb-4">
                Tu carrito está vacío
            </p>

            <RouterLink
                to="/"
                class="inline-block bg-forest text-ivory px-6 py-3 rounded-xl"
            >
                Seguir comprando
            </RouterLink>
        </div>
        <div v-else class="space-y-5">
            <div
                v-for="product in cartProducts"
                :key="product.id"
                class="bg-white rounded-xl shadow-sm border border-sage/30 p-4 flex items-center gap-5"
            >

                <div class="w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-ivory flex items-center justify-center">
                    <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-full object-contain"
                    />
                </div>

                <div class="flex-1 min-w-0 flex flex-col justify-center">
                    <div class="flex flex-col gap-2">
                        <h2 class="text-lg font-semibold text-forest">
                            {{ product.name }}
                        </h2>

                        <p class="text-forest font-medium mt-2">
                            {{ product.price }} €
                        </p>

                        <div class="flex items-center gap-3 mt-3">
                            <button
                                @click="cart.decreaseQuantity(product.id)"
                                class="w-8 h-8 rounded-lg bg-sage text-forest font-bold"
                            >
                                −
                            </button>

                            <span class="font-medium text-forest">
                                {{ product.quantity }}
                            </span>

                            <button
                                @click="cart.increaseQuantity(product.id)"
                                class="w-8 h-8 rounded-lg bg-sage text-forest font-bold"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    
                    
                </div>

                
            </div>
        </div>
        <div
            v-if="cartProducts.length > 0"
            class="mt-8 flex flex-col items-end gap-4"
        >
            <div class="bg-white rounded-xl shadow-md p-6">
                <p class="text-xl font-bold text-forest">
                    Total: {{ total.toFixed(2) }} €
                </p>
                <button
                    class="mt-4 w-full bg-forest text-ivory px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                    >
                    Finalizar compra
                </button>

                <RouterLink
                    to="/"
                    class="inline-flex w-fit items-center justify-center mt-4 bg-sage text-forest px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                    Seguir comprando
                </RouterLink>
            </div>
            
        </div>

    </section>
    
</template>



<style scoped>

</style>