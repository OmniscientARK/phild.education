import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies';
import wwwRouter from './router/index.js'

Vue.config.productionTip = false
Vue.use(VueCookies)

const subdomains = {
  "www": wwwRouter,
  "classroom": wwwRouter,
  // "news": newsRouter,
  // "mail": mailRouter,
  // "drive": driveRouter,
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
    return subdomains[subdomain]
  }else{
    window.location.href = window.location.href.replace(subdomain+".", "");
  }
}

new Vue({
  render: h => h(App),
  router: router(),
}).$mount('#app')
