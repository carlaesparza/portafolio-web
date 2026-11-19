<script setup lang="ts">
defineProps<{
  seccion: 'velas' | 'jabones' | 'diamond-painting'
}>()

</script>

<template>
  <div>hola</div>
  <div>
    <h2>Catálogo de {{ seccion }}</h2>

    <!-- Aquí irá la lista de productos -->
  </div>
</template>



<style scoped>

</style>

