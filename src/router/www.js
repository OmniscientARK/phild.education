
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
        }

    ]
})