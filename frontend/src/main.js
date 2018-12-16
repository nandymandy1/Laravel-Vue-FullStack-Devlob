import Vue from 'vue'
import App from './App.vue'

// Import Vue Resource for HTTP Calls
import axios from 'axios';

// Import Authentication Package
import Auth from './packages/Auth/auth.js';

// Setting Base URL
Vue.use(Auth);

// Vue.use(VueResource);
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Authorization': `Bearer ` + Vue.auth.getToken()
  }
});


Router.beforeEach(
  // For Authenticated Users
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/feed'
        })
      } else next()
    }

    // For Unauthenticated users only
    else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else next()
    }

    else next()
  }
)

// Importing the Router
import Router from './routes.js';

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
});
