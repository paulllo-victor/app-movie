<template>
  <div>
    <router-link to="/" class="btn-return">Return</router-link>
    <MovieDetails :movie="movie" />
  </div>
</template>

<script>
import {useRoute} from 'vue-router';
import MovieDetails from '@/components/MovieDetails';

export default {
    name : "MovieDetail",
    components: {
        MovieDetails
    },
    data () {
        return {
            route: useRoute()
        }
    },
    computed: {
        movie() {
            return this.$store.state.movie
        }
    },
    mounted() {
        this.$store.dispatch('movieDetails',this.route.params.id)
    }
}
</script>

<style lang="scss">
.btn-return{
    margin: 16px;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: #42B883;
    display: inline-block;
}
</style>