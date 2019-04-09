import axios from 'axios';

export const request = (method, url, options, customHeaders) =>
  new Promise((resolve, reject) => {
    axios({
      method,
      url,
      headers: {
        // ...headers(extraHeaders),
        ...customHeaders,
      },
      withCredentials: true,
      ...options,
    })
      .then(parseJSON)
      .then(response => resolve(response.json))
      .catch(({ response }) => {
        console.log(response);
      });
  });

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