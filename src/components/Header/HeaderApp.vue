<script>
import {store} from "../../store"
export default {
    emits:["cerca"],
data() {
    return {
        name:"HeaderApp",
        store,
    }
},
}

</script>

<template>
 
<div>
    <a href="home"><h1>BOOLFLIX</h1></a>
    <input @keyup.enter="$emit(`cerca`)" v-model="store.find" type="text" placeholder="Search a Movie/Tv series"
      :style="{ width: store.find ? '300px' : '', paddingLeft: store.find ? '10px' : ''}">
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
        a{
            text-decoration: none;
        }
        h1{
            color: red;
            font-size: 60px;
            cursor: pointer;
            padding-block: 10px;
            transition: 1s;
            &:hover{
                scale: 105%;
                
                
            }
        }
        input{
            height: 40px;
            width: 150px;
            border-radius: 999rem;
            transition: all 1.5s;
            &:hover{
                width: 300px;
                padding-left: 10px;
            }
        }
}
</style>
