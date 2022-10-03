<template>
      <!-- ======= deliberacoes Section ======= -->
        <section id="delibera" class="delibera">
            <div class="container">  
                <div v-if="user">
                  <div class="section-title">
                      <h2>Deliberações Nº.{{ user.id }} - {{ user.name }}</h2> 
                  </div> 
                  <p></p>
                  <div class="post-img">  
                     <embed class="borda" src="/img/auto.pdf" width="100%" height="800px" />
                  </div> 
                </div> 
            </div>
        </section>
        <!-- End deliberacoes Section -->
</template>

<script> 
 
export default {
    name: 'DeliberaId',
    props: ["id"],  

    data: function (){
        return { 
          user: null
        }
    },

    mounted () {
    fetch('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
      .then(response => response.json())
      .then(data =>this.user = data)
      .catch(err =>console.log(err.message)) 
  },

    
}
</script>

<style scoped>
 .delibera{
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
.borda{
  border-radius: 25px;
}
.post-img {
  overflow: hidden;
  margin: -30px -30px 15px -30px;
  position: relative;
  border: 1px solid #061536;
  border-radius: 25px;
} 
</style>
