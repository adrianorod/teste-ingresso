import EventModel from '@/models/event.model';
import api from './api.service';

export default class MovieService {
  public static getFilms(uf: number) {
    return api.get(`/${uf}/partnership/home`)
      .then((res) => res.data)
      .then((data) => data.map((item: EventModel) => item.event))
      .catch((error) => console.error(error));
  }
}
