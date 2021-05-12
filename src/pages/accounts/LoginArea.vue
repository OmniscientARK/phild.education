<template>
  <div id="profile">
    <Navbar/>
    <form @submit.prevent="loginHandler">
      <input type="text" id="login" v-model="username" placeholder="Usuário ou email" autocomplete="off">
      <input type="password" id="password" v-model="password" placeholder="Senha" autocomplete="off">
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import Navbar from "@/pages/other/nav/Navbar";
import * as Main from "@/main.js"
import axios from "axios";

export default {
  name: "LoginArea",
  components:{
    Navbar
  },
  data(){
    return{
      username: "",
      password: "",
    }
  },
  methods: {
    loginHandler(){
      axios.get(Main.api + "login").then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>