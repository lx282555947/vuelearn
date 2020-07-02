import Vue from 'vue';
import VueRouter from 'vue-router';

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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