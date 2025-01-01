<template>
<div class="flex overflow-scroll"> 
    <div 
        class="bg-white rounded hover:shadow-md cursor-pointer border border-gray-300 p-3"
        v-for="(product, index) in products" :key="index">

        <nuxt-link :to="`/products/${product.id}`">
            <div 
            class="w-[20vw] h-[20vh] aspect-square flex items-center justify-center">
                <img :src="product.image" :alt="product.title" class="rounded w-full h-full object-contain object-center">
            </div>
            <div class="mt-3 space-y-1">
                <h2 class="text-[brown] font-semibold">Just In</h2>
                <h2 class="font-medium text-base">{{ product.title }}</h2>
                <h2 class="text-base text-gray-700 font-medium">{{ product.category }}</h2>
                <h2 class="mt-1 font-lg font-semibold">$  {{ product.price }}</h2>
            </div>
        </nuxt-link>
    </div>
</div>
</template>

<script setup>
const props = defineProps(['category']);
const category = props.category;
const route = useRoute();
const currentId = route.params.id;
const products = ref([]);
const {$axios} = useNuxtApp();

onMounted(async()=>{
    try {
        const res = await $axios.get(`/products/category/${category}`)
        products.value = res.data;
    } catch (error) {
        console.error("Error :",error);
        
    } 
})

</script>

<style>

</style>