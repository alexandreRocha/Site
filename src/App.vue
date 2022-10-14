<template>
 
    <NavBar :logo="logo_src" :alt="app_name"/>
   
  <router-view/> 
  <ServiceCnpd/> 
  <FooterSite/>
  
</template>
<script>
import FooterSite from "@/components/FooterSite.vue" 
import ServiceCnpd from "@/components/ServiceCnpd.vue" 
import NavBar from "@/components/NavBar.vue"   


 //import "../public/js/main.js" 
export default {
  components:{
    FooterSite,
    ServiceCnpd,
    NavBar
},
data(){
  return {
     logo_src:'/img/logoicon.svg',
      app_name:'CNPD'
  }
  
  }
}
</script>

<style >
  *{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 
</style>


