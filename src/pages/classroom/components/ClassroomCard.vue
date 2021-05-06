<template>
  <div :id="ID" class="card">
    <img id="profile" src="../../../assets/default-profile.png">
    <div id="top" :style="style">
      <div id="button"><div id="dots"></div></div>
      <span style="font-size: 20px">{{name}}</span><br>
      <span style="font-size: 14px">{{section}}</span>
    </div>
    <div id="bottom" v-if="!compact">

    </div>
  </div>
</template>

<script>
export default {
  name: "ClassroomCard",
  props: {
    ID: String,
    name: String,
    section: String,
    ownerID: String,
    ownerName: String,
    color: String,
    assignments: {type: Array, default(){ return []}}
  },
  data() {
    return{
      compact: false,
      style: {backgroundColor: this.color}
    }
  },
  methods:{

  },
  components: {
  }
}
</script>

<style scoped>
.card{
  width: 250px;
  height: 250px;
  border: 1px #5C5C5C solid;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: all .2s;
  margin: 10px;
  display: inline-block;
}

#profile{
  width: 26%;
  height: 26%;
  position: absolute;
  top: 15%;
  left: 65%;
}

#top{
  padding: 10px;
  height: 20%;
  overflow: hidden;
  border-bottom: 1px #5C5C5C solid;
}

#top:hover{
  cursor: pointer;
  text-decoration: underline;
}

#bottom{
  height: 100%;
}

#button{
  position: absolute;
  border-radius: 50%;
  transition: background-color .2s;
  top: 5%;
  left: 88.5%;
}

#button:hover{
  background: #5C5C5C55;
}

#dots{
  width: 24px;
  height: 24px;
  background-size: 100% 33.33%;
  background-image: radial-gradient(circle, #5C5C5C 18%, transparent 0px);
}
</style>