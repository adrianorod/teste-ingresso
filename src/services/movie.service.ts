import MovieModel from '@/models/movie.model';
import api from './api.service';

export default class MovieService {
  public static getFilms(uf: number) {
    return api.get(`/${uf}/partnership/home`)
      .then((res) => res.data)
      .then((data: MovieModel[]) => data)
      .catch((error) => console.error(error));
  }
}
