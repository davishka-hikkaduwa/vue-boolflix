<template>
  <div id="app">
    <HeaderComponent/>

    <!----- SEARCHBOX ----->
    <div class="container">  
      <input type="text" v-model="query"/>
      <button @click="search">
        Cerca
      </button>
    </div>
    
    <!----- Container ----->
    <div class="container">
      <!-- MOVIES -->
      <h3>Movies</h3>
      <MovieCardComponent v-for="movie in movies" :key="movie.id"/>
      <!-- Tv-Series -->
      <h3>Tv-Series</h3> 
      <ShowsCardComponent v-for="show in shows" :key="show.id"/>
    </div>
   
  </div>
</template>

<script>
  import axios from 'axios';
  import { apiKey } from '@/env';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MovieCardComponent from './components/MovieCardComponent.vue';
  import ShowsCardComponent from './components/ShowsCardComponent.vue';

export default {
  name: 'App',
  data(){
    return{
      query: '',
      movies: [],
      shows: [],
      apiUrl: 'https://api.themoviedb.org/3/'
    }
  },
  // mounted(){
  //   this.queryApi()
  // },
  methods: {
    search(){
      this.queryApi(this.query)
    },
    queryApi(textToSearch){
      const params = `?api_key=${apiKey}&query=${textToSearch}&language=it-IT`

      axios.get(`${this.apiUrl}search/movie${params}`)
      .then((response)=>{
       this.movies = this.getDataFromApiResponse(response);
      })
      .catch(error=> {
        console.log(error.message);
      });
      axios.get(`${this.apiUrl}search/tv${params}`)
      .then((response)=>{
        this.shows = this.getDataFromApiResponse(response);
      })
      .catch(error=> {
        console.log(error.message);
      });
    },
    getDataFromApiResponse(response){
      console.log(response);
      return response.status === 200? response.data.results: []

    },
 
    getFlag(country){
      switch (country) {
        case 'en': {
          country = 'gb';
          break;
        }
        case 'ja': {
          country = 'jp'
          break;
        }
      }
      return `https://flagicons.lipis.dev/flags/1x1/${country}.svg`
    },
    fixImageError(event){
      event.target.src = `https://flagicons.lipis.dev/flags/1x1/xx.svg`
    }  
  },
  components: {
    HeaderComponent,
    MovieCardComponent,
    ShowsCardComponent
},
  axios,
}
</script>

<style lang="scss">
  @import '@/assets/styles/style.scss';
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .card{
    border: 1px solid black;
    padding: 5px;
  }
  .flag{
    max-width: 20px;
  }
  
</style>
