<template>

  <div class="main-container"> 
  <br> <br>
    <CompetenciaField/>
  </div>
</template>

<script>
import CompetenciaField from "../components/CompetenciaField.vue";

export default{
  name:"CompetenciaView",

  components: {
    CompetenciaField
  }
}
</script>
