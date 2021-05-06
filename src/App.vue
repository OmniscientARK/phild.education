<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: "PhildSans";
  font-style: normal;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
}

html,body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: whitesmoke;
}

#app {
  font-family: "PhildSans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32353e;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>
