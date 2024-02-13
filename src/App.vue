<script>
import { store } from "./store"
import HeaderApp from './components/Header/HeaderApp.vue'
import MainApp from './components/Main/MainApp.vue'
import axios from "axios"

export default {
  components:{
    HeaderApp,
    MainApp
  },
  methods: {
    cerca(){
        axios.get("https://api.themoviedb.org/3/search/keyword?query=" + store.find + "&page=1&api_key=74dc67de85e410bdd272b41374636719").then( res =>{
        console.log(res)
        
        })
            }
  },
}
</script>


<template>
  <HeaderApp @cerca="cerca"/>
  <MainApp/>
</template>

<style scoped>


</style>
