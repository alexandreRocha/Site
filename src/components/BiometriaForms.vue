<template>
  <section id="decisoes" class="decisoes">
    <div class="container"> 
         <div class="section-title">
        <h2>Notificação de tratamento de dados biométricos de trabalhadores </h2>
      </div>
          <!-- FORMS GERAL--> 
          
              
              <br>
              <div class="col-md-12"></div>
        <div class="col-md-12" id="divg">
          <div class="container">
              <div class="row">
              <div class="col-md-2">
                <label id="labelleft" for="TipoNot" class="form-label"
                  >Tipo Notificação</label
                >
              </div>
              <div class="col-md-10">
                <Multiselect
                  v-model="TipoNot"
                  name="TipoNot"
                  id="TipoNot"
                  placeholder="- selecione o tipo de Notificação -"
                  :options="TipoNotf"
                />
              </div>
            </div>
          </div>
        </div>
             
              <div class="col-md-12" id="divg">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12" id="separacao">1. Responsável pelo Tratamento</div>
                    <div class="col-md-12"><br /></div>
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
                            <select
                      class="form-select"
                      v-model="ilhaResp"
                      name="ilhaResp"
                      id="ilhaResp"
                      for="ilhaResp"
                      placeholder="- Seleciona uma ilha-"
                    >
                      <option :value="null">- selecione uma ilha -</option>
                      <option
                        v-for="option in ilhas"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                          </div>
                          <div class="col">  
                            <select
                      class="form-select"
                      v-model="concelhoResp"
                      name="concelhoResp"
                      id="concelhoResp"
                      for="concelhoResp"
                      placeholder="- Seleciona um concelho -"
                    >
                      <option :value="null">- selecione um concelho -</option>
                      <option
                        v-for="option in concelhos[ilhaResp]"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
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
                             <select
                            class="form-select"
                            v-model="ilhaDirAcess"
                            name="ilhaDireitoAcesso"
                            id="ilhaDireitoAcesso"
                            for="ilhaDireitoAcesso"
                            placeholder="- Seleciona uma ilha-"
                          >
                            <option :value="null">
                              - selecione uma ilha -
                            </option>
                            <option
                              v-for="option in ilhas"
                              :key="option.value"
                              :value="option.value"
                            >
                              {{ option.label }}
                            </option>
                          </select>
                          </div>
                          <div class="col">  
                           <select
                            class="form-select"
                            v-model="concelhoDirAcess"
                            name="concelhoDireitoAcesso"
                            id="concelhoDireitoAcesso"
                            for="concelhoDireitoAcesso"
                            placeholder="- Seleciona um concelho -"
                          >
                            <option :value="null">
                              - selecione um concelho -
                            </option>
                            <option
                              v-for="option in concelhos[ilhaDirAcess]"
                              :key="option.value"
                              :value="option.value"
                            >
                              {{ option.label }}
                            </option>
                          </select>
                          </div> 
                        </div> 
                      </div> 
                      <div class="col-md-12">  
                      <input type="text" class="form-control" id="nomecomercial" alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida." placeholder=" Nome da pessoa do contato">
                    </div>
                     <div class="col-md-12" id="divloco"> 
                        <div class="row">
                          <div class="col">  
                            <input type="email" class="form-control" id="caixapostal" alt="Caixa Postal" placeholder="Entre o seu email: example@cnpd.cv">
                          </div>
                          <div class="col">  
                            <input type="number" class="form-control" id="telefone" alt="Telefone/Telemovel" placeholder="Contato: Telefone/Telemovel">
                          </div> 
                        </div> 
                      </div>
              </div>
             
              <div class="col" id="divg">
                <div class="container">
                  <div class="row">
                     <div class="col-md-12" id="separacao">Processamento da informação</div>
              <div class="col-md-12"><br /></div>
                    <div class="col"> 
                      <label class="form-check-label" >
                        Existe um Serviço Externo encarregado do processamento ?
                      </label>
                      <buttom @click="changeServico" type="button" class="btn btn-outline-primary" name="morada" id="moradasimbotton">
                      {{checkServico? 'Não': 'Sim' }} </buttom>
                    </div> 
                  </div>
                </div>
              </div>
                <div class="col-md-12" id="divg2" v-if="checkServico">
                <div class="container">
                  <div class="row"> 
                    
                    <div class="col-md-12"> 
                      <input type="text" class="form-control" name="entidadeProcessInfo" id="entidadeProcessInfo" placeholder=" Qual a Entidade Encarregue pelo proccessamento das imagens">
                    </div>
                    <div class="col-md-12">  
                      <input type="text" class="form-control" name="ruaProcessInfo" id="ruaProcessInfo" placeholder=" Rua">
                    </div>
                    <div class="col-md-12"> 
                      <input type="text" class="form-control" name="caixaPostalProcessInfo" id="caixaPostalProcessInfo" placeholder=" Caixa Postal">
                    </div>
                    <div class="col-md-12">  
                      <input type="text" class="form-control" name="lugarProcessInfo" id="lugarProcessInfo" placeholder="Cidade/Vila/Lugar/Zona da Entidade">
                    </div>
                      
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col">  
                            <select class="form-select" name="ilhaProcessInfo" id="ilhaProcessInfo" aria-label="Default select example">
                              <option value="">- Qual a sua ilha -</option>
                                <option v-for="ilha in ilhas" :key="ilha" value="1">{{ilha}}</option>
                               
                            </select>
                          </div>
                          <div class="col">  
                            <select class="form-select" name="concelhoProcessInfo" id="concelhoProcessInfo" aria-label="Default select example">
                              <option value="">- Qual o concelho -</option> 
                                <option  v-for="concelho in concelhos" :key="concelho" value="1">{{concelho}}</option>
                                
                             </select>
                          </div> 
                        </div> 
                      </div>   
                      
                  </div>
                </div>
              </div>
              
           <!--------------------------------------FINALIDADE DO TRATAMENTO----------------------------------------------------->
           
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
               <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                2. Finalidade do tratamento
                </div>
              </div>
             <div class="col-md-12"> <br> </div>
             <div class="col-md-8">
             <label class="form-check-label" >
                       (caso seja tratamento de assiduidade e controlo de acesso, deverá selecionar as duas opções)
                      </label>
              
                        
                        <Multiselect
                        v-model="value"
                        name="finalidadetra" 
                        id="finalidadetra"
                        placeholder="-Indique a(s) finalidade(s) do tratamento-"
                        mode="tags"
                        :close-on-select="false"
                        :searchable="true"
                        :create-option="true"
                        :options="finalidadeTratamento"
                      />
                          
                      </div> 
                     
                      
                     
                    
                    
                      
                      <div class="col-md-4">  
                        <label class="form-check-label" >
                       Número de funcionarios
                      </label>
                       <input type="number" class="form-control" id="numfunc" alt="numero de funcionario" placeholder="indique número de funcionário">
                          
                      </div> 
                      
                            
                         
                      <div class="col-md-12"><br></div>
                
                    
                       
            </div>
          </div>
        </div>
                  
                    <div class="col-md-12" id="divg">
                     <div class="row">  
                        <div class="col-md-12" id="separacao">
                3. Dados pessoais contidos em cada registo      
              </div>
               <div class="col-md-12"> <br> </div>
                      <label class="form-check-label" >
                      Dados registrados
                      </label>
                      <div class="col">  
                        
                        <Multiselect
                        v-model="value"
                        name="dadoscontidos" 
                        id="dadoscontidos"
                        placeholder="-dados pessoais contidos em cada registro -"
                        mode="tags"
                        :close-on-select="false"
                        :searchable="true"
                        :create-option="true"
                        :options="dadosRegistrado"
                      />
                          
                      </div> 
                      <div class="col-md-12"><br></div>
                </div>
                    </div>
                    
              <div class="col-md-12" id="divg">
                     <div class="row">  
                      <label class="form-check-label" >
                     Outros dados
                      </label>
                      <div class="col">  
                        
                        <Multiselect
                        v-model="value"
                        name="outrosDados" 
                        id="outrosDados"
                        placeholder="-outros dados -"
                        mode="tags"
                        :close-on-select="false"
                        :searchable="true"
                        :create-option="true"
                        :options="outrosDados"
                      />
                          
                      </div> 
                      <div class="col-md-12"><br></div>
                </div>
                    </div>
                  
              <div class="col-md-12" id="divg">
                     <div class="row">  
                        <div class="col-md-12" id="separacao">
                4. Forma de armazenamento do dado biométrico   
              </div>
              <div class="col-md-12"> <br> </div>
                      <label class="form-check-label" >
                     Forma de registro
                      </label>
                      <div class="col">  
                        
                        <Multiselect
                        v-model="value"
                        name="formasRegistro" 
                        id="formasRegistros"
                        placeholder="-indique forma de registro -"
                        mode="tags"
                        :close-on-select="false"
                        :searchable="true"
                        :create-option="true"
                        :options="formasRegistro"
                      />
                          
                      </div> 
                      <div class="col-md-12"><br></div>
                </div>
                    </div>
                  
              <div class="col-md-12" id="divg">
                     <div class="row"> 
                         <div class="col-md-12" id="separacao">
               5. Tratamento da informação  
              </div> 
              <div class="col-md-12"><br></div>
                      <label class="form-check-label" >
                     Forma de tratamento da informação
                      </label>
                      <div class="col">  
                        
                        <Multiselect
                        v-model="value"
                        name=" tratamentoInfo" 
                        id=" tratamentoInfo"
                        placeholder="-de que forma a informação é tratada -"
                        mode="tags"
                        :close-on-select="false"
                        :searchable="true"
                        :create-option="true"
                        :options=" tratamentoInfo"
                      />
                          
                      </div> 
                      <div class="col-md-12"><br></div>
                </div>
                    </div>
                  
                 <div class="col" id="divg">
                <div class="container">
                  <div class="row">
                      <div class="col-md-12" id="separacao">
                6.Exercício do direito de Acesso
              </div>
              <div class="col-md-12"><br></div>
                    <div class="col"> 
                      <label class="form-check-label" >
                        Morada do local do exercício do direito de acesso é a mesma indicada em 1 ?
                      </label>
                      <buttom @click="changeDireitoAcesso" type="button" class="btn btn-outline-primary" name="morada" id="moradasimbotton">
                      {{checkDireitoAcesso? 'Sim': 'Não' }} </buttom>
                    </div> 
                  </div>
                </div>
              </div>
               <div class="col-md-12" id="divg2" v-if="checkDireitoAcesso">
                <div class="container">
                  <div class="row"> 
                    
                    <div class="col-md-12"> 
                      <input type="text" class="form-control" name="ruaDireitoAcesso" id="ruaDireitoAcesso" placeholder=" Rua">
                    </div>
                    <div class="col-md-12">  
                      <input type="text" class="form-control" name="caixaPostalDireitoAcesso" id="caixaPostalDireitoAcesso" placeholder=" Caixa Postal">
                    </div> 
                    <div class="col-md-12">  
                      <input type="text" class="form-control" name="localDireitoAcesso" id="localDireitoAcesso" placeholder=" Local - Cidade/Vila/Lugar/Zona">
                    </div>
                      
                      <div class="col-md-12"> 
                        <div class="row">
                          <div class="col">  
                              <select
                      class="form-select"
                      v-model="ilhaResp"
                      name="ilhaResp"
                      id="ilhaResp"
                      for="ilhaResp"
                      placeholder="- Seleciona uma ilha-"
                    >
                      <option :value="null">- selecione uma ilha -</option>
                      <option
                        v-for="option in ilhas"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                          </div>
                          <div class="col">  
                            <select
                      class="form-select"
                      v-model="concelhoResp"
                      name="concelhoResp"
                      id="concelhoResp"
                      for="concelhoResp"
                      placeholder="- Seleciona um concelho -"
                    >
                      <option :value="null">- selecione um concelho -</option>
                      <option
                        v-for="option in concelhos[ilhaResp]"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                          </div> 
                          <div class="col-md-12"><br></div>
                        
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col">
                          <input
                            type="email"
                            class="form-control"
                            name="emailDireitoAcesso"
                            id="emailDireitoAcesso"
                            placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                          />
                        </div>
                        <div class="col">
                          <input
                            type="number"
                            class="form-control"
                            name="telefoneDireitoAcesso"
                            id="telefoneDireitoAcesso"
                            placeholder="Contato: Telefone/Telemovel"
                          />
                        </div>
                      </div>
                    </div>
                          
                        </div> 
                      </div> 
                  </div> 
                </div>  
              </div> 
               

              <div class="col-md-12" id="divg2">
                <div class="container">
                  <div class="row"> 
                    <div class="col-md-12" id="separacao">
                De que forma é exercido o direito de acesso?
              </div> 
              <div class="col-md-12"><br></div>
                      <div class="col"> 
                      <input class="form-check-input" value=" Pessoa Singular" type="radio" name="formaDireitoAcesso" id="formaDireitoAcesso">
                        <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                         Presencial
                        </label>
                    </div>
                    <div class="col"> 
                      <input class="form-check-input" value=" Pessoa Colectiva" type="radio" name="formaDireitoAcesso" id="formaDireitoAcesso">
                        <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                           Escrita
                        </label>
                    </div> 
                    
                    <div class="col-md-12"> 
                      <textarea  class="form-control" name="outraFormaDireitoAcesso" id="outraFormaDireitoAcesso" placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"></textarea>
                    </div> 
                  </div>
              </div>
             </div>
             
              <div class="col-md-12" id="divg">
                <div class="row">  
                  <div class="col-md-12" id="separacao">
             7. Medidas de segurança a implementar
              </div> 
               <div class="col-md-12"><br></div>
                    <div class="col-md-12"> 
                      <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                        Especifique as medidas físicas de segurança do sistema:
                        </label>
                      <textarea  class="form-control" name="outraFormaDireitoAcesso" id="outraFormaDireitoAcesso" placeholder=" segurança física"></textarea>
                    </div>
                    <div class="col-md-12"><br></div>
                    <div class="col-md-12"> 
                      <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                        Especifique as medidas lógica de segurança do sistema:
                        </label>
                      <textarea  class="form-control" name="outraFormaDireitoAcesso" id="outraFormaDireitoAcesso" placeholder=" segurança lógica"></textarea>
                    </div>  
                </div>
            </div>
            
              <div class="col-md-12" id="divg">
                <div class="row">  
                  <div class="col-md-12" id="separacao">
              8. Representante dos trabalhadores
              </div>
              <div class="col-md-12"><br></div>
                  <div class="row">  
                      <div class="col"> 
                        <div class="col"> 
                          <label class="form-check-label" >
                            Existe representante dos trabalhadores? 
                          </label>
                          <buttom @click="changeRepTrab" type="button" class="btn btn-outline-primary" name="morada" id="moradasimbotton">
                          {{checkRepTrab? 'Não': 'Sim' }} </buttom>
                        </div> 
                        <div class="col-md-12"><br></div>
                        <div class="col-md-12" v-if="checkRepTrab"> 
                          <label for="formFile" class="form-label">Se sim, juntar a cópia do parecer ou comprovativo do pedido.</label>
                          <input class="form-control" type="file" id="formFile">
                        </div> 
                       </div> 
                </div>  
                </div>
            </div>
               
          <!-- FIM DE FORMS--> 
        <div class="col-12" id="divsave">
          <button @click="submitForm" id="buttonsave" class="btn btn-primary" type="submit">
            Submeter Dados
          </button>
        </div>
    </div>
  </section>
