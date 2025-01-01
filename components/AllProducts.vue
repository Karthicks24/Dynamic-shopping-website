<template>
        
    <div 
        :id="product.id"
        class="bg-white inline-block rounded hover:shadow-md cursor-pointer border border-gray-300 p-3">

        <nuxt-link :to="`/products/${product.id}`">
            <div class="w-[100%] aspect-square overflow-hidden">
                <img :src="product.image" :alt="product.title" class="rounded w-full h-full">
            </div>
            <div class="mt-3 space-y-1">
                <h2 class="text-[brown] font-semibold">Just In</h2>
                <h2 class="font-medium text-base">{{ product.title }}</h2>
                <h2 class="text-base text-gray-700 font-medium">{{ product.category }}</h2>
                <h2 class="mt-1 font-lg font-semibold">$  {{ product.price }}</h2>
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps(['product']);
const product = props.product;

const oldPrice = computed(()=>{
    let price = product.price + (product.price/2)
    return price.toFixed(2)
})
</script>

<style scoped> 
.image-class{
    object-fit: cover;
    object-position: center;
  }
</style>
