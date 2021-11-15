import { createStore } from 'vuex'
import axios from "axios"
import env from '@/env.js';

export default createStore({
    state :{
        movie:{},
        movies:[],
        numberPages:[],
    },
    mutations:{
        SET_MOVIES(state,payload){
            state.movies = payload
        },
        SET_MOVIE(state,payload){
            state.movie = payload
        },
        SET_NUMBER_PAGES(state,payload){
            let pages = 1;
            if(payload > 10){
                pages = payload / 10
            }
            state.numberPages = Math.round(pages)
        }
    },
    actions:{
        allMovies(context,payload){
            axios.get(`http://www.omdbapi.com/?apiKey=${ env.apiKey }&s=${payload}`)
                .then(response => response.data)
                .then(data => {
                    context.commit('SET_MOVIES',data.Search)
                    context.commit('SET_NUMBER_PAGES',data.totalResults)
                });
        },
        searchMovies(context,payload){
            axios.get(`http://www.omdbapi.com/?apiKey=${ env.apiKey }&s=${payload}`)
                .then(response => response.data)
                .then(data => {
                    context.commit('SET_MOVIES',data.Search)
                    context.commit('SET_NUMBER_PAGES',data.totalResults)
                });
        },
        movieDetails(context,payload){
            axios.get(`http://www.omdbapi.com/?apiKey=${env.apiKey}&i=${payload}&plot=full`)
                .then(response => response.data)
                .then(data => {
                    context.commit('SET_MOVIE',data)
                });
        },
        changePage(context,payload){
            axios.get(`http://www.omdbapi.com/?apiKey=${env.apiKey}&s=${payload.search}&page=${payload.page}`)
                .then(response => response.data)
                .then(data => {
                    context.commit('SET_MOVIES',data.Search)
                    context.commit('SET_NUMBER_PAGES',data.totalResults)
                });
        }
    },
    getters:{

    },
    modules:{

    }
})