<template>
  <section id="decisoes" class="decisoes">
    <div class="container"> 
         <div class="section-title">
        <h2>FORMULÁRIOS DE Biometria </h2>
      </div>
          <!-- FORMS GERAL--> 
          <div class="col-md-12" id="separacao">
              Notificação de Biometria     
          </div>
              <div class="col-md-12" id="divg">
                <div class="container">
                  <div class="row">
                    <div class="col"> 
                      <label id="labelleft" for="finalidade" class="form-label">Finalidade</label>
                      <input class="form-control" type="text" placeholder="Proteção de Pessoas e Bens" aria-label="Disabled input example" disabled>
                    </div> 
                  </div> 
                </div>
              </div>
              <br>
              <div class="col-md-12" id="divg">
                <div class="container">
                  <div class="row">

                    <div id ="finalidade" class="col-md-4 col-lg-4">
                    <div class="icon-box" style="">
                      <input class="form-check-input" type="radio" name="tiponotific" id="1notificacao">
                        <label id="labelleft" class="form-check-label" for="1notificacao">
                          1ª Notificação
                        </label>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4 ">
                    <div class="icon-box">
                      <input class="form-check-input" type="radio" name="tiponotific" id="alteracao">
                        <label id="labelleft" class="form-check-label" for="alteracao">
                          Alteração
                        </label>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="icon-box">
                      <input class="form-check-input" type="radio" name="tiponotific" id="naoautorizada">
                        <label id="labelleft" class="form-check-label" for="naoautorizada">
                          Substituição da Notificação não autorizada
                        </label>
                    </div>
                  </div> 
                     
                  </div> 
                </div>
              </div>
              <div class="col-md-12" id="separacao">
                1. Responsável pelo Tratamento       
              </div>
              <div class="col-md-12" id="divg">
                <div class="container">
                  <div class="row">
                    <div class="col"> 
                      <input class="form-check-input" type="radio" name="tipopessoa" id="pessoasingular">
                        <label id="labelleft" class="form-check-label" for="pessoasingular">
                          Pessoa Singular
                        </label>
                    </div>
                    <div class="col"> 
                      <input class="form-check-input" type="radio" name="tipopessoa" id="pessoacoletiva">
                        <label id="labelleft" class="form-check-label" for="pessoacoletiva">
                           Pessoa Colectiva
                        </label>
                    </div> 
                    
                    <div class="col-md-12"> 
                      <input type="text" class="form-control" id="nomedenominacao" alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada" placeholder=" Nome/Denominação">
                    </div>
                    <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Nome/Comercial">
                    </div>
                     <div class="col"> 
                         <select class="form-select" aria-label="Default select example">
                            <option value="">- Escolha a actividade desenvolvida-</option>
                               <option v-for="atividade in atividades" :key="atividade" value="1">{{atividade}}</option>
                               
                                
                          </select>
                      </div>
                      <div class="col">  
                        <input type="text" class="form-control" id="nif" alt="NIF" placeholder="Número de NIF">
                      </div>
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col">  
                            <input type="text" class="form-control" id="rua" alt="RUA" placeholder="Entre o nome da Rua">
                          </div>
                          <div class="col">  
                            <input type="text" class="form-control" id="local" alt="Local" placeholder="Cidade/Vila/Lugar/Zona">
                          </div> 
                        </div> 
                      </div>
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual a sua ilha -</option>
                            <option v-for="ilha in ilhas" :key="ilha" value="1">{{ilha}}</option>
                                
                            </select>
                          </div>
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual o concelho -</option> 
                               <option v-for="concelho in concelhos" :key="concelho" value="1">{{concelho}}</option>
                                
                             </select>
                          </div> 
                        </div> 
                      </div>  
                      <div class="col-md-12" id="divloco"> 
                        <div class="row">
                          <div class="col">  
                            <input type="text" class="form-control" id="caixapostal" alt="Caixa Postal" placeholder="Entre o número da Caixa Postal">
                          </div>
                          <div class="col">  
                            <input type="number" class="form-control" id="telefone" alt="Telefone/Telemovel" placeholder="Contato: Telefone/Telemovel">
                          </div> 
                        </div> 
                      </div>
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col"> 
                            <input type="email" class="form-control" id="email" placeholder="Entre o seu email: example@cnpd.cv">
                          </div>
                          <div class="col">  
                            <input class="form-check-input" type="radio" name="pais" id="pais">
                            <label id="labelleft" class="form-check-label" for="pais">
                              País: Cabo Verde/Fora do Território Nacional
                            </label>
                          </div> 
                        </div> 
                      </div> 
                  </div>
                </div>
                 <div class="col-md-12"> 
                      <input type="text" class="form-control" id="nomedenominacao" alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada" placeholder=" Representante">
                    </div>
                    <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Nome/Comercial">
                    </div>
                     <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Rua">
                    </div>
                     <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Caixa Postal">
                    </div>
                     <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Cidade/Vila/Lugar/Zona">
                    </div>
                    <div class="col-md-12"> 
                        <div class="row">
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual a sua ilha -</option>
                            <option v-for="ilha in ilhas" :key="ilha" value="1">{{ilha}}</option>
                                
                            </select>
                          </div>
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual o concelho -</option> 
                               <option v-for="concelho in concelhos" :key="concelho" value="1">{{concelho}}</option>
                                
                             </select>
                          </div> 
                        </div> 
                      </div> 
                      <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Nome da pessoa do contato">
                    </div>
              </div>
              <div class="col-md-12" id="separacao">
                Morada Local de Instalação   
              </div>
              <div class="col">
                <div class="container">
                  <div class="row">
                    <div class="col"> 
                      <label class="form-check-label" >
                        Morada do local da instalação é a mesma indicada no ponto 1? 
                      </label><br>
                      <buttom value="Sim" @click="changeMorada" type="button" class="btn btn-outline-primary" name="moradasim" id="moradasimbotton">
                      {{checkMorada? 'Não': 'Sim' }} </buttom>
                    </div> 
                  </div>
                </div>
              </div>

 
              <div class="col-md-12" id="divg2" v-if="checkMorada">
                <div class="container">
                  <div class="row"> 
                    
                    <div class="col-md-12"> 
                      <input type="text" class="form-control" id="nomedenominacao" alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada" placeholder=" Nome/Denominação">
                    </div>
                    <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Nome/Comercial">
                    </div>
                     <div class="col"> 
                         <select class="form-select" aria-label="Default select example">
                            <option value="">- Escolha a actividade desenvolvida-</option>
                                <option v-for="atividade in atividades" :key="atividade" value="1">{{atividade}}</option>
                                
                          </select>
                      </div>
                      <div class="col">  
                        <input type="text" class="form-control" id="nif" alt="NIF" placeholder="Número de NIF">
                      </div>
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col">  
                            <input type="text" class="form-control" id="rua" alt="RUA" placeholder="Entre o nome da Rua">
                          </div>
                          <div class="col">  
                            <input type="text" class="form-control" id="local" alt="Local" placeholder="Cidade/Vila/Lugar/Zona">
                          </div> 
                        </div> 
                      </div>
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual a sua ilha -</option>
                                <option v-for="ilha in ilhas" :key="ilha" value="1">{{ilha}}</option>
                                
                            </select>
                          </div>
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual o concelho -</option> 
                                <option v-for="concelho in concelhos" :key="concelho" value="1">{{concelho}}</option>
                                
                             </select>
                          </div> 
                        </div> 
                      </div>  
                      <div class="col-md-12" id="divloco"> 
                        <div class="row">
                          <div class="col">  
                            <input type="text" class="form-control" id="caixapostal" alt="Caixa Postal" placeholder="Entre o número da Caixa Postal">
                          </div>
                          <div class="col">  
                            <input type="number" class="form-control" id="telefone" alt="Telefone/Telemovel" placeholder="Contato: Telefone/Telemovel">
                          </div> 
                        </div> 
                      </div>
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col"> 
                            <input type="email" class="form-control" id="email" placeholder="Entre o seu email: example@cnpd.cv">
                          </div>
                          <div class="col">  
                            <input class="form-check-input" type="radio" name="pais" id="pais">
                            <label id="labelleft" class="form-check-label" for="pais">
                              País: Cabo Verde/Fora do Território Nacional
                            </label>
                          </div> 
                          
                        </div> 
                      </div> 
                  </div>
                </div>
              </div>

 

               
          <!-- FIM DE FORMS--> 
    </div>
  </section>
