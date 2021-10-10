<template>
  <div>
    <div class="jumbotron text-center">
      <h1>Saying it with a card</h1>
      <p>Specialty hand-drawn cards and digital printed cards.</p>
    </div>

    <div v-for="datas in data" :key="datas.id">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="info">{{
            datas.title
          }}</b-button>
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>{{ datas.msg }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <div class="jumbotron text-center" style="margin-bottom: 0">
      <p class="copyright">
        &#169;2021 Saying it with a card, LLC | Seattle, WA
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pricing",
  data() {
    return {
      data: [
        {
          title: "Group 1: Specialty Hand-made greeting card",
          msg: "Boxed Sets: Boxed sets are sold in groups of 10. There are two variations of designs. Elaborate designs set of 10 in a Box sell for $20. Simple designs set of 10 in a Box for $15. Individual Cards: Designed for individuals who pride themselves on finding just the right card for any occasion. Individual cards have multiple variations of designs for many occasions such as Mother’s Day, Father’s Day, Anniversary, Get Well, Thank You and Holidays. Simple individual cards priced at $5 each, and elaborate cards at $7 each. Size: The dimensions of these cards will be 5”x7”",
          id: 0,
        },
        {
          title: "Group 2: Digital printed greeting card",
          msg: "Boxed Sets: Boxed sets are sold in groups of 10. There are two variations of designs. Elaborate designs set of 10 in a Box sell for $15. Simple designs set of 10 in a Box for $10. Individual Cards: Designed for individuals who pride themselves on finding just the right card for any occasion. Individual cards have multiple variations of designs for many occasions such as Mother’s Day, Father’s Day, Anniversary, Get Well, Thank You and Holidays. Simple individual cards priced at $3 each, and elaborate cards at $5 each. Size: The dimensions of these cards will be",
          id: 1,
        },
        {
          title: "Saying it with a card Summary:",
          msg: "What was once a creative hobby has developed into a passion as we spend hours designing, drawing and assembling cards with envelopes. This passion of cards has turned into a skillful hand-crafted, personalized joy of gift we want to share with everyone.",
          id: 2,
        },
      ],
    };
  },
};
</script>
<style scoped>
.homeText {
  font-size: 35px;
  color: red;
  text-align: center;
  position: relative;
  top: 30px;
  text-shadow: 2px 2px 2px gray;
}
</style>