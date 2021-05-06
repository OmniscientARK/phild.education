
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home";
import ClassroomHome from "@/pages/classroom/ClassroomHome";
import NotFound from "@/pages/other/NotFound";
//import Error404 from "@/pages/other/Error404"

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
            component: NotFound
        }
    ]
})