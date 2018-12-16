import Vue from 'vue';
import VueRouter from 'vue-router';

// Components Import
import Login from './components/Authentication/Login.vue';
import Register from './components/Authentication/Register.vue';
import Feed from './components/Feed.vue';
import Create from './components/Products/Create.vue';
import Edit from './components/Products/Edit.vue';


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                forVisitors: true
            }
        },
        {
            path: '/feed',
            component: Feed,
            meta: {
                forAuth: true
            }
        },
        {
            path: '/products/create',
            component: Create,
            meta: {
                forAuth: true
            }
        },
        {
            path: '/products/:product/edit',
            component: Edit,
            meta: {
                forAuth: true
            }
        }
    ],

    linkActiveClass: 'active',
    mode: 'history'
});

export default router;