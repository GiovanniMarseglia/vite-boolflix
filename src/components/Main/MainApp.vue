<script>
import SingleCard from './SingleCard.vue'
import { store } from "../../store"
import axios from "axios"

    export default {
        components:{
            SingleCard,
        },

        data() {
            return {
                name:"MainApp",
                store
            }
        },
        
        created(){
            axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=it-IT&page=1&sort_by=popularity.desc&api_key=74dc67de85e410bdd272b41374636719").then( res =>{
                    store.list=res.data.results
                    console.log(store.list)
                })
        },
    }
</script>




<template>
    <div class="container">
        <h3>ORIGINALE BOOLFLIX</h3>
        <div>
        <SingleCard v-for="(element, index) in store.list" :key="index" :data="element"/>
        </div>
    </div>
</template>




<style lang="scss" scoped>

    .container{
        overflow-x: scroll;
       overflow-y: hidden;
        padding: 10px 0px 0px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
            div{
                display: flex;
                        }
    }

</style>