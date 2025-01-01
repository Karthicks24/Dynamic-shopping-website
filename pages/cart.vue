<template>
  <div :class="blur? '':'z-40 w-[100vw] opacity-60 blur-sm absolute h-[150vh]'">
    <NuxtLayout name="cartlayout">
        <div class="md:grid flex flex-col md:grid-cols-10 px-16 md:px-32 py-4">
            <div v-for="(item, index) in cart" :key="index"
            class="col-span-6">
                <div class="flex flex-col justify-start items-start">
                    <h1 class="text-xl font-semibold">Bag</h1>
                    <div class="flex gap-1">
                        <p class="text-gray-700">{{ products.length }} Items</p>
                        <span class="">|</span>
                        <h1 class="font-bold">$ {{ total }}</h1>
                    </div>

                </div>
                
                <div v-if="cart"
                v-for="(product, index) in products" :key="product.id">
                    <div @click="navigateTo(`/products/${product.id}`)"
                    class="flex p-4 gap-4">
                        <div>
                            <img :src="product.image" class="size-32 aspect-square" alt="">
                        </div>
                        <div class="flex flex-col gap-1">
                            <h1 class="text-lg">{{ product.title }}</h1>
                            <h1 class="text-gray-700">{{ product.category }}   
                            </h1>
                            <h1><span>Quantity : </span><span class="font-semibold">{{item.products.find(p => p.productId === product.id)?.quantity || 0}}</span></h1>
                            <div class="flex mt-2 gap-4">
                                <img src="/assets/icons/heart.svg" class="size-5" alt="">
                                <img src="/assets/icons/delete.svg" class="size-5" alt="">
                            </div>
                        </div>
                        <div class="w-[20%]">
                            <h1 class="font-bold max-md:text-base">MRP : $ {{ product.price }}</h1>
                        </div>
                    </div>
                    <hr>
                </div>
                <p v-else class="m2">There's nothing in your bag</p>
            </div>
            <div class="col-span-4">
                <h1 class="text-lg font-bold">Summary</h1>
                <div class="mt-6">
                    <div class="flex justify-between p-2">
                        <p>Subtotal</p>
                        <p class="font-semibold">$ {{ total }}</p>
                    </div>
                    <div class="flex justify-between p-2">
                        <p>Estimated Delivery & Handling</p>
                        <p class="font-semibold">$ 50.00</p>
                    </div>
                    <hr>
                    <div class="flex justify-between py-4 px-2">
                        <p>Total</p>
                        <p class="font-bold">$ {{ delivery }}</p>
                    </div>
                    <hr>
                    <div class="flex flex-col items-center gap-3 mt-6">
                        <button class="p-4 text-white bg-black rounded-3xl w-[80%]">Guest Checkout</button>
                        <button class="p-4 text-white bg-black rounded-3xl w-[80%]">Member Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const {$axios} = useNuxtApp();
const cart = ref(null);
const blur = ref(false);
const total = computed(() => {
  return products.value
    .map(item => item.price)  // Extract price from each product
    .reduce((acc, price) => acc + price, 0);  // Sum up the prices
});
const delivery = computed(()=>{
    return Number(total.value) + 50
});
const products = ref([]); //To store products
const productIds = ref([]); //To store product ids
async function fetchProducts(){
    try {
       const fetch = productIds.value.map(async(id)=>{
        const res = await $axios.get(`/products/${id}`);
        return res.data;
       })
       products.value = await Promise.all(fetch);
    } catch (error) {
        console.error("Error from productFetching:",error)
    }
}
onMounted(async()=>{
    try {
       const res = await $axios.get('/carts/user/2');
        cart.value = res.data;
        if(cart.value && cart.value[0].products && cart.value[0].products.length > 0){
        productIds.value = cart.value[0].products.map(product=> product.productId);
        blur.value = true;
        await fetchProducts();
        }else{
            console.warn("No products found in the cart")
        }
    } catch (error) {
        console.error("Error :",error)
    }
});

</script>

<style scoped>

</style>