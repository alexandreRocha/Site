<template>
  <section id="cctv" class="cctv">
    <div class="container">
      <form id="submit-form">
        <!-- FORMS CCTV-->
        <div class="section-title">
          <h2>NOTIFICAÇÃO DE VIDEOVIGILÂNCIA</h2>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col">
                <label id="labelleft" for="finalidade" class="form-label"
                  >Finalidade</label
                >
                <input
                  class="form-control"
                  type="text"
                  placeholder="Proteção de Pessoas e Bens"
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
              <div class="col">
                <label id="labelleft" for="TipoNot" class="form-label"
                  >Tipo Notificação</label> 
                      <Multiselect
                  v-model="TipoNot"
                  name="TipoNot"
                  id="TipoNot"
                  placeholder="- selecione o tipo de Notificação -"
                  :options="TipoNotf"
                />
              </div>
              <div class="col">
                <label id="labelleft" for="tipoVideovigilancia" class="form-label"
                  >Tipo Videovigilância</label
                >
                <select 
                v-model.trim="tipoVideo"
                v-model="tipoVideo"
                        class="form-select" 
                        name="tipoVideovigilancia"
                        id="tipoVideovigilancia"
                        for="tipoVideovigilancia"
                        placeholder="- Tipo Videovigilância -"
                      >
                        <option :value="null">- Tipo Videovigilância-</option>
                        <option
                          v-for="tipo in tipoCctv"
                          :key="tipo.value"
                          :value="tipo.value"
                        >
                          {{ tipo.value }}
                        </option>
                      </select>  

                <!--  <pre
                  class="language-json"
                ><code>Id pra mandar pra BD:{{ tipoVideo  }}</code></pre>-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12"></div> 
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">1. Responsável pelo Tratamento</div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <input
                  class="form-check-input"
                  value=" Pessoa Singular"
                  type="radio"
                  name="tipoPessoa"
                  id="tipoPessoa"
                />
                <label id="labelleft" class="form-check-label" for="tipoPessoa">
                  Pessoa Singular
                </label>
              </div>
              <div class="col">
                <input
                  class="form-check-input"
                  value=" Pessoa Colectiva"
                  type="radio"
                  name="tipoPessoa"
                  id="tipoPessoa"
                />
                <label id="labelleft" class="form-check-label" for="tipoPessoa">
                  Pessoa Colectiva
                </label>
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="nomeDenominacao"
                  id="nomeDenominacao"
                  alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada"
                  placeholder=" Nome/Denominação"
                />
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="nomeComercial"
                  id="nomeComercial"
                  alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida."
                  placeholder=" Nome/Comercial"
                />
              </div>
              <div class="col">
                <Multiselect
                  v-model="atividadeDes"
                  name="atividadeDesenvolvida"
                  id="atividadeDesenvolvida"
                  placeholder="- selecione a atividade desenvolvida -"
                  :options="atividadeDesenvolvida"
                />
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  name="nifResp"
                  id="nifResp"
                  alt="NIF"
                  placeholder="Número de NIF"
                />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      name="ruaResp"
                      id="ruaResp"
                      alt="RUA"
                      placeholder="Entre o nome da Rua"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      name="localResp"
                      id="localResp"
                      alt="Local"
                      placeholder="Cidade/Vila/Lugar/Zona"
                    />
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
                    <input
                      type="text"
                      class="form-control"
                      name="caixaPostalResp"
                      id="caixaPostalResp"
                      alt="Caixa Postal"
                      placeholder="Entre o número da Caixa Postal"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="number"
                      class="form-control"
                      name="telefoneResp"
                      id="telefoneResp"
                      alt="Telefone/Telemovel"
                      placeholder="Contato: Telefone/Telemovel"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <input
                      type="email"
                      class="form-control"
                      name="emailResp"
                      id="emailResp"
                      placeholder="Entre o seu email: example@cnpd.cv"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="paisResp"
                      id="paisResp"
                    />
                    <label id="labelleft" class="form-check-label" for="pais">
                      Cabo Verde
                    </label>
                    <div class="col-md-12"></div>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="paisResp"
                      id="paisResp"
                    />
                    <label id="labelleft" class="form-check-label" for="pais">
                      Fora do Território Nacional
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ------------------------------------ Morada Local de Instalação   ---------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">Morada Local de Instalação</div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Morada do local da instalação é a mesma indicada no ponto 1?
                </label>
                <buttom
                  @click="changeMorada"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkMorada ? "Sim" : "Não" }}
                </buttom>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-12" v-if="checkMorada1">
                    <div class="row">
                      <div class="col-md-12" id="divloco">
                        <input
                          type="text"
                          class="form-control"
                          name="nomePessoaContato"
                          id="nomePessoaContato"
                          alt="Caixa Postal"
                          placeholder="Nome da pessoa de contato"
                        />
                      </div>

                      <div class="col-md-12">
                        <div class="row">
                          <div class="col">
                            <input
                              type="email"
                              class="form-control"
                              name="emailMoradaInstalacao"
                              id="emailMoradaInstalacao"
                              placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                            />
                          </div>
                          <div class="col">
                            <input
                              type="number"
                              class="form-control"
                              name="telefoneMoradaInstalacao"
                              id="telefoneMoradaInstalacao"
                              placeholder="Contato: Telefone/Telemovel"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divg2" v-if="checkMorada">
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="moradaLocalInstalacao"
                    id="moradaLocalInstalacao"
                    placeholder=" Morada Local de instalação"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="ruaMoradaInstalacao"
                    id="ruaMoradaInstalacao"
                    placeholder=" Rua"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="caixaPostalMoradaInstalacao"
                    id="caixaPostalMoradaInstalacao"
                    placeholder=" Caixa Postal"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="localMoradaInstalacao"
                    id="localMoradaInstalacao"
                    placeholder=" Local de instalação - Cidade/Vila/Lugar/Zona"
                  />
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <select
                        class="form-select"
                        v-model="ilhaMorInst"
                        name="ilhaMoradaInstalacao"
                        id="ilhaMoradaInstalacao"
                        for="ilhaMoradaInstalacao"
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
                        v-model="concelhoMorInst"
                        name="concelhoMoradaInstalacao"
                        id="concelhoMoradaInstalacao"
                        for="concelhoMoradaInstalacao"
                        placeholder="- Seleciona um concelho -"
                      >
                        <option :value="null">- selecione um concelho -</option>
                        <option
                          v-for="option in concelhos[ilhaMorInst]"
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
                  <div class="row">
                    <div class="col-md-12" id="divloco">
                      <input
                        type="text"
                        class="form-control"
                        name="nomePessoaContato"
                        id="nomePessoaContato"
                        alt="Caixa Postal"
                        placeholder="Nome da pessoa de contato"
                      />
                    </div>

                    <div class="col-md-12">
                      <div class="row">
                        <div class="col">
                          <input
                            type="email"
                            class="form-control"
                            name="emailMoradaInstalacao"
                            id="emailMoradaInstalacao"
                            placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                          />
                        </div>
                        <div class="col">
                          <input
                            type="number"
                            class="form-control"
                            name="telefoneMoradaInstalacao"
                            id="telefoneMoradaInstalacao"
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
        </div>

        <!---- ----------------- Processamento da informação--------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">Processamento da informação</div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Existe um Serviço Externo encarregado do processamento ?
                </label>
                <buttom
                  @click="changeServico"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkServico ? "Não" : "Sim" }}
                </buttom>
              </div>

              <div class="col-md-12" id="divg2" v-if="checkServico">
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="entidadeProcessInfo"
                    id="entidadeProcessInfo"
                    placeholder=" Qual a Entidade Encarregue pelo proccessamento das imagens"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="ruaProcessInfo"
                    id="ruaProcessInfo"
                    placeholder=" Rua"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="caixaPostalProcessInfo"
                    id="caixaPostalProcessInfo"
                    placeholder=" Caixa Postal"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="lugarProcessInfo"
                    id="lugarProcessInfo"
                    placeholder="Cidade/Vila/Lugar/Zona da Entidade"
                  />
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <select
                        class="form-select"
                        v-model="ilhaServExt"
                        name="ilhaProcessInfo"
                        id="ilhaProcessInfo"
                        for="ilhaProcessInfo"
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
                        v-model="concelhoServExt"
                        name="concelhoProcessInfo"
                        id="concelhoProcessInfo"
                        for="concelhoProcessInfo"
                        placeholder="- Seleciona um concelho -"
                      >
                        <option :value="null">- selecione um concelho -</option>
                        <option
                          v-for="option in concelhos[ilhaServExt]"
                          :key="option.value"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">2. Característica do sistema</div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  name="numeroCamaras"
                  id="numeroCamaras"
                  placeholder=" Nº total de câmaras instaladas"
                />
              </div>
              <div class="col">  
                <Multiselect  
                        v-model="zona"
                        :options="zonasAbrangidas[tipoVideo]"
                        mode="tags"
                        placeholder="- selecione as zonas abrangidas -"
                        :close-on-select="true"
                        :searchable="true"
                        :object="true"  
                        :multiple="true" 
                        
                      />
              </div> 
              <div class="col-md-12"><br /></div>

              <div class="col">
                <div class="col">
                  <label class="form-check-label">
                    Existe transmissão das imagems para fora da instalação ?
                  </label>
                  <buttom
                    @click="changeTranssmisao"
                    type="button"
                    class="btn btn-outline-primary"
                    name="morada"
                    id="moradasimbotton"
                  >
                    {{ checkTransmissao ? "Não" : "Sim" }}
                  </buttom>
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12" v-if="checkTransmissao">
                  <textarea
                    class="form-control"
                    name="transmissaoParaFora"
                    id="transmissaoParaFora"
                    placeholder=" Local para onde é realizada a transmissão: Ex: Por telemóvel, etc, ... "
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <div class="col">
                <div class="col">
                  <label class="form-check-label">
                    Existe visualização das imagems em Tempo Real ?
                  </label>
                  <buttom
                    @click="changeTempoReal"
                    type="button"
                    class="btn btn-outline-primary"
                    name="morada"
                    id="moradasimbotton"
                  >
                    {{ checkTempoReal ? "Não" : "Sim" }}
                  </buttom>
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12" v-if="checkTempoReal">
                  <textarea
                    class="form-control"
                    name="visualizacaoTempoReal"
                    id="visualizacaoTempoReal"
                    placeholder=" Quem tem acesso às imagens em tempo real? Indicar todas as pessoas quem têm acesso ás imagens"
                    rows="2"
                  ></textarea>
                </div>    
              </div>
            </div>
          </div>
        </div> 
        
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
          3.Exercício do direito de acesso às imagens gravadas
        </div>
              <div class="col">
                <label class="form-check-label">
                  Morada do local do exercício do direito de acesso é a mesma indicada em
                  1 ?
                </label>
                <buttom
                  @click="changeDireitoAcesso"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkDireitoAcesso ? "Sim" : "Não" }}
                </buttom>
              </div>
              <div class="col-md-12" id="divg2" v-if="checkDireitoAcesso">
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="ruaDireitoAcesso"
                    id="ruaDireitoAcesso"
                    placeholder=" Rua"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="caixaPostalDireitoAcesso"
                    id="caixaPostalDireitoAcesso"
                    placeholder=" Caixa Postal"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="localDireitoAcesso"
                    id="localDireitoAcesso"
                    placeholder=" Local - Cidade/Vila/Lugar/Zona"
                  />
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
                        v-model="concelhoDirAcess"
                        name="concelhoDireitoAcesso"
                        id="concelhoDireitoAcesso"
                        for="concelhoDireitoAcesso"
                        placeholder="- Seleciona um concelho -"
                      >
                        <option :value="null">- selecione um concelho -</option>
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
                <div class="col-md-12"><br /></div>
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
        

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
          De que forma é exercido o direito de acesso?
        </div>
              <div class="col">
                <input
                  class="form-check-input"
                  value=" Pessoa Singular"
                  type="radio"
                  name="formaDireitoAcesso"
                  id="formaDireitoAcesso"
                />
                <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                  Presencial
                </label>
              </div>
              <div class="col">
                <input
                  class="form-check-input"
                  value=" Pessoa Colectiva"
                  type="radio"
                  name="formaDireitoAcesso"
                  id="formaDireitoAcesso"
                />
                <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                  Escrita
                </label>
              </div>

              <div class="col-md-12">
                <textarea
                  class="form-control"
                  name="outraFormaDireitoAcesso"
                  id="outraFormaDireitoAcesso"
                  placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"
                  ></textarea>
              </div>
            </div>
          </div>
        </div>
       <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">4. Medidas de segurança a implementar</div>
        
              <div class="col-md-12">
                <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                  Especifique as medidas físicas de segurança do sistema:
                </label>
                <textarea
                  class="form-control"
                  name="outraFormaDireitoAcesso"
                  id="outraFormaDireitoAcesso"
                  placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"
                ></textarea>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label id="labelleft" class="form-check-label" for="formaDireitoAcesso">
                  Especifique as medidas lógica de segurança do sistema:
                </label>
                <textarea
                  class="form-control"
                  name="outraFormaDireitoAcesso"
                  id="outraFormaDireitoAcesso"
                  placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">5. Representante dos trabalhadores</div>
       
              <div class="col">
                <label class="form-check-label">
                  Existe representante dos trabalhadores?
                </label>
                <buttom
                  @click="changeRepTrab"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkRepTrab ? "Não" : "Sim" }}
                </buttom>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12" v-if="checkRepTrab">
                <label for="formFile" class="form-label"
                  >Se sim, juntar a cópia do parecer ou comprovativo do pedido.</label
                >
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12"><br /></div>
        <!-- FIM DE FORMS-->
        <div class="col-12" id="divsave">
          <button @click="submitForm" id="buttonsave" class="btn btn-primary" type="submit">
            Submeter Dados
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      nomeDenominacao: "",



      checkMorada: false,
      checkMorada1: true,
      checkServico: false,
      checkTempoReal: false,
      checkTransmissao: false,
      checkDireitoAcesso: false,
      checkRepTrab: false,

      /**************************TIPO NOTIFICACAO *********************************** */
      tipoNot:null,
      TipoNotf: [
        { value: "1ª Notificação", label: "1ª Notificação" },
        { value: "Alteração", label: "Alteração" },
        { value: "Substituição da Notificação não autorizada", label: "Substituição da Notificação não autorizada" }, 
      ],

      /**********************************ATIVIDADE DESENVOLVIDA*********************************************** */
      atividadeDesenvolvida: [
        { value: "Actividade de Televisão", label: "Actividade de Televisão" },
        {
          value: "Emprego (Selecção, fornecimento de recursos humanos)",
          label: "Emprego (Selecção, fornecimento de recursos humanos)",
        },
        { value: "Segurança e Ordem pública", label: "Segurança e Ordem pública" },
        { value: "Produção da Água", label: "Produção da Água" },
        { value: "Telecomunicação", label: "Telecomunicação" },
        { value: "Segurança Privada", label: "Segurança Privada" },
        {
          value: "Ensino (Pré-escolar, Básico, Secundário, Superior)",
          label: "Ensino (Pré-escolar, Básico, Secundário, Superior)",
        },
        {
          value: "Estabelecimento comercial de venda a público",
          label: "Estabelecimento comercial de venda a público",
        },
        {
          value:
            "Serviço de Internet (processamento de dados, domiciliação de informação",
          label:
            "Serviço de Internet (processamento de dados, domiciliação de informação",
        },
        {
          value: "Administração Pública (Central, Local)",
          label: "Administração Pública (Central, Local)",
        },
        { value: "Saúde", label: "Saúde" },
        { value: "Centro Comercial", label: "Centro Comercial" },
        {
          value: "Publicidade, Estudos de Mercado, Sondagens de Opinião",
          label: "Publicidade, Estudos de Mercado, Sondagens de Opinião",
        },
        { value: "Negócios Estrangeiros", label: "Negócios Estrangeiros" },
        { value: "Previdência Social", label: "Previdência Social" },
        {
          value: "Alojamento (Hotel, Residencial, Pensão, etc.)",
          label: "Alojamento (Hotel, Residencial, Pensão, etc.)",
        },
        { value: "Defesa", label: "Defesa" },
        { value: "Actividade Financeira", label: "Actividade Financeira" },
        { value: "Comércio Electrónico", label: "Comércio Electrónico" },
        { value: "Informática", label: "Informática" },
        { value: "Justiça", label: "Justiça" },
        { value: "Seguros", label: "Seguros" },
        {
          value: "Transporte (Aéreo, Marítimo, Terrestre)",
          label: "Transporte (Aéreo, Marítimo, Terrestre)",
        },
      ],

      /******************************ZTIPOS DE CCTV*******************************/

      tipoVideovigilancia: null,
      tipoVideo: null,
      tipoCctv: [
        { value: "Centros Comerciais", label: "Centros Comerciais" },
        {
          value: "Edifícios de habitação Condomínios",
          label: "Edifícios de habitação Condomínios",
        },
        {
          value: "Estabelecimentos comerciais de venda ao público",
          label: "Estabelecimentos comerciais de venda ao público",
        },
        {
          value: "Estabelecimentos de Ensino e Similares",
          label: "Estabelecimentos de Ensino e Similares",
        },
        { value: "Estabelecimentos de Saude", label: "Estabelecimentos de Saude" },
        {
          value: "Estabelecimentos destinados a dança",
          label: "Estabelecimentos destinados a dança",
        },
        {
          value: "Farmácias, ParaFarmácias e Posto de Venda de Medicamentos e Similares",
          label: "Farmácias, ParaFarmácias e Posto de Venda de Medicamentos e Similares",
        },
        { value: "Gasolineiras", label: "Gasolineiras" },
        { value: "Hotelaria", label: "Hotelaria" },
        {
          value: "Instalações empresariais industriais e de serviços",
          label: "Instalações empresariais industriais e de serviços",
        },
        { value: "Instituiçoes Financeiras", label: "Instituiçoes Financeiras" },
        {
          value: "Lares e outros Estabelecimentos de Apoio Social",
          label: "Lares e outros Estabelecimentos de Apoio Social",
        },
        { value: "Locais de Culto", label: "Locais de Culto" },
        {
          value: "Museus, Bibliotecas e Salas de Espectáculo",
          label: "Museus, Bibliotecas e Salas de Espectáculo",
        },
        {
          value: "Ourivesarias,Joalharias e Relojoarias",
          label: "Ourivesarias,Joalharias e Relojoarias",
        },
        { value: "Parques de Estacionamento", label: "Parques de Estacionamento" },
        {
          value: "Recintos Espectáculos desportivos",
          label: "Recintos Espectáculos desportivos",
        },
        {
          value: "Residências Moradias Unifamiliares",
          label: "Residências Moradias Unifamiliares",
        },
        { value: "Restauração", label: "Restauração" },
        { value: "Sucateiras", label: "Sucateiras" },
        {
          value: "Formulário geral de videovigilância",
          label: "Formulário geral de videovigilância",
        },
      ],
      /******************************ZONAS ABRANGIDAS*******************************/

      zona: null, 
      zonasAbrangidas: {
         
         "Centros Comerciais":[
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Acesso a elevadores",
              label: "Acesso a elevadores",
            },
            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            },
            {
              value: "Zona de ATM's (Caixa vinte e quatro)",
              label: "Zona de ATM's (Caixa vinte e quatro)",
            },
            {
              value: "Zonas internas de circulação",
              label: "Zonas internas de circulação",
            },
            {
              value: "Área de venda",
              label: "Área de venda",
            },
            {
              value: "Armazéns",
              label: "Armazéns",
            },
            {
              value: "Máquinas de Vending",
              label: "Máquinas de Vending",
            },
            {
              value: "Zonas técnicas",
              label: "Zonas técnicas",
            }
          ],
       
         "Edifícios de habitação Condomínios":[
            {
              value: "Áreas comuns ",
              label: "Áreas comuns ",
            },
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            },
            {
              value: "Zonas internas de circulação",
              label: "Zonas internas de circulação",
            },
            {
              value: "Acesso a elevadores",
              label: "Acesso a elevadores",
            },
            {
              value: "Pontos de acesso interiores",
              label: "Pontos de acesso interiores",
            },
            {
              value: "Garagens",
              label: "Garagens",
            },
          ],
          "Estabelecimentos comerciais de venda ao público":[
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Área de venda",
              label: "Área de venda",
            },
            {
              value: "Zonas das caixas registadoras",
              label: "Zonas das caixas registadoras",
            },

            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            }, 
            {
              value: "Sala de contagem de valores",
              label: "Sala de contagem de valores",
            },
            {
              value: "Área de cofre",
              label: "Área de cofre",
            },
            {
              value: "Zonas internas de circulação",
              label: "Zonas internas de circulação",
            }, 
            {
              value: "Armazéns",
              label: "Armazéns",
            },
          ],
          "Estabelecimentos de Ensino e Similares":[
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            },
          ],
          "Estabelecimentos de Saude":[
            {
              value: "Acesso a quartos das especialidades infantis ",
              label: "Acesso a quartos das especialidades infantis ",
            },
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Pontos de acesso a divisões interiores (Enfermarias) ",
              label: "Pontos de acesso a divisões interiores (Enfermarias) ",
            },
            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            },
            {
              value: "Receção",
              label: "Receção",
            },
            {
              value: "Hall e/ou acesso a elevadores ",
              label: "Hall e/ou acesso a elevadores ",
            },
            {
              value: "Farmácias",
              label: "Farmácias",
            },
          ],
          "Estabelecimentos destinados a dança":[ 
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Bengaleiro",
              label: "Bengaleiro",
            },
            {
              value: "Zonas de pagamento ",
              label: "Zonas de pagamento ",
            },
            {
              value: "Balcões de atendimento",
              label: "Balcões de atendimento",
            },
            {
              value: "Zonas internas de circulação",
              label: "Zonas internas de circulação",
            } 
          ],
          "Farmácias, ParaFarmácias e Posto de Venda de Medicamentos e Similares":[ 
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Balcão",
              label: "Balcão",
            },
            {
              value: "Área de venda",
              label: "Área de venda",
            },
            {
              value: "Armazém",
              label: "Armazém",
            },
            {
              value: "Área de Conferência",
              label: "Área de Conferência",
            },
            {
              value: "Área de pagamento ",
              label: "Área de pagamento ",
            },
            {
              value: "Zona de exposição de produtos ",
              label: "Zona de exposição de produtos ",
            },
            {
              value: "Atendimento ao público nocturno ",
              label: "Atendimento ao público nocturno ",
            },
            {
              value: "Laboratório",
              label: "Laboratório",
            } 
          ],
          "Gasolineiras":[ 
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            },
            {
              value: "Locais de pagamento",
              label: "Locais de pagamento",
            },
            {
              value: "Armazéns",
              label: "Armazéns",
            },
            {
              value: "Cofre",
              label: "Cofre",
            },
            {
              value: "Ilhas de abastecimento",
              label: "Ilhas de abastecimento",
            },
            {
              value: "Área comercial da loja",
              label: "Área comercial da loja",
            },
            {
              value: "Parque de estacionamento ",
              label: "Parque de estacionamento ",
            },
            {
              value: "Zonas internas de circulação ",
              label: "Zonas internas de circulação ",
            },
            {
              value: "Área de lavagem de serviço automóvel ",
              label: "Área de lavagem de serviço automóvel ",
            } 
          ],
          "Hotelaria":[ 
            {
              value: "Receção",
              label: "Receção",
            },
            {
              value: "Garagens",
              label: "Garagens",
            },
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            },
            {
              value: "Acesso a elevadores ",
              label: "Acesso a elevadores ",
            },
            {
              value: "Entrada e/ou caixa do bar ",
              label: "Entrada e/ou caixa do bar ",
            },
            {
              value: "Entrada e/ou caixa do restaurante ",
              label: "Entrada e/ou caixa do restaurante ",
            },
            {
              value: "Parque de estacionamento exterior ",
              label: "Parque de estacionamento exterior ",
            },
            {
              value: "Área de cofre",
              label: "Área de cofre",
            },
            {
              value: "Hall de escadas ",
              label: "Hall de escadas ",
            },
            {
              value: "Zonas comerciais ",
              label: " Zonas comerciais ",
            },
            {
              value: "Locais de circulação ",
              label: "Locais de circulação ",
            },
          ],
          "Instalações empresariais industriais e de serviços":[ 
            {
              value: "Receção",
              label: "Receção",
            },
            {
              value: "Zonas internas de circulação ",
              label: "Zonas internas de circulação ",
            },
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            },
            
            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            },
            {
              value: "Zonas e balcões de atendimento ",
              label: "Zonas e balcões de atendimento ",
            },
            {
              value: "Oficinas",
              label: "Oficinas",
            },
            {
              value: "Acesso a elevadores ",
              label: "Acesso a elevadores ",
            },
            {
              value: "Armazém",
              label: "Armazém",
            },
            {
              value: "Máquinas de Vending ",
              label: "Máquinas de Vending ",
            },
            
          ],
          "Instituiçoes Financeiras":[ 
            {
              value: "Zonas internas de circulação ",
              label: "Zonas internas de circulação ",
            },
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            }, 
            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            },
            {
              value: "Área de cofre ",
              label: "Área de cofre ",
            },
            {
              value: "Zonas técnicas ",
              label: "Zonas técnicas ",
            },
            {
              value: "Zona de ATM's (Caixa vinte e quatro) ",
              label: "Zona de ATM's (Caixa vinte e quatro) ",
            },
            {
              value: "Locais de atendimento ao público ",
              label: "Locais de atendimento ao público ",
            }  
          ],
          "Lares e outros Estabelecimentos de Apoio Social":[ 
            {
              value: "Zonas internas de circulação (excepto corredores de acesso aos quartos)  ",
              label: "Zonas internas de circulação (excepto corredores de acesso aos quartos) ",
            },
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            }, 
            {
              value: "Parque de estacionamento",
              label: "Parque de estacionamento",
            },
            {
              value: "Pontos de acesso interiores",
              label: "Pontos de acesso interiores",
            }, 
          ],
          "Locais de Culto":[  
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            }, 
            {
              value: "Pontos de venda de artigos religiosos ",
              label: "Pontos de venda de artigos religiosos ",
            },
            {
              value: "Sala de Cofres",
              label: "Sala de Cofres",
            }, 
          ],
          "Ourivesarias,Joalharias e Relojoarias":[  
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            }, 
            {
              value: "Locais de atendimento ao público ",
              label: "Locais de atendimento ao público ",
            },
            {
              value: "Armazéns",
              label: "Armazéns",
            }, 
            {
              value: "Montras",
              label: "Montras",
            },
            {
              value: "Zonas da caixa ",
              label: "Zonas da caixa ",
            }, 
            {
              value: "Área do Cofre ",
              label: "Área do Cofre ",
            }, 
            {
              value: "Balcão",
              label: "Balcão",
            },
            {
              value: "Zonas de exposição de artigos ",
              label: "Zonas de exposição de artigos ",
            }, 
            {
              value: "Oficinas",
              label: "Oficinas",
            },
          ],
          "Parques de Estacionamento":[  
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            },  
            {
              value: "Zonas internas de circulação ",
              label: "Zonas internas de circulação ",
            }, 
            {
              value: "Zonas da caixa ",
              label: "Zonas da caixa ",
            },
          ],
          "Recintos Espectáculos desportivos":[  
            {
              value: "Pontos de acesso a partir do exterior ",
              label: "Pontos de acesso a partir do exterior ",
            },  
            {
              value: "Zonas internas de circulação ",
              label: "Zonas internas de circulação ",
            }, 
            {
              value: "Área do espectáculo desportivo ",
              label: "Área do espectáculo desportivo ",
            }, 
            {
              value: "Zonas Comerciais",
              label: "Zonas Comerciais",
            }, 
            {
              value: "Anel ou perímetro de segurança",
              label: "Anel ou perímetro de segurança",
            }, 
            {
              value: "Zonas de pagamento",
              label: "Zonas de pagamento",
            }, 
            {
              value: "Locais de atendimento ao público ",
              label: "Locais de atendimento ao público ",
            }, 
            {
              value: "Parque de Estacionamento ",
              label: "Parque de Estacionamento ",
            }, 
          ],
          "Residências Moradias Unifamiliares":[  
            {
              value: "Áreas da via pública",
              label: "Áreas da via pública",
            }, 
            {
              value: "Áreas de propriedades de terceiros",
              label: "Áreas de propriedades de terceiros",
            }, 
            {
              value:  "Áreas de Trabalhadores",
              label: "Áreas de Trabalhadores",
            }, 
          ],
          "Restauração":[  
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            }, 
            {
              value: "Zonas de exposição de produtos ",
              label: "Zonas de exposição de produtos ",
            }, 
            {
              value:  "Zonas da caixa ",
              label: "Zonas da caixa ",
            }, 
            {
              value:  "Zonas técnicas e frigoríficas ",
              label: "Zonas técnicas e frigoríficas ",
            },
            {
              value:  "Zonas de Fornos ",
              label: "Zonas de Fornos ",
            },  
            {
              value:  "Área do Cofre",
              label: "Área do Cofre",
            },  
            {
              value:  "Armazém/Economato ",
              label: "Armazém/Economato ",
            }, 
            {
              value:  "Take-away exterior ",
              label: "Take-away exterior ",
            }, 
            {
              value:  "Parques de estacionamento ",
              label: "Parques de estacionamento ",
            },   
          ],
          "Sucateiras":[ 
            {
              value: "Zonas internas de circulação ",
              label: "Zonas internas de circulação ",
            },  
            {
              value: "Pontos de acesso a partir do exterior",
              label: "Pontos de acesso a partir do exterior",
            }, 
            {
              value:  "Parques de estacionamento ",
              label: "Parques de estacionamento ",
            }, 
            {
              value:  "Armazéns",
              label: "Armazéns",
            }, {
              value:  "Parque de resíduos ",
              label: "Parque de resíduos ",
            }, 
            {
              value:  "Receção",
              label: "Receção",
            },  
            {
              value:  "Zona de Balança/Báscula ",
              label: "Zona de Balança/Báscula ",
            }, 
             
          ],
        },  
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
      concelhos: {
        "Santo Antão": [
          { value: "Ribeira Grande", label: "Ribeira Grande" },
          { value: "Paul", label: "Paul" },
          { value: "Porto novo", label: "Porto novo" },
        ],
        "São Vicente": [{ value: "São Vicente", label: "São Vicente" }],
        "São Nicolau": [
          { value: "Ribeira Brava", label: "Ribeira Brava" },
          { value: "Tarrafal de São Nicolau", label: "Tarrafal de São Nicolau" },
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
          { value: "São Lourenço dos Órgãos", label: "São Lourenço dos Órgãos" },
          { value: "Ribeira Grande de Santiago", label: "Ribeira Grande de Santiago" },
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

      /** *********************************************************** */
       
    };
  },

  methods: { 
    submitForm(){
      
    
    console.log("Clicado");
     
    },

    changeServico() {
      this.checkServico = !this.checkServico;
    },
    changeTempoReal() {
      this.checkTempoReal = !this.checkTempoReal;
    },
    changeTranssmisao() {
      this.checkTransmissao = !this.checkTransmissao;
    },
    changeDireitoAcesso() {
      this.checkDireitoAcesso = !this.checkDireitoAcesso;
    },
    changeMorada() {
      this.checkMorada = !this.checkMorada;
      this.checkMorada1 = !this.checkMorada1;
    },
    changeRepTrab() {
      this.checkRepTrab = !this.checkRepTrab;
    },
  },  
  watch: { 
    categoria() {
      this.finalidd = null
    },
    tipoVideo() {
      this.zona = null
    },
  },
  
};
</script>

