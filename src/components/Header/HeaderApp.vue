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
    <input @keyup.enter="$emit(`cerca`)" v-model="store.find" type="text" placeholder="Search"
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
            
            transition: 1s;
            &:hover{
                scale: 105%;
            }
        }
        input{
            height: 40px;
            width: 100px;
            border-radius: 999rem;
            transition: all 1.5s;
            padding-left: 27px;
            &:hover{
                width: 300px;
                padding-left: 10px;
                
            }
        }
}



@media screen and (max-width: 510px){

div{
    padding: 0px;
    justify-content: center;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 5%;
   
        h1{
            font-size: 1rem;
            padding-top: 2px;
        }
        input{
            
            height: 25px;
            width: 60px;
            border-radius: 999rem;
            transition: all 1.5s;
            padding-left: 8px;
            &:hover{
                width: 100px;
               
                
            }
        
        }
}

}
</style>
