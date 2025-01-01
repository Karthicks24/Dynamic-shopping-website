<template>
  <section class="relative overflow-hidden w-screen">
      <SaleBanner/>
    </section>
    <section class="xl:padding flex flex-col gap-4 items-center justify-center">
      <Hero/>
    </section>
    <section class="padding-l">
      <LatestProducts/>
    </section>
    <section class="padding-y">
      <ClassicsSpotlight/>
    </section>
    <section class="padding-l py-10">
      <ShopBySport/>
    </section>
    <section class="padding-l padding-t ">
      <NewThisWeek/>
    </section>
    <section class="padding bg-pale-blue">
      <Collection/>
    </section>
    <section class="padding-x sm:py-32 py-16 w-full">
      <MemberBenefits/>
    </section>
</template>

<script setup>
definePageMeta({
    layout : "defaultlayout"
});
useHead({
  title : "Nike. Just Do it."
})
</script>
