<template>
  <section id="decisoes" class="decisoes">
    <div class="container"> 
          <!-- FORMS GERAL--> 
          <div class="col-md-12" id="separacao">
              Notificação de VideoVigilância       
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

                    <div class="col-md-4 col-lg-4">
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
                                <option value="1">Produção da Electricidade</option>
                                <option value="2">Actividade de Televisão</option>
                                <option value="3">Emprego (Selecção, fornecimento de recursos humanos)</option>
                                <option value="4">Segurança e Ordem pública</option>
                                <option value="5">Produção da Água</option>
                                <option value="6">Telecomunicação</option>
                                <option value="7">Segurança Privada</option>
                                <option value="8">Ensino (Pré-escolar, Básico, Secundário, Superior)</option>
                                <option value="9">Estabelecimento comercial de venda a público</option>
                                <option value="10">Serviço de Internet (processamento de dados, domiciliação de informação</option>
                                <option value="11">Administração Pública (Central, Local)</option>
                                <option value="12">Saúde</option>
                                <option value="13">Centro Comercial</option>
                                <option value="14">Publicidade, Estudos de Mercado, Sondagens de Opinião</option>
                                <option value="15">Negócios Estrangeiros</option>
                                <option value="16">Previdência Social</option>
                                <option value="17">Alojamento (Hotel, Residencial, Pensão, etc.)</option>
                                <option value="18">Defesa</option>
                                <option value="19">Actividade Financeira</option>
                                <option value="20">Comércio Electrónico</option>
                                <option value="21">Informática</option>
                                <option value="22">Justiça</option>
                                <option value="23">Seguros</option>
                                <option value="24">Transporte (Aéreo, Marítimo, Terrestre)</option>
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
                                <option value="1">Santo Antão</option>
                                <option value="2">São Vicente</option>
                                <option value="3">São Nicolau</option>
                                <option value="4">Sal</option>
                                <option value="5">Boa Vista</option>
                                <option value="6">Maio</option>
                                <option value="7">Santiago</option>
                                <option value="8">Fogo</option>
                                <option value="9">Brava</option>
                            </select>
                          </div>
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual o concelho -</option> 
                                <option value="1">Ribeira Grande</option>
                                <option value="2">Paul</option>
                                <option value="3">Porto novo</option>
                                <option value="4">São Vicente</option>
                                <option value="5">Ribeira Brava</option>
                                <option value="6">Tarrafal de São Nicolau</option>
                                <option value="7">Sal</option>
                                <option value="8">Boa Vista</option>
                                <option value="9">Maio</option>
                                <option value="10">Praia</option>
                                <option value="11">São Domingos</option>
                                <option value="12">Santa Catarina</option>
                                <option value="13">São Salvador do Mundo</option>
                                <option value="14">Santa Cruz</option>
                                <option value="15">São Lourenço dos Órgãos</option>
                                <option value="16">Ribeira Grande de Santiago	</option>
                                <option value="17">São Miguel</option>
                                <option value="18">Tarrafal</option>
                                <option value="19">São Filipe</option>
                                <option value="20">Santa Catarina do Fogo</option>
                                <option value="21">Mosteiros</option>
                                <option value="22">Brava</option>
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
                                <option value="1">Produção da Electricidade</option>
                                <option value="2">Actividade de Televisão</option>
                                <option value="3">Emprego (Selecção, fornecimento de recursos humanos)</option>
                                <option value="4">Segurança e Ordem pública</option>
                                <option value="5">Produção da Água</option>
                                <option value="6">Telecomunicação</option>
                                <option value="7">Segurança Privada</option>
                                <option value="8">Ensino (Pré-escolar, Básico, Secundário, Superior)</option>
                                <option value="9">Estabelecimento comercial de venda a público</option>
                                <option value="10">Serviço de Internet (processamento de dados, domiciliação de informação</option>
                                <option value="11">Administração Pública (Central, Local)</option>
                                <option value="12">Saúde</option>
                                <option value="13">Centro Comercial</option>
                                <option value="14">Publicidade, Estudos de Mercado, Sondagens de Opinião</option>
                                <option value="15">Negócios Estrangeiros</option>
                                <option value="16">Previdência Social</option>
                                <option value="17">Alojamento (Hotel, Residencial, Pensão, etc.)</option>
                                <option value="18">Defesa</option>
                                <option value="19">Actividade Financeira</option>
                                <option value="20">Comércio Electrónico</option>
                                <option value="21">Informática</option>
                                <option value="22">Justiça</option>
                                <option value="23">Seguros</option>
                                <option value="24">Transporte (Aéreo, Marítimo, Terrestre)</option>
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
                                <option value="1">Santo Antão</option>
                                <option value="2">São Vicente</option>
                                <option value="3">São Nicolau</option>
                                <option value="4">Sal</option>
                                <option value="5">Boa Vista</option>
                                <option value="6">Maio</option>
                                <option value="7">Santiago</option>
                                <option value="8">Fogo</option>
                                <option value="9">Brava</option>
                            </select>
                          </div>
                          <div class="col">  
                            <select class="form-select" aria-label="Default select example">
                              <option value="">- Qual o concelho -</option> 
                                <option value="1">Ribeira Grande</option>
                                <option value="2">Paul</option>
                                <option value="3">Porto novo</option>
                                <option value="4">São Vicente</option>
                                <option value="5">Ribeira Brava</option>
                                <option value="6">Tarrafal de São Nicolau</option>
                                <option value="7">Sal</option>
                                <option value="8">Boa Vista</option>
                                <option value="9">Maio</option>
                                <option value="10">Praia</option>
                                <option value="11">São Domingos</option>
                                <option value="12">Santa Catarina</option>
                                <option value="13">São Salvador do Mundo</option>
                                <option value="14">Santa Cruz</option>
                                <option value="15">São Lourenço dos Órgãos</option>
                                <option value="16">Ribeira Grande de Santiago	</option>
                                <option value="17">São Miguel</option>
                                <option value="18">Tarrafal</option>
                                <option value="19">São Filipe</option>
                                <option value="20">Santa Catarina do Fogo</option>
                                <option value="21">Mosteiros</option>
                                <option value="22">Brava</option>
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
  data() {
    return{
      checkMorada:false,
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
  text-align: left;
  color: #ffffff;
  border-style: ridge;
  border-radius: 10px;
  background: #061536;
}
#labelleft{
  text-align: left;
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
</style>
