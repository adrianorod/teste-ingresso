import Vue from 'vue';
import Vuex from 'vuex';

import MovieModel from '@/models/movie.model';
import UFModel from '@/models/uf.model';
import UF from '@/utils/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: Array<MovieModel>(),
    hasError: false,
    selectedUF: UF[0],
  },

  mutations: {
    setMovies(state, movies: MovieModel[]) {
      state.movies = movies;
    },
    setHasError(state, hasError: boolean) {
      state.hasError = hasError;
    },
    setSelectedUf(state, uf: UFModel) {
      state.selectedUF = uf;
    },
  },
});
