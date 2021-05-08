<template>
  <div id="bar" :style="barStyle">
    <input id="query" type="search" placeholder="Busca">
    <div id="submit">
        <svg :style="barStyle" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.000000 247.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,247.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M1394 2430 c-191 -20 -370 -111 -500 -254 -94 -102 -152 -211 -191 -357 -23 -88 -23 -271 1 -364 22 -84 80 -214 124 -274 17 -24 29 -49 25 -55 -4 -6 -181 -211 -393 -456 -212 -245 -394 -456 -403 -470 -9 -13 -17 -43 -17 -65 0 -71 73 -116 145 -89 9 4 194 212 411 463 218 251 401 460 408 465 7 5 53 -12 127 -48 178 -87 320 -106 501 -66 173 38 283 97 404 215 176 173 259 405 233 650 -48 437 -437 750 -875 705z m251 -232 c246 -70 416 -296 418 -553 1 -169 -51 -293 -173 -416 -116 -118 -234 -169 -391 -169 -284 0 -489 141 -574 394 -68 203 -22 420 121 575 160 173 375 234 599 169z"/>
          </g>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    width: String,
    height: String
  },
  data(){
    return{
      barStyle: {width: this.width, height: this.height},
      magnifyStyle: {width: this.height*0.8, height: this.height*0.8}
    }
  }
}
</script>

<style scoped>
#bar{
  background: #FFFFFF44;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
}

#query{
  border: none;
  height: 90%;
  background: transparent;
  outline: none;
  color: #FFFFFF88;
  font-size: 1.1rem;
  width: 100%;
}

#query:focus{
  color: #FFFFFFFF;
}

#submit{
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
  margin-right: 0;
}

#submit svg{
  height: 80%;
}

#submit svg g{
  fill: #FFFFFF88;
}

#submit:hover svg g{
  fill: #FFFFFFFF;
  cursor: pointer;
}
</style>