<template>
  <div id="scroll-top" @click="goTop">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="205.000000pt" height="218.000000pt" viewBox="0 0 205.000000 218.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,218.000000) scale(0.100000,-0.100000)" fill="#32353e" stroke="none">
        <path d="M985 2033 c-54 -14 -77 -43 -542 -713 -396 -571 -410 -594 -398 -650 9 -39 58 -80 97 -80 46 0 84 28 142 105 51 67 469 665 650 928 48 70 91 127 95 127 5 0 53 -64 107 -142 231 -336 588 -844 640 -914 32 -41 70 -82 85 -90 60 -30 119 -9 145 51 27 65 27 65 -401 681 -375 539 -435 623 -471 659 -39 39 -91 52 -149 38z"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "GoTop",
  methods: {
    goTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
#scroll-top{
  position: fixed;
  display: none;
  width: 30px;
  height: 30px;
  left: auto;
  top: auto;
  right: 15px;
  bottom: 15px;
  border: #32353e 2px solid;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: background-color .2s, bottom .2s, visibility .2s;
}

#scroll-top:hover{
  cursor: pointer;
  background: #32353e;
  bottom: 20px;

}

#scroll-top svg{
  width: 80%;
  height: 80%;
}

#scroll-top svg g{
  fill: #32353e;
  transition: fill .2s;
}

#scroll-top:hover svg g{
  fill: whitesmoke;
}
</style>