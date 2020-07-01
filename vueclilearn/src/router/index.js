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
        meta:{
            title:'首页'
        },
        children:[
            {
                path: '',
                redirect: '/home/name'
            },
            {
                path: '/home/name',
                meta:{
                    title:'新闻'
                },
                component: homeName,
                beforeEnter: (to, from, next) => {
                    console.log('beforeEnrter');
                    next();
                }
            },
            {
                path: '/home/message',
                meta:{
                    title:'信息'
                },
                component: homeMessage
            }
        ]
    },
    {
        path: '/about',
        meta:{
            title:'关于'
        },
        component: about
    },
    {
        path: '/user/:userId',
        meta:{
            title:'用户'
        },
        component: user
    },
    {
        path: '/profile',
        meta:{
            title:'我的'
        },
        component: profile
    }
]

// 创建Router对象
const router = new VueRouter({
    //配置路径
    routes,
    mode: 'history'
});


// 在路由前更改窗口的标题
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    next();
})

export default router;