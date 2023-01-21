import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import myBlog from '../views/myBlog.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/myCV',
        name: 'myCV',
        component:() => 
        import('../views/myCV.vue')
    },
    {
        path: '/myBlog',
        name: 'myBlog',
        component: myBlog
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})






export default router