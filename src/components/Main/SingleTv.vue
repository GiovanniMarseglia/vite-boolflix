<script>
import { store } from "../../store"

    export default {
        props:["data"],
        name:"SingleTv",
        data() {
            return {
                visibile:true,
                store,
                name:"SingleCard",
                upHere: false,
                vote:"",
                reststar:"",
                country:"IT"
            }
        },
        methods: {
            voto(){
                
                this.vote=this.data.vote_average / 2
                
                this.vote=Math.round(this.vote)
                
                this.reststar=5 - this.vote
            },
            flag(){
                this.country=this.data.original_language.toUpperCase()
                
            }
        },
    }
    
</script>




<template>
    
    <div @mouseover="upHere = true, voto(), flag()" @mouseleave="upHere = false">
        <figure>
            <img v-if="data.poster_path!==null" :src="store.urlImg + data.poster_path + store.key">
            <div class="replace" v-else><h2>{{ data.name }}</h2></div>
        </figure>
        <!-- uyM1tesNMM7fg6zmozn8MYD036G.jpg -->
        
    <div class="visible" v-show="upHere">
        <span>Titolo:<span>{{data.name}}</span></span>
        <span v-show="data.name!=data.original_name">Titolo originale:<span>{{ data.original_name }}</span></span>
        <span class="spancenter">Lingua: <span :class="`lang-icon lang-icon-${data.original_language}`"></span></span>
        <span>Voto:</span> <div class="star"><span v-for="element in vote"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span> <span v-for="element in reststar"><svg style="opacity: 0.5;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span></div>
        <span>
            <p>{{ data.overview }}</p>
        </span>
        </div>
    </div>
</template>




<style lang="scss" scoped>
    
    svg{
        width: 15px;
        filter: invert(70%) sepia(82%) saturate(987%) hue-rotate(2deg) brightness(106%) contrast(102%);
    }
    .spancenter{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    div{
        min-width: 350px;
        position: relative;
        
            figure{
                
                max-width: 100%;
               
                img{
                    max-width: 100%;
                    height: 100%;
                }
                .replace{
                    background-color: rgb(189, 130, 21);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                .star{
                    display: flex;
                    
                }
                .flag{
                    
                        max-width: 25px;
                       
                        
                    
                }
            
            }
    }

</style>