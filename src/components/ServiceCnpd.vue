<template>
     <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

       <div class="section-title"> 
          <div class="section-title">
               <h2>CNPD</h2>  
           </div>
        </div>
        <div class="row"> 
         <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><IconAwe class="icon-color" icon="calendar-days" /></div>
              <h4 class="title"><a href="">Orientações da CNPD</a></h4>
              <p class="description">Consulte aqui Conselhos Práticos</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><IconAwe class="icon-color" icon="chart-pie" /></div>
              <h4 class="title"><a href="">Relatórios e Plano de Atividades</a></h4>
              <p class="description">Consulte aqui <router-link to="/relatorios">  Relatórios Anuais </router-link> e <router-link to="/planos">  Plano de Atividades </router-link></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
             <div class="icon"><IconAwe  class="icon-color" icon="gavel"/></div>
              <h4 class="title"><a href="">Queixas e reclamações</a></h4>
              <p class="description">Faz <router-link to="/queixa">  <b id="linkqueixa">aqui</b> </router-link> as suas queixas e reclamações</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box">
              <div class="icon"><IconAwe class="icon-color" icon="file-waveform"/></div>
              <h4 class="title"><a href="">Notificação/Formulários</a></h4>
              <p class="description"><router-link to="/formularios">  Formulários </router-link>, 
              <router-link to="/taxas">  Taxas </router-link>, <router-link to="/isencoes">  Isenções de Notificações </router-link>
               e <router-link to="/obrigacoes">  Obrigações do Responsável </router-link></p>
            </div>
          </div>
          

        </div>

      </div>
    </section><!-- End Services Section -->
</template>

<script>
export default {
    name:"ServiceCnpd"
    
}
</script>

<style scoped>
#linkqueixa{
  color: #BD9A13;
}
a {
  text-decoration: none;
  color: #374253;
}

a:hover{
  color: #BD9A13;
}


.section-title {
  color: #BD9A13;
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
  margin-top: 25px;
  background: #BD9A13;
  color: black;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}

 
.section-title p {
  margin: 15px auto 0 auto;
  font-weight: 600;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
.services {
  padding-bottom: 30px;
}
.services .icon-box {
  padding: 60px 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  text-align: center;
}
.services .icon-box::before {
  content: "";
  position: absolute;
  background: #fdeff2;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.4s;
  z-index: -1;
}

.services .icon {
  margin-bottom: 15px;
}
.services .icon .icon-color {
  font-size: 35px;
  line-height: 1;
  color:#013365;
  transition: all 0.9s ease-in-out;
}
.services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}
.services .title a {
  color: #111;
}
.services .description {
  font-size: 15px;
  line-height: 28px;
  margin-bottom: 0;
}


    
</style>