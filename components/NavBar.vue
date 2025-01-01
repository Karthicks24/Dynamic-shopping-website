<template>
    <div class="w-full h-screen absolute opacity-70 z-10 bg-gray-300" v-if="dropdownOverlay"></div>
  <header class="z-20 relative ">
    <div class="w-full bg-gray-100 mx-auto max-lg:hidden">
    <nav class=" lg:mx-12 mx-6 py-2 flex justify-between items-center">
        <nuxt-link to="/">
            <img src="/assets/icons/jump.png" alt="jump" height="16px" width="16px">
        </nuxt-link>
        <ul class="flex items-center gap-2">
            <li class="font-medium text-sm">
                <nuxt-link to="/products">Find a Store</nuxt-link>
            </li>
            <li class="text-sm">|</li>
            <li class="font-medium text-sm">
                <nuxt-link to="">Help</nuxt-link>
            </li>
            <li class="text-sm">|</li>
            <li class="font-medium text-sm">
                <nuxt-link to="">Join us</nuxt-link>
            </li>
            <li class="text-sm">|</li>
            <li class="font-medium text-sm">
                <nuxt-link to="">Sign In</nuxt-link>
            </li>
            <li class="text-sm">|</li>
        </ul>
    </nav>
    </div>
    <div class="mx-auto bg-white">
    <nav class="lg:mx-12 mx-6 flex justify-between items-center">
        <nuxt-link to="/" class="flex-none">
            <img src="/assets/icons/nike.png" alt="logo" height="48px" width="64px">
        </nuxt-link>
        <ul class="flex gap-4 max-lg:hidden">
            <li class="p-2 font-medium under-line flex relative" 
                @mouseenter="feature_overlay_and_dropdown(true)"
                @mouseleave="feature_overlay_and_dropdown(false)" >
                    New & Featured 
                    <span class="absolute bottom-2 right-[-0.85rem]" @click="feature_overlay_and_dropdown(true)">
                        <img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="" v-if="feature_dropdown">
                        <img src="/assets/icons/down_arrow.svg" alt="" v-else>
                    </span>
            </li>
            <li class="p-2 font-medium under-line flex relative"
                @mouseenter="men_overlay_and_dropdown(true)"
                @mouseleave="men_overlay_and_dropdown(false)">
                    Men
                    <span class="absolute bottom-2 right-[-0.85rem]" @click="men_overlay_and_dropdown(true)">
                        <img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="" v-if="men_dropdown">
                        <img src="/assets/icons/down_arrow.svg" alt="" v-else>
                    </span>
            </li>
            <li class="p-2 font-medium under-line flex relative"
                @mouseenter="women_overlay_and_dropdown(true)"
                @mouseleave="women_overlay_and_dropdown(false)">
                    Women
                    <span class="absolute bottom-2 right-[-0.85rem]" @click="women_overlay_and_dropdown(true)">
                        <img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="" v-if="women_dropdown">
                        <img src="/assets/icons/down_arrow.svg" alt="" v-else>
                    </span>
            </li>
            <li class="p-2 font-medium under-line flex relative"
                @mouseenter="kids_overlay_and_dropdown(true)"
                @mouseleave="kids_overlay_and_dropdown(false)">
                    Kids
                    <span class="absolute bottom-2 right-[-0.85rem]" @click="kids_overlay_and_dropdown(true)">
                        <img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="" v-if="kids_dropdown">
                        <img src="/assets/icons/down_arrow.svg" alt="" v-else>
                    </span>
            </li>
            <li class="p-2 font-medium under-line"
                @mouseenter="sale_overlay_and_dropdown(true)"
                @mouseleave="sale_overlay_and_dropdown(false)">
                    Sale
                    <span class="absolute bottom-2 right-[-0.85rem]" @click="sale_overlay_and_dropdown(true)">
                        <img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="" v-if="sale_dropdown">
                        <img src="/assets/icons/down_arrow.svg" alt="" v-else>
                    </span>
            </li>
            <li class="p-2 font-medium under-line">Customise</li>
            <li class="p-2 font-medium under-line">SNKRS</li>
        </ul>
        <ul class="flex gap-4">
            <li class="flex-none p-1 xl:hidden">
                <nuxt-link to="">
                    <img src="/assets/icons/search.svg" alt="search">
                </nuxt-link>
            </li>
            <li class="bg-gray-100 rounded-xl w-32 h-8 flex items-center gap-2 p-2 max-xl:hidden">
                    <span class="hover:bg-gray-300 p-1">
                        <img src="/assets/icons/search.svg" alt="search">
                    </span>
                    <input type="text" placeholder="Search" class="focus:outline-none bg-transparent placeholder:text-slate-600 w-[70%]">
            </li>
            <li class="flex-none p-1 lg:hidden hover:bg-gray-300 rounded-full">
                <nuxt-link to="">
                    <img src="/assets/icons/profile.svg" alt="profile">
                </nuxt-link>
            </li>
            <li class="flex-none p-1 max-lg:hidden hover:bg-gray-300 rounded-full">
                <nuxt-link to="">
                    <img src="/assets/icons/heart.svg" alt="like">
                </nuxt-link>
            </li>
            <li class="flex-none p-1 hover:bg-gray-300 rounded-full relative">
                <nuxt-link to="/cart">
                    <img src="/assets/icons/shopping_bag.svg" alt="cart">
                    <div class="absolute top-[0.55rem] left-[0.80rem] text-sm">{{ products.length }}</div>
                </nuxt-link>
            </li>
            <li class="lg:hidden flex-none p-1 hover:bg-gray-300 rounded-full">
                <nuxt-link to="">
                    <img src="/assets/icons/hamburger.svg" alt="menu">
                </nuxt-link>
            </li>
        </ul>
    </nav>
    <div v-if="dropdownOverlay"
    @mouseenter="dropdownOverlay=true" @mouseleave="dropdownOverlay=false" 
    class="w-screen h-auto bg-white z-20 flex justify-center">
