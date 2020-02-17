import Vue from 'vue';
import Vuex from 'vuex';

import MovieModel from '@/models/movie.model';
import UF from '@/utils/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: Array<MovieModel>(),
    hasError: false,
    selectedUF: UF.SP,
  },

  mutations: {
    setMovies(state, movies: MovieModel[]) {
      state.movies = movies;
    },
    setHasError(state, hasError: boolean) {
      state.hasError = hasError;
    },
    setSelectedUf(state, uf: number) {
      state.selectedUF = uf;
    },
  },
});
