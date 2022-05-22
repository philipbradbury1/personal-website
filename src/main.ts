import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
    config: { id: "UA-88383366-1" }
  }).use(store).use(router).mount('#app');
