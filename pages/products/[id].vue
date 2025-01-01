<template>
  <div :class="blur? '':'z-40 w-[100vw] opacity-60 blur-sm absolute h-[150vh]' ">
  <NuxtLayout name="productlayout">
    <section class="px-12 md:px-32 mt-4 relative">
      <div id="ItemPage">
        <div class="md:grid md:grid-cols-10 flex flex-col-reverse">
          <!--Suggestions for smaller devices-->
          <!-- <ClientOnly>
          <div class="max-md:block hidden">
            <Suggestions :category="category"/>
          </div>
          </ClientOnly> -->
          <!--Description-->
          <div class="my-4 space-y-2 hidden max-md:block">
            <p class="font-semibold">Description</p>
            <h3 class="font-base text-sm">{{ product.description }}</h3>
          </div>
          <!--Buttons for smaller devices-->
          <div class="hidden flex-col items-center mt-6 gap-4 max-md:flex">
                    <button 
                      class="p-3 bg-black rounded-3xl w-[60%]"
                      @click="added=!added">
                      <span v-if="added" class="text-white">Added</span>
                      <span v-else class="text-white">Add to Bag</span>
                    </button>
                    <button 
                      @click="favorites=!favorites"
                      class="p-3 border-gray-700 border flex gap-2 justify-center w-[60%] bg-white rounded-3xl">
                        <span v-if="favorites">
                          <img src="/assets/icons/heart-filled.svg" alt="">
                        </span>
                        <span v-else>Favorite</span>
                    </button>
                  </div>
          <!--Other Images-->
          <div 
          class="col-span-1 aspect-square object-contain object-center rounded-md max-md:my-2 max-md:flex max-md:w-full max-md:size-9 size-14">
              <div v-for="(item, index) in otherImages" :key="index"
               class="w-full h-full mt-2">
                <img :src="item" alt="" class="w-full h-full rounded-sm cursor-pointer"
                :class="currentImage===item ? 'border border-black opacity-40' : ''"
                @mouseover="currentImage=item" @click="currentImage=item" >
              </div>
          </div>
          <!--Main Image-->
          <div class="col-span-4 ml-1 flex items-center justify-center max-md:p-3 p-1 rounded-sm border-2 max-md:mt-4 border-gray-300 relative md:w-[90%] md:h-[80%] w-[full] h-[60vh] overflow-hidden">
            <div class="w-full h-full shadow-sm">
              <img :src="currentImage" alt="" class="w-full h-full object-contain object-center">
              <div class="absolute bottom-6 right-[-3rem] max-md:right-[-5rem] bg-slate-300 w-36 h-10 rounded-xl flex items-center gap-2">
                <span><img src="/assets/images/star.png" alt="star" class="size-7 max-md:size-5 ml-2"></span>{{ rate }}
                <!-- {{ product }} -->
              </div>
            </div>
          </div>
          <div class="col-span-5">
            <div>
              <div class="mb-5 flex flex-col gap-1">
                <h1 class="font-bold max-md:text-lg text-xl">{{ product.title }}</h1>
                <h3 class="font-semibold max-md:text-base">{{ product.category }}</h3>
                <p class="text-gray-800 md:block hidden">{{ product.description }}</p>
              </div>
              <div>
                <h1 class="font-bold max-md:text-base text-lg mb-2">MRP : $ {{ product.price }}</h1>
                <p class="text-gray-600 max-md:text-sm">Inclusive of all taxes</p>
                <p class="text-gray-600 max-md:text-sm">(Also includes all applicable duties)</p>
              </div>

              <!--Buttons-->
              <div>
                  <div class="flex flex-col items-center mt-6 gap-4 max-md:hidden">
                    <button 
                      class="p-3 bg-black rounded-3xl w-[50%]"
                      @click="added=!added">
                      <span v-if="added" class="text-white">Added</span>
                      <span v-else class="text-white">Add to Bag</span>
                    </button>
                    <button 
                      @click="favorites=!favorites"
                      class="p-3 border-gray-700 border flex gap-2 justify-center w-[50%] bg-white rounded-3xl">
                        <span v-if="favorites">
                          <img src="/assets/icons/heart-filled.svg" alt="">
                        </span>
                        <span v-else>Favorite</span>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!--Suggestions for larger devices-->
          <div class="block max-md:space-y-2 space-y-4 max-md:my-2 my-6">
            <h1 class="font-semibold">Similar to this product</h1>
              <Suggestions :category="category"/>
          </div>
      </div>
    </section>
  </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();
const {$axios} = useNuxtApp();
const product = ref([]);
const blur = ref(false);
const rate = ref("");
const category = ref("");
const added = ref(false);
const favorites = ref(false);
let currentImage = ref(null);
const name = computed(()=>{
  return route.params.id.replaceAll("-"," ")
});
const fetchID = route.params.id;
onMounted(async() => {
  try {
    const res = await $axios.get(`/products/${fetchID}`)
    product.value = res.data
    blur.value = true;
    rate.value = product.value.rating.rate;
    category.value = product.value.category
  } catch (error) {
    console.error("Error :",error)
  }
});
watchEffect(()=>{
  if(blur.value){
    currentImage.value = product.value.image
    otherImages.value[0] = product.value.image
  }
});
const otherImages = ref([
    "",
    "/air-force-1.jpg",
    "/air-jordan-1.jpg",
    "/cortez.jpg",
    "/field-general.jpg", 
    "/vomero.jpg", 
    "/v2k.jpg"
    ]);
</script>

