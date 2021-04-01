import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

library.add(faGlobeAmericas);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
