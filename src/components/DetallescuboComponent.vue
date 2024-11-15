<template>
<div>
  <h1>Detalles</h1>
      <div v-for="comentario in comentarios" :key="comentario"  class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">{{comentario.idComentario}}:{{comentario.comentario}}</h5>
            <p class="card-text">
                {{comentario.fechaComentario}} 
            </p>
        </div>
        </div>
   
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"DetallescuboComponent",
    data(){
      return{
        comentarios:[]
      }
    },
    mounted(){
      this.loadComentarios()
    },
    methods:{
      loadComentarios(){
        let id = this.$route.params.id
        service.getComentariosCubo(id).then(result=>{
          this.comentarios = result;
          console.log(this.comentarios)
        })
      }
    }

}
</script>

<style>

</style>