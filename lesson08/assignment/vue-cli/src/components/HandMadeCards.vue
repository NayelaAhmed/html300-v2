<template>

  <b-container>
<!-- component heading -->
<heading/>    
    <b-row class="mb-5">
      <!-- making the images responsive for xs, s, and anything above md-->
      <b-col cols="12" sm="6" md="3"  v-for="(card, i) in cards" :key="i">
      <!--  <img :src="image.src" class="card-img">
        <div class="col-md-4" v-for="(book, i) in books" :key="i"> -->
          <div class="col"  v-for="object in objectTypes" :key="object.id" @click="selectObjectType(object)" :class="object.selected ? 'selected' : ''">
          <!-- bringing in the image markup component   -->
                    <div class="img"><Images :card-data="card"/></div>
                    
          </div>
          <slot name="heading"></slot>     
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

// This is making use with mixin
const showHide = {
 data() {
 return {
  //  Added an array of false value
 objectTypes: [{selected: false, selected: false, selected: false, selected: false, selected: false, selected: false, selected: false, selected: false}]
 }
 },

//  method for the toggle Show Hide
 methods: {
 toggleShowHide: function(object) {
 object.selected = !object.selected;
 }
 }
}
// bringing in the component for images and heading
import Images from './Images.vue'
import heading from './heading.vue'


export default {
    components: {
        Images, heading
    },
    mixins: [showHide],
    data(){
        return {
            cards: [
                {
                    'designer': 'Nayela Ahmed',
                    'title': 'Christmas Poinsenta',
                    'description': 'Handmade Christmas card',
                    'img_url': require('../Images/Christmas-Poinsenta.jpg'),
                    'alt': 'image 1', 
                    'selected': false
                },
                {
                    'designer': 'Nayela Ahmed',
                    'title': 'Lily Lavender',
                    'description': 'Handmade Lily Lavender card',
                    'img_url': require('../Images/LilyLavender.jpg'),
                    'alt': 'image 2', 
                    'selected': false
                },
                {
                    'designer': 'Nayela Ahmed',
                    'title': 'Ikebana Flower',
                    'description': 'Handmade Ikebana Flower card',
                    'img_url': require('../Images/Ikebana.jpg'),
                    'alt': 'image 3', 
                    'selected': false
                },
                {
                    'designer': 'Nayela Ahmed',
                    'title': 'Rose Flower',
                    'description': 'Handmade Rose card',
                    'img_url': require('../Images/rose.jpg'),
                    'alt': 'image 4', 
                    'selected': false
                },
                {
                    'designer': 'Nayela Ahmed',
                    'title': 'Pink Lily card',
                    'description': 'Handmade Pink Lily card',
                    'img_url': require('../Images/pink-lily.jpg'),
                    'alt': 'image 5', 
                    'selected': false
                },
                {
                    'designer': 'Nayela Ahmed',
                    'title': 'Gentle Flowers card',
                    'description': 'Handmade Gentle Flower card',
                    'img_url': require('../Images/gentleFlowers.jpg'),
                    'alt': 'image 6', 
                    'selected': false
                },
                 {
                    'designer': 'Nayela Ahmed',
                    'title': 'Pink Daisy card',
                    'description': 'Handmade Pink Daisy card',
                    'img_url': require('../Images/pink-daisy.jpg'),
                    'alt': 'image 7', 
                    'selected': false
                },
                 {
                    'designer': 'Nayela Ahmed',
                    'title': 'Lady Pink card',
                    'description': 'Handmade Lady Pink card',
                    'img_url': require('../Images/lady-pink.jpg'),
                    'alt': 'image 8', 
                    'selected': false
                },
            ]
        }
    }
}
</script>

<!--<script>
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
</script> -->

<style scoped>
.card-img {
  width: 100%;
}
/* .img {
  border: 5px solid rgb(77, 44, 44);
  
} */

.col {
  border-radius: 3px;
  border: 1px solid #000;
}

.col:hover {
  border-color: green;
}

.col.selected {
  border-color: lightgray;
}

</style>