<!--   <img src="https://picsum.photos/1024/420/?image=10" alt="Nature" class="responsive"> -->
<template>
  <div id="container">
    
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
     </div>
    <div class="carousel-inner">
      
      <!-- CONDICAO SE EXISTIR NOTICIA NOVA A MENOS DE 5 DIAS MOSTRAR ESSA NOTICIA-->

      <div v-if="pageSizenews < 2"><!-- countnews()-->
        <div v-for="(conselho, index) in (noticias)" :key="index" class="carousel-item active">
           
          <div class="post-img"><img  src="https://www.parlamento.cv/userfiles/Austelino%20FINAL(texto)(2).png" class="img-fluid" alt=""></div>
          <div class="carousel-caption d-none d-md-block">
            <h5>news -{{ countnews() }}   {{conselho.title}}</h5>
            <p id="textoslide">{{conselho.title}}</p>
          </div>
        </div>
      </div>
      <!-- SLIDE DE AVISO -->
      <div v-else>
        <div class="carousel-item active">  
           <div class="post-img"><img  src="/img/b.jpg" class="img-fluid" alt=""></div>
             
         <!--<video autoplay class="responsive">
            <source src="/img/aviso.mp4" type="video/mp4"> 
          </video>-->
          <div class="carousel-caption d-none d-md-block">
            <h5>MODELO DE AVISO DE CCTV</h5>
            <p id="textoslide">ESTE E O MODELO DE AVISO UE DEVE SER AFIXADO</p>
          </div>
        </div>
      </div> 
      <!-- MOSTRAR 3 CONSELHOS PRATICOS-->
      <div v-for="(conselho, index) in (conselhospraticos)" :key="index" class="carousel-item">
          <div class="post-img"><img  src="/img/passwordforte.png" class="img-fluid" alt=""></div>
          <div class="carousel-caption d-none d-md-block">
            <h5>conselho {{conselho.id}}- {{conselho.title}}</h5>
            <p id="textoslide">{{conselho.title}}</p>
        </div>
      </div> 
  </div>
   
</div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: "BannerHome",
  data: () => ({
    photos: [], //array com os itens
    currentSort:'title', //ordenar por title
    currentSortDir:'asc',// ordenar ascendente
    search: '', //search 
    searchSelection: '',
    pageSizeconselhos: 3, //paginacao
    pageSizenews:1,
    currentPage: 1
  }),

  methods:{
    sort(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    nextPage:function() {
      if((this.currentPage*this.pageSize) < this.photos.length) this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
    },

    countnews(){
      return this.photos.length; 
    }
  },

  computed: { 

    conselhospraticos () {
      return this.photos.filter((data) => { 
        let title = data.title.toLowerCase().match(this.search.toLowerCase());  
        return title;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSizeconselhos;
        let end = this.currentPage*this.pageSizeconselhos;
        if(index >= start && index < end) return true;
      });
    },
    noticias () {
      return this.photos.filter((data) => { 
        let title = data.title.toLowerCase().match(this.search.toLowerCase());  
        return title;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSizenews;
        let end = this.currentPage*this.pageSizenews;
        if(index >= start && index < end) return true;
      });
    }
  },

  created () {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.photos = response.data
      })
  },

}
</script>

<style scoped>
 .post-img {  
}
.post-img img { 
  width: 100%;
  height: 600px;
}

@media only screen and (max-width: 600px) {
  .post-img img { 
  width: 100%;
  height: auto;
}
}
 
#container {
  padding-top: 70px;
}
h5{
  color: #fff; 
    font-size: 2rem; 
    font-weight: 1000;
    display: block;
    line-height: 1.1;
    margin-bottom: 100px; 
}
#textoslide{
  font-size: 18px;
}
.responsive {
  width: 100%;
  height: 600px;
}
.responsiveaviso {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 600px;
}
</style>
