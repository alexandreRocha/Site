<template>
  <section id="panfletos" class="panfletos">
    <div class="container">
      <div class="section-title">
        <h2>PANFLETOS PROMOCIONAIS</h2>
      </div>
      <div class="geral">
        <div class="row form-group">
           
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  
export default {
    data() {
      return {
        text: ''
      }
    }
  }

</script>

<style>
.geral {
}

#idpage {
  display: flex;
  justify-content: space-between;
}
#button {
  color: #061536;
  border: 2px solid #061536;
  box-shadow: 1px 1px #061536;
  height: 30px;
  width: 30px;
}
#button:hover {
  box-shadow: 1px 1px 3px 3px black;
  color: #fff;
  background-color: #061536;
}
#idsearch {
  width: 40%;
  height: 30px;
  text-align: center;
  box-shadow: 1px 1px #061536;
}
.form-group {
  display: flex;
  justify-content: space-between;
}

.pcente {
  text-align: center;
  font-weight: bold;
  margin-left: 10%;
  margin-right: 10%;
}
.pcenter {
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  font-weight: bold;
}
.pleft {
  text-align: left;
  font-weight: bold;
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

.panfletos {
  background: #fff;
  padding-top: 120px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.panfletos .icon-box {
  display: flex;
  align-items: center;
  padding: 20px;
  transition: ease-in-out 0.3s;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.12);
}
.panfletos .icon-box i {
  font-size: 32px;
  padding-right: 10px;
  line-height: 1;
}
.panfletos .icon-box h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
}
.panfletos .icon-box h3 a {
  color: #493c3e;
  transition: ease-in-out 0.3s;
}
.panfletos .icon-box:hover a {
  color: #bd9a13;
}

th {
  cursor: pointer;
  /* width: 500px !important; */
  white-space: nowrap;
}

tr {
  white-space: nowrap;
}
.table-responsive {
  text-align: left;
}

.trcabecalho {
  font-weight: bold;
  background-color: #fff;
}
</style>
