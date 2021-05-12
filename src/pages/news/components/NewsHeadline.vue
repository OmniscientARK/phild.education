<template>
  <div id="headline">
    <div id="title">{{title}}</div>
    <div id="box">
      <div id="img" :style="{backgroundColor: colors[Math.floor(this.colors.length * Math.random())]}"></div>
      <div id="content">{{description}}</div>
      <div id="footer">
        <div id="category">{{ category }}</div>
        <div id="info">há {{ ago }} • <span id="source">{{ source }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "NewsHeadline",
  data() {
    return {
      colors: ["#1A73E8", "#E8321A", "#1AE869", "#841AE8", "#E81AA7", "#E8DE1A"]
    }
  },
  props: {
    source: String,
    title: String,
    description: String,
    category: String,
    ago: String
  }
}
</script>

<style scoped>
#content{
  padding: 1px;
  color: #464951;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  margin: 0 5px;
}

#img{
  border-radius: 4px 4px 0 0;
  height: 60%;
}

#source:hover{
  text-decoration: underline;
  cursor: pointer;
}

#info{
  display: inline-block;
  text-align: right;
  width: calc(50% - 5px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#category{
  display: inline-block;
  text-align: left;
  width: calc(40% - 5px);
  margin-right: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#category:hover{
  text-decoration: underline;
}

#footer{
  position: absolute;
  color: #9C9C9C;
  font-size: 15px;
  height: 16px;
  bottom: 3px;
  width: 320px;
  left: 5px;
  right: 5px;
}

#title{
  display: block;
  font-weight: 600;
  height: 15%;
  font-size: 18px;
  padding: 0 2% 2% 2%;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #32353E;
  transition: color .1s;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

#box{
  display: block;
  position: relative;
  z-index: 0;
  width: 320px;
  border-radius: 4px;
  border: 1px solid #BCBCBC;
  transition: border .1s, background .1s;
  height: 240px;
}

#headline{
  display: inline-block;
  width: 320px;
  height: 100%;
  margin-right: 20px;
}

#headline:hover{
  cursor: pointer;
}

#headline:hover #box{
  border: 1px solid #589BE7;
  background: #ECECEC;
}

#headline:hover #title{
  text-decoration: underline;
  color: #464951;
}
</style>