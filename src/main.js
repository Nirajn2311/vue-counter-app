import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
