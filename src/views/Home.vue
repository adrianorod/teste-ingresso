<template>
  <div class="home">
    <svg class="icon-loading" v-if="movies.length === 0 && !hasError">
      <use xlink:href="#icon-loading"></use>
    </svg>
    <div class="error-message" v-if="hasError">
      Ops! Parece que algo não carregou corretamente. Pode tentar novamente? :/
    </div>
    <div class="error-message" v-if="filteredMovies.length === 0 && movies.length !== 0">
      Ops! Sua busca não resultou em nada. Tente digitar algo diferente! ;)
    </div>

    <div class="movie-wrapper">
      <div class="movie-list-title">
        <span>em cartaz</span>
      </div>
      <ul class="movie-list">
        <li
          class="movie"
          v-for="movie in filteredMovies"
          :key="movie.id"
          @click.prevent="selectMovie(movie)"
        >
          <div class="thumb"><img :src="movie.images[0].url" :alt="movie.title" /></div>
          <span class="title">{{movie.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import MovieService from '@/services/movie.service';
import MovieModel from '@/models/movie.model';

@Component({
  components: {},
})
export default class Home extends Vue {
  mounted() {
    this.getMovies();
  }

  get selectedUF() {
    return this.$store.state.selectedUF;
  }

  get hasError() {
    return this.$store.state.hasError;
  }

  get movies() {
    return this.$store.state.movies;
  }

  get searchValue() {
    return this.$store.state.searchValue;
  }

  get filteredMovies() {
    return this.movies.filter(
      (item: MovieModel) => item.title.toLowerCase().includes(this.searchValue.toLowerCase()),
    );
  }

  async getMovies() {
    this.$store.commit('setMovies', []);
    const data = await MovieService.getFilms(this.selectedUF.id);
    if (data) this.$store.commit('setMovies', data);
    else this.$store.commit('setHasError', true);
  }

  @Watch('selectedUF')
  onSelectedUFChanged() {
    this.getMovies();
  }

  selectMovie = (movie: MovieModel) => {
    const trailer = movie.trailers.find((item) => item.type.toLowerCase() === 'youtube');
    const url = trailer ? trailer.url : movie.siteURL;
    window.open(url);
  }
}
</script>

<style scoped lang="scss">
.home {
  > .icon-loading {
    margin: 50px;
    width: 50px;
    height: 50px;
  }

  > .error-message {
    margin: 100px 10px;
  }

  > .movie-wrapper {
    > .movie-list-title {
      text-transform: uppercase;
      font-family: Proxima Nova Bold;
      color: #FE7302;
      text-align: left;
      padding: 10px 0;
      border-bottom: 1px solid #616161;

      > span {
        padding: 10px 0;
        border-bottom: 1px solid #FE7302;
      }
    }

    > .movie-list {
      display: flex;
      flex-wrap: wrap;

      > .movie {
        list-style: none;
        width: 200px;
        margin: 10px;

        &:hover {
          cursor: pointer;

          > .thumb {
            > img {
              width: 103%;
            }
          }
        }

        > .thumb {
          max-height: 293px;
          max-width: 200px;
          margin-bottom: 5px;
          overflow: hidden;
          text-align: center;

          > img {
            height: auto;
            width: 100%;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            transition: width .3s ease;
          }
        }

        > .title {
          font-family: Proxima Nova Bold;
        }
      }
    }
  }
}
</style>
