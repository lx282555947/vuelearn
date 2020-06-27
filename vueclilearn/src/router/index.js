import VueRouter from 'vue-router';
import Vue from 'vue';

// import home from '../components/Home';
// import about from '../components/About';
// import user from '../components/User';
// 懒加载
const home = () => import('../components/Home');
const about = () => import('../components/About');
const user = () => import('../components/User');
const homeName = () => import('../components/HomeName');
const homeMessage = () => import('../components/HomeMessage');
const profile = () => import('../components/Profile');

//通过vue 使用插件
Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        children:[
            {
                path: '/home/name',
                component: homeName
            },
            {
                path: '/home/message',
                component: homeMessage
            }
        ]
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/user/:userId',
        component: user
    },
    {
        path: '/profile',
        component: profile
    }
]

// 创建Router对象
const router = new VueRouter({
    //配置路径
    routes,
    mode: 'history'
});
export default router;