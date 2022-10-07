<template>
    <section id="videos" class="videos">

<div class="container" data-aos="fade-up"> 

  <div class="section-title"> 
    <div class="section-title">
         <h2>VIDEOS PROMOCIONAIS </h2>  
     </div>
  </div> 
  <div class="row"> 
    <div id="box" v-for="(event, index) in (filteredList)" :key="index" class="col-lg-4"> 
      <div class="post-box"> <!--:src="event.url" -->
        <div class="post-img">
          <!--<img :src="event.url" class="img-fluid" alt=""> -->
           <video width="420" height="240" controls v-bind:poster="event.thumbnailUrl">
            <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4"> 
          </video>
        </div>
        <span class="post-date">{{event.id}}, Junho 2022</span>
        <h3 class="post-title">{{event.title}}</h3>  
      </div>
    </div> 
  </div>

</div>

</section><!-- End Recent Blog Posts Section -->


</template>

<script>  
import axios from 'axios';
export default {
    name:"VideosCnpd",
    data: () => ({
    photos: [], //array com os itens
    currentSort:'title', //ordenar por title
    currentSortDir:'asc',// ordenar ascendente
    search: '', //search 
    searchSelection: '',
    pageSize: 8, //paginacao
    currentPage: 1
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
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.photos = response.data
      })
  },

}

</script>

<style scoped>
  #box{ 
  margin-bottom: 15px;
}
  a{
    text-decoration: none;
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
    color: black;
    display: inline-block;
    text-transform: uppercase;
    border-radius: 50px;
  }
  .videos .post-box {
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
  .videos .post-box .post-img {
    overflow: hidden;
    margin: -30px -30px 15px -30px;
    position: relative;
  }
  .videos .post-box .post-img img {
    transition: 0.5s;
  }
  .videos .post-box .post-date {
    font-size: 10px;
    font-weight: 600;
    color: #012970;
    display: block;
    margin-bottom: 10px;
  }
  .videos .post-box .post-title {
    font-size: 15px;
    text-align: justify;
    color: #012970;
    font-weight: 700;
    margin-bottom: 18px;
    position: relative;
    transition: 0.3s;
  }
   
   
  .videos .post-box:hover .post-title {
    color: #013365;
  }
  .videos .post-box:hover .post-img video {
    box-shadow: 1px 1px  3px 5px black; 
  transition: all 0.2s ease-in-out;
  }
  a{
    text-decoration: none;
    color: #493c3e;
    transition: ease-in-out 0.3s;
  }
  
  a:hover{
      color: #BD9A13;
  }
  
  #videos {  
    padding-top: 120px; 
  } 
  #idpage{ 
   
    display: flex;
    justify-content: center;
  } 
  .post-img :hover{
  cursor: pointer;

}
video{
  object-fit: cover;
}
  </style>