import axios from 'axios';
import { API_KEY } from './constants';

let eTags = {};

export const request = (url, options, customHeaders) => {
  return  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url,
      headers: {
        Accept: '*/*',
        // 'If-None-Match': eTags[url] || '',
        ...customHeaders,
      },
      params: {
        ...options,
        apikey: API_KEY,
      }
    })
      .then(parseJSON)
      .then(response => {
        eTags = {
          ...eTags,
          [url]: response.etag
        };

        resolve(response.json)
      })
      .catch(({ error }) => {
        reject(error);
      });
  });
}
 

  export const parseJSON = response => {
    return new Promise(resolve => {
      resolve({
        status: response.status,
        statusText: response.statusText,
        json: response.data.data,
        etag: response.data.etag
      });
    });
  };