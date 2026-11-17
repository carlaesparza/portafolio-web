<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { House } from '@lucide/vue';
import { RouterLink, RouterView } from 'vue-router';
House
</script>


<template>
    <div>
        <header>
            
            <div class="flex flex-col p-3 bg-green-300">
                <RouterLink to="/">
                    <Button class="bg-green-200 text-gray-900 hover:bg-green-300">
                        <House />
                    </Button>
                </RouterLink>

                <div>
                    
                </div>
        
            </div>
            
        </header>
    </div>
    <main>
        <RouterView/>
    </main>
    <footer>
    
    </footer>
</template>



<style scoped>

</style>