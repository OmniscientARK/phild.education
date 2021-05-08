<template>
  <span :style="style"></span>
</template>

<script>
export default {
  name: "Separator",
  props: {
    size: String
  },
  data(){
    return{
        style: {marginLeft: this.size}
    }
  }
}
</script>

<style scoped>

</style>