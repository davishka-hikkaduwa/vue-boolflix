<template>
  <div id="app">
    <HeaderComponent/>
    <MainComponent/>

    <div class="container">
      <input type="text" v-model="query"/>
      <button @click="search">
        Cerca
      </button>
    </div>
    <div class="container">
      <div class="card my-2" v-for="movie in movies" :key="movie.id">
        <p>Title: {{ movie.title }}</p>
        <p>Original Title: {{ movie.original_title }}</p>
        <p>Average Vote: {{ movie.vote_average }}</p>
        <p>
          <img class="flag" 
            :src="getFlag(movie.original_language)" 
            :alt="movie.original_language"
            @error="fixImageError($event)">
        </p>
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
  // mounted(){
  //   this.queryApi()
  // },
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
    MainComponent  
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
