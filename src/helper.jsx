import axios from 'axios';
import { API_KEY } from './constants';

let eTag = '';

export const request = (url, options, customHeaders) => {
  return  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url,
      headers: {
        Accept: '*/*',
        'If-None-Match': eTag,
        ...customHeaders,
      },
      // withCredentials: true,
      params: {
        ...options,
        apikey: API_KEY,
      }
    })
      .then(parseJSON)
      .then(response => {
        resolve(response.json)
      })
      .catch(({ error }) => {
        reject(error);
      });
  });
}
 

  export const parseJSON = response => {
    return new Promise(resolve => {
      eTag = response.etag;
      resolve({
        status: response.status,
        statusText: response.statusText,
        json: response.data.data,
      });
    });
  };