<div class="mb-4">   
    <div v-if="feature_dropdown" @mouseenter="feature_overlay_and_dropdown(true)" @mouseleave="feature_overlay_and_dropdown(false)"
     class="grid grid-cols-5 gap-6">
        <div class="space-y-3 mx-4" v-for="(item, index) in newFeature" :key="item">
            <h3 class="font-normal">{{ item.title }}</h3>
            <ul class="text-sm font-medium text-gray-500 flex flex-col gap-2">
                <li v-for="(list, index) in item.list" :key="index" class="w-full hover:text-black cursor-pointer">{{ list }}</li>
            </ul>
        </div>
    </div>
    <div v-if="men_dropdown" @mouseenter="men_overlay_and_dropdown(true)" @mouseleave="men_overlay_and_dropdown(false)"
    class="grid grid-cols-4 gap-6">
        <div class="space-y-3 mx-4" v-for="(item, index) in men" :key="item"
        :class="{
        'col-span-1': index !== 1,
        'row-span-2 col-span-1': index === 1, // Make Item 2 span two rows
        'col-start-3 row-start-2': index === 5 // Move Item 6 to start in the 3rd column, 2nd row
      }">
            <h3 class="font-normal">{{ item.title }}</h3>
            <ul class="text-sm font-medium text-gray-500 flex flex-col gap-2">
                <li v-for="(list, key) in item.list" :key="key" class="w-full hover:text-black cursor-pointer">{{ list }}</li>
            </ul>
        </div>
    </div>
    <div v-if="women_dropdown" @mouseenter="women_overlay_and_dropdown(true)" @mouseleave="women_overlay_and_dropdown(false)" 
    class="grid grid-cols-4 gap-6">
        <div class="space-y-3 mx-4" v-for="(item, index) in women" :key="item"
        :class="{
        'col-span-1': index !== 1,
        'row-span-2 col-span-1': index === 1, // Make Item 2 span two rows
        'col-start-3 row-start-2': index === 5 // Move Item 6 to start in the 3rd column, 2nd row
      }">
            <h3 class="font-normal">{{ item.title }}</h3>
            <ul class="text-sm font-medium text-gray-500 flex flex-col gap-2">
                <li v-for="(list, key) in item.list" :key="key" class="w-full hover:text-black cursor-pointer">{{ list }}</li>
            </ul>
        </div>
    </div>
    <div v-if="kids_dropdown" @mouseenter="kids_overlay_and_dropdown(true)" @mouseleave="kids_overlay_and_dropdown(false)" 
    class="grid grid-cols-4 gap-6">
        <div class="space-y-3 mx-4" v-for="(item, index) in kids" :key="item"
        :class="{
        'col-span-1': index !== 1,
        'row-span-2 col-span-1': index === 1, // Make Item 2 span two rows
        'col-start-3 row-start-2': index === 5 // Move Item 6 to start in the 3rd column, 2nd row
      }">
            <h3 class="font-normal">{{ item.title }}</h3>
            <ul class="text-sm font-medium text-gray-500 flex flex-col gap-2">
                <li v-for="(list, key) in item.list" :key="key" class="w-full hover:text-black cursor-pointer">{{ list }}</li>
            </ul>
        </div>
    </div>
    <div v-if="sale_dropdown" @mouseenter="sale_overlay_and_dropdown(true)" @mouseleave="sale_overlay_and_dropdown(false)" 
    class="grid grid-cols-4 gap-6">
        <div class="space-y-3 mx-4" v-for="(item, index) in sale" :key="item"
        :class="{
        'col-span-1': index !== 1,
        'row-span-2 col-span-1': index === 1, // Make Item 2 span two rows
        'col-start-3 row-start-2': index === 5 // Move Item 6 to start in the 3rd column, 2nd row
      }">
            <h3 class="font-normal">{{ item.title }}</h3>
            <ul class="text-sm font-medium text-gray-500 flex flex-col gap-2">
                <li v-for="(list, key) in item.list" :key="key" class="w-full hover:text-black cursor-pointer">{{ list }}</li>
            </ul>
        </div>
    </div>
