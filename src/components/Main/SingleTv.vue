<script>
import { store } from "../../store"
import axios from "axios"

    export default {
        props:{
            ["data"]:Object,
            sel:String
        },
        
        data() {
            return {
                visibile:true,
                store,
                name:"SingleTv",
                upHere: false,
                vote:"",
                reststar:"",
                country:"IT",
                actor:[],
                gnr:[],
                incluso:true
            }
        },
        methods: {
            genere(){
                axios.get(`${store.urltv}${this.data.id}?${store.key}`).then(res => {
                    
                    this.gnr=res.data.genres
                })
            },

            controllo(){
                this.incluso=false
                console.log(this.sel)
                for(let i=0;i<this.gnr.length;i++){
                        if(this.gnr[i].name==this.sel){
                            this.incluso=true
                            console.log("a",this.incluso,this.gnr[i].name,"sel",this.sel)
                        }else{
                            
                            console.log("b",this.incluso,this.gnr[i].name,"sel",this.sel)   
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
                axios.get(`${store.urltv}${this.data.id}/credits?${store.key}`).then(res => {
                   
                    this.actor=res.data.cast
                    this.actor = this.actor.slice(0, 5);
                    
                })
            },
        },
            created(){
    
                this.actors()
                this.genere()
            },
            

            watch: {
            'store.listtv': {
                handler: function () {
                    this.actors();
                    this.genere()
                },
            
            },

            'store.value2': {
                handler: function () {
                this.controllo()
                },
            },
        }
                    
    }
    
</script>

<template>
    
    <div class="containertv" @click="upHere = !upHere, flag(),voto() " @mouseleave="upHere = false" v-show="incluso==true || sel==``">
        <figure>
            <img v-if="data.poster_path!==null" :src="store.urlImg + data.poster_path + store.key">
            <div class="replace" v-else><h2>{{ data.name }}</h2></div>
        </figure>
        
        <div class="visible" v-show="upHere">
            <span><span class="bold">Titolo:</span><span>{{data.name}}</span></span>
            <span v-show="data.name!=data.original_name"><span class="bold">Titolo originale:</span><span>{{ data.original_name }}</span></span>
            <span class="spancenter"><span class="bold">Lingua</span> <span :class="`lang-icon lang-icon-${data.original_language}`"></span></span>
            <div class="star"><span><span class="bold">Voto:</span></span> <span v-for="element in vote"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span> <span v-for="element in reststar"><svg style="opacity: 0.5;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span></div>
        
            <p><span class="bold">Descrizione:</span>{{ data.overview }}</p>
            
            <div class="act">
                <span class="bold">Cast:</span>
                    <p v-for="element in actor">  
                        {{ element.original_name}}  
                    </p> 
            </div>

            <div id="gnr">
                <span class="bold">Genere:</span>
                <p v-for="element in gnr">
                    {{ element.name }}
                </p>
                
            </div>
            
        </div>
    </div>
</template>




<style lang="scss" scoped>
    @use "../../styles/partials/mixins" as *;

    .act{
        display: flex;
        flex-wrap: wrap;
       
        word-wrap: break-word;
        p{
            display: flex;
            &::after{
                   content: "//";
                }  
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
    .containertv{
        min-width: 350px;
        max-width: 350px;
        min-height: 525px;
        position: relative;
        cursor: pointer;
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
                width: 100%;
                background-color: rgba(128, 128, 128, 0.877);
                padding: 10px;
                justify-content: center;
                gap: 7px;
                line-height: 30px;
                opacity: 1;
                transition: all 1s;
                &:hover{
                    opacity: 1;
                }
                .bold{
                    font-weight: bold;
                }
    
                p{
                    @include text-preview
                }
                .star{
                    display: flex;
                    gap: 2px;
                    
                }
                .flag{
                        max-width: 25px;       
                }

                #gnr{
                   display: flex;
                   align-items: center;
                   p{
                   &::after{
                    content: "//";
                   }
                }
                    
                }
            
            }
    }





    @media screen and (max-width: 425px){

        .containertv{
        min-width: 200px;
        min-height: 262px;
        .visible{
            font-size: 0.6rem;
            gap: unset;
            justify-content: space-between;
            .bold{
            font-size: 0.8rem;
        }
                p{
                    font-size: 0.8rem;
                    line-height: 1rem;
                }
                
            
        }
        
        }
    

        
        span{
            font-size: 1rem;
        }
        .act{
            line-height: 1rem;
        }
    
    }
            
















@media screen and ((max-width: 1024px) and (min-width: 426px)){

.containertv{
min-width: 250px;
min-height: 262px;
}

}

</style>