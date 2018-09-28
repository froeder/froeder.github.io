<template>
  <q-page padding>
    <p class="header">Sobre Mim</p>
    <SobreMim/>
    <br>
    <p class="header">Skills</p>
    <Skills/>
  </q-page>
</template>

<script>
import Skills from '../components/Skills.vue'
import SobreMim from '../components/SobreMim.vue'

export default {
  name: 'PageIndex',
  components:{
    SobreMim,
    Skills
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

