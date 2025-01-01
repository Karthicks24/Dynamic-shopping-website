<template>
    <div>
        <div class="flex justify-between items-start my-4 focus:ring-black focus:ring-2" @click="resources_toggle=!resources_toggle">
            <div>
                <h1 class="font-medium">Resources</h1>
                <div v-if="resources_toggle" class="mt-4">
                    <p class="text-gray-800 hover:text-black mb-2">Find A Store</p>
                    <p class="text-gray-800 hover:text-black mb-2">Become A Member</p>
                    <p class="text-gray-800 hover:text-black mb-2">Send Us Feedback</p>
                </div>
            </div>
            <button @click="resources_toggle= !resources_toggle">
                <span v-if="resources_toggle"><img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="up arrow"></span>
                <span v-else><img src="/assets/icons/down_arrow.svg" alt="down arrow"></span>
            </button>
        </div>
        <hr>
        <div class="flex justify-between items-start my-4 focus:ring-black focus:ring-2" @click="help_toggle=!help_toggle">
            <div>
                <h1 class="font-medium">Help</h1>
                <div v-if="help_toggle" class="mt-4">
                    <p class="text-gray-800 hover:text-black mb-2">Get Help</p>
                    <p class="text-gray-800 hover:text-black mb-2">Order Status</p>
                    <p class="text-gray-800 hover:text-black mb-2">Delivery</p>
                    <p class="text-gray-800 hover:text-black mb-2">Returns</p>
                    <p class="text-gray-800 hover:text-black mb-2">Payment Options</p>
                    <p class="text-gray-800 hover:text-black mb-2">Contact Us On Nike.com Inquiries</p>
                    <p class="text-gray-800 hover:text-black mb-2">Contact Us On All Other Inquiries</p>
                </div>
            </div>
            <button @click="help_toggle= !help_toggle">
                <span v-if="help_toggle"><img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="up arrow"></span>
                <span v-else><img src="/assets/icons/down_arrow.svg" alt="down arrow"></span>
            </button>
        </div>
        <hr>
        <div class="flex justify-between items-start my-4 focus:ring-black focus:ring-2" @click="company_toggle=!company_toggle">
            <div>
                <h1 class="font-medium">Company</h1>
                <div v-if="company_toggle" class="mt-4">
                    <p class="text-gray-800 hover:text-black mb-2">About Nike</p>
                    <p class="text-gray-800 hover:text-black mb-2">News</p>
                    <p class="text-gray-800 hover:text-black mb-2">Careers</p>
                    <p class="text-gray-800 hover:text-black mb-2">Returns</p>
                    <p class="text-gray-800 hover:text-black mb-2">Investors</p>
                    <p class="text-gray-800 hover:text-black mb-2">Sustainability</p>
                </div>
            </div>
            <button @click="company_toggle= !company_toggle">
                <span v-if="company_toggle"><img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="up arrow"></span>
                <span v-else><img src="/assets/icons/down_arrow.svg" alt="down arrow"></span>
            </button>
        </div>
    </div>
    <hr>
    <div class="my-4 text-gray-800 flex gap-1"><span><img src="/assets/icons/globe_icon.svg" alt=""></span> India</div>
    <hr>
    <div class="my-4">
        <div class="text-gray-800 flex items-center gap-1">
            <span>
                <img src="/assets/icons/copyright.svg" alt="">
            </span>
             2024 Nike, Inc. All rights reserved
            </div>
        <div class="my-3">
            <span @mouseenter="guides_toggle=true" @mouseleave="guides_toggle=false" class="flex gap-2 relative w-24 items-center">
            Guides <span v-if="guides_toggle"><img src="/assets/icons/down_arrow.svg" class="rotate-[180deg]" alt="up arrow"></span>
            <span v-else><img src="/assets/icons/down_arrow.svg" alt="down arrow"></span>
            
            <!--Creating a list toggle while hover-->
                <div class="flex-flex-col bg-white w-[18vw] h-auto z-30 p-2 my-3 rounded-sm shadow-2xl absolute bottom-8 overflow-y-auto"
                    v-if="guides_toggle" @mouseenter="guides_toggle=true" @mouseleave="guides_toggle=false">
                    <ul v-for="(item, index) in guides_list" :key="index"
                    class="flex flex-col space-y-3 w-full h-auto">
                        <li class="text-gray-800 hover:text-black mb-1">{{ item }}</li>
                    </ul>
                </div>
            </span>
        </div>
        <div class="my-4 text-gray-800 hover:text-black">Terms of Sale</div>
        <div class="my-4 text-gray-800 hover:text-black">Terms of Use</div>
        <div class="my-4 text-gray-800 hover:text-black">Nike Privacy Policy</div>
    </div>
</template>

<script setup>
const resources_toggle = ref(false);
const help_toggle = ref(false);
const company_toggle = ref(false);
const guides_toggle = ref(false);
const guides_list = ref([
    "Nike Air", "Nike Air Force 1", "Nike Air Max", "Nike FlyEase", "Nike Flyknit",
    "Nike Flyleather", "Nike Free", "Nike Joyride", "Nike Pegasus", "Nike React", "Nike Vaporfly", "Nike Zoom Fly", "Nike ZoomX"
])
</script>

<style scoped>

</style>