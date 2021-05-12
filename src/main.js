import Vue from 'vue'
import App from '@/App.vue'
import VueCookies from 'vue-cookies';
import axios from "axios";
import www from '@/router/www.js'
import news from '@/router/news.js'
import accounts from "@/router/accounts";
import NotFound from "@/pages/other/NotFound";

Vue.config.productionTip = false

Vue.use(VueCookies, axios)

export const api = "https://phild-education.herokuapp.com/"

export const subdomains = {
  "www":       {router: www, title: "Education", name: "Home"},
  "accounts":  {router: accounts, title: "Accounts", name: "Accounts"},
  "news":      {router: news, title: "News", name: "News"},
  // "classroom": {router: www, title: "Classroom", name: "Classroom"},
  // "mail":      {router: www, title: "Mail", name: "Mail"},
  // "drive":     {router: www, title: "Drive", name: "Drive"},
  // "chemistry": {router: www, title: "Chemistry", name: "Chemistry"},
  // "canvas":    {router: www, title: "Canvas", name: "Canvas"},
  // "code":      {router: www, title: "Code", name: "Code"},
}

export function getCurrentPage(){
  let url = window.location.hostname
  if(window.location.hostname.includes("localhost")){
    url += ".education"
  }
  let subdomain = url.split('.').slice(0, -2).join('.');
  if(subdomain === ""){
    subdomain = "www"
  }
  if(subdomain in subdomains) {
    return subdomain
  }else {
    let url = window.location.href.split("//")
    url[0] += "//"
    window.location.replace(url[0] + url[1].split("/")[0].replace(subdomain+".", ""))
  }
}

export function redirect(subdomain, route){
  let url = window.location.hostname
  if(window.location.hostname.includes("localhost")){
    url += ".education"
  }
  let sub = url.split('.').slice(0, -2).join('.');
  if(sub === ""){
    sub = "www"
  }
  url = window.location.href.split("//")
  window.location.href = url[0] + "//" + subdomain + "." + url[1].split("/")[0].replace(sub + ".", "") + "/" + route
}

const router = () => {
  let r = subdomains[getCurrentPage()].router
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
}

new Vue({
  render: h => h(App),
  router: router(),
}).$mount('#app')

export async function post(c, d){
  d["c"] = c
  return axios({
    method: "post",
    url: api,
    headers: {'Content-Type': 'application/json'},
    data: d
  });
  // return await axios.post(api + c, data, {headers:{"Content-Type": "text/plain"}});
}

export async function get(c, d){
  return axios({
    method: "get",
    url: api + "?c=" + c,
    headers: {'Content-Type': 'application/json'},
    data: d
  });
  // return await axios.post(api + c, data, {headers:{"Content-Type": "text/plain"}});
}