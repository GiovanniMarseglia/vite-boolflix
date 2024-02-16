<script>
import axios from "axios"
import { store } from "../../store"

    export default {
        props:{
            ["data"]:Object,
            sel:String
        },
        
        data() {
            return {
                visibile:true,
                store,
                name:"SingleCard",
                upHere: false,
                vote:"",
                reststar:"",
                country:"IT",
                actor:[],
                gnr:[],
                incluso:true,
                linktrailer:"",
                trailer:false,
            }
        },
        methods: {
            genere(){
                axios.get(`${store.url}${this.data.id}?${store.key}`).then(res => {
                    this.gnr=res.data.genres
                    console.log(res)
                })
            },

            linktraile(){
                axios.get(`https://api.themoviedb.org/3/movie/${this.data.id}/videos?${store.key}`).then(res =>{
                    this.linktrailer=`http://www.youtube.com/embed/${res.data.results[0].key}`
                    console.log(this.linktrailer)
                })
            },

            controllo(){
                this.incluso=false
                console.log(this.sel)
                for(let i=0;i<this.gnr.length;i++){
                        if(this.gnr[i].name==this.sel){
                            this.incluso=true
                           
                        }   
                    }
            },

            voto(){
                
                this.vote=this.data.vote_average / 2
                
                this.vote=Math.round(this.vote)
                
                this.reststar=5 - this.vote
            },
            flag(){
                this.country=this.data.original_language.toUpperCase()
                
            },
            actors(){
                axios.get(`${store.url}${this.data.id}/credits?${store.key}`).then(res => {
                    this.actor=res.data.cast
                    this.actor = this.actor.slice(0, 5);
                    
                    
                })
            }
            
        },
            
            created(){
    
                this.actors()
                this.genere()
                
            },
            
            

            watch: {
            'store.list': {
                handler: function () {
                    this.actors();
                    this.genere()
                },
            },
            'store.value1': {
                handler: function () {
                this.controllo()
                this.linktraile()
                },
            },
            
            }
            
        }
        
</script>

<template>
    <div class="container" @mouseover="upHere = true ,voto(), flag()" @mouseleave="upHere = false" v-show="incluso==true || sel==``"  @click="trailer=true,linktraile()">
        <figure>
            <img v-if="data.poster_path!==null" :src="store.urlImg + this.data.poster_path + store.key">
            <div class="replace" v-else><h2>{{ data.title }}</h2></div>
        </figure>
        <!-- uyM1tesNMM7fg6zmozn8MYD036G.jpg -->
        
        <div class="visible" v-show="upHere">
            <span><span class="bold">Titolo:</span><span>{{data.title}}</span></span>
            <span v-show="data.title!=data.original_title"> <span class="bold">Titolo originale:</span> <span>{{ data.original_title }}</span></span>
            <span class="spancenter"><span class="bold">Lingua</span> <span :class="`lang-icon lang-icon-${data.original_language}`"></span></span>
            <div class="star"><span><span class="bold">Voto:</span></span><span v-for="element in vote"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span> <span v-for="element in reststar"><svg style="opacity: 0.5;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span></div>
            
                <p><span class="bold">Descrizione:</span> {{ data.overview }}</p>
            
            <div class="act">
                <span class="bold">Cast:</span>
                <p class="parola" v-for="element in actor">
                     {{ element.original_name}} 
                </p>
            </div>

            <div>
                <span class="bold">Genere:</span>
                <span v-for="element in gnr">
                    &CenterDot; {{ element.name }}
                </span>
                
            </div>
          
            </div>
    </div>
    <div class="trailer" v-show="trailer==true">
        <iframe :src="linktrailer">
        
        </iframe>
        <div class="close" @click="trailer=false" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff0000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
        </div>
    </div>
   
</template>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;


    .trailer{
        position: absolute;
        width: 70vw;
        height: 70vh;
        background-color: blue;
        left: 15vw;
        top:30vh;
        z-index:1;
        iframe{
            width: 100%;
            height: 100%;
        }
        .close{
            border-radius: 999rem 999rem;
            width: 50px;
            position: absolute;
           
            z-index: 2;
            height: 50px;

            top: -23px;
            right: -23px;
            background-color: black;
            svg{
                min-width: 50px;
                filter: invert(15%) sepia(96%) saturate(5287%) hue-rotate(5deg) brightness(93%) contrast(124%);
               
                
            }
        }
        
    }




    .act{
        display: flex;
        flex-wrap: wrap;
        column-gap: 20px;
        
        word-wrap: break-word;
        
        p{
            display: flex;  
        }
            
    }

    span{
        font-size: 20px;
    }
    
    svg{
        width: 15px;
        filter: invert(70%) sepia(82%) saturate(987%) hue-rotate(2deg) brightness(106%) contrast(102%);
    }
    .spancenter{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .container{
        min-width: 350px;
        max-width: 350px;
        min-height: 525px;
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
                    height: 525px;
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
                background-color: rgba(128, 128, 128, 0.877);
                padding: 10px;
                justify-content: center;
                gap: 7px;
                line-height: 30px;
                opacity: 0.2;
                transition: all 1s;
                top: 0;
                &:hover{
                    opacity: 1;
                }
                
                

                .bold{
                    font-weight: bold;
                }
    
                p{
                    @include text-preview;
                }
                
                .star{
                    display: flex;
                    gap: 2px;
                    
                }
                .flag{
                    max-width: 25px;   
                }
            
            }
    }

</style>