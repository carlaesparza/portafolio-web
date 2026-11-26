import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<number[]>(
    JSON.parse(localStorage.getItem('favorites') || '[]')
    )
watch(
    favorites,
    (newFavorites) => {
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    },
    { deep: true }
)

  function toggleFavorite(productId: number) {
    if (favorites.value.includes(productId)) {
      favorites.value = favorites.value.filter(
        id => id !== productId
      )
    } else {
      favorites.value.push(productId)
    }
  }

  function isFavorite(productId: number) {
    return favorites.value.includes(productId)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite
  }
})