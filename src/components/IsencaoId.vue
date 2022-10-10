<template>
  <!-- ======= isencao Section ======= -->
  <section id="event" class="event">
    <div class="container">
      <div v-if="nhavar">
        <div class="section-title">
          <h2>{{ nhavar.title }}</h2>
        </div>
        <div class="row content">
          <div class="col-lg-12" id="descricao">
            <p class="date">Publicado em: {{ nhavar.id }} de Junho de 2022</p>
            
            <p></p>
            <div class="post-img">
              <embed class="borda" src="/img/auto.pdf" width="100%" height="800px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End isencao Section -->
</template>

<script>
export default {
  name: "EventId",
  props: ["id"],

  data: function () {
    return {
      nhavar: null,
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/photos/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.nhavar = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.event {
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
  height: 100%;  
}
.borda{
  border-radius: 25px;
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
