<template>
  <div id="news">
    <GoTop/>
    <Navbar>
      <SearchBar width="60%" height="40px" @search="search"/>
    </Navbar>
    <Linkbar :links="links"/>
    <div id="display">
      <NewsCategory title="Fala JP" description="Veja as notícias mais quentes do momento!"/>
      <NewsCategory title="Fala JP" description="Veja as notícias mais quentes do momento!"/>
      <NewsCategory title="Fala JP" description="Veja as notícias mais quentes do momento!"/>
      <NewsCategory title="Fala JP" description="Veja as notícias mais quentes do momento!"/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/pages/other/nav/Navbar";
import Linkbar from "@/pages/other/nav/Linkbar";
import SearchBar from "@/pages/other/nav/elements/SearchBar";
import GoTop from "@/pages/other/nav/elements/GoTop";
import NewsCategory from "@/pages/news/components/NewsCategory";

export default {
  name: "NewsHome",
  data(){
    return{
      links: [
        {name: "Última Hora", data: "recent", action: "scroll"},
        {name: "Covid-19", data: "covid", action: "scroll"},
        {name: "Ciência", data: "science", action: "scroll"},
        {name: "Fala JP", data: "falajp", action: "scroll"}
      ]
    }
  },
  methods: {
    search(query){
      if(query !== "" && query.length > 0){
        console.log("Searching: " + query)
      }
    }
  },
  components: {
    NewsCategory,
    GoTop,
    SearchBar,
    Linkbar,
    Navbar
  }
}
</script>

<style scoped>
#display{
  display: block;
  padding: 20px;
}
</style>