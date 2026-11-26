import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {

    const items = ref<number[]>([])

    function addToCart(productId: number) {
    items.value.push(productId)
    }

    function increaseQuantity(productId: number) {
    items.value.push(productId)
    }

    function decreaseQuantity(productId: number) {
    const index = items.value.indexOf(productId)

        if (index !== -1) {
            items.value.splice(index, 1)
        }
    }

    function removeFromCart(productId: number) {
        items.value = items.value.filter(id => id !== productId)
    }

    return {
        items,
        addToCart,
        increaseQuantity,
        decreaseQuantity
    }
})