<template>
  <div>
    
    <div class="jumbotron text-center">
      <h1>Saying it with a card</h1>
      <p>Specialty hand-drawn cards and digital printed cards.</p>
    </div>
    
    <div class="jumbotron text-center">
      <h3>Prints</h3>
    </div>
    <b-container>
      <b-row class="mb-5">
        <b-col cols="12" md="4" v-for="image in images" :key="image.id">
          <img :src="image.src" class="card-img" />
        </b-col>
      </b-row>
    </b-container>
    
    <div class="jumbotron text-center" style="margin-bottom: 0">
      <p class="copyright">
        &#169;2021 Saying it with a card, LLC | Seattle, WA
      </p>
    </div>
  </div>
</template>


<script>
const image_1 = require("../Images/GreatFallsPrint.jpg");
const image_2 = require("../Images/GreatFallsBlue-print.jpg");
const image_3 = require("../Images/RoyalBengal-TigerRed.jpg");
const image_4 = require("../Images/dreamers.jpg");
const image_5 = require("../Images/BlackWhite-RoyalTiger.jpg");
const image_6 = require("../Images/movement.jpg");

export default {
  name: "CardGrid",
  data: () => {
    return {
      images: [
        { src: image_1, id: 1 },
        { src: image_2, id: 2 },
        { src: image_3, id: 3 },
        { src: image_4, id: 4 },
        { src: image_5, id: 5 },
        { src: image_6, id: 6 },
      ],
    };
  },
};
</script>
<style scoped>
.card-img {
  width: 100%;
}
</style>