</template>

<script>   
import Multiselect from '@vueform/multiselect' 
export default { 
  components: {
      Multiselect
      
    },
    name:"BiometriaForms",
   
  data() {
    return{
      checkMorada:false,
      checkServico:false,
      checkDireitoAcesso:false, 
       checkRepTrab:false,
       /** *********************Finalidade de tratamento ************************************** */
       finalidadeTratamento: [ 
        { value: 'Controlo de assiduidade', label: 'Controlo de assiduidade' },
        { value: 'Controlo de acesso às instalações', label: 'Controlo de acesso às instalações' }
       
       
      ],
       /** *********************ILHAS E CONCELHOS ************************************** */
      ilhaResp: null,
      ilhaMorInst: null,
      ilhaServExt: null,
      ilhaDirAcess: null,
      ilhas: [
        { value: "Santo Antão", label: "Santo Antão" },
        { value: "São Vicente", label: "São Vicente" },
        { value: "São Nicolau", label: "São Nicolau" },
        { value: "Sal", label: "Sal" },
        { value: "Boa Vista", label: "Boa Vista" },
        { value: "Maio", label: "Maio" },
        { value: "Santiago", label: "Santiago" },
        { value: "Fogo", label: "Fogo" },
        { value: "Brava", label: "Brava" },
      ],
      concelho: null,
      concelhoMorInst: null,
      concelhoServExt: null,
      concelhoDirAcess: null,
      ilhaMorRep: null,
      concelhoMorRep: null,
      concelhoResp: null,

      concelhoServExtSR: null,
      ilhaServExtSR: null,
      ilhaRespSR: null,
      concelhoRespSR: null,
      ilhaMorRepSR: null,
      concelhoMorRepSR: null,

      concelhos: {
        "Santo Antão": [
          { value: "Ribeira Grande", label: "Ribeira Grande" },
          { value: "Paul", label: "Paul" },
          { value: "Porto novo", label: "Porto novo" },
        ],
        "São Vicente": [{ value: "São Vicente", label: "São Vicente" }],
        "São Nicolau": [
          { value: "Ribeira Brava", label: "Ribeira Brava" },
          {
            value: "Tarrafal de São Nicolau",
            label: "Tarrafal de São Nicolau",
          },
        ],
        Sal: [{ value: "Sal", label: "Sal" }],
        "Boa Vista": [{ value: "Boa Vista", label: "Boa Vista" }],
        Maio: [{ value: "Maio", label: "Maio" }],
        Santiago: [
          { value: "Praia", label: "Praia" },
          { value: "São Domingos", label: "São Domingos" },
          { value: "Santa Catarina", label: "Santa Catarina" },
          { value: "São Salvador do Mundo", label: "São Salvador do Mundo" },
          { value: "Santa Cruz", label: "Santa Cruz" },
          {
            value: "São Lourenço dos Órgãos",
            label: "São Lourenço dos Órgãos",
          },
          {
            value: "Ribeira Grande de Santiago",
            label: "Ribeira Grande de Santiago",
          },
          { value: "São Miguel", label: "São Miguel" },
          { value: "Tarrafal", label: "Tarrafal" },
        ],
        Fogo: [
          { value: "São Filipe", label: "São Filipe" },
          { value: "Santa Catarina do Fogo", label: "Santa Catarina do Fogo" },
          { value: "Mosteiros", label: "Mosteiros" },
        ],
        Brava: [{ value: "Brava", label: "Brava" }],
      },
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

       ],
         dadosRegistrado: [ 
        { value: 'Impressão digital', label: 'Impressão digital' },
        { value: 'Contorno da mão', label: 'Contorno da mão' },
        { value: 'Reconhecimento', label: 'Reconhecimento' },
        { value: 'Íris', label: 'Íris' },
        { value: 'Geometria das veias', label: 'Geometria das veias' },
        { value: 'Assinatura', label: 'Assinatura' },
        { value: 'Voz', label: 'Voz' },
       
      ],
       outrosDados: [ 
        { value: 'No do empregado', label: 'No do empregado' },
        { value: 'Nome', label: 'Nome' },
        { value: 'Telefone', label: 'Telefone' },
        { value: 'Horário', label: 'Horário' },
        { value: 'Escalas de serviço', label: 'Cargo/categoria/função desempenhada' },
        { value: 'Departamento/secção', label: 'Departamento/secção' },
        { value: 'Data e hora de entrada e saida', label: 'Data e hora de entrada e saida' },
        
       
      ],
       formasRegistro: [ 
        { value: 'Templete', label: 'Templete' },
        { value: 'Imagem', label: 'Imagem' },
        { value: 'Base de dados central', label: 'Base de dados central' },
        { value: 'Terminal local', label: 'Terminal local' },
        { value: 'Cartão', label: 'Cartão' }
       
         ],
       tratamentoInfo: [ 
        { value: 'Central num estabelecimento único', label: 'Central num estabelecimento único' },
        { value: 'Central com vários estabelecimentos', label: 'Central com vários estabelecimentos' },
        { value: 'Em cada estabelecimento', label: 'Em cada estabelecimento' },
       
       
        
       
      ],
     /*******************************************TIPO DE NOTIFICAÇÃO ******************************************/
      tipoNot: null,
      TipoNotf: [
        { value: "1ª Notificação", label: "1ª Notificação" },
        { value: "Alteração", label: "Alteração" },
        {
          value: "Substituição da Notificação não autorizada",
          label: "Substituição da Notificação não autorizada",
        },
      ],

    }
   
  }, 
  methods:{
			 changeMorada(){
        this.checkMorada = !this.checkMorada;
       },
        changeServico(){
        this.checkServico = !this.checkServico; 

       },
       changeDireitoAcesso(){
        this.checkDireitoAcesso = !this.checkDireitoAcesso; 

       },
        changeRepTrab(){
        this.checkRepTrab = !this.checkRepTrab; 

	  	},
		}
  }

