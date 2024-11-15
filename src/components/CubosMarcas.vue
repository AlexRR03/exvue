<template>
    <div>
        <h1>Filtrado por Marcas</h1>
        <div v-for="cubo in cubos" :key="cubo"  class="card" style="width: 18rem">
        <img class="card-img-top" :src="cubo.imagen"/>
        <div class="card-body">
            <h5 class="card-title">{{cubo.nombre}}</h5>
            <p class="card-text">
                {{cubo.precio}} €
            </p>
             <router-link :to="'/cubo/detalles/'+cubo.idCubo" class="btn btn-primary">Detalles</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"CubosMarcas",
    data(){
      return{
        cubos:[]
      }
    },
    mounted(){
      this.loadMarcas()
    },
    watch:{
        '$route.params.nombre'(nextVal,oldVal){
            if(nextVal!=oldVal){
                this.loadMarcas()
            }
        }
    },
    methods:{
      loadMarcas(){
        let nombre = this.$route.params.nombre
        service.getCubosByMarca(nombre).then(result=>{
          this.cubos = result
        })
      }
    }
}
</script>

<style>

</style>