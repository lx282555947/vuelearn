import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/Home')
    },
    {
        path: '/category',
        component: () => import('@/views/Category')
    },
    {
        path: '/shoppingcart',
        component: () => import('@/views/ShoppingCart')
    },
    {
        path: '/mine',
        component: () => import('@/views/Mine')
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;