</script>

<style>

#numfunc{
  width: 300px;
 margin-left: 30px;
}
#fin{
  display: flex;
  justify-content: space-around;
  
}


#divg{ 
  font-family:"Times New Roman", Times, serif;
  border: 1px solid #061536;
  padding: 10px;
  border-radius: 10px;
  
}
.col{ 
  font-family:"Times New Roman", Times, serif;
}
#divg2{
  font-family:"Times New Roman", Times, serif;
  border: 1px solid #061536;
  padding: 10px;
  margin-top: 10px;
  padding-top: 20px;
  border-radius: 10px;
}
.col{

  font-family:"Times New Roman", Times, serif;
}
input, label{
  font-family:"Times New Roman", Times, serif;
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
  font-family: "Times New Roman", Times, serif;
  padding-left: 10px;
  text-align: center;
  color: #ffffff;
  border-style: ridge;
  border-radius: 10px;
  background: #061536;
}
#buttonsave {
  background-color: #061536;
}
#divsave {
  text-align: center;
}
button#buttonsave:hover,
button#buttonsave:focus {
  background-color: #061536;
  outline: none !important;
  border-color: #061536;
  color: #bd9a13;
  box-shadow: 0 0 10px #061536;
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
.multiselect{
  font-family:"Times New Roman", Times, serif;
  width: 300;
 }
