import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/pages/accounts/Login";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            props: true,
            name: 'Home',
            component: Login
        }
    ]
})