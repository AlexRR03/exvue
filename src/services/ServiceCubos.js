import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos{
    
    getCubos(){
       return new Promise(function(resolve){
            let cubos = [];
            let request = "api/cubos";
            let url = Global.urlApiCubos+request;
            axios.get(url).then(response=>{
                cubos = response.data
                console.log(response)
                console.log(response.data)
                resolve(cubos)
            })

       }) 
    }
    getComentariosCubo(id){
        return new Promise(function(resolve){
            let comentarios = [];
            let request="api/comentarioscubo/getcomentarioscubo/"+id;
            let url = Global.urlApiCubos+request
            axios.get(url).then(response=>{
                comentarios = response.data
                resolve(comentarios)
                console.log(comentarios)
            })
        })
    }
    getCubosMarcas(){
        return new Promise(function(resolve){
            let marcas = [];
            let request = "api/cubos/marcas";
            let url = Global.urlApiCubos+request;
            axios.get(url).then(response=>{
                marcas = response.data
                console.log(response)
                console.log(response.data)
                resolve(marcas)
            })

       }) 
    }

    getCubosByMarca(nombre){
        return new Promise(function(resolve){
            let cubos = [];
            let request="api/cubos/cubosmarca/"+nombre;
            let url = Global.urlApiCubos+request
            axios.get(url).then(response=>{
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    sendUsuario(usuario){
        return new Promise(function(resolve){
            // let json = JSON.stringify(usuario)
            console.log(usuario)
            let request = "api/manage/login";
            let url = Global.urlApiCubos+request
            axios.post(url,usuario,{headers:{
                "Content-Type":"application/json"
            }}).then(response=>{
                    resolve(response.data)
            })
        })
    } 

    getPerfil(){
        return new Promise(function(resolve){
            let persona = {};
            let token = localStorage.getItem("authToken")
            let request="/api/Manage/PerfilUsuario";
            let url = Global.urlApiCubos+request
            axios.get(url,{headers:{
                "Authorization":"Bearer "+token
            }}).then(response=>{
                persona = response.data
                resolve(persona)
                console.log(persona)
            })
        })
    }
    getCarrito(){
        return new Promise(function(resolve){
            let compras = [];
            let token = localStorage.getItem("authToken")
            let request="/api/compra/comprasusuario";
            let url = Global.urlApiCubos+request
            axios.get(url,{headers:{
                "Authorization":"Bearer "+token
            }}).then(response=>{
                compras = response.data
                resolve(compras)
                console.log(compras)
            })
        })
    }
    comprar(id){
        return new Promise(function(resolve){
            let token = localStorage.getItem("authToken")
            let request = "/api/Compra/InsertarPedido/"+id;
            let url = Global.urlApiCubos+request
            axios.post(url,"",{headers:{
                "Authorization":"Bearer "+token
            }}).then(response=>{
                    resolve(response.data)
            })
        })
    }


}