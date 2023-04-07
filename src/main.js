import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import router from "./components/router"
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import VueCarousel, { Slide } from 'vue-carousel';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



library.add(faSpinner);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
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
//Vue.use(initializeApp);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
