<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { House } from '@lucide/vue';

</script>

<template>
    <div class="flex flex-col gap-10 p-4 bg-green-100 h-screen">
        <RouterLink to="/">
            <Button class="bg-green-200 text-gray-900 hover:bg-green-300">
                <House />
            </Button>
        </RouterLink>

        <div class="w-full flex justify-center min-width text-2xl sm:text-4xl md:text-6xl  text-green-950 font-bold h-auto pt-5">
            <h1>Velas especiales</h1>
        </div>
        
    </div>
    
    
</template>



<style scoped>

</style>