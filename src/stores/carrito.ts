import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {

  const items = ref<number[]>([])

  function addToCart(productId: number) {
    items.value.push(productId)
  }

  function removeFromCart(productId: number) {
    items.value = items.value.filter(id => id !== productId)
  }

  return {
    items,
    addToCart,
    removeFromCart
  }
})