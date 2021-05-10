import Vue from 'vue'
import App from '@/App.vue'
import VueCookies from 'vue-cookies';
import axios from "axios";
import www from '@/router/www.js'
import news from '@/router/news.js'
import accounts from "@/router/accounts";
import NotFound from "@/pages/other/NotFound";

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use(axios)

const subdomains = {
  "www": www,
  "accounts": accounts,
  "news": news,
  //"classroom": classroomRouter,
  //"mail": mailRouter,
  //"drive": driveRouter,
  //Future subdomains: chemistry, canvas, coding
}

const router = () => {
  let url = window.location.hostname
  if(window.location.hostname.includes("localhost")){
    url += ".education"
  }
  let subdomain = url.split('.').slice(0, -2).join('.');
  if(subdomain === ""){
    subdomain = "www"
  }
  if(subdomain in subdomains){
    let r = subdomains[subdomain]
    r.addRoute({
      path: '/*',
      name: 'NotFound',
      component: NotFound,
      beforeEnter: (to, from, next) => {
        if (Vue.$cookies.get("last") === "NotFound") {
          Vue.$cookies.set("last", "Home")
        }
        next()
      }
    })
    return r
  }else{
    window.location.href = window.location.href.replace(subdomain+".", "");
  }
}

new Vue({
  render: h => h(App),
  router: router(),
}).$mount('#app')
