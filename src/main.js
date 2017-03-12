import Vue from 'vue';
// Import router and components
import VueRouter from 'vue-router';
import App from './App.vue';
import ApiViewer from './components/ApiViewer.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Help from './components/Help.vue';
import PrivacyAndTerms from './components/PrivacyAndTerms.vue';


const { componentHandler } = window;
/* eslint-disable no-new */

// Setup Vue to use Router
Vue.use(VueRouter);
// Setup Resource
Vue.use(require('vue-resource'));

// Set API host
Vue.http.options.root = process.env.API_HOST;

const router = new VueRouter({
  routes: [
    { path: '/home', component: ApiViewer },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/help', component: Help },
    { path: '/terms', component: PrivacyAndTerms },
    { path: '/', redirect: '/home' }
  ],
});

Vue.directive('mdl', {
  bind(el) {
    componentHandler.upgradeElement(el);
  }
});

// Start view at id app
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
