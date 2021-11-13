import { createStore } from 'vuex'
import axios from "axios"
import env from '@/env.js';

export default createStore({
    state :{
        movie:{},
        movies:[]
    },
    mutations:{
        SET_MOVIES(state,payload){
            state.movies = payload
        },
        SET_MOVIE(state,payload){
            state.movie = payload
        }
    },
    actions:{
        allMovies(context,payload){
            axios.get(`http://www.omdbapi.com/?apiKey=${ env.apiKey }&s=${payload}`)
                .then(response => response.data)
                .then(data => {
                    context.commit('SET_MOVIES',data.Search)
                });
        },
        searchMovies(context,payload){
            axios.get(`http://www.omdbapi.com/?apiKey=${ env.apiKey }&s=${payload}`)
                .then(response => response.data)
                .then(data => {
                    context.commit('SET_MOVIES',data.Search)
                });
        },
        movieDetails(context,payload){
            axios.get(`http://www.omdbapi.com/?apiKey=${env.apiKey}&i=${payload}&plot=full`)
                .then(response => response.data)
                .then(data => {
                    context.commit('SET_MOVIE',data)
                });
        }
    },
    getters:{

    },
    modules:{

    }
})