<style>
.cctv {
  font-family: "Times New Roman", Times, serif;
  padding-top: 110px;
}
.container {
  font-family: "Times New Roman", Times, serif;
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
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
#divg {
  font-family: "Times New Roman", Times, serif;
  border: 1px solid #061536;
  padding: 10px;
  border-radius: 10px;
}
.col {
  font-family: "Times New Roman", Times, serif;
}
#divg2 {
  font-family: "Times New Roman", Times, serif;
  padding: 10px;
  margin-top: 10px;
  padding-top: 20px;
}
.col,
.row {
  font-family: "Times New Roman", Times, serif;
}
input,
label,
textarea {
  font-family: "Times New Roman", Times, serif;
}
input {
  margin-bottom: 10px;
}
input.form-control:focus,
select.form-select:focus,
textarea.form-control:focus {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
}
option:hover {
  background-color: #061536;
}
.form-check-input:checked {
  background-color: #061536;
}

.form-check-input:checked + label {
  color: #061536;
}

#separacao {
  font-family: "Times New Roman", Times, serif;
  padding-left: 10px;
  text-align: center;
  color: #ffffff;
  border-style: ridge;
  border-radius: 10px;
  background: #061536;
}
#labelleft {
  text-align: left;
}
#divloco {
  margin-top: 10px;
}
#moradasimbotton {
  color: #061536;
  border-color: #061536;
}
#moradasimbotton:hover {
  background-color: #061536;
  color: #fff;
  border: 2px solid #bd9a13;
}

