import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import Header from "./apps/header.js";
import Users from "./apps/users.js";

window.addEventListener("DOMContentLoaded", function() {
    createApp(Header).mount("#header");
    createApp(Users).mount("#users");
})