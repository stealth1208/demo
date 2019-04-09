import { request } from '../helper';
import { END_POINT } from '../constants';

export const  getCharList = () => {
  return request(`${END_POINT}/v1/public/characters`, {
    params: {
      orderBy: 'name',
      limit: 10
    }
  })
}