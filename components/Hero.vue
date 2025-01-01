<template>
  <div class="flex items-center justify-center w-5/6 h-3/5 max-lg:w-full max-lg:h-[80vh]">
    <video autoplay loop muted disablePictureInPicture class="w-full h-full object-cover object-center max-lg:h-[80vh]">
      <source src="/public/Joy _ Nike.mp4">
      The video tag is not supported in your browser
    </video>
  </div>
  <div class="flex flex-col text-center justify-center items-center gap-4">
    <h3 class="text-base font-semibold">Nike Running</h3>
    <h1 
    class="hero_title font-black max-md:text-5xl">
      WINNING ISN'T <br>
      COMFORTABLE
    </h1>
    <h3 class="text-base font-normal text-black max-md:w-[50vh]">If you don't hate running a little, you don't love running enough.</h3>
    <NuxtLink to="/products">
    <button class="btn bg-black text-white font-semibold mt-2">Shop Running</button>
    </NuxtLink>
  </div>
</template>

<script setup>

</script>