</div> 
</div>
    
</div>
<div></div>
  </header>
</template>

<script setup>
const dropdownOverlay = ref(false);
const feature_dropdown = ref(false);
const men_dropdown = ref(false);
const women_dropdown = ref(false);
const kids_dropdown = ref(false);
const sale_dropdown = ref(false);
const feature_overlay_and_dropdown = (val)=>{
    dropdownOverlay.value = val;
    feature_dropdown.value = val;
    };
const men_overlay_and_dropdown = (val)=>{
    dropdownOverlay.value = val;
    men_dropdown.value = val;
    };
const women_overlay_and_dropdown = (val)=>{
    dropdownOverlay.value = val;
    women_dropdown.value = val;
    };
const kids_overlay_and_dropdown = (val)=>{
    dropdownOverlay.value = val;
    kids_dropdown.value = val;
    };
const sale_overlay_and_dropdown = (val)=>{
    dropdownOverlay.value = val;
    sale_dropdown.value = val;
    };
const newFeature = reactive({
    one : {
        title : "New & Featured",
        list : [
            "New Arrivals", "Latest Shoes", "Latest Clothing", "SNKR Launch",
            "Customise with Nike by you", "BestSellers", "Member Exclusive",
            "Top Kicks under Rs.8000.00"
        ]
    },
    two : {
        title : "Shop Icons",
        list : [
            "Air Froce 1", "Air Jordan 1","Air Max","Dunk",
            "Cortez","Blazer","Pegasus"
        ]
    },
    three : {
        title : "New for Men",
        list : [
            "Shoes", "Clothing", "Accessories", "Shop All New"
        ]
    },
    four : {
        title : "New for Women",
        list : [
            "Shoes", "Clothing", "Accessories", "Shop All New"
        ]
    },
    five : {
        title : "New for Kids",
        list : [
            "Shoes", "Clothing", "Accessories", "Shop All New"
        ]
    }
});
const men = reactive({
    one : {
        title : "Featured",
        list : [
            "New Releases", "Bestsellers", "Member Exclusive", "Jordan", "LifeStyle Running",
            "Customise with Nike by you", "Sale", "Running Shoe Finder", "Sustainable Materials"
        ]
    },
    two : {
        title : "Shoes",
        list : [
            "All Shoes", "Newest Sneakers", "Jordan", "Lifestyle", "Running", "Gym and Training",
            "Basketball", "Football", "Sandals and Slides", "Last Sizes Available", "Customise with Nike by you",
            "Top picks Under Rs.8000.00"
        ]
    },
    three : {
        title : "Clothing",
        list : [
            "All Clothing", "Tops and T-shirts", "Shorts", "Pants and Leggings", "Hoodies and Swatshirts",
            "Jackets and Gilets", "Jerseys and Kits", "Jordan"
        ]
    },
    four : {
        title : "Shop by Sport",
        list : [
            "Running", "Basketball", "Football", "Golf", "Tennis",
            "Gym and Training", "Yoga", "Skateboarding"
        ]
    },
    five : {
        title : "Jordan",
        list : [
            "All Jordan", "New Jordan", "Jordan Clothing", "Jordan Basketball", "Jordan Lifestyle"
        ]
    },
    six : {
        title : "Accessories and Equipment",
        list : [
            "All Accessories and Equipments", "Bags and Backpacks", "Socks", "Hats and Headwear"
        ]
    },
    seven: {
        title : "Shop by Brand",
    list : [
        "Nikes Sportswear", "NikeLab", "Nike by You", "Jordan",
        "ACG", "NBA", "Nike SB"
        ]
    }
});
const women = reactive({
    one : {
        title : "Featured",
        list : [
            "New Releases", "Bestsellers", "Member Exclusive", "Jordan", "LifeStyle Running",
            "Customise with Nike by you", "Sale", "Running Shoe Finder", "Sustainable Materials"
        ]
    },
    two : {
        title : "Shoes",
        list : [
            "All Shoes", "Newest Sneakers", "Jordan", "Lifestyle", "Running", "Gym and Training",
            "Basketball", "Football", "Sandals and Slides", "Last Sizes Available", "Customise with Nike by you",
            "Top picks Under Rs.8000.00"
        ]
    },
    three : {
        title : "Clothing",
        list : [
            "All Clothing", "Tops and T-shirts","Sport Bras", "Shorts", "Pants and Leggings","Skirts and Dresses","Modest Wear", "Hoodies and Swatshirts",
            "Jackets and Gilets","Nike Maternity", "Jerseys and Kits", "Jordan"
        ]
    },
    four : {
        title : "Shop by Sport",
        list : [
            "Yoga","Running","Gym and Training", "Basketball", "Football", 
            "Golf", "Tennis", "Skateboarding"
        ]
    },
    five : {
        title : "Accessories and Equipment",
        list : [
            "All Accessories and Equipments", "Bags and Backpacks", "Socks", "Hats and Headwear"
        ]
    },
    six: "Shop by Brand",
    list : [
        "Nikes Sportswear", "NikeLab", "Nike by You", "Jordan",
        "ACG", "NBA", "Nike SB"
    ]
});
const kids = reactive({
    one : {
        title : "Featured",
        list : [
            "New Releases", "Bestsellers", "Easy on and off", "Member Exclusive", "Jordan", "Last sizes Available",
            "Sale"
        ]
    },
    two : {
        title : "Boys' Shoes",
        list : [
            "All Shoes", "Older boys (7-14 years)", "Younger boys (4-7 years)", "Babies and Toddlers (0-4years)", "Jordan", "Lifestyle", "Running", "Gym and Training",
            "Basketball", "Football", "Sandals and Slides"
        ]
    },
    three : {
        title : "Girls' Shoes",
        list : [
            "All Shoes", "Older boys (7-14 years)", "Younger boys (4-7 years)", "Babies and Toddlers (0-4years)", "Jordan", "Lifestyle", "Running", "Gym and Training",
            "Basketball", "Football", "Sandals and Slides"
        ]
    },
    four : {
        title : "Accessories and Equipment",
        list : [
            "All Accessories and Equipments", "Bags and Backpacks", "Socks", "Hats and Headwear"
        ]
    },
    five : {
        title : "Kids by Age",
        list : [
            "Older kids (7-14years)", "Younger Kids(4-7 years)", "Babies and Toddlers(0-4 years)"
        ]
    },
    six: {
        title : "Boys' Clothing",
        list : [
        "Tops and T-shirts", "Hoodies and Swatshirts", "Pants and Leggings", "Shorts"
    ]
    },
    seven : {
        title: "Girls' Clothing",
        list : [
        "Tops and T-shirts", "Hoodies and Swatshirts", "Pants and Leggings", "Sports Bras"
    ]
    },
    eight : {
        title : "Shop by Sport",
        list : [
            "Running", "Basketball", "Football", "Golf", "Tennis",
            "Gym and Training", "Yoga", "Skateboarding"
        ]
    }
});
const sale = reactive({
    one : {
        title : "Sale",
        list : [
            "Shop All Sale", "Shoes Sale", "Clothing Sale", "Accessories Equipment Sale"
        ]
    },
    two : {
        title : "Men's Sale",
        list : [
            "Shoes", "Clothing"
        ]
    },
    three : {
        title : "Women's Sale",
        list : [
            "Shoes", "Clothing"
        ]
    },
    four : {
        title : "Kids' Sale",
        list : [
            "Shoes", "Clothing"
        ]
    }
});
const products = ref([]); //To store products
const productIds = ref([]); //To store product ids
async function fetchProducts(){
    try {
       const fetch = productIds.value.map(async(id)=>{
        const res = await $axios.get(`/products/${id}`);
        return res.data;
       })
       products.value = await Promise.all(fetch);
    } catch (error) {
        console.error("Error from productFetching:",error)
    }
}
onMounted(async()=>{
    try {
       const res = await $axios.get('/carts/user/2');
        cart.value = res.data;
        if(cart.value && cart.value[0].products && cart.value[0].products.length > 0){
        productIds.value = cart.value[0].products.map(product=> product.productId);
        await fetchProducts();
        }else{
            console.warn("No products found in the cart")
        }
    } catch (error) {
        console.error("Error :",error)
    }
});
</script>
