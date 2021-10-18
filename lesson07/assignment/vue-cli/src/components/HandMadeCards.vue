<template>
  <b-container>
    <b-row class="mb-5">
      <!-- making the images responsive for xs, s, and anything above md-->
      <b-col cols="12" sm="6" md="3" v-for="image in images" :key="image.id">
        <img :src="image.src" class="card-img">
      </b-col> 
    </b-row>
    
    <!-- Adding a jumbortron footer -->
    <div class="jumbotron text-center" style="margin-bottom: 0">
      <p class="copyright">
        &#169;2021 Saying it with a card, LLC | Seattle, WA
      </p>
    </div> 
  </b-container>
</template>
<script>
const image_1 = require('../Images/Christmas-Poinsenta.jpg');
const image_2 = require('../Images/LilyLavender.jpg');
const image_3 = require('../Images/Ikebana.jpg');
const image_4 = require('../Images/rose.jpg');
const image_5 = require('../Images/pink-lily.jpg');
const image_6 = require('../Images/gentleFlowers.jpg');
const image_7 = require('../Images/pink-daisy.jpg');
const image_8 = require('../Images/lady-pink.jpg');

export default {
 
  name: "HandMadeCards",
   data: () => {
    return{
      images: [
       {src: image_1,id:1},
       {src: image_2,id:2},
       {src: image_3,id:3},
       {src: image_4,id:4},
       {src: image_5,id:5},
       {src: image_6,id:6},
       {src: image_7,id:7},
       {src: image_8,id:8},
      ]
    }
  }
};
</script>

<style scoped>
.card-img {
  width: 100%;
}
</style>