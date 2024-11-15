<template>
  <div>
    La compra ha sido realizada
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {
    name:"ComprarComponent",
    mounted(){
        this.hacerCompra()
    },
    methods:{
    hacerCompra(){
        let id = this.$route.params.id
        service.comprar(id).then(()=>{
            this.$router.push("/carrito")
        })
    }
    }
}
</script>

<style>

</style>