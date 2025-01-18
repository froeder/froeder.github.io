<template>
  <q-page style="padding-left:2em ; padding-bottom: 2em ; padding-right:2em ">
    <h4 class="q-headline">Olá! Obrigado pela visita!  <q-icon color="warning" name="sentiment_satisfied_alt"></q-icon> </h4>
    <div class="row">
      <q-btn outline class="col-xs-12" @click="rota('portifolio')">
        VEJA MEU PORTIFÓLIO 
        <q-icon color="red" name="favorites"></q-icon> 
      </q-btn>
    </div>
    <p class="header">Sobre Mim</p>
    <SobreMim />
    <br>
    <p class="header">Skills <small style="font-size:7px">(é verdade esse bilete)</small></p>
    <Skills/>
    <br>
    <p>Stack de Ferramentas que utilizo</p>
    <Stack/>

  </q-page>
</template>

<script>
import Skills from '../components/Skills.vue'
import SobreMim from '../components/SobreMim.vue'
import Stack from '../components/Stack.vue'

import {Notify} from 'quasar'

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
  },
  methods:{
    rota(name){
      this.$router.push({name: name})
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

