<template>
  <div id="navbar" class="selection">
    <div id="logo">
      <span style="color: #32353e; font-weight: 600; margin-right: 3px">Phild</span>
      <span style="color: ghostwhite">{{ getAppName() }}</span>
    </div>
    <div id="elements">
      <slot></slot>
    </div>
    <div id="button" @click="dropMenu($event)">
      <div id="dots"></div>
    </div>
    <div id="user">
      <img id="profile" src="../../../assets/default-profile.png" v-if="false"/>
      <div id="login" @click="redirect('accounts', 'l')" v-if="true">Login</div>
    </div>
    <div id="app-tray" class="hide">
      <div id="application" v-for="(value, name) in subdomains" :key="name" @click="redirect(name, '')">
        <img src="../../../assets/default-profile.png"/>
        <div>{{ value["name"] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Main from "@/main.js"

export default {
  name: "Navbar",
  mounted() {
    window.addEventListener('click', (e) => {
      if (e.target.id !== "button" && e.target.id !== "dots") {
        if (!document.getElementById("app-tray").contains(e.target)) {
          if (document.getElementById("app-tray").classList.contains("show")) {
            this.dropMenu(e)
          }
        }
      }
    })
  },
  data(){
    return{
      subdomains: Main.subdomains
    }
  },
  methods: {
    getAppName(){
      return Main.subdomains[Main.getCurrentPage()].title
    },
    dropMenu(e){
      const el = document.getElementById("app-tray")
      const rect = e.target.getBoundingClientRect()
      el.classList.toggle("hide");
      el.classList.toggle("show")
      el.style.right = "10px"
      el.style.top = rect.bottom + "px"
    },
    redirect(name, route){
      Main.redirect(name, route)
    }
  }
}
</script>

<style scoped>
#login{
  font-size: 20px;
  color: #FFFFFF;
  border: 1px transparent solid;
  border-radius: 4px;
  padding: 5px 15px;
  transition: border .2s, color .2s;
}

#login:hover{
  cursor: pointer;
  border: 1px #A8C9F7 solid;
  color: #A8C9F7;
}


#application img{
  width: 70%
}

#application{
  width: 75px;
  text-align: center;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  transition: background-color .2s;
  display: inline-block;
}

#application:hover{
  background-color: #7C7C7C33;
  cursor: pointer;
}

.show{
  display: block;
}

.hide{
  display: none;
}

#app-tray{
  justify-content: space-around;
  position: absolute;
  width: 345px;
  max-height: 400px;
  min-height: 100px;
  overflow-y: auto;
  background: whitesmoke;
  border-radius: 4px;
  border: 1px #BCBCBC solid;
  z-index: 100000000000;
}

#button{
  border-radius: 50%;
  transition: background-color .2s;
  margin-right: 30px;
  padding: 5px;
}

#button:hover{
  background: #FFFFFF55;
  cursor: pointer;
}

#dots{
  width: 36px;
  height: 36px;
  background-size: 33.33% 33.33%;
  background-image: radial-gradient(circle, #FFFFFF 30%, transparent 0px);
}

#navbar{
  width: 100%;
  height: 4.6rem;
  background-color: #1A73E8;
  display: flex;
  align-items: center;
}

#logo{
  font-size: 2rem;
  padding: 10px;
}

#elements{
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#user{
  padding: 10px;
  margin-left: auto;
  margin-right: 0;
}

#profile{
  width: 3.2rem;
  height: 3.2rem;
}

#profile:hover{
  cursor: pointer;
}
</style>