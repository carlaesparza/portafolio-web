<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { House } from '@lucide/vue';
import { RouterLink, RouterView } from 'vue-router';

</script>


<template>
    <div>
        <header>
            <div class="flex p-2 bg-green-300">
                <RouterLink to="/">
                    <Button class="flex justify-start h-full bg-green-200 text-gray-900 hover:bg-green-300">
                        <House />
                    </Button>
                </RouterLink>

                <div class="flex justify-end gap-3 p-3 w-screen">
                    <Button class="bg-green-200 text-gray-900 hover:bg-green-300">
                        ¿De donde vienen?
                    </Button>
                    <Button class="bg-green-200 text-gray-900 hover:bg-green-300">
                        Catálogo
                    </Button>
                </div>
            </div>

        </header>
    </div>
    <main>
        <RouterView/>
    </main>
    <footer class="bg-green-950 text-green-200 text-center py-6 w-full ">
        <div>
	        <strong>All Rights Reserved</strong>
        </div>

        <small>
	        This web was done by Carla Esparza
        </small>
    </footer>
</template>



<style scoped>

</style>