<template>
  <!-- ======= eventcoes Section ======= -->
  <section id="panfletid" class="panfletid">
    <div class="container">
      <div v-if="event">
        <div class="section-title">
          <h2>{{ event.title }}</h2>
        </div>
        <div class="row content">
          <!--FLIPBOOK-->

          <iframe
            id="frame"
            src="https://flipbookpdf.net/web/site/c2b01bb6ff0d82b2452421e3898f30d8d17a6fae202211.pdf.html"
            width="100%"
            height="600"
            style="border: none"
            allowFullScreen
          >
          </iframe>

          <!--FLIPBOOK-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PanfletoId",
  props: ["id"],

  data: function () {
    return {
      event: null,
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.event = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
#frame {
  border: 2px solid red;
  padding: 10px;
  border-radius: 25px;
}
.flipbook {
  width: 90vw;
  height: 90vh;
  background-color: red;
}
.panfletid {
  padding-top: 120px;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  background: #bd9a13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}

.post-img {
  padding-top: 20px;
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
  height: 500px;
}

img {
  border-radius: 10px;
}
#descricao {
  text-align: justify;
  padding-left: 50px;
}
.date {
  font-size: 14px;
  color: #013365;
}
</style>
