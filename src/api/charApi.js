import { request } from '../helper';
import { END_POINT } from '../constants';

export const  getCharList = () => {
  return request(`${END_POINT}/v1/public/characters`, {
    orderBy: 'name',
    limit: 10
  });
}