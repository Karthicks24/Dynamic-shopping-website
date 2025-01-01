<template>
  <div>
    <div class="grid grid-cols-4 place-content-center mb-2">
        <div v-for="(item, index) in footer_category" :key="index"
        class="flex flex-col items-center">
            <h1 class="text-lg font-medium mb-5 hover:text-gray-900">{{ item.title }}</h1>
            <ul v-for="(category, index) in item.list" :key="index" class="cursor-pointer">
                <li class="text-gray-700 hover:text-black mb-4">{{ category }}</li>
            </ul>
        </div>
    </div>
  </div>
  <hr>
</template>

<script setup>
const footer_category = reactive([
    {
        title : "Icons",
        list : [
            "Air Force 1", "Huarache", "Air Max 90", "Air Max 95"
        ]
    },
    {
        title :  "Shoes",
        list : [
            "All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"
        ]
    },
    {
        title : "Clothing",
        list : [
            "All Clothing", "Modest Wear", "Hoodies", "Shirts & Tops"
        ]
    },
    {
        title : "Kids",
        list  : [
            "Infant & Toddler", "Kids' Shoes", "Kids' Jordan", "Kids' Basketball"
        ]
    }
])
</script>

<style>

</style>