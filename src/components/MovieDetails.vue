<template>
  <div class="movie-detail">
        {{$store.state.movie}}
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
</template>

<script>
export default {
    props: {
        movie:{
            type: Object,
            required: true
        }
    },
    data (){
        return {
            level: '',
        }
    },
    mounted(){
        if (this.movie.imdbRating <= 4 ){
            this.level = "Bad"
        } else if (this.movie.imdbRating > 4 && this.movie.imdbRating < 7){
            this.level = "Regular"
        } else if (this.movie.imdbRating >= 7 && this.movie.imdbRating <= 9){
            this.level = "Good"
        }else if (this.movie.imdbRating == 10){
            this.level = "Excellent"
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>