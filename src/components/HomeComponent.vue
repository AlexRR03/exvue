<template>
  <div>
    <h1>Home</h1>
        <div v-for="cubo in cubos" :key="cubo"  class="card" style="width: 18rem">
        <img class="card-img-top" :src="cubo.imagen"/>
        <div class="card-body">
            <h5 class="card-title">{{cubo.nombre}}</h5>
            <p class="card-text">
                {{cubo.precio}} €
            </p>
             <router-link :to="'/cubo/detalles/'+cubo.idCubo" class="btn btn-primary">Detalles</router-link>
             <router-link :to="'/comprar/'+cubo.idCubo" class="btn btn-danger">Comprar</router-link>
        </div>
      </div>
  </div> 
  <!-- // "idCubo": 10,
//     "nombre": "Yileng Fisher",
//     "modelo": "Fisher",
//     "marca": "MoYu",
//     "color": "negro",
//     "imagen": "https://superocio.es/1007/moyu-cubo-3x3x3-yj-yileng-fisher.jpg",
//     "precio": 6,
//     "valoracion": 4 -->
</template>


<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    this.loadCubos();
  },
  methods: {
    loadCubos() {
      service.getCubos().then((result) => {
        this.cubos = result;
        console.log(this.cubos);
      });
    }
  },
};
</script>

<style>
</style>