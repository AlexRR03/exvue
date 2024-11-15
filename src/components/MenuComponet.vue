<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Cubos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/iniciarSesion">Iniciar Sesion</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Registrarse</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/perfil">Perfil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/carrito">Carrito</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Marcas</a>
               <ul v-if="marcas.length > 0" class="dropdown-menu">


                <li
                  class="list-group-item-dark"
                  v-for="marca in marcas"
                  :key="marca"
                >
                  <router-link :to="'/marca/'+marca">
                    {{ marca }}
                  </router-link>
                </li>
              </ul> 
              <!-- <ul  class="dropdown-menu">
                <li class="list-group-item-dark">Prueba</li>
              </ul> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"MenuComponent",
    data(){
      return{
        marcas:[]
      }
    },
    mounted(){
      this.loadMarcas()
    },
    methods:{
      loadMarcas(){
        service.getCubosMarcas().then(result=>{
          this.marcas = result
        })
      }
    }
}
</script>

<style>

</style>