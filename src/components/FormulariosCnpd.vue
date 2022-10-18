<template>
      <!-- ======= formnot Section ======= -->
        <section id="formnot" class="formnot">
            <div class="container">

                <div class="section-title">
                    <h2>NOTIFICAÇÃO ELETRÓNICA DE TRATAMENTO DE DADOS</h2> 
                </div>
                 
                <p id="forms">  
                Os tratamentos de dados pessoais têm de ser previamente notificados à CNPD, 
                isto é, antes de se iniciarem, o que já inclui a recolha de dados.
                A notificação é feita por via eletrónica , através da submissão dos formulários online,
                consoante o tipo de formulário que será notificado.
                </p>
                <p id="forms">  
                Escolha o formulário de notificação adequado à sua situação e leia atentamente 
                as instruções de preenchimento, que vão surgindo ao longo do formulário junto a 
                cada campo. Veja também os tutoriais em videos listados abaixo, para lhe ajudar 
                no preenchimento dos formulários.
                </p>
                <p id="forms">  
                A notificação de qualquer tratamento de dados está sujeita ao pagamento de uma 
                taxa, que deverá ser paga no prazo de 30 (triunta) dias após a submissão do formulário.
                 Consulte toda a informação relativa às taxas e às formas de pagamento em
                  <router-link to="/taxas">  Taxas </router-link>.
                </p>
                  
                 <div class="section-title"> 
                    <h2>FORMULÁRIOS ELETRÓNICOS</h2> 
                </div>
                <div class="row">
                  <div class="col-lg-2  mb-5 mb-lg-0">
                    <router-link to="/formscctv">  
                      <div class="icon-box">
                        <div class="icon"><IconAwe class="icon-color" icon="camera" /></div>
                        <h4 class="title"><a href="">Formulários de Videovigilância</a></h4> 
                      </div>
                    </router-link> 
                  </div>

                  <div class="col-lg-2  mb-5 mb-lg-0">
                    <router-link to="/formsgeral"> 
                      <div class="icon-box">
                        <div class="icon"><IconAwe class="icon-color" icon="list-check" /></div>
                        <h4 class="title"><a href="">Formulário Geral de Notificação</a></h4> 
                      </div>
                    </router-link> 
                  </div>

                  <div class="col-lg-2  mb-5 mb-lg-0">
                    <router-link to="/formstic">   
                      <div class="icon-box">
                        <div class="icon"><IconAwe  class="icon-color" icon="phone"/></div>
                        <h4 class="title"><a href="">Formulário de controlo TIC</a></h4> 
                      </div>
                    </router-link> 
                  </div>

                  <div class="col-lg-2  mb-5 mb-lg-0">
                    <router-link to="/biometria"> 
                      <div class="icon-box">
                        <div class="icon"><IconAwe class="icon-color" icon="fingerprint"/></div>
                        <h4 class="title"><a href="">Formulário de Biometria</a></h4>
                      </div>
                    </router-link>
                  </div> 
                  <div class="col-lg-2  mb-5 mb-lg-0">
                    <router-link to="/formsgeo"> 
                      <div class="icon-box">
                      <div class="icon"><IconAwe  class="icon-color" icon="car-on"/></div>
                        <h4 class="title"><a href="">Formulário de Geolocalização</a></h4> 
                      </div>
                    </router-link>
                  </div>

                  <div class="col-lg-2  mb-5 mb-lg-0">
                    <router-link to="/formsinter"> 
                      <div class="icon-box">
                        <div class="icon"><IconAwe class="icon-color" icon="retweet"/></div>
                        <h4 class="title"><a href="">Formulário Interconexão</a></h4>
                      </div>
                    </router-link>
                  </div> 
                </div>
                <p></p>
                <p id="forms">  
                NB: Consulte <router-link to="/isencoes">  aqui </router-link>quais os tratamentos de dados pessoais que estão isentos
                 de notificação à CNPD.
                </p>
                 
                <div class="tutorial">
                     <h2>Tutoriais de como preencher/ enviar os formulários</h2> 
                </div>

                  <div class="row">
                    <div class="col-lg-3  mb-5 mb-lg-0">
                        <div class="card">
                            <div class="card-img">
                                <img src="/img/f.jpg" class="img-fluid" alt=""> 
                            </div>
                            <div class="card-info"> 
                                <span>Como preencher, ver o video!</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3  mb-5 mb-lg-0">
                        <div class="card">
                            <div class="card-img">
                                <img src="/img/f.jpg" class="img-fluid" alt=""> 
                            </div>
                            <div class="card-info"> 
                                <span>Como preencher, ver o video!</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3  mb-5 mb-lg-0">
                        <div class="card">
                            <div class="card-img">
                                <img src="/img/f.jpg" class="img-fluid" alt=""> 
                            </div>
                            <div class="card-info"> 
                                <span>Como preencher, ver o video!</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3  mb-5 mb-lg-0">
                        <div class="card">
                            <div class="card-img">
                                <img src="/img/f.jpg" class="img-fluid" alt=""> 
                            </div>
                            <div class="card-info"> 
                                <span>Como preencher, ver o video!</span>
                            </div>
                        </div>
                    </div>
                  </div>
                  <p></p>
                <p id="forms">
                Os dados pessoais recolhidos nos formulários são tratados pela CNPD e destinam-se 
                à gestão dos processos de notificação. Os campos de preenchimento obrigatório estão 
                assinalados com um asterisco ou sujeitos à escolha de uma das opções. 
                Os titulares dos dados têm o direito de aceder aos seus dados pessoais, 
                devendo para o efeito solicitar o acesso à CNPD por escrito. 
                Os dados transmitidos através de rede aberta correm o risco de
                 ser vistos e utilizados por terceiros
                 </p>
            </div>
        </section>
        <!-- End formnot Section -->
