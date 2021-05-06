<template>
  <div id="main">
      <table>
        <tr style="font-size: 200px; line-height: 120px">404</tr>
        <tr style="font-size: 36px; line-height: 80px">Página não encontrada!</tr>
        <tr><div id="return" @click="goBack">Retornar</div></tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "Error404",
  methods: {
    goBack(){
      window.history.back()
    }
  }
}
</script>

<style scoped>
#main{
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

table tr{
  text-align: center;
}

#return{
  background: transparent;
  transition: all .2s;
  border: 1px solid #7C7C7C;
  border-radius: 2px;
  font-size: 30px;
  padding: 7px 10px;
  display: inline-block;
  line-height: 30px;
  margin-top: 60px;
}

#return:hover{
  background: #5C5C5C44;
  border: 1px solid #7C7C7C44;
  cursor: pointer;
}
</style>