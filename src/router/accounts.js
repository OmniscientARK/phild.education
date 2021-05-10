import Vue from 'vue'
import Router from 'vue-router'
import Profile from "@/pages/accounts/Profile";
import LoginArea from "@/pages/accounts/LoginArea";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            props: true,
            name: 'Profile',
            component: Profile
        },
        {
            path: "/l",
            props: true,
            name: 'Login',
            component: LoginArea
        }
    ]
})