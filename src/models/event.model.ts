import MovieModel from './movie.model';

export default class EventModel {
  event: MovieModel;

  constructor() {
    this.event = new MovieModel();
  }
}
