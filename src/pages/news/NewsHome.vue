<template>
  <div id="news">
    <GoTop/>
    <Navbar app="News">
      <SearchBar width="60%" height="40px" @search="search"/>
    </Navbar>
    <Linkbar>

    </Linkbar>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import Navbar from "@/pages/other/nav/Navbar";
import Linkbar from "@/pages/other/nav/Linkbar";
import SearchBar from "@/pages/other/nav/elements/SearchBar";
import GoTop from "@/pages/other/nav/elements/GoTop";

export default {
  name: "NewsHome",
  methods: {
    search(query){
      if(query !== "" && query.length > 0){
        console.log("Searching: " + query)
      }
    }
  },
  components: {
    GoTop,
    // eslint-disable-next-line vue/no-unused-components
    SearchBar,
    Linkbar,
    Navbar
  }
}
</script>

<style scoped>

</style>