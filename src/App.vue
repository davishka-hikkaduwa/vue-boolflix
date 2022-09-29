<template>
  <div id="app">
    <HeaderComponent/>
    <MainComponent/>


    <input type="text" v-model="query"/> <button @click="search">Cerca</button>
    <div class="container">
      <div class="card" v-for="movie in movies" :key="movie.id">
      <p>Title: {{ movie.title }}</p>
      <p>Original Title: {{ movie.original_title }}</p>
      <p>Average Vote: {{ movie.vote_average }}</p>
      <p>Original Language: {{ movie.original_language }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { apiKey } from '@/env';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  data(){
    return{
      query: '',
      movies: [],
    }
  },
  mounted(){
    this.queryApi()
  },
  methods: {
    search(){
      this.queryApi(this.query)
    },
    queryApi(textToSearch){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textToSearch}&language=it-IT`)
      .then((response)=>{
        console.log(response);
        if (response.status === 200) {
          this.movies = response.data.results;
        }
      })
      .catch(error=> {
        console.log(error.message);
      })
    }
  },
  components: {
    HeaderComponent,
    MainComponent  
  },
  axios,
}
</script>

<style lang="scss">
  @import '@/assets/styles/style.scss';
  .card{
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
