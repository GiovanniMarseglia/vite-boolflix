<script>
import SingleCard from './SingleCard.vue'
import { store } from "../../store"

    export default {
        components:{
            SingleCard,
            store
        },

        data() {
            return {
                name:"MainApp"
            }
        },
    }
</script>




<template>
    <div>
        <SingleCard/>
    </div>
</template>




<style lang="scss" scoped>

    div{
        padding: 10px;
        background-color: #434343;
    }

</style>