<template>
  <div
  :class="blur? '':'z-40 w-[100vw] opacity-60 blur-sm absolute h-[150vh]' ">
    <div class="grid md:grid-cols-5 grid-cols-1 gap-2">
        <div 
            class="flex max-md:flex-row flex-col overflow-x-scroll">
                <ul v-for="(item, index) in lists" :key="index"
                class="flex">
                    <li class="p-2 max-w-48">{{ item }}</li>
                </ul>
        </div>

        <div class="grid md:grid-cols-3 grid-cols-2 gap-2 col-span-4">
            <div v-for="(product, index) in products" :key="product.id">
                <AllProducts :product="product" />
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

const products = ref([]);
const { $axios } = useNuxtApp();
const blur = ref(false);

// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(data => console.log(data))

onMounted(async() => {
    try{
        const response = await $axios.get('/products')
        products.value = response.data;
        blur.value = true;  
    } catch(error){
        console.error("Error:",error)
    } 
})
const lists = ref([
    "Shoes", "Tops & T-Shirts", "Shorts", "Trousers & Tights", "Accessories & Equipments",
    "Jackets", "Hoodies & Sweatshirts", "TrackSuits", "Compression & Baselayer", "Socks"
])
// const sync = async()=>{
//     try {
//         const res = await $axios.get('/products');
//         products.value = res.data
//     } catch (error) {
//         console.error("Error : ",error)
//     }
// }
</script>
