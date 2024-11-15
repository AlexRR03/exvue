<template>
  <div>
    <h1>Carrito</h1>
    <div>
      <table class="table table-bordered">
          <thead>
              <tr>
                <th>Id cubo</th>
                <th>Id pedido</th>
                <th>Fecha</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="compra in compras" :key="compra">
                <td>{{compra.idCubo}}</td>
                <td>{{compra.idPedido}}</td>
                <td>{{compra.fechaPedido}}</td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()
export default {    
    name:"CarritoComponent",
    data() {
    return {
      compras: [],
    };
  },
  mounted() {
    this.loadCompras();
  },
  methods: {
    loadCompras() {
      service.getCarrito().then((result) => {
        this.compras = result;
        console.log(this.compras);
      });
    },
  },
}
</script>

<style>

</style>