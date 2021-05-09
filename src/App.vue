<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    window.addEventListener('beforeunload', this.onUnload)
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onUnload(){
      let page = this.$router.history.current.name
      if(page !== "NotFound") {
        this.$cookies.set("last", page)
      }
    },
    onScroll(){
      const el = document.getElementById("scroll-top")
      const navbar = document.getElementById("navbar")
      if (document.body.scrollTop > navbar.offsetHeight || document.documentElement.scrollTop > navbar.offsetHeight) {
        el.style.display = "flex";
        el.style.visibility = "visible"
      } else {
        el.style.display = "none";
        el.style.visibility = "hidden"
      }
    }
  }
}
</script>
<style>
@font-face {
  font-family: "PhildSans";
  font-style: normal;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

html,body {
  margin: 0;
  background: whitesmoke;
}

#app {
  font-family: "PhildSans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32353e;
  margin: 0;
  width: 100%;
  height: 100%;
}

.sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.selection{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
