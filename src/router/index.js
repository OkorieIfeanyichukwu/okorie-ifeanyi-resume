import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import myBlog from '../views/myBlog.vue'
import projects from '../views/projects.vue'
import mycontact from "../views/contact.vue"

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
    },
    {
        path: '/projects', name: 'projects', component: projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: mycontact
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})




export default router