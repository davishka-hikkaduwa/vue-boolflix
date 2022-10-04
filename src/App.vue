<template>
  <div id="app">
    <HeaderComponent class="header-component" @search="queryApi"/>
    
    <!----- Container ----->
    <div class="container-fluid mx-0">
      <div class="card-container">
        <!-- MOVIES -->
        <h3>Movies</h3>
        <div class="carousel-container">
            <!-- <MovieCardComponent v-for="movie in movies" :key="movie.id" :movie="movie"/> -->
            <div class="prev">&#10094;</div>
            <div class="row">
            <CardComponent class="slide" v-for="movie in movies" :key="movie.id" :movie="movie"
              :title="movie.title"
              :originalTitle="movie.original_name"
              :vote="movie.vote_average"
              :language="movie.original_language"
              :image="movie.poster_path"
              :overview="movie.overview"
            />
            </div>
            <div class="next">&#10095;</div>
        </div>
        <!-- Tv-Series -->
        <h3>Tv-Series</h3>
        <div class="carousel-container">
          <div class="prev">&#10094;</div>
            <div class="row">
              <!-- <TvShowCardComponent v-for="tvShow in tvShows" :key="tvShow.id" :tv="tvShow"/>  -->
              <CardComponent v-for="tvShow in tvShows" :key="tvShow.id" :tv="tvShow"
                :title="tvShow.name"
                :originalTitle="tvShow.original_name"
                :vote="tvShow.vote_average"
                :language="tvShow.original_language"
                :image="tvShow.poster_path"
                :overview="tvShow.overview"
              />  
            </div>
          <div class="next">&#10095;</div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
  import axios from 'axios';
  import { apiKey } from '@/env';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  // import MovieCardComponent from '@/components/MovieCardComponent.vue';
  // import TvShowCardComponent from '@/components/TvShowCardComponent.vue';
  import CardComponent from '@/components/CardComponent.vue';


export default {
  name: 'App',
  data(){
    return{
      query: '',
      movies: [],
      tvShows: [],
      apiUrl: 'https://api.themoviedb.org/3/',
      
    }
  },
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
        this.tvShows = this.getDataFromApiResponse(response);
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
   
   
  },
  components: {
    HeaderComponent,
    CardComponent
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:  rgb(35, 35, 35);
    height: 100vh;
  }
  .header-component{
    height: 10vh;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }  

  
  .container-fluid{
    // margin: 0;
    // padding: 0;
    padding-top: 10vh;
    
    // padding-top: ;
    
  }
  .card-container{   
    height: 90vh;
  }
  h3{
    padding: 0px 6px;
    height: 3vh;
    margin: 0;
    font-family: 'Bebas Neue';
    color: white;

  }
  .carousel-container{
    // display: flex;
    

    // justify-content: center;
    // padding: 0 50px;
    height: calc((90vh / 2) - 3vh);
    max-width: 100vw;
    position: relative;
    margin: auto;

    .slide{
      // display: none;
    }
    .row{ 
      position: absolute;
      left: 5vw;
      overflow-x:scroll;
      flex-wrap: nowrap;
      max-width: 85vw;
    }
    .prev, .next{
      position: absolute;
      top: 50%;
      width: 5vw;
      margin-top: -40px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 24px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
  }

  
</style>
