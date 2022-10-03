<template>
       <!-- ======= Contact Section ======= -->
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                    <h2>Contato</h2>  
                </div>
 
                <div class="row mt-5">

                    <div class="col-lg-4">
                        <div class="info">
                            <div class="address">
                                <i class="circle"><IconAwe class="icon-color" icon="house" /></i>
                                <h4>Endereço:</h4>
                                <p>Av. da China, Rampa Terra Branca Praia, Santiago, Cabo Verde</p>
                            </div>

                            <div class="address">
                                <i class="circle"><IconAwe class="icon-color" icon="fax"/></i>
                                <h4>Caixa Postal:</h4>
                                <p>Apartado 1002, Caixa Postal 7600</p>
                            </div>

                            <div class="email">
                                <i class="circle"><IconAwe class="icon-color" icon="envelope" /></i>
                                <h4>Email:</h4>
                                <p>cnpd@cnpd.cv</p>
                            </div>

                            <div class="phone">
                                <i class="circle"><IconAwe class="icon-color" icon="phone" /></i>
                                <h4>Telefone:</h4>
                                <p>+238 5340390</p>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-8 mt-5 mt-lg-0">

                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Seu Nome" required>
                                </div>
                                <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Entre seu email Ex: cnpd@cnpd.cv" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="address" class="form-control" id="address" placeholder="Sua morada ..." required>
                                </div>
                                <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="phone" class="form-control" name="phone" id="email" placeholder="Nº de telefone Ex: 5900000" required>
                                </div>
                            </div>
                            <div class="col-md-12 form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Assunto" required>
                            </div>
                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="5" placeholder="Qual a sua dúvida ..." required></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                        <br>
                    </div>
                    <div>
                    <ContatoMaps/>
                </div>

                </div>
                

            </div>
            <br>
        </section>
        <!-- End Contact Section -->
</template>

<script>
import ContatoMaps from './ContatoMaps.vue';
export default {
    name: "ContatoCnpd",
    components: {
       ContatoMaps
        }
}
</script>

<style scoped>
 
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
#contact{

  padding-top: 60px;
}
#framemaps{

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
  background: #BD9A13;
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
.contact .info {
  width: 100%;
  background: #fff;
}
.contact .info i {
  font-size: 20px;
  color: #030B1C;
  float: left;
  width: 32px;
  height: 32px;
  background: #BD9A13;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #493c3e;
}
.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #000;
}
.contact .info .email, .contact .info .phone {
  margin-top: 40px;
}
.contact .info .email:hover i, .contact .info .address:hover i, .contact .info .phone:hover i {
  
  color: #fff;
}
.contact .php-email-form {
  width: 100%;
  background: #fff;
}
.contact .php-email-form .form-group {
  padding-bottom: 8px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
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
.contact .php-email-form input, .contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.contact .php-email-form input:focus, .contact .php-email-form textarea:focus {
  border-color: #030B1C;
}
.contact .php-email-form input {
  height: 44px;
}
.contact .php-email-form textarea {
  padding: 10px 12px;
}
.contact .php-email-form button[type=submit] {
  background: #BD9A13;
  border: 0;
  padding: 10px 28px;
  color: #000;
  font-weight: bold;
  transition: 0.4s;
  border-radius: 50px;
}
.contact .php-email-form button[type=submit]:hover {
  background: #BD9A13;
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

.icon-color{
  font-size: 14px;
}
 
 
</style>
