import Vue from 'vue';
// Import router and components
import VueRouter from 'vue-router';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';

/* eslint-disable no-new */

// Setup Vue to use Router
Vue.use(VueRouter);
// Setup Resource
Vue.use(require('vue-resource'));
// Intilized root component
const rootComponent = Vue.extend({});

const router = new VueRouter();
router.map({
  '/home': {
    component: App,
  },
  '/about': {
    component: About,
  },
  '/contact': {
    component: Contact,
  },
});
router.redirect({
// redirect to home if not a correct route!
  '*': '/home',
});
// Start view at id app
router.start(rootComponent, '#app');
