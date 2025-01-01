<template>
    <div class="relative z-20">
      <h1 class="text-2xl font-medium mb-6">Shop By Sport</h1>
      <div ref="carousel" class="flex overflow-scroll space-x-4 carousel">
          <div 
          v-for="(item, index) in shopBySport" :key="index" 
          :style="setBackgroundImage(item.src)" 
          class="max-sm:w-4/5 max-sm:h-[50vh] sm:max-md:h-[70vh] sm:max-md:w-4/5 w-2/6 h-[42vh]
           flex-shrink-0 flex flex-col justify-end relative z-[25] grayscale">
              <div class="flex flex-col gap-5 px-6 absolute bottom-[1rem] h-16">  
                  <button class="btn font-semibold bg-white">{{ item.title }}</button>
              </div>
          </div>
          <div class="absolute top-[-1rem] max-md:top-1 space-x-2 max-md:right-1 right-4 z-20 pr-4">
              <button @click="scrollLeft" class="bg-gray-200 rounded-full hover:bg-gray-500 focus:ring-blue-400 focus:ring-2 p-2 max-md:p-1">
                  <img src="/assets/icons/arrow-left.svg" alt="left-arrow"><!--Left Arrow Button -->
              </button>
              <button @click="scrollRight" class="bg-gray-200 rounded-full hover:bg-gray-500 focus:ring-blue-400 focus:ring-2 p-2 max-md:p-1">
                  <img src="/assets/icons/arrow-right.svg" alt="right-arrow"> <!--Right Arrow Button-->
              </button>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const shopBySport = reactive([
      {
          title : "Running",
          src : "/running.jpg"
      },
      {
          title : "Football",
          src : "/football.jpg"
      },
      {
          title : "Basketball",
          src : "/basketball.jpg"
      },
      {
          title : "Training and Gym",
          src : "/gym.jpg"
      },
      {
          title : "Tennis",
          src : "/tennis.jpg"
      },
      {
        title : "Yoga",
        src : "/yoga.jpg"
      },
      {
          title : "Skateboarding",
          src : "/skateboarding.jpg"
      },
      {
        title : "Dance",
         src : "/dance.jpg"
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
  