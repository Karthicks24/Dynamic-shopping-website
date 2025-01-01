<template>
  <main class="relative">
    <NavBar/>
    <section class="relative overflow-hidden w-screen">
      <SaleBanner/>
    </section>
    <slot/>
    <section class="padding-x py-12 md:px-[9rem]">
            <FooterCategory/>
        </section>
        <section class="padding-x padding-b md:px-[10rem]">
            <Footer/>
        </section>
  </main>
</template>

<script setup>

</script>
