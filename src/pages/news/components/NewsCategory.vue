<template>
  <div id="category">
    <div id="title">{{title}}</div>
    <div id="description">{{description}}</div>
    <div id="card-selector">
      <div id="headlines">
        <NewsHeadline title="Bomba no Afeganistão mata 3 crianças e 1 idoso!" description="História de superação da família atingida choca o mundo." category="Ciências" source="FalaJP" ago="1 hora"/>
        <NewsHeadline title="Bomba no Afeganistão mata 3 crianças e 1 idoso!" description="História de superação da família atingida choca o mundo." category="Ciências" source="FalaJP" ago="1 hora"/>
        <NewsHeadline title="Bomba no Afeganistão mata 3 crianças e 1 idoso!" description="História de superação da família atingida choca o mundo." category="Ciências" source="FalaJP" ago="1 hora"/>
        <NewsHeadline title="Bomba no Afeganistão mata 3 crianças e 1 idoso!" description="História de superação da família atingida choca o mundo." category="Ciências" source="FalaJP" ago="1 hora"/>
        <NewsHeadline title="Bomba no Afeganistão mata 3 crianças e 1 idoso!" description="História de superação da família atingida choca o mundo." category="Ciências" source="FalaJP" ago="1 hora"/>
        <NewsHeadline title="Bomba no Afeganistão mata 3 crianças e 1 idoso!" description="História de superação da família atingida choca o mundo." category="Ciências" source="FalaJP" ago="1 hora"/>
        <NewsHeadline title="Bomba no Afeganistão mata 3 crianças e 1 idoso!" description="História de superação da família atingida choca o mundo." category="Ciências" source="FalaJP" ago="1 hora"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewsHeadline from "@/pages/news/components/NewsHeadline";
export default {
  name: "NewsCategory",
  components: {NewsHeadline},
  props: {
    title: String,
    description: String,
    headlines: Array
  }
}
</script>

<style scoped>
#title{
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 5px;
}

#description{
  padding-left: 20px;
  font-weight: 400;
  font-size: 18px;
  color: #5C5C5C;
  margin-bottom: 10px;
}

#card-selector{
  overflow-x: scroll;
  overflow-y: hidden;
  border-radius: 4px;
  border: 1px solid #7C7C7C;
  margin: 10px;
  padding: 10px;
  max-width: 1000px;
}

#headlines{
  display: inline-flex;
}

#category{
  display: block;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
}
</style>