<script>
import { store } from "../../store"

    export default {
        props:["data"],
        data() {
            return {
                visibile:true,
                store,
                name:"SingleCard",
                upHere: false,
                vote:""
            }
        },
        methods: {
            voto(){
                
                this.vote=this.data.vote_average / 2
                
                this.vote=Math.round(this.vote)
                
                
            }
        },
    }
    
</script>




<template>
    <div  @mouseover="upHere = true, voto()" @mouseleave="upHere = false">
        <figure>
            <img :src="store.urlImg + this.data.poster_path + store.key">
        </figure>
        <!-- uyM1tesNMM7fg6zmozn8MYD036G.jpg -->
        
    <div class="visible" v-show="upHere">
        <span>Titolo:<span>{{data.title}}</span></span>
        <span>Titolo originale:<span>{{ data.original_title }}</span></span>
        <span>Voto:<span>{{ vote }}</span></span>
        <span>
            <p>{{ data.overview }}</p>
        </span>
        </div>
    </div>
</template>




<style lang="scss" scoped>
    

    div{
        min-width: 350px;
        position: relative;
        
            figure{
                
                max-width: 100%;
               
                img{
                    max-width: 100%;
                    height: 100%;
                }
            }
        
            .visible{
                display: flex;
                flex-direction: column;
                position: absolute;
                height: 100%;
                background-color: rgba(128, 128, 128, 0.76);
                padding: 10px;
                justify-content: center;
                gap: 10px;
                font-weight: bold;
            
            }
    }

</style>