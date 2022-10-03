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
      
      <div v-for="(conselho, index) in (noticias)" :key="index" class="carousel-item active">
        <img src="img/testeimg.png"  class="responsive" >
        <div class="carousel-caption d-none d-md-block">
          <h5>news - {{conselho.title}}</h5>
          <p id="textoslide">{{conselho.title}}</p>
        </div>
      </div>
      <!-- SENAO EXISTIR NOTICIA MOSTRAR O MODELO DE AVISO NO SLIDE -->
      <!--<div class="carousel-item active">
        <img src="/img/ModeloCCVVFINAL.png"  class="responsive" >
        <div class="carousel-caption d-none d-md-block">
          <h5>MODELO DE AVISO DE CCTV</h5>
          <p id="textoslide">ESTE E O MODELO DE AVISO UE DEVE SER AFIXADO</p>
        </div>
      </div>-->
      <!-- MOSTRAR 3 CONSELHOS PRATICOS-->
      <div v-for="(conselho, index) in (conselhospraticos)" :key="index" class="carousel-item">
        
  <img src="img/testeimg3.png" class="responsive" >
  

        <!--<img src="/img/passwordforte.png" class="responsive" > !-->
        <div class="carousel-caption d-none d-md-block">
          <h5>conselho - {{conselho.title}}</h5>
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

    countNumbers(){
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
#container {
  padding-top: 70px;
}
h5{
  color: #fff; 
    font-size: 3rem; 
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
</style>
