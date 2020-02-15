import ThumbModel from './thumb.model';
import TrailerModel from './trailer.model';

interface MovieModel {
  id: string;
  title: string;
  city: string;
  siteURL: string;
  images: ThumbModel[];
  genres: string[];
  trailers: TrailerModel[];
}

export default MovieModel;
