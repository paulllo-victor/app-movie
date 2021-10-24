<template>
  <div class="home">
   <div class="feature-card">
     <router-link to="/movie/tt0409591">
      <img src="https://br.web.img3.acsta.net/pictures/16/04/11/16/56/089875.jpg" alt="Naruto poster" class="featured-img">
      <div class="detail">
        <h3>Naruto</h3>
        <p>Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage.</p>
      </div>
     </router-link>
   </div>

   <form @submit.prevent="SearchMovies" class="search-box">
     <input type="text"  placeholder="What are you looking for?" v-model="search.value">
     <input type="submit" value="Search">
   </form>

   <div class="movies-list">
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
  </div>
</template>

<script>
import env from '@/env.js';
import Movie from '../components/Movie.vue'
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
    Movie
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
  .feature-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }

    .detail{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.6);
      padding: 16px;
      z-index: 1;

      h3{
        color: white;
        margin-bottom: 16px;
      }

      p {
        color: #FFF;
      }
    }
  }
  .search-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    align-items: center;

    input{
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"]{
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42B883;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        margin-top: 16px;

        &:active {
          background-color: #3b8070;

        }
      }
    }
  }

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
}
</style>
