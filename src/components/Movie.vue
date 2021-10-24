<template>
    <router-link :to="`/movie/${imdbID}`" class="movie-link">
        <div class="product-image">
            <img :src="Poster" :alt="Title">
            <div class="type">{{Type}}</div>
        </div>
        <div class="detail">
            <p class="year">{{Year}}</p>
            <h3>{{ Title }}</h3>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['imdbID','Title','Poster','Type','Year']
}
</script>

<style lang="scss" scoped>
.movie-link{
    display: flex;
    flex-direction: column;
    height: 100%;

    .product-image {
        position: relative;
        display: block;

        img {
        display: block;
        width: 100%;
        height: 275px;
        object-fit: cover;
        }

        .type {
        position: absolute;
        padding: 8px 10px;
        background-color:  #42B883;
        color: white;
        bottom: 16px;
        left: 0px;
        text-transform: capitalize;
        }
    }

    .detail {
        background-color:  #496583;
        padding: 16px 8px;
        flex: 1 1 100%;
        border-radius: 0px 0px 8px 8px;

        .year {
        color: #aaa;
        font-size:  14px;
        }

        h3 {
        color: #fff;
        margin-top: 5px;
        font-weight: 600;
        font-size: 18px;
        }
    }
}
</style>