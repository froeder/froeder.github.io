<template>
  <q-page padding>
    <h3>Olá! Obrigado pela visita!  <q-icon color="warning" name="sentiment_satisfied_alt"></q-icon> </h3>
    <p class="header">Sobre Mim</p>
    <SobreMim />
    <br>
    <p class="header">Skills</p>
    <Skills/>
    <br>
    <p>Stack de Ferramentas</p>
    <Stack/>

  </q-page>
</template>

<script>
import Skills from '../components/Skills.vue'
import SobreMim from '../components/SobreMim.vue'
import Stack from '../components/Stack.vue'

export default {
  name: 'PageIndex',
  components:{
    SobreMim,
    Skills,
    Stack
  },
  data(){
    return{

    }
  }
}
</script>

<style>
  .q-card{
    border-radius:10px ;
  }
  .header{
    font-size:1.5em
  }
</style>