</template>

<script>
export default {
    name: 'FormulariosCnpd'
}
</script>

<style scoped>
#forms{
    text-align: justify; 
}
.pcente{
    text-align: center;
    font-weight: bold;
    margin-left: 10%;
    margin-right:  10%;
}
.pcenter{
    text-align: center; 
    margin-left: 20%;
    margin-right:  20%;
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
 
.formnot {
  background: #fff; 
  padding-top: 120px;
} 
 

.spamcolor{ 
  color: #BD9A13;
  border-radius: 50px;
}
a:hover {
  color: #BD9A13;
  text-decoration: none;
}
a{
   color: #BD9A13;
  text-decoration: none;
}

.formnot .icon-box {
  padding: 25px 25px;
  position: relative;
  overflow: hidden;
  background: #fff;
  color: #fff;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  text-align: center;
  border: 1px solid;
}
.formnot .icon-box::before {
  content: "";
  position: absolute;
  background: #061536;
  right: 0;
  left: 0;
  bottom: 0;
  top: 100%;
  transition: all 0.4s;
  z-index: -1;
}

.formnot .icon {
  margin-bottom: 15px;
}
.formnot .icon .icon-color {
  display: flex;
  justify-content: center;
  font-size: 25px;
  line-height: 1;
  color:#061536;
  transition: all 0.9s ease-in-out;
}
.formnot .title {
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 15px;
}
.formnot .title a {
  color: #061536;
}
 

.tutorial {
  text-align: center;
  padding-bottom: 30px;
  margin-top: 50px;
}
.tutorial h2 {
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
  .tutorial p {
    width: 50%;
  }
}
/*
.formnot .icon-color:hover{
  box-shadow: 1px 1px  3px 3px 061536;
  /*color: #061536;
  background-color: #061536;*/
 /* transition: all 0.2s ease-in-out;
}*/

.formnot .icon-box:hover{
  box-shadow: 1px 1px  3px 3px black; 
  transition: all 0.2s ease-in-out;

}

.formnot .card {
  margin-bottom: 20px;
  overflow: hidden;
  text-align: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);

}
.formnot .card:hover{
  box-shadow: 1px 1px  3px 3px black;
  color: #000;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
}
.formnot .card .card-img {
  position: relative;
  overflow: hidden;
}

</style>
