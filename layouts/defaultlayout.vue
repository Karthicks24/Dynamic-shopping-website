<template>
    <main class="relative">
        <NavBar class="sticky"/>
        <slot/>
        <section class="padding-x pb-12 md:px-[9rem]">
            <FooterCategory/>
        </section>
        <section class="padding-x padding-b md:px-[10rem]">
            <Footer/>
        </section>
    </main>
</template>

<script setup>

</script>

<style>

</style>