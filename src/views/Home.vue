<template>
  <div class="home">
    <svg class="icon-loading" v-if="$store.state.movies.length === 0 && !$store.state.hasError">
      <use xlink:href="#icon-loading"></use>
    </svg>
    <div class="error-message" v-if="$store.state.hasError">
      Ops! Parece que algo não carregou corretamente. Pode tentar novamente? :/
    </div>

    <div class="movie-wrapper">
      <ul class="movie-list">
        <li class="movie" v-for="movie in $store.state.movies" :key="movie.id">
          <div class="thumb"><img :src="movie.images[0].url" :alt="movie.title" /></div>
          <span class="title">{{movie.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieService from '@/services/movie.service';

@Component({
  components: {},
})
export default class Home extends Vue {
  mounted() {
    this.getMovies();
  }

  async getMovies() {
    const data = await MovieService.getFilms(this.$store.state.selectedUF);
    if (data) this.$store.state.movies = data;
    else this.$store.state.hasError = true;
  }
}
</script>

<style scoped lang="scss">
.home {
  .icon-loading {
    margin: 50px;
    width: 50px;
    height: 50px;
  }

  > .movie-wrapper {
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
