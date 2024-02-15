<script>
import SingleCard from './SingleCard.vue'
import SingleTv from './SingleTv.vue'
import { store } from "../../store"
import axios from "axios"

    export default {
        components:{
            SingleCard,
            SingleTv,
        },

        data() {
            return {
                name:"MainApp",
                store,
                value1:"",
                value2:""
            }
        },
        
        created(){
            axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&page=1&sort_by=popularity.desc&api_key=74dc67de85e410bdd272b41374636719").then( res =>{
                    store.list=res.data.results
                    
                }),
            axios.get("https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&page=1&sort_by=popularity.desc&api_key=74dc67de85e410bdd272b41374636719").then( res =>{
                store.listtv=res.data.results
                console.log(store.listtv)
            })

            axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=74dc67de85e410bdd272b41374636719").then( res =>{
                store.allgnr=res.data.genres
            })

            axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=74dc67de85e410bdd272b41374636719").then( res =>{
                store.allgnrtv=res.data.genres
            })


        },
        methods: {
            scrollX(e) {
    if (this.$refs.scroll_container.contains(e.target)) {
      this.$refs.scroll_container.scrollLeft += e.deltaY;
    }
  },

  scrollXX(e) {
    if (this.$refs.scroll_container2.contains(e.target)) {
      this.$refs.scroll_container2.scrollLeft += e.deltaY;
    }
  },
  
},
    }
</script>




<template>
    <div class="container">
        <div class="titleSelect">
            <h3>MOVIE</h3> 
            <select name="" id="slct1" v-model="value1">
                <option value="">Tutti i generi</option>
                <option v-for="element in store.allgnr" :value="element.name">{{ element.name }}</option>
            </select>
        </div>

        <div class="containermovie" ref="scroll_container" @wheel.prevent="scrollX">
        <SingleCard v-for="(element, index) in store.list" :key="index" :data="element" :sel="value1"/>
        </div>

        <div class="titleSelect">
            <h3>Tv</h3> 
            <select name="" id="slct2" v-model="value2">
                <option value="" selected>Tutti i generi</option>
                <option v-for="element in store.allgnrtv" :value="element.name">{{ element.name }}</option>
            </select>
        </div>

        <div class="containertv" ref="scroll_container2" @wheel.prevent="scrollXX">
        <SingleTv v-for="(element, index) in store.listtv" :key="index" :data="element" :sel2="value2"/>
        </div>
    </div>
</template>




<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
    h3{
        color: white;
    }
    .container{
        overflow: hidden;
        padding: 10px 0px 0px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .titleSelect{
            display: flex;
            gap: 30px;
        }
        div{
            display: flex;
        }
        .containermovie{
            overflow-x: scroll;
            padding-bottom: 20px;
            @include no-scrollbar
        }
        .containertv{
            overflow-x: scroll;
            padding-bottom: 20px;
            @include no-scrollbar
        }
    }

</style>