
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/www/Home";
import ClassroomHome from "@/pages/classroom/ClassroomHome";
import NotFound from "@/pages/other/NotFound";

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
            path: '/c',
            name: 'ClassroomHome',
            props: true,
            component: ClassroomHome
        },
        {
            path: '/c/:classroom_ID',
            name: 'ClassroomPage',
            props: true,
            component: ClassroomHome
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound,
            beforeEnter: (to, from, next) => {
                if(Vue.$cookies.get("last") === "NotFound"){
                    Vue.$cookies.set("last", "Home")
                }
                next()
            }
        }
    ]
})