.icon-box {
  background-color: white;
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

.multiselect {
  font-family: "Times New Roman", Times, serif;
}
.multiselect:focus,
.multiselect:hover {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
  font-family: "Times New Roman", Times, serif;
}
.multiselect {
  font-family: "Times New Roman", Times, serif;
  align-items: center;
  background: var(--ms-bg, #fff);
  border: var(--ms-border-width, 1px) solid var(--ms-border-color, #061536);
  border-radius: var(--ms-radius, 4px);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: var(--ms-font-size, 15px);
  justify-content: flex-end;
  margin: 0 auto;
  min-height: calc(
    var(--ms-border-width, 1px) * 2 + var(--ms-font-size, 1rem) *
      var(--ms-line-height, 1.375) + var(--ms-py, 0.5rem) * 2
  );
  outline: none;
  position: relative;
  width: 100%;
}
.multiselect.is-open {
  border-radius: var(--ms-radius, 4px) var(--ms-radius, 4px) 0 0;
}
.multiselect.is-open-top {
  border-radius: 0 0 var(--ms-radius, 4px) var(--ms-radius, 4px);
}
.multiselect.is-disabled {
  background: var(--ms-bg-disabled, #f3f4f6);
  cursor: default;
}
.multiselect.is-active {
  box-shadow: 0 0 0 var(--ms-ring-width, 1px) var(--ms-ring-color, #061536);
}
.multiselect-multiple-label,
.multiselect-placeholder,
.multiselect-single-label {
  align-items: center;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  left: 0;
  line-height: var(--ms-line-height, 1.375);
  max-width: 100%;
  padding-left: var(--ms-px, 0.875rem);
  padding-right: calc(1.25rem + var(--ms-px, 0.875rem) * 3);
  pointer-events: none;
  position: absolute;
  top: 0;
}
.multiselect-placeholder {
  color: var(--ms-placeholder-color, #9ca3af);
}
.multiselect-single-label-text {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.multiselect-search {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: var(--ms-bg, #fff);
  border: 0;
  border-radius: var(--ms-radius, 4px);
  bottom: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
  font-size: "Times New Roman", Times, serif;
  height: 100%;
  left: 0;
  outline: none;
  padding-left: var(--ms-px, 0.875rem);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.multiselect-search::-webkit-search-cancel-button,
.multiselect-search::-webkit-search-decoration,
.multiselect-search::-webkit-search-results-button,
.multiselect-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.multiselect-tags {
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-wrap: wrap;
  margin: var(--ms-tag-my, 0.25rem) 0 0;
  padding-left: var(--ms-py, 0.5rem);
}
.multiselect-tag {
  align-items: center;
  background: var(--ms-tag-bg, #061536);
  border-radius: var(--ms-tag-radius, 4px);
  color: var(--ms-tag-color, #fff);
  display: flex;
  font-size: var(--ms-tag-font-size, 0.875rem);
  font-weight: var(--ms-tag-font-weight, 600);
  line-height: var(--ms-tag-line-height, 1.25rem);
  margin-bottom: var(--ms-tag-my, 0.25rem);
  margin-right: var(--ms-tag-mx, 0.25rem);
  padding: var(--ms-tag-py, 0.125rem) 0 var(--ms-tag-py, 0.125rem)
    var(--ms-tag-px, 0.5rem);
  white-space: nowrap;
}
.multiselect-tag.is-disabled {
  background: var(--ms-tag-bg-disabled, #9ca3af);
  color: var(--ms-tag-color-disabled, #fff);
  padding-right: var(--ms-tag-px, 0.5rem);
}
.multiselect-tag-remove {
  align-items: center;
  border-radius: var(--ms-tag-remove-radius, 4px);
  display: flex;
  justify-content: center;
  margin: var(--ms-tag-remove-my, 0) var(--ms-tag-remove-mx, 0.125rem);
  padding: var(--ms-tag-remove-py, 0.25rem) var(--ms-tag-remove-px, 0.25rem);
}
.multiselect-tag-remove:hover {
  background: rgba(0, 0, 0, 0.063);
}
.multiselect-tag-remove-icon {
  background-color: currentColor;
  display: inline-block;
  height: 0.75rem;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  opacity: 0.8;
  width: 0.75rem;
}
.multiselect-tags-search-wrapper {
  display: inline-block;
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  margin: 0 var(--ms-tag-mx, 4px) var(--ms-tag-my, 4px);
  position: relative;
}
.multiselect-tags-search-copy {
  display: inline-block;
  height: 1px;
  visibility: hidden;
  white-space: pre-wrap;
  width: 100%;
}
.multiselect-tags-search {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  bottom: 0;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;
  font-size: "Times New Roman", Times, serif;
  left: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.multiselect-tags-search::-webkit-search-cancel-button,
.multiselect-tags-search::-webkit-search-decoration,
.multiselect-tags-search::-webkit-search-results-button,
.multiselect-tags-search::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.multiselect-inifite {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(
    var(--ms-border-width, 1px) * 2 + var(--ms-font-size, 1rem) *
      var(--ms-line-height, 1.375) + var(--ms-py, 0.5rem) * 2
  );
  width: 100%;
}
.multiselect-inifite-spinner,
.multiselect-spinner {
  -webkit-animation: multiselect-spin 1s linear infinite;
  animation: multiselect-spin 1s linear infinite;
  background-color: var(--ms-spinner-color, #061536);
  flex-grow: 0;
  flex-shrink: 0;
  height: 1rem;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 1rem;
  z-index: 10;
}
.multiselect-spinner {
  margin: 0 var(--ms-px, 0.875rem) 0 0;
}
.multiselect-clear {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  opacity: 1;
  padding: 0 var(--ms-px, 0.875rem) 0 0;
  position: relative;
  transition: 0.3s;
  z-index: 10;
}
.multiselect-clear:hover .multiselect-clear-icon {
  background-color: red, var(--ms-clear-color-hover, #000);
}
.multiselect-clear-icon {
  background-color: var(--ms-clear-color, #999);
  display: inline-block;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");
  transition: 0.3s;
}
.multiselect-caret,
.multiselect-clear-icon {
  height: 1.125rem;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 0.625rem;
}
.multiselect-caret {
  background-color: var(--ms-caret-color, #999);
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 var(--ms-px, 0.875rem) 0 0;
  -webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");
  pointer-events: none;
  position: relative;
  transform: rotate(0deg);
  transition: transform 0.3s;
  z-index: 10;
}
.multiselect-caret.is-open {
  pointer-events: auto;
  transform: rotate(180deg);
}
.multiselect-dropdown {
  -webkit-overflow-scrolling: touch;
  background: var(--ms-dropdown-bg, #fff);
  border: var(--ms-dropdown-border-width, 1px) solid
    var(--ms-dropdown-border-color, #061536);
  border-radius: 0 0 var(--ms-dropdown-radius, 4px) var(--ms-dropdown-radius, 4px);
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: calc(var(--ms-border-width, 1px) * -1);
  margin-top: calc(var(--ms-border-width, 1px) * -1);
  max-height: 15rem;
  max-height: var(--ms-max-height, 10rem);
  outline: none;
  overflow-y: scroll;
  position: absolute;
  right: calc(var(--ms-border-width, 1px) * -1);
  transform: translateY(100%);
  z-index: 100;
}
.multiselect-dropdown.is-top {
  border-radius: var(--ms-dropdown-radius, 4px) var(--ms-dropdown-radius, 4px) 0 0;
  bottom: auto;
  top: var(--ms-border-width, 1px);
  transform: translateY(-100%);
}
.multiselect-dropdown.is-hidden {
  display: none;
}
.multiselect-options {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}
.multiselect-group {
  margin: 0;
  padding: 0;
}
.multiselect-group-label {
  align-items: center;
  background: var(--ms-group-label-bg, #e5e7eb);
  box-sizing: border-box;
  color: var(--ms-group-label-color, #374151);
  cursor: default;
  display: flex;
  font-size: 0.875rem;
  font-weight: 600;
  justify-content: flex-start;
  line-height: var(--ms-group-label-line-height, 1.375);
  padding: var(--ms-group-label-py, 0.3rem) var(--ms-group-label-px, 0.75rem);
  text-align: left;
  text-decoration: none;
}
.multiselect-group-label.is-pointable {
  cursor: pointer;
}
.multiselect-group-label.is-pointed {
  background: var(--ms-group-label-bg-pointed, #061536);
  color: var(--ms-group-label-color-pointed, #374151);
}
.multiselect-group-label.is-selected {
  background: var(--ms-group-label-bg-selected, #061536);
  color: var(--ms-group-label-color-selected, #fff);
}
.multiselect-group-label.is-disabled {
  background: var(--ms-group-label-bg-disabled, #f3f4f6);
  color: var(--ms-group-label-color-disabled, #061536);
  cursor: not-allowed;
}
.multiselect-group-label.is-selected.is-pointed {
  background: var(--ms-group-label-bg-selected-pointed, #061536);
  color: var(--ms-group-label-color-selected-pointed, #fff);
}
.multiselect-group-label.is-selected.is-disabled {
  background: var(--ms-group-label-bg-selected-disabled, #061536);
  color: var(--ms-group-label-color-selected-disabled, #061536);
}
.multiselect-group-options {
  margin: 0;
  padding: 0;
}
.multiselect-option {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: var(--ms-option-font-size, 15px);
  justify-content: flex-start;
  line-height: var(--ms-option-line-height, 1.375);
  padding: var(--ms-option-py, 0.5rem) var(--ms-option-px, 0.75rem);
  text-align: left;
  text-decoration: none;
}
.multiselect-option.is-pointed {
  background: var(--ms-option-bg-pointed, #f3f4f6);
  color: var(--ms-option-color-pointed, #1f2937);
}
.multiselect-option.is-selected {
  background: var(--ms-option-bg-selected, #061536);
  color: var(--ms-option-color-selected, #fff);
}
.multiselect-option.is-disabled {
  background: var(--ms-option-bg-disabled, #fff);
  color: var(--ms-option-color-disabled, #061536);
  cursor: not-allowed;
}
.multiselect-option.is-selected.is-pointed {
  background: var(--ms-option-bg-selected-pointed, #061536);
  color: var(--ms-option-color-selected-pointed, #fff);
}
.multiselect-option.is-selected.is-disabled {
  background: var(--ms-option-bg-selected-disabled, #87dcc0);
  color: var(--ms-option-color-selected-disabled, #d1fae5);
}
.multiselect-no-options,
.multiselect-no-results {
  color: var(--ms-empty-color, #4b5563);
  padding: var(--ms-option-py, 0.5rem) var(--ms-option-px, 0.75rem);
}
.multiselect-fake-input {
  background: transparent;
  border: 0;
  bottom: -1px;
  font-size: 0;
  height: 1px;
  left: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  width: 100%;
}
.multiselect-fake-input:active,
.multiselect-fake-input:focus {
  outline: none;
}
.multiselect-spacer {
  display: none;
}
[dir="rtl"] .multiselect-multiple-label,
[dir="rtl"] .multiselect-placeholder,
[dir="rtl"] .multiselect-single-label {
  left: auto;
  padding-left: calc(1.25rem + var(--ms-px, 0.875rem) * 3);
  padding-right: var(--ms-px, 0.875rem);
  right: 0;
}
[dir="rtl"] .multiselect-search {
  padding-left: 0;
  padding-right: var(--ms-px, 0.875rem);
}
[dir="rtl"] .multiselect-tags {
  padding-left: 0;
  padding-right: var(--ms-py, 0.5rem);
}
[dir="rtl"] .multiselect-tag {
  margin-left: var(--ms-tag-mx, 0.25rem);
  margin-right: 0;
  padding: var(--ms-tag-py, 0.125rem) var(--ms-tag-px, 0.5rem) var(--ms-tag-py, 0.125rem)
    0;
}
[dir="rtl"] .multiselect-tag.is-disabled {
  padding-left: var(--ms-tag-px, 0.5rem);
}
[dir="rtl"] .multiselect-caret,
[dir="rtl"] .multiselect-spinner {
  margin: 0 0 0 var(--ms-px, 0.875rem);
}
[dir="rtl"] .multiselect-clear {
  padding: 0 0 0 var(--ms-px, 0.875rem);
}
@-webkit-keyframes multiselect-spin {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
@keyframes multiselect-spin {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
