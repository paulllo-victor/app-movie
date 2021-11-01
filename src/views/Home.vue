<template>
  <div class="home">
    <banner/>
    <input-search @searchMovies="search.value = $event"/>
    <div v-if="movies" class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <movie 
        :imdbID="movie.imdbID"
        :Title="movie.Title"
        :Poster="movie.Poster"
        :Type="movie.Type"
        :Year="movie.Year"
        />
      </div>
    </div>

    <p v-else class="message">No movie, series or anime found</p>
  </div>
</template>

<script>
import env from '@/env.js';
import Movie from '../components/Movie.vue'
import Banner from '../components/Banner.vue'
import InputSearch from '../components/InputSearch.vue'
import axios from "axios";

export default {
  data () {
    return {
      search: {
        value: ""
      },
      movies: [],
      options: ['naruto','ball','boruto','teste','love','avengers','batman'],
    }
  },
  components: {
    Movie,
    Banner,
    InputSearch
  },
  watch:{
    'search.value': function(){
      this.SearchMovies()
    }
  },
  methods: {
    SearchMovies() {
      if (this.search.value != ""){
        axios
        .get(`http://www.omdbapi.com/?apiKey=${ env.apiKey }&s=${this.search.value}`)
        .then(response => response.data)
        .then(data => {
          console.log(data);
          this.movies = data.Search;
        });
      }
    },
    getRandomItem(arr){
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      return item;
    }
  },
  mounted(){
    const search = this.getRandomItem(this.options);
    axios
    .get(`http://www.omdbapi.com/?apiKey=${ env.apiKey }&s=${search}`)
    .then(response => response.data)
    .then(data => {
      console.log(data);
      this.movies = data.Search;
    });
  }
}
</script>

<style lang="scss">
.home{  
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px ;

    .movie{
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
    }
  }
  .message{
    color: white;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    padding: 20px 0;
  }
}
</style>
