import { defineNuxtPlugin } from "#app";
import axios from 'axios';

export default defineNuxtPlugin(nuxtapp => {
    const axiosInstance = axios.create({
        baseURL : "https://fakestoreapi.com"
    })

    //Injecting the Axios instance to be available as $axios
    nuxtapp.provide('axios',axiosInstance)
})