<script>
export default {
data() {
    return {
        name:"HeaderApp"
    }
},
}

</script>

<template>
 
<div>

    <h1>BOOLFLIX</h1>
    <input type="text" name="" id="">

</div>

</template>

<style scoped lang="scss">
@use "../../styles/partials/variables" as *;

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: black;
        h1{
            color: red;
        }
        input{
            height: 30px;
            width: 230px;
        }
}
</style>
