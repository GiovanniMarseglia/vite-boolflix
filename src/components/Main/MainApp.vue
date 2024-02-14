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
                store
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
        <h3>MOVIE</h3>

        <div class="containermovie" ref="scroll_container" @wheel.prevent="scrollX">
        <SingleCard v-for="(element, index) in store.list" :key="index" :data="element"/>
        </div>

        <h3>TV</h3>

        <div class="containertv" ref="scroll_container2" @wheel.prevent="scrollXX">
        <SingleTv v-for="(element, index) in store.listtv" :key="index" :data="element"/>
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