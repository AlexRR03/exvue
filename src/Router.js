import {createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent'
import DetallescuboComponent from './components/DetallescuboComponent'
import LoginComponent from './components/LoginComponent'
import CubosMarcas from './components/CubosMarcas'
import PerfilComponent from './components/PerfilComponent'
import CarritoComponent from './components/CarritoComponent'
import ComprarComponent from './components/ComprarComponent'
const myRoutes=[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/cubo/detalles/:id",
        component:DetallescuboComponent
    },
    {
        path:"/marca/:nombre",
        component:CubosMarcas
    },
    {
         path:"/iniciarSesion",
         component:LoginComponent
    },
    {
        path:"/perfil",
        component:PerfilComponent
    },
    {
        path:"/carrito",
        component:CarritoComponent
    },
    {
        path:"/Comprar/:id",
        component:ComprarComponent
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes: myRoutes
})

export default router