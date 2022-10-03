<template>
  <!-- ======= queixa Section ======= -->
  <section id="queixa" class="queixa">
    <div class="container">
      <div class="section-title">
        <h2>FORMULÁRIO DE APRESENTAÇÃO DE QUEIXAS/RECLAMAÇÕES</h2>
      </div>
      <div class="col-lg-12 mt-5 mt-lg-0">
        <form
          action="forms/queixa.php"
          method="post"
          role="form"
          class="php-email-form"
        >
          <div class="row">
            <div class="col-lg-6 mt-5 mt-lg-0">
             
              <p class="pleft"> Dados do queixoso:</p>
               
              <div class="col-md-12 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Seu Nome"
                  required
                />
              </div>
              <div class="col-md-12 form-group">
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  id="address"
                  placeholder="Sua morada ..."
                  required
                />
              </div>
              <div class="col-md-12 form-group mt-3 mt-md-0">
                <input
                  type="phone"
                  class="form-control"
                  name="phone"
                  id="email"
                  placeholder="Nº de telefone Ex: 5900000"
                  required
                />
              </div>
              <div class="col-md-12 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Entre seu email Ex: cnpd@cnpd.cv"
                  required
                />
              </div>
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0">
              <p class="pleft"> Dados do denunciado:</p>
              <div class="col-md-12 form-group">
                <input
                  type="text"
                  name="entidade"
                  class="form-control"
                  id="entidade"
                  placeholder="Queixa contra a Pessoa/Empresa/Entidade ... Ex: Empresa XPTO"
                  required
                />
              </div>
              <div class="col-md-12 form-group">
                <input
                  type="text"
                  name="entidadeaddress"
                  class="form-control"
                  id="entidadeaddress"
                  placeholder="Morada da Pessoa/Empresa/Entidade... Ex: Palmarejo"
                  required
                />
              </div>
              <div class="col-md-12 form-group mt-3 mt-md-0">
                <input
                  type="entidadephone"
                  class="form-control"
                  name="entidadephone"
                  id="email"
                  placeholder="Nº de telefone da Pessoa/Empresa/Entidade... Ex: 5900000"
                  required
                />
              </div>
              <div class="col-md-12 form-group mt-3 mt-md-0">
                <input
                  type="entidadeemail"
                  class="form-control"
                  name="entidadeemail"
                  id="email"
                  placeholder="Entre o email da Pessoa/Empresa/Entidade...  Ex: xpto@xpto.cv"
                  required
                />
              </div>
            </div>
            
            <p class="pleft"> Obejeto da sua queixa:</p>
            <div class="col-md-12 form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Qual o assunto da sua queixa"
                required
              />
            </div>
            <div class="col-md-12 form-group">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Descreva aqui a sua queixa em detalhes..."
                required
              ></textarea>
            </div>
          </div>
          <div class="text-center"><button type="submit">Submeter Queixa</button></div>
          <br><br>
        </form>
      </div>
    </div>
  </section>
  <!-- End queixa Section -->
</template>

<script>
export default {
  name: "ContatoCnpd",
  components: {},
};
</script>

<style scoped>
/*--------------------------------------------------------------
# queixa
--------------------------------------------------------------*/
.pleft{
    text-align: left;  
    font-weight: bold
}
#queixa {
  padding-top: 60px;
}
#framemaps {
  border-radius: 1%;
  width: 100%;
  height: 400px;
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
.section-title h3 {
  margin: 15px 0 0 0;
  font-size: 32px;
  font-weight: 700;
}
.section-title h3 span {
  color: #000;
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
.queixa .info {
  width: 100%;
  background: #fff;
}
.queixa .info i {
  font-size: 20px;
  color: #030b1c;
  float: left;
  width: 32px;
  height: 32px;
  background: #bd9a13;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.queixa .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #493c3e;
}
.queixa .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #000;
}
.queixa .info .email,
.queixa .info .phone {
  margin-top: 40px;
}
.queixa .info .email:hover i,
.queixa .info .address:hover i,
.queixa .info .phone:hover i {
  color: #fff;
}
.queixa .php-email-form {
  width: 100%;
  background: #fff;
}
.queixa .php-email-form .form-group {
  padding-bottom: 8px;
}
.queixa .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.queixa .php-email-form .error-message br + br {
  margin-top: 25px;
}
.queixa .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.queixa .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.queixa .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.queixa .php-email-form input,
.queixa .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.queixa .php-email-form input:focus,
.queixa .php-email-form textarea:focus {
  border-color: #030b1c;
}
.queixa .php-email-form input {
  height: 44px;
}
.queixa .php-email-form textarea {
  padding: 10px 12px;
}
.queixa .php-email-form button[type="submit"] {
  background: #bd9a13;
  border: 0;
  padding: 10px 28px;
  color: #000;
  font-weight: bold;
  transition: 0.4s;
  border-radius: 50px;
}
.queixa .php-email-form button[type="submit"]:hover {
  background: #bd9a13;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.icon-color {
  font-size: 14px;
}
</style>