</template>

<script>    
export default { 
    name:"BiometriaForms",
   
  data() {
    return{
      checkMorada:false,
      concelhos:[
        'Ribeira Grande',
        'Paul',
        'Porto novo',
        'São Vicente',
        'Ribeira Brava',
        'Tarrafal de São Nicolau',
        'Sal',
        'Boa Vista',
        'Maio',
        'Praia',
        'São Domingos',
        'Santa Catarina',
        'São Salvador do Mundo',
        'Santa Cruz',
        'São Lourenço dos Órgãos',
        'Ribeira Grande de Santiago',
        'São Miguel',
        'Tarrafal',
        'São Filipe',
        'Santa Catarina do Fogo',
        'Mosteiros',
        'Brava'
        ],

       ilhas:[
        'Santo Antão',
        'São Vicente',
        'São Nicolau',
        'Sal',
        'Boa Vista',
        'Maio',
        'Santiago',
        'Fogo',
        'Brava'
       
       ],

       atividades:[
        'Produção da Electricidade',
        'Actividade de Televisão',
        'Emprego (Selecção, fornecimento de recursos humanos)',
        'Segurança e Ordem pública',
        'Estabelecimento comercial de venda a público',
        'Produção da Água',
        'Telecomunicação',
        'Segurança Privad',
        'Ensino (Pré-escolar, Básico, Secundário, Superior)',
        'Estabelecimento comercial de venda a público',
        'Serviço de Internet (processamento de dados, domiciliação de informação',
        'Administração Pública (Central, Local)',
        'Saúde',
         'Centro Comercial',
        'Publicidade, Estudos de Mercado, Sondagens de Opinião',
        'Negócios Estrangeiros',
        'Previdência Social',
        'Alojamento (Hotel, Residencial, Pensão, etc.)',
        'Defesa',
        'Actividade Financeira',
        'Comércio Electrónico',
        'Informática',
        'Justiça',
        'Seguros',
        'Transporte (Aéreo, Marítimo, Terrestre)'

       ]

    }
   
  }, 
  methods:{
			 changeMorada(){
        this.checkMorada = !this.checkMorada;
       }
		}
  }

</script>

<style>


#divg{
  font-family:verdana;
  border: 1px solid #061536;
  padding: 10px;
  border-radius: 10px;
  
}
.col{ 
  font-family:verdana;
}
#divg2{
  font-family:verdana;
  border: 1px solid #061536;
  padding: 10px;
  margin-top: 10px;
  padding-top: 20px;
  border-radius: 10px;
}
.col{

  font-family:verdana;
}
input, label{
  font-family:verdana;
}
input{
 margin-bottom: 10px;
}
input.form-control:focus,select.form-select:focus{
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
  
}
option:hover {
      background-color: yellow;
    }
 
#separacao{
  font-family:verdana;
  padding-left: 10px;
  text-align: center;
  color: #ffffff;
  border-style: ridge;
  border-radius: 10px;
  background: #061536;
}
#labelleft{
  text-align: center;
}
#divloco{
  margin-top: 10px;
}
#moradasimbotton{
  color: #061536;
  border-color: #061536;
}
#moradasimbotton:hover{
  background-color: #061536;
  color: #fff; 
  border: 2px solid #bd9a13;
}

.icon-box {
  background-color: white;
  
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
  background: #bd9a13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}

</style>
