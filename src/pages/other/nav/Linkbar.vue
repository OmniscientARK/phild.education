<template>
  <div id="link-bar" class="sticky" v-if="links.length > 0">
    <div id="links">
      <span id="link" v-for="(value, name) in links" :key="name" @click="clickHandler(value['action'], value['data'])">{{ value["name"] }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "Linkbar",
  props: {
    links: Array
  },
  methods: {
    clickHandler(action, data){
      switch(action.upper){
        case "SCROLL":
          console.log(data)
          return
        case "REDIRECT":
          console.log(data)
          return
        default:
          return
      }
    }
  }
}
</script>

<style scoped>
#link{
  margin: auto;
  background: #589BE7;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 10px -5px #2F7FE8;
  color: #32353E;
  transition: box-shadow .1s ease-in-out;
}

#link:hover{
  cursor: pointer;
  box-shadow: 5px -2.5px #2F7FE8;
}


#links{
  display: flex;
  width: 80%;
  height: 100%;
}

#link-bar{
  width: 100%;
  height: 3.1rem;
  background-color: #0060D0;
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}
</style>