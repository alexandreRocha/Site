<template>
  <!-- ======= Recent Blog Posts Section ======= -->
      <section id="Panfletos" class="Panfletos">
  
        <div class="container" data-aos="fade-up"> 
  
          <div class="section-title"> 
            <div class="section-title">
                 <h2>Todos os Eventos </h2>  
             </div>
          </div> 
          <div class="row"> 
            <div id="box" v-for="(event, index) in (filteredList)" :key="index" class="col-lg-4"> 
              <div class="post-box">
                <router-link :to="{name: 'panfletview',params: { id: event.id}}"> 
                  <div class="post-img"><img src="/img/panfletos/RedesSociais.png" class="img-fluid" alt=""></div>
                   <h3 class="post-title">{{event.title}}</h3> 
                </router-link>  
              </div>  
            </div> 
            <p></p>
            
    <div id="idpage">
      <button id="button" @click="prevPage" class="float-left btn btn-outline-info btn-sm"><i class="fas fa-arrow-left"></i> </button> 
      <button id="button" @click="nextPage" class="float-right btn btn-outline-info btn-sm"> <i class="fas fa-arrow-right"></i></button>
    </div>
           
          </div>
  
        </div>
  
      </section>
     
     
  </template>
  
  <script> 
  import axios from 'axios';
  export default {
      name:"PanfletosCnpd",
      data: () => ({
      photos: [], //array com os itens
      currentSort:'title', //ordenar por title
      currentSortDir:'asc',// ordenar ascendente
      search: '', //search 
      searchSelection: '',
      pageSize: 9, //paginacao
      currentPage: 1, 
    }),
  
    methods:{
      sort(s) {
        if(s === this.currentSort) {
          this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
        }
        this.currentSort = s;
      },
      nextPage() {
        if((this.currentPage*this.pageSize) < this.photos.length) this.currentPage++;
      },
      prevPage() {
        if(this.currentPage > 1) this.currentPage--;
      },
  
      countNumbers(){
        return this.photos.length; 
      }
    },
  
    computed: { 
  
      filteredList () {
        return this.photos.filter((data) => { 
          let title = data.title.toLowerCase().match(this.search.toLowerCase());  
          return title;
        }).filter((row, index) => {
          let start = (this.currentPage-1)*this.pageSize;
          let end = this.currentPage*this.pageSize;
          if(index >= start && index < end) return true;
        });
      }
    },
  
    created () {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.photos = response.data
        })
    },
  
  }
  </script> 
  
  <style scoped>

#idpage{ 
  display: flex;
  justify-content: space-between;
}
#button{
   
  color: #061536;
  border: 2px solid #061536;
  box-shadow: 1px 1px #061536;
  height: 30px;
  width: 30px; 
}
#button:hover{
  box-shadow: 1px 1px  3px 3px black;
  color: #fff;
  background-color: #061536;
}
  #box{
    margin-bottom: 10px;
  }
  a{
    text-decoration: none;
  }
  .section-title {
    text-align: center;
    padding-bottom: 10px;
  }
  .section-title h2 {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 700;
    padding: 8px 20px;
    line-height: 1;
    margin: 0;
    margin-top: 40px;
    background: #BD9A13;
    color: black;
    display: inline-block;
    text-transform: uppercase;
    border-radius: 50px;
  }
  .Panfletos .post-box {
    box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
    transition: 0.3s;
    height: 100%;
    overflow: hidden;
    padding: 30px;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .Panfletos .post-box .post-img {
    overflow: hidden;
    margin: -30px -30px 15px -30px;
    position: relative;
  }
  .Panfletos .post-box .post-img img {
    transition: 0.5s;
  }
  .Panfletos .post-box .post-date {
    font-size: 10px;
    font-weight: 600;
    color: #012970;
    display: block;
    margin-bottom: 10px;
  }
  .Panfletos .post-box .post-title {
    font-size: 15px;
    text-align: justify;
    color: #012970;
    font-weight: 700;
    margin-bottom: 18px;
    position: relative;
    transition: 0.3s;
  }
   
   
  .Panfletos .post-box:hover .post-title {
    color: #013365;
  }
  .Panfletos .post-box:hover .post-img img {
    transform: rotate(6deg) scale(1.2);
  }
  a{
    text-decoration: none;
    color: #493c3e;
    transition: ease-in-out 0.3s;
  }
  
  a:hover{
      color: #BD9A13;
  }
  
  #Panfletos {  
    padding-top: 80px; 
  } 
  #idpage{ 
   
    display: flex;
    justify-content: center;
  }
  #button{
     
    color: #061536;
    border: 2px solid #061536;
    box-shadow: 1px 1px #061536;
    height: 30px;
    width: 30px; 
  }
  #button:hover{
    box-shadow: 1px 1px  3px 3px black;
    color: #fff;
    background-color: #061536;
  }
  #vermais{ 
    color: #000;
    border: 1px solid #061536;
    background-color: #fff;
  }
  #vermais:hover{ 
    color: #fff;
    background-color: #061536;
  }
  </style>