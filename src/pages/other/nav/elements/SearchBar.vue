<template>
  <div id="bar" :style="barStyle">
    <input type="search" id="query" placeholder="Busca" @keyup.enter="$emit('search', query)" v-model="query">
    <svg id="submit" @click="$emit('search', query)" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.000000 247.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,247.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M1394 2430 c-191 -20 -370 -111 -500 -254 -94 -102 -152 -211 -191 -357 -23 -88 -23 -271 1 -364 22 -84 80 -214 124 -274 17 -24 29 -49 25 -55 -4 -6 -181 -211 -393 -456 -212 -245 -394 -456 -403 -470 -9 -13 -17 -43 -17 -65 0 -71 73 -116 145 -89 9 4 194 212 411 463 218 251 401 460 408 465 7 5 53 -12 127 -48 178 -87 320 -106 501 -66 173 38 283 97 404 215 176 173 259 405 233 650 -48 437 -437 750 -875 705z m251 -232 c246 -70 416 -296 418 -553 1 -169 -51 -293 -173 -416 -116 -118 -234 -169 -391 -169 -284 0 -489 141 -574 394 -68 203 -22 420 121 575 160 173 375 234 599 169z"/>
      </g>
    </svg>
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
      query: ""
    }
  }
}
</script>

<style scoped>
#bar{
  display: flex;
  align-items: center;
  background-color: #FFFFFF44;
  border-radius: 1000px;
  padding: 0 20px 0 20px;
}

#query{
  font-size: 1rem;
  height: 85%;
  background: none;
  width: 100%;
  color: #FFFFFF88;
  transition: color .2s;
  border: none;
  outline: none;
}

#query:focus{
  color: #FFFFFFFF;
}

#submit {
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 60%;
}

#submit:hover{
  cursor: pointer;
}

#submit g{
  fill: #FFFFFF88;
  transition: fill .2s;
}

#submit:hover g{
  fill: #FFFFFFFF;
}
</style>