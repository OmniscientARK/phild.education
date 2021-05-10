<template>
  <div id="profile">
    <Navbar app="Accounts">
      <SearchBar/>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "@/pages/other/nav/Navbar";
import SearchBar from "@/pages/other/nav/elements/SearchBar";

export default {
  name: "Profile",
  components: {
    SearchBar,
    Navbar
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>