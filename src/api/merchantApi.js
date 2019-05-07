import { request } from '../helper';

const BASE_URL = 'https://gist.githubusercontent.com/poepanda/004af517163df9b539628e9d307e5d76/raw/';

export const getMerchantList = () => {
  return request(`${BASE_URL}`);
}
