import axios from 'axios';
import _ from 'lodash';

export const request = (url, options, customHeaders) => {
  return  new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url,
      headers: {
        Accept: '*/*',
        ...customHeaders,
      },
      params: {
        ...options,
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
}; 

export const parseJSON = response => {
  return new Promise(resolve => {
    resolve({
      status: response.status,
      statusText: response.statusText,
      json: response.data
    });
  });
};

export class cookiesHelper {  
  static setCookie = (cookieName, cookieValue, expirationTimeInHours) => {
    const d = new Date();
    d.setTime(d.getTime() + expirationTimeInHours * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
  }

  static getCookie = (cookieName) => {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + cookieName + '=');
    if (parts.length === 2) {
      const lastPart = parts.pop();
      if (lastPart) {
        const result = lastPart.split(';').shift();
        return result === 'undefined' ? null : result;
      }
    }

    return null;
  };
}

export const lodashSort = (array, func) => {
  return _.sortBy(array, func);
};
