import { reactive } from "vue";


export const store = reactive({
    url:"https://api.themoviedb.org/3/movie/550?api_key=74dc67de85e410bdd272b41374636719",
    list:[],
    key:"&api_key=74dc67de85e410bdd272b41374636719",
    urlImg:"https://image.tmdb.org/t/p/w500", //aggiungere il percorso dell img restituito dall url
    find:"",
});