<template>
  <div id="home">
    <div id="grid">
      <ClassroomCard ID="classroom_ID" name="Matemática" section="EM3A" ownerID="owner_ID" ownerName="Prof. Marco Lázaro" color="#8BF0D5"/>
      <ClassroomCard ID="classroom_ID" name="Matemática" section="EM3A" ownerID="owner_ID" ownerName="Prof. Marco Lázaro" color="#FFF6A6"/>
      <ClassroomCard ID="classroom_ID" name="Matemática" section="EM3A" ownerID="owner_ID" ownerName="Prof. Marco Lázaro" color="#A6D4FF"/>
    </div>
  </div>
</template>

<script>
import ClassroomCard from "@/pages/classroom/components/ClassroomCard";

export default {
  name: "ClassroomHome.vue",
  components: {
    ClassroomCard
  }
}
</script>

<style scoped>
#grid{
  width: 100%;
  justify-content: space-around;
  display: block;
}
</style>