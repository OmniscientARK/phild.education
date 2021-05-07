import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/www/Home";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            props: true,
            name: 'Home',
            component: Home
        },
        {
            path: '/s',
            props: true,
            name: 'Sources',
            component: Home
        },
        {
            path: '/s/:id',
            props: true,
            name: 'SourceMenu',
            component: Home
        }
    ]
})