.multiselect:focus, .multiselect:hover{
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
}
.multiselect{align-items:center;
background:var(--ms-bg,#fff);
border:var(--ms-border-width,1px) solid var(--ms-border-color,#061536);
border-radius:var(--ms-radius,4px);
box-sizing:border-box;cursor:pointer;
display:flex;
font-size:var(--ms-font-size,1rem);
justify-content:flex-end;
margin:0 auto;
min-height:calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);outline:none;position:relative;width:100%}.multiselect.is-open{border-radius:var(--ms-radius,4px) var(--ms-radius,4px) 0 0}.multiselect.is-open-top{border-radius:0 0 var(--ms-radius,4px) var(--ms-radius,4px)}.multiselect.is-disabled{background:var(--ms-bg-disabled,#f3f4f6);cursor:default}.multiselect.is-active{box-shadow:0 0 0 var(--ms-ring-width,1px) var(--ms-ring-color,#061536)}.multiselect-multiple-label,.multiselect-placeholder,.multiselect-single-label{align-items:center;background:transparent;box-sizing:border-box;display:flex;height:100%;left:0;line-height:var(--ms-line-height,1.375);max-width:100%;padding-left:var(--ms-px,.875rem);padding-right:calc(1.25rem + var(--ms-px, .875rem)*3);pointer-events:none;position:absolute;top:0}.multiselect-placeholder{color:var(--ms-placeholder-color,#9ca3af)}.multiselect-single-label-text{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiselect-search{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--ms-bg,#fff);border:0;border-radius:var(--ms-radius,4px);bottom:0;box-sizing:border-box;font-family:inherit;font-size:inherit;height:100%;left:0;outline:none;padding-left:var(--ms-px,.875rem);position:absolute;right:0;top:0;width:100%}.multiselect-search::-webkit-search-cancel-button,.multiselect-search::-webkit-search-decoration,.multiselect-search::-webkit-search-results-button,.multiselect-search::-webkit-search-results-decoration{-webkit-appearance:none}.multiselect-tags{align-items:center;display:flex;flex-grow:1;flex-shrink:1;flex-wrap:wrap;margin:var(--ms-tag-my,.25rem) 0 0;padding-left:var(--ms-py,.5rem)}.multiselect-tag{align-items:center;background:var(--ms-tag-bg,#061536);border-radius:var(--ms-tag-radius,4px);color:var(--ms-tag-color,#fff);display:flex;font-size:var(--ms-tag-font-size,.875rem);font-weight:var(--ms-tag-font-weight,600);line-height:var(--ms-tag-line-height,1.25rem);margin-bottom:var(--ms-tag-my,.25rem);margin-right:var(--ms-tag-mx,.25rem);padding:var(--ms-tag-py,.125rem) 0 var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem);white-space:nowrap}.multiselect-tag.is-disabled{background:var(--ms-tag-bg-disabled,#9ca3af);color:var(--ms-tag-color-disabled,#fff);padding-right:var(--ms-tag-px,.5rem)}.multiselect-tag-remove{align-items:center;border-radius:var(--ms-tag-remove-radius,4px);display:flex;justify-content:center;margin:var(--ms-tag-remove-my,0) var(--ms-tag-remove-mx,.125rem);padding:var(--ms-tag-remove-py,.25rem) var(--ms-tag-remove-px,.25rem)}.multiselect-tag-remove:hover{background:rgba(0,0,0,.063)}.multiselect-tag-remove-icon{background-color:currentColor;display:inline-block;height:.75rem;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;opacity:.8;width:.75rem}.multiselect-tags-search-wrapper{display:inline-block;flex-grow:1;flex-shrink:1;height:100%;margin:0 var(--ms-tag-mx,4px) var(--ms-tag-my,4px);position:relative}.multiselect-tags-search-copy{display:inline-block;height:1px;visibility:hidden;white-space:pre-wrap;width:100%}.multiselect-tags-search{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;bottom:0;box-sizing:border-box;font-family:inherit;font-size:inherit;left:0;outline:none;padding:0;position:absolute;right:0;top:0;width:100%}.multiselect-tags-search::-webkit-search-cancel-button,.multiselect-tags-search::-webkit-search-decoration,.multiselect-tags-search::-webkit-search-results-button,.multiselect-tags-search::-webkit-search-results-decoration{-webkit-appearance:none}.multiselect-inifite{align-items:center;display:flex;justify-content:center;min-height:calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);width:100%}.multiselect-inifite-spinner,.multiselect-spinner{-webkit-animation:multiselect-spin 1s linear infinite;animation:multiselect-spin 1s linear infinite;background-color:var(--ms-spinner-color,#061536);flex-grow:0;flex-shrink:0;height:1rem;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:1rem;z-index:10}.multiselect-spinner{margin:0 var(--ms-px,.875rem) 0 0}.multiselect-clear{display:flex;flex-grow:0;flex-shrink:0;opacity:1;padding:0 var(--ms-px,.875rem) 0 0;position:relative;transition:.3s;z-index:10}.multiselect-clear:hover .multiselect-clear-icon{background-color:red,var(--ms-clear-color-hover,#000)}.multiselect-clear-icon{background-color:var(--ms-clear-color,#999);display:inline-block;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");transition:.3s}.multiselect-caret,.multiselect-clear-icon{height:1.125rem;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:.625rem}.multiselect-caret{background-color:var(--ms-caret-color,#999);flex-grow:0;flex-shrink:0;margin:0 var(--ms-px,.875rem) 0 0;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");pointer-events:none;position:relative;transform:rotate(0deg);transition:transform .3s;z-index:10}.multiselect-caret.is-open{pointer-events:auto;transform:rotate(180deg)}.multiselect-dropdown{-webkit-overflow-scrolling:touch;background:var(--ms-dropdown-bg,#fff);border:var(--ms-dropdown-border-width,1px) solid var(--ms-dropdown-border-color,#061536);border-radius:0 0 var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px);bottom:0;display:flex;flex-direction:column;left:calc(var(--ms-border-width, 1px)*-1);margin-top:calc(var(--ms-border-width, 1px)*-1);max-height:15rem;max-height:var(--ms-max-height,10rem);outline:none;overflow-y:scroll;position:absolute;right:calc(var(--ms-border-width, 1px)*-1);transform:translateY(100%);z-index:100}.multiselect-dropdown.is-top{border-radius:var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px) 0 0;bottom:auto;top:var(--ms-border-width,1px);
transform:translateY(-100%)}.multiselect-dropdown.is-hidden{display:none}.multiselect-options{display:flex;
 flex-direction:column;list-style:none;margin:0;padding:0}.multiselect-group{margin:0;padding:0}.multiselect-group-label{align-items:center;background:var(--ms-group-label-bg,#e5e7eb);box-sizing:border-box;color:var(--ms-group-label-color,#374151);cursor:default;display:flex;font-size:.875rem;font-weight:600;justify-content:flex-start;line-height:var(--ms-group-label-line-height,1.375);padding:var(--ms-group-label-py,.3rem) var(--ms-group-label-px,.75rem);text-align:left;text-decoration:none}.multiselect-group-label.is-pointable{cursor:pointer}.multiselect-group-label.is-pointed{background:var(--ms-group-label-bg-pointed,#061536);color:var(--ms-group-label-color-pointed,#374151)}.multiselect-group-label.is-selected{background:var(--ms-group-label-bg-selected,#061536);color:var(--ms-group-label-color-selected,#fff)}.multiselect-group-label.is-disabled{background:var(--ms-group-label-bg-disabled,#f3f4f6);color:var(--ms-group-label-color-disabled,#061536);cursor:not-allowed}.multiselect-group-label.is-selected.is-pointed{background:var(--ms-group-label-bg-selected-pointed,#061536);color:var(--ms-group-label-color-selected-pointed,#fff)}.multiselect-group-label.is-selected.is-disabled{background:var(--ms-group-label-bg-selected-disabled,#061536);color:var(--ms-group-label-color-selected-disabled,#061536)}.multiselect-group-options{margin:0;padding:0}.multiselect-option{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--ms-option-font-size,1rem);justify-content:flex-start;line-height:var(--ms-option-line-height,1.375);padding:var(--ms-option-py,.5rem) var(--ms-option-px,.75rem);text-align:left;text-decoration:none}.multiselect-option.is-pointed{background:var(--ms-option-bg-pointed,#f3f4f6);color:var(--ms-option-color-pointed,#1f2937)}.multiselect-option.is-selected{background:var(--ms-option-bg-selected,#061536);color:var(--ms-option-color-selected,#fff)}.multiselect-option.is-disabled{background:var(--ms-option-bg-disabled,#fff);color:var(--ms-option-color-disabled,#061536);cursor:not-allowed}.multiselect-option.is-selected.is-pointed{background:var(--ms-option-bg-selected-pointed,#061536);color:var(--ms-option-color-selected-pointed,#fff)}.multiselect-option.is-selected.is-disabled{background:var(--ms-option-bg-selected-disabled,#87dcc0);color:var(--ms-option-color-selected-disabled,#d1fae5)}.multiselect-no-options,.multiselect-no-results{color:var(--ms-empty-color,#4b5563);padding:var(--ms-option-py,.5rem) var(--ms-option-px,.75rem)}.multiselect-fake-input{background:transparent;border:0;bottom:-1px;font-size:0;height:1px;left:0;outline:none;padding:0;position:absolute;right:0;width:100%}.multiselect-fake-input:active,.multiselect-fake-input:focus{outline:none}.multiselect-spacer{display:none}[dir=rtl] .multiselect-multiple-label,[dir=rtl] .multiselect-placeholder,[dir=rtl] .multiselect-single-label{left:auto;padding-left:calc(1.25rem + var(--ms-px, .875rem)*3);padding-right:var(--ms-px,.875rem);right:0}[dir=rtl] .multiselect-search{padding-left:0;padding-right:var(--ms-px,.875rem)}[dir=rtl] .multiselect-tags{padding-left:0;padding-right:var(--ms-py,.5rem)}[dir=rtl] .multiselect-tag{margin-left:var(--ms-tag-mx,.25rem);margin-right:0;padding:var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem) var(--ms-tag-py,.125rem) 0}[dir=rtl] .multiselect-tag.is-disabled{padding-left:var(--ms-tag-px,.5rem)}[dir=rtl] .multiselect-caret,[dir=rtl] .multiselect-spinner{margin:0 0 0 var(--ms-px,.875rem)}[dir=rtl] .multiselect-clear{padding:0 0 0 var(--ms-px,.875rem)}@-webkit-keyframes multiselect-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes multiselect-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}

</style>
