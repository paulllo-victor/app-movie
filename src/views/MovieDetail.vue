<template>
  <div>
    <router-link to="/" class="btn-return">Return</router-link>
    <div class="movie-detail">
        <h2>{{movie.Title}}</h2>
        <p>{{movie.Year}}</p>
        <p class="level">{{level}}</p>
        <img :src="movie.Poster" :alt="movie.Title" class="featured-img">
        <div v-for="(rating,index) in movie.Ratings" :key="index" class="rating">
            <div class="box-rating">
                <span>{{rating.Source}}</span>
                <span>{{rating.Value}}</span>
            </div>
        </div>
        <p>{{movie.Plot}}</p>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router';
import env from '@/env.js';

export default {
    data () {
        return {
            movie: {},
            route: useRoute(),
            level: '',
        }
    },
    mounted() {
        fetch(`http://www.omdbapi.com/?apiKey=${env.apiKey}&i=${this.route.params.id}&plot=full`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.movie = data;

            if (this.movie.imdbRating <= 4 ){
                this.level = "Bad"
            } else if (this.movie.imdbRating > 4 && this.movie.imdbRating < 7){
                this.level = "Regular"
            } else if (this.movie.imdbRating >= 7 && this.movie.imdbRating <= 9){
                this.level = "Good"
            }else if (this.movie.imdbRating == 10){
                this.level = "Excellent"
            }
        })
    }
}
</script>

<style lang="scss">
.movie-detail {
    padding: 16px;
    text-align: center;

    h2{
        color: #FFF;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .level{
        background-color: teal;
        display: inline-block;
        padding: 5px 20px;
        margin: 10px;
        border-radius: 8px;
    }

    .rating{
        padding: 10px;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        span {
            background-color: #728ca7;
            color: white;
            padding: 6px 8px;
            margin: 4px auto;
            border-radius: 10px 0 0 10px;

            &:last-child{
                color: #fff;
                border-radius: 0 10px 10px 0;
                background-color: teal;
            }
        }
    }
    
    .featured-img {
        display: block;
        margin: 0 auto;
        max-width: 200px;
        margin-bottom: 16px;
    }

    p {
        color: #fff;
        font-size: 18px;
        line-height: 1.4;
    }
}
.btn-return{
    margin: 16px;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: #42B883;
    display: inline-block;
}
</style>