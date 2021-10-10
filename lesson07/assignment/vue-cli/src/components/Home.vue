<template>
  <div>
    <div class="jumbotron text-center">
      <h1>Saying it with a card</h1>
      <p>Specialty hand-drawn cards and digital printed cards.</p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h3>Handmade Cards</h3>
          <p>
            Each card will be designed and hand-drawn on quality paper available
            on card stock. These greeting cards will be an original gift much to
            the enjoyment of each recipient. The dimensions of these cards will
            be 5”x7”
          </p>
        </div>

        <div class="col-sm-4">
          <h3>Printed Cards</h3>
          <p>
            Printed greeting cards will be digital on quality paper available on
            card stock. These greeting cards will be an original gift much to
            the enjoyment of each recipient. The dimensions of these cards will
            be 5”x7”
          </p>
        </div>

        <div class="col-sm-4">
          <h3>Our Mission</h3>
          <p>
            Specialty hand-drawn cards and digital printed cards which create
            memory and touch the lives of others.
          </p>
        </div>
      </div>
    </div>

    <div class="align-middle"></div>

    <div class="col-md-offset-8 col-md-13 text-center">
      <!-- The user will connect to the hand-made-greeting-card page by clicking the sucess button -->
      <div class="container">
        <img
          v-if="show"
          src="..\Images\no-button-greeting-cardLanding-pg.png"
          class="img-fluid"
          alt="Responsive image"
        />

        <br />

        <button
          @click="show = !show"
          id="myButton"
          type="button"
          class="btn btn-success"
        >
          Show Card
        </button>
        <br />
        <br />
        <br />
        <button
          @click="goToHome()"
          id="myButton"
          type="button"
          class="btn btn-success"
        >
          Shop now
        </button>
      </div>
    </div>
    <br />
    <!-- Using a form with a class of "form-group" on the landing page for the user to send their information for the user to buy greeting cards -->
    <form class="form-horizontal" action="/action_page.php">
      <div class="form-group">
        <label class="control-label col-sm-2" for="email"></label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="name"></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
      </div>
      <!-- Using the btn btn-outline-sucess submit button -->
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </div>
      </div>
    </form>
    <br /><br />
    <!-- Adding a jumbortron footer -->
    <div class="jumbotron text-center" style="margin-bottom: 0">
      <p class="copyright">
        &#169;2021 Saying it with a card, LLC | Seattle, WA
      </p>
    </div>
  </div>
</template>

    
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/HandMadeCards");
    },
  },
  name: "Home",
  data: () => ({
    show: false,
  }),
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