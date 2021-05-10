<template>
  <div id="navbar" class="selection">
    <div id="logo">
      <span style="color: #32353e; font-weight: 600; margin-right: 3px">Phild</span>
      <span style="color: ghostwhite">{{ app }}</span>
    </div>
    <div id="elements">
      <slot></slot>
    </div>
    <div id="user">
      <img id="profile" src="../../../assets/default-profile.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    app: String
  }
}
</script>

<style scoped>
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