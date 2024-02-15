<script>
import {store} from "../../store"
export default {
    emits:["cerca"],
data() {
    return {
        name:"HeaderApp",
        store
    }
},
}

</script>

<template>
 
<div>
    <h1>BOOLFLIX</h1>
    <input @keyup.enter="$emit(`cerca`)" v-model="store.find" type="text" placeholder="Search a Movie/Tv series">
</div>

</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background-color: black;
    align-items: center;
        h1{
            color: red;
            font-size: 60px;
        }
        input{
            height: 40px;
            width: 300px;
        }
}
</style>
