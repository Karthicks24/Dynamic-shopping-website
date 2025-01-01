<template>
    <div class="relative z-20">
      <h1 class="text-2xl font-medium mb-6">New This Week</h1>
      <div ref="carousel" class="flex overflow-scroll space-x-4 carousel">
          <div 
          v-for="(item, index) in newThisWeek" :key="index" 
          class="max-sm:w-[80%] max-sm:h-[70vh] sm:max-md:h-[55vh] sm:max-md:w-[75%] w-2/6 h-[50vh]
           flex-shrink-0 flex flex-col relative z-[25]" >
           <img :src="item.src" :alt="item.fullName" class="w-full h-[70%] mb-2 image-class">
            <div class="bg-white z-[25] flex flex-col p-2 w-full h-auto">
                <h2 v-if="item.memberProduct" class="text-[brown] font-semibold">Member Product</h2>
                <h2 class="font-medium text-base">{{ item.fullName }}</h2>
                <h2 class="text-base text-gray-700 font-medium">{{ item.category }}</h2>
                <h2 class="mt-1 font-lg font-semibold">MRP : {{ item.mrp }}</h2>
            </div>
          </div>

          <!-- Arrow Buttons -->
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
  const newThisWeek = reactive([
      {
          fullName : "Nike Air Force 1 '07 Next Nature",
          category : "Women's Shoes",
          mrp : "Rs. 8 195.00",
          memberProduct : false,
          src : "/air-force-1.jpg"
      },
      {
          fullName : "Nike Air Force 1 '07",
          category : "Women's Shoes",
          mrp : "Rs. 9 695.00",
          memberProduct : true,
          src : "/shoe3.jpg"
      },
      {
        fullName : "Nike JAM",
          category : "Women's Shoes",
          memberProduct : false,
          mrp : "Rs. 10 795.00",
          src : "/nike-jam.jpg"
      },
      {
        fullName : "Air Jordan Lagacy 312 Low",
          category : "Men's Shoes",
          mrp : "Rs. 12 995.00",
          memberProduct : false,
          src : "/air-jordan-1.jpg"
      },
      {
        fullName : "Jordan Spizike Low Paris Saint-Germain",
          category : "Men's Shoes",
          mrp : "Rs. 15 995.00",
          memberProduct : false,
          src : "/killshot.jpg"
      },
      {
        fullName : "Nike Juniper Trail 3",
          category : "Men's Trail-Running Shoes",
          mrp : "Rs. 7 495.00",
          memberProduct : false,
          src : "/nike-juniper-trail-3.jpg"
      },
      {
        fullName : "Nike InfinityRN 4",
          category : "Men's Road Running Shoes",
          mrp : "Rs. 14 995.00",
          memberProduct : false,
          src : "/shoe1.jpg"
      },
      {
        fullName : "Nike Air Monarch 4",
          category : "Men's Workout Shoes",
          mrp : "Rs. 5 295.00",
          memberProduct : false,
          src : "/shoe2.jpg"
      },
      {
        fullName : "Nike Air Pegasus 2005",
          category : "Men's Shoes",
          mrp : "Rs. 13 995.00",
          memberProduct : true,
          src : "/pegasus-41.jpg"
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

  .image-class{
    object-fit: cover;
    object-position: center;
  }
  </style>
  
