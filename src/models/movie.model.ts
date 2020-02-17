import ThumbModel from './thumb.model';
import TrailerModel from './trailer.model';

export default class MovieModel {
  id: string;

  title: string;

  city: string;

  siteURL: string;

  images: ThumbModel[];

  genres: string[];

  trailers: TrailerModel[];

  constructor() {
    this.id = '';
    this.title = '';
    this.city = '';
    this.siteURL = '';
    this.images = [];
    this.genres = [];
    this.trailers = [];
  }
}
