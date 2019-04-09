import axios from 'axios';
import { API_KEY } from './constants';

export const request = (url, options, customHeaders) => {
  console.log('options', options)
  return  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url,
      headers: {        
        Accept: '*/*',
        ...customHeaders,
      },
      withCredentials: true,
      options: {        
        apikey: API_KEY,
        ...options,
      }
    })
      .then(parseJSON)
      .then(response => resolve(response.json))
      .catch(({ response }) => {
        console.log(response);
      });
  });
}
 

  export const parseJSON = response => {
    if (response.status === 201 || response.status === 204) {
      return new Promise(resolve => {
        resolve({
          status: response.status,
          statusText: response.statusText,
          json: {
            response: response.data,
            message: 'OK',
          },
        });
      });
    }
    return new Promise(resolve => {
      resolve({
        ...response,
        status: response.status,
        statusText: response.statusText,
        json: response.data,
      });
    });
  };