<template>
  <div id="login">
    <input type="text" name="username" v-model="input.username" placeholder="Usuário"/>
    <input type="password" name="password" v-model="input.password" placeholder="Senha"/>
    <button type="button" @click="login()">Login  </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login(){
      if(this.input.username !== "" && this.input.password !== ""){
        //if(this.input.user == this.$parent.mockAccount.)
      }
    }
  }
}
</script>

<style scoped>

</style>