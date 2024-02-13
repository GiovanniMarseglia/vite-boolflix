<script>
import { store } from "../../store"

    export default {
        props:["data"],
        data() {
            return {
                visibile:true,
                store,
                name:"SingleCard",
            }
        },
    }
    
</script>




<template>
    <div>
        <figure>
            <img :src="store.urlImg + this.data.poster_path + store.key">
        </figure>
        <!-- uyM1tesNMM7fg6zmozn8MYD036G.jpg -->
        
    </div>
</template>




<style lang="scss" scoped>

    div{
        background-color: blue;
        min-width: 350px;
        
            &:hover{
                opacity: 0.5;
            }
            figure{
                
                max-width: 100%;
               
                img{
                    max-width: 100%;
                    height: 100%;
                }
            }
    }

</style>