import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import router from "./components/router"
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import {v4 as uuidv4} from 'uuid';
import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import VueCarousel, { Slide } from 'vue-carousel';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



const firebaseConfig = {
  apiKey: "AIzaSyBj86JYFkwR1T-lxhWnwB509omm-7I5Dd4",
  authDomain: "market-place-ae685.firebaseapp.com",
  projectId: "market-place-ae685",
  storageBucket: "market-place-ae685.appspot.com",
  messagingSenderId: "1008378704426",
  appId: "1:1008378704426:web:478dcda9d0aa1b012d4953"
};

library.add(faSpinner);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
initializeApp(firebaseConfig)
Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
Vue.use(VueCarousel);
Vue.component('slide', Slide);
Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({


  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
})


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(uuidv4);
//Vue.use(initializeApp);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
