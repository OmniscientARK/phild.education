import Vue from 'vue'
import Router from 'vue-router'
import NewsHome from "@/pages/news/NewsHome";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            props: true,
            name: 'Home',
            component: NewsHome
        },
        {
            path: '/s',
            props: true,
            name: 'Sources',
            // component: Home
        },
        {
            path: '/s/:id',
            props: true,
            name: 'SourceMenu',
            //component: Home
        }
    ]
})