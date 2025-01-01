<template>
    <div class="relative z-20">
      <h1 class="text-2xl font-medium mb-6 padding-l">Classics Spotlight</h1>
      <div ref="carousel" class="flex overflow-scroll ml-2 space-x-4 carousel">
          <div 
          v-for="(item, index) in classics_spotlight" :key="index" 
          :style="setBackgroundImage(item.src)"
          class="w-[312px] h-[250px]
           flex-shrink-0 flex-none flex justify-center items-end relative z-[25]">
              <div class="flex justify-center items-center w-full p-2">   
                  <h2 class=" font-bold text-2xl">{{ item.title }}</h2>
                  <div 
                    class="absolute top-3 right-4 bg-gray-200 p-2 size-8 flex justify-center items-center opacity-80 rounded-full">
                        {{ index + 1 }}
                  </div>
              </div>
          </div>
          <div class="absolute top-[-0.5rem] space-x-2 right-[1rem] max-md:right-[1rem] z-20 pr-4">
              <button @click="scrollLeft" class="bg-gray-200 rounded-full hover:bg-gray-400 focus:ring-blue-500 focus:ring-2 p-2 max-md:p-1">
                  <img src="/assets/icons/arrow-left.svg" alt="left-arrow"><!--Left Arrow Button -->
              </button>
              <button @click="scrollRight" class="bg-gray-200 rounded-full hover:bg-gray-400 focus:ring-blue-500 focus:ring-2 p-2 max-md:p-1">
                  <img src="/assets/icons/arrow-right.svg" alt="right-arrow"> <!--Right Arrow Button-->
              </button>
          </div>
      </div>
    </div>
  </template>

<script setup>
const classics_spotlight = reactive([
    {
        title : "AIR FORCE 1",
        src : "/air-force-1.jpg"
    },
    {
        title : "AIR JORDAN 1",
        src : "/air-jordan-1.jpg"
    },
    {
        title : "CORTEZ",
        src : "/cortez.jpg"
    },
    {
        title : "KILLSHOT",
        src : "/killshot.jpg"
    },
    {
        title : "FIELD GENERAL",
        src : "/field-general.jpg"
    },
    {
        title : "PEGASUS 41",
        src : "/pegasus-41.jpg"
    }, 
    {
        title : "VOMERO",
        src : "/vomero.jpg"
    }, 
    {
        title : "V2K",
        src : "/v2k.jpg"
    },
    {
        title : "VAPORFLY",
        src : "/vaporfly.jpg"
    }, 
    {
        title : "DUNKS",
        src : "/dunks.jpg"
    }  
]);

const setBackgroundImage = (src) => {
    return {
        backgroundImage : `url(${src})`,
        backgroundSize : 'cover',
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat"
    }
};
// Creating a variable for reference 
const carousel = ref(null);

//scroll left function
const scrollLeft = ()=>{
    carousel.value.scrollBy({
        left: -300,
        behaviour: 'smooth'
    });
};

//scroll right function
const scrollRight = ()=>{
    carousel.value.scrollBy({
        left: 300,
        behaviour: 'smooth'
    });
};
</script>

<style scoped>
/* Optional: Hide the scrollbar */
.carousel::-webkit-scrollbar {
  display: none;
}

.carousel {
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}

</style>
