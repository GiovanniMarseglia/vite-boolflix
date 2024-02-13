<script>
import { store } from "../../store"

    export default {
        props:["data"],
        data() {
            return {
                visibile:true,
                store,
                name:"SingleCard",
                concatenazione: store.urlImg + this.data.poster_path + store.key
            }
        },
    }
    
</script>




<template>
    <div>
        <figure>
            <img :src="concatenazione">
        </figure>
        <!-- uyM1tesNMM7fg6zmozn8MYD036G.jpg -->
        
    </div>
</template>




<style lang="scss" scoped>

    div{
        background-color: blue;
        min-width: 350px;
        height: 600px;
            figure{
                height: 100%;
                img{
                    height: 100%;
                }
            }
    }

</style>