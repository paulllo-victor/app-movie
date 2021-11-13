<template>
  <div class="home">
    <banner/>
    <input-search @searchMovies="search.value = $event"/>
    <div v-if="movies" class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <Movie
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
import Movie from '../components/Movie.vue'
import Banner from '../components/Banner.vue'
import InputSearch from '../components/InputSearch.vue'

export default {
  data () {
    return {
      search: {
        value: ""
      },
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
  computed: {
    movies:{
      get(){
        return this.$store.state.movies
      },
      set(value){
        this.$store.dispatch('searchMovies',value)
      }
    }
  },
  methods: {
    SearchMovies() {
      if (this.search.value != ""){
        this.movies = this.search.value
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
    this.$store.dispatch('allMovies',search)
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
