<template>
      <!-- ======= eventcoes Section ======= -->
        <section id="event" class="event">
            <div class="container">  
                <div v-if="event">
                  <div class="section-title">
                      <h2>{{ event.title }}</h2> 
                  </div>  
                  <div class="row content">
                    <div class="col-lg-4">
                      <div class="post-img">  
                        <img src="https://www.parlamento.cv/userfiles/Austelino%20FINAL(texto)(2).png" class="img-fluid" alt=""> 
                      </div> 
                    </div>
                    <div class="col-lg-8" id="descricao">
                    <p class="date">Publicado em: {{ event.id }} de Junho de 2022</p>
                     <p>{{ event.body }}</p> 
                    </div>
                  </div> 
                </div> 
            </div>
        </section>
        <!-- End eventcoes Section -->
</template>

<script> 
 
export default {
    name: 'EventId',
    props: ["id"],  

    data: function (){
        return { 
          event: null
        }
    },

    mounted () {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
      .then(response => response.json())
      .then(data =>this.event = data)
      .catch(err =>console.log(err.message)) 
  },

    
}
</script>

<style scoped>
 .event{
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
  background: #BD9A13;
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

img{
  border-radius: 10px;
}
#descricao{
  text-align: justify;
  padding-left: 50px; 
}
.date{
 font-size: 14px;
 color: #013365;
}
</style>
