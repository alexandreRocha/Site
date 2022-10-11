<template>
      <!-- ======= isencoes Section ======= -->
        <section id="isencoes" class="isencoes">
            <div class="container">

                <div class="section-title">
                    <h2>ISENÇÕES DE NOTIFICAÇÃO </h2> 
                </div>
                  
                <div class="row">   
                  <div id="box" v-for="(user, index) in (filteredList)" :key="index" class="row"> 
                     <div class="post-box"> <!-- :src="user.url" src="/img/lei.png"-->
                       
                         
                      <div id="isencao" class="first"> 
                        <img src="/img/isencoes.jpg" alt="Avatar" style="width:60px"> 
                      </div>
                      <div id="isencao" class="second">
                        <h5 class="post-title">
                         {{ user.title }} 
                        </h5>
                      </div>
                      <div id="isencao" class="third">
                        
                        <router-link :to="{name: 'isencaoview',params: { id: user.id}}">
                          <div class="icon"><IconAwe class="icon-color" icon="file-pdf" /></div>
                      </router-link>
                      </div>
                        
                     
                    </div>
                  </div>  
                  
                </div>

            </div>
        </section>
        <!-- End isencoes Section -->
</template>

<script>
  
import axios from 'axios';

export default {
    name:'IsencoesCnpd', 
  data: () => ({
    photos: [], //array com os itens
    currentSort:'title', //ordenar por title
    currentSortDir:'asc',// ordenar ascendente
    search: '', //search 
    searchSelection: '',
    pageSize: 6, //paginacao
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
#isencoes{
  padding-top: 120px;
  margin-left: 30px;
}
.post-box {
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s; 
  overflow: hidden;
  padding: 10px; 
  border-radius: 8px; 
  margin-bottom: 10px;
}
img {
  border-radius: 80%;
}
#isencao {
            margin: 10px;
        }
  
        .first {
            width: 5%;
            display: inline-block; 
        }
  
        .second {
            width: 75%;
            display: inline-block; 
        }
  
        .third {
            width: 5%;
            display: inline-block; 
        }
  
        @media screen and (max-width: 500px) {
  
            .first,
            .second,
            .third {
                width: 100%;
            }
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
.post-box .post-title {
  font-size: 16px;
  color: #374253; 
  margin-bottom: 18px;
  position: relative;
  text-align: left;
  transition: 0.3s;
  
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}

.icon .icon-color {
  font-size: 35px;
  line-height: 1;
  color:#013365;
  transition: all 0.9s ease-in-out;
}










 
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
</style>

