<template>
    <div class="relative z-20">
      <h1 class="text-2xl font-medium mb-6">Member Benefits</h1>
      <div ref="carousel" class="flex overflow-scroll space-x-4 carousel">
          <div 
          v-for="(item, index) in theLatest_carousel" :key="index" 
          :style="setBackgroundImage(item.src)" 
          class="max-sm:w-4/5 max-sm:h-[60vh] sm:max-md:h-[80vh] sm:max-md:w-4/5 w-2/6 h-[55vh]
           flex-shrink-0 flex flex-col justify-end relative z-[25]">
              <div class="flex flex-col gap-5 px-4 absolute bottom-[4rem] h-16">   
                  <h2 class="text-white font-medium text-xl">{{ item.title }}</h2>
                  <button class="btn bg-white">Shop</button>
              </div>
          </div>
          <div class="absolute top-[-1rem] max-md:top-1 space-x-2 max-md:right-1 right-4 z-20 pr-4">
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
  const theLatest_carousel = reactive([
      {
          title : "Your Exclusive Access",
          tag : "Member Product",
          button : "Shop",
          src : "/girl-pose.jpg"
      },
      {
          title : "Your Customisation Service",
          tag : "Nike By You",
          button : "Customise",
          src : "/shopping.jpg"
      },
      {
          title : "How We Say Thank You",
          tag : 'Member Rewards',
          button : 'Celebrate',
          src : "/celebration.jpg"
      },
      {
          title : "A Celebration of You",
          tag : "Member Days",
          button : "Learn More",
          src : "/member-basketball.jpg"
      },
      {
          title : "Movement Where You Are",
          tag : "Sport & Wellness Apps",
          button : "Move",
          src : "/stretching.jpg"
      },
      {
          title : "Your Ultimate Sneaker Community",
          tag : "SNKRS",
          button : "Explore",
          src : "/using-phone.jpg"
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
  