/* 路由块 */

import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入组件
import login from './components/login.vue';
import index from './components/index.vue';
import user from './components/user.vue';

//定义路由规则
let routes = [
    {
        path:'/login',
        component:login,
    },
    {
        path:'/',
        component:index,
    },
    {
        path:'/user',
        component:user,
    },
];

//实例路由

let router = new VueRouter({
    routes
});


export default router