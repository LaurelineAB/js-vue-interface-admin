import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Header from "./apps/header.js";

window.addEventListener("DOMContentLoaded", function() {
    createApp(Header).mount("#header");
    console.log(Header.path);
})