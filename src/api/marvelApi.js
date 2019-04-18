import { request } from '../helper';
import { END_POINT } from '../constants';

export const getCharList = (offset) => {
  return request(`${END_POINT}/v1/public/characters`, {
    orderBy: 'modified',
    limit: 10,
    offset
  });
}

export const getCharacterDetail = (id) => {
  return request(`${END_POINT}/v1/public/characters/${id}`);
}

export const getCharacterStory = (url = '') => {
  return request (`${url}`);
}