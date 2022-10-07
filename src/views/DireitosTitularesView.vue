<template> 
	   <div class="faqs">
          <div class="section-title">
            <h2>DIREITOS DO TITULAR DOS DADOS </h2> 
          </div>
          
         
           <div class="container"> 
            
            <DireitosTitulares 
            v-for="(faq, i) in faqs" 
            :faq="faq" 
            :index="i" 
            :key="i"
            :open="faq.open"
            @toggleOpen="toggleOpen"
          />
          </div>
          
      </div> 
</template>

<script>
import DireitosTitulares from "../components/DireitosTitulares.vue"; 

export default{
  name:"DireitosTitularesView", 
  components: {
    DireitosTitulares
}, 
   data (){
    return{
      faqs:[
        {
          question: "Direito de informação",
          mt1: " Quando se procede à recolha de dados pessoais junto do seu titular, o responsável pelo tratamento ou seu representante deve prestar-lhe, salvo se já dele forem conhecidas, as seguintes informações:",
          mt2:"Quanto mais informações colocar online maior é a probabilidade de ser vítima de um ciberataque.Seja muito prudente nas fotografias que colocas na internet. Veja que podem ser copiadas, manipuladas e exploradas para diversas finalidades.",
          open: true
        },
        {
          question: "Direito de acesso",
          mt1: "Se não lhe for fornecida, exija informações sobre quem é o responsável pelo tratamento de dados, a sua finalidade, os seus destinatários, bem como os dados que tem de fornecer obrigatoriamente e os que são facultativos. Peça ainda informações sobre o exercício dos direitos de acesso e de rectificação.",
          open: false
        },
        {
          question: "A rectificação, apagamento ou o bloqueio",
          mt1: "A Lei de Protecção de Dados Pessoais estipula que qualquer pessoa pode “se opor, a seu pedido e gratuitamente, ao tratamento dos dados pessoais que lhe digam respeito previsto pelo responsável pelo tratamento para efeitos de “marketing” directo ou qualquer outra forma de prospecção”. Em caso de incumprimento deve apresentar queixa junto da Comissão Nacional de Protecção de Dados",
          open: false
        },
        {
          question: "Direito de oposição",
          mt1: "Altere frequentemente de password, preferencialmente uma para cada tipo de conta. Deve escolher password com um mínimo de oito caracteres, misturando letras maiúsculas e minúsculas, números e símbolos especiais (#,@,*,&,%,_ ou -).",
          mt2: "Nunca use password como '102030', '12345', 'a1b2c3d4' ou outras fáceis de se memorizar mas também de ser adivinhado por quem pretenda roubar os seus dados.A resposta à pergunta que permita recuperar o password nunca deve ser igual aos dados colocados no seu perfil de uma conta da rede social. Por isso, deve sempre iludir na resposta",
          mt3:"O uso do telemóvel afigura-se como sendo um dos mecanismos mais seguro para a recuperação da password, Evite partilhar e escrever password em papeis, ficheiros no computador ou no meio dos contactos do telemóvel.",
          open: false
        },
         {
          question: "Outros Direitos",
          mt1: "Ao deixar de navegar no seu email ou em qualquer página que exija os dados de nome de usuário e password accione o botão Logout ou Sair.",
          open: false
        },
        {
          question: "Navegue em Redes Seguras",
          mt1: "Reserve as actividades mais confidenciais ao seu computador pessoal. Não é aconselhável efectuar o pagamento de contas, a realização de operações bancárias num computador público ou numa rede sem fio público.",
          open: false
        }
        
  
      ]
    }
  },
  methods:{
    toggleOpen:function(index){
      this.faqs=this.faqs.map((faq,i)=>{
        if(index===i){
          faq.open =!faq.open;
        }else{
          faq.open =false;
        }

        return faq;
      });
    }
  }
}
</script>

<style>
.ptest{
  text-align: justify;
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
.faqs{ 
  padding-top: 120px;
}
.faq {
  display: block;
  width: 100%;
  max-width: 1300px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
  
}

.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}

.faq .question::after {
  content: '';

  position: absolute; 
  right: 0px;
  transform: translateY(-50%) rotate(0deg);

  width: 30px;
  height: 30px;
  background-image: url('../arrow-down-mint.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}

.ptexto{
  background-color: red;
}

</style>