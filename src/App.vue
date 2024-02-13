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
        axios.get("https://api.themoviedb.org/3/search/movie?query=" + store.find + "&include_adult=true&language=en-US&page=1" + "&api_key=74dc67de85e410bdd272b41374636719").then( res =>{
          store.list=res.data.results
        console.log(store.list)
        
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
