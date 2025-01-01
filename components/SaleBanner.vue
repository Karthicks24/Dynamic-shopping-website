<template>
  <div :class="currentSlide === 0 ? 'translate-x-0' : '-translate-x-[50%]'"
  class="flex transition-transform duration-1000 ease-in-out w-[200vw] bg-gray-100 py-3">
    <div class="flex flex-col justify-center items-center w-screen h-auto">
        <h2 class="text-normal">{{ offer.title }}</h2>
        <p class="text-sm font-medium underline mt-1">{{ offer.cta }}</p>
    </div>
    <div class="flex flex-col text-center items-center justify-center w-screen h-auto">
        <h2>{{ invite.title }}</h2>
        <p class="text-sm">{{ invite.join_quote }}</p>
        <p class="text-sm font-medium underline mt-1 mb-4">{{ invite.cta }}</p>
    </div>
  </div>
</template>

<script setup>
const offer = reactive({
    title : "New Styles on Sale: Up to 40% off",
    cta : "Shop All Our New Markdowns"
});
const invite = reactive({
    title : "Move, Shop, Customise & Celebrate with us",
    join_quote : "No matter what you feel like doing today, It's better as a member",
    cta : "Join Us"
});

//Track the current slide
const currentSlide = ref(0);
let interval;

//Switch slides every 5 seconds
onMounted(() => {
    interval = setInterval(() => {
        currentSlide.value = currentSlide.value=== 0? 1 : 0;
    }, 5000);
});

onBeforeMount(() => {
    clearInterval(interval);
});
</script>
