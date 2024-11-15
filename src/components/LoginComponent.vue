<template>
    <div>
        <h1>Login</h1>
    <form v-on:submit.prevent="iniciarSesion()" class="form-control m-4">
    
    <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label">email</label>
        <input type="text" class="form-control"
            id="email"
            v-model="usuario.email"
        />
    </div>

   
    <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label">Contraseña</label>
        <input type="text" class="form-control"
            id="password"
            v-model="usuario.password"
        />
    </div>

    <!-- Submit button -->
    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Iniciar Sesion</button>
    </form>
</div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"LoginComponent",
    data(){
        return{
            usuario:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        iniciarSesion(){
            service.sendUsuario(this.usuario).then(result=>{
                localStorage.setItem("authToken",result.response)
                this.$router.push("/perfil")
                console.log(result)
                console.log()
            })
        }
    }
}
</script>

<style>

</style>