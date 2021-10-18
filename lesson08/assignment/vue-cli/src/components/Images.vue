<template>
    <div>
        <div class="card">
         <!-- displaying the card data    -->
            <img :src="cardData.img_url" class="card-img-top">
            <div class="card-body">
                <p class="card-text">Title: {{cardData.title}}</p>
                
                
               
            </div>
        </div>
    </div>
</template>



<script>


// setting up the props for the the image src, alt, & title attributes
export default {
    props: {
        cardData: {
            type: Object,
            required: true,
            default: () => {}
        }
    },

    
}
</script>