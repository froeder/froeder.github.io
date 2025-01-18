<template>
    <q-card style="font-size:1em">
      <q-card-main>
        <div class="row  gutter-xs">
          <div  v-for="skills in skill" :key="skills.id" class="col-xs-6 col-md-4">
            
              <span>{{skills.nome}}</span>
              <q-progress
                :color="skills.color"
                :percentage="skills.percentage"
                style="height: 10px"       
              />
              <br>  
            <br>
          </div>
        </div>
      </q-card-main>
    </q-card>
</template>

<script>
export default {
  data(){
    return{
      skill: [
        {
          id: 1,
          nome: 'HTML',
          percentage: 100,
          color: 'orange'
        },{
          id: 2,
          nome: 'CSS',
          percentage: 70 ,
          color: 'info'
        },{
          id: 3,
          nome: 'JavaScript',
          percentage: 90,
          color: 'yellow'
        },{
          id: 4,
          nome: 'Android',
          percentage: 30,
          color: 'green'
        },{
          id: 5,
          nome: 'Vue.js',
          percentage: 80,
          color: 'teal-14'
        },{
          id: 6,
          nome: 'Vuetify',
          percentage: 90,
          color: 'cyan-2'
        },{
          id: 7,
          nome: 'Quasar',
          percentage: 70
        },{
          id: 8,
          nome: 'NUXT',
          percentage: 30,
          color: 'teal'
        },{
          id: 9,
          nome: 'Firebase',
          percentage: 50,
          color: 'amber'
        },{
          id: 10,
          nome: 'PHP',
          percentage: 30,
          color: 'indigo-6'
        },{
          id: 11,
          nome: 'Cake-PHP',
          percentage: 30,
          color: 'red-5'
        },
      ]
    }
  }
}
</script>

