<template>
  <div>
        <h1>Mi perfil</h1> 
          <ul class="list-group">
            <li class="list-group-item">{{persona.nombre}}</li>
            <li class="list-group-item">{{persona.email}}</li>
        </ul>      
    </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"PerfilComponent",
    data(){
        return{
            persona:{}
        }
        
    },
    mounted(){
        this.loadPerfil()
    },
    methods:{
        loadPerfil(){
            service.getPerfil().then(result=>{
                this.persona = result
                 console.log(this.persona)
            })
        }
    }
}
</script>

<style>

</style>