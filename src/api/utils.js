const checkStatus = response => {
  if (response.ok) {
    return Promise.resolve(response);
  }

  return response.json().then(json => {
    const error = new Error(response.statusText);
    return Promise.reject(Object.assign(error, { json }));
  });
};

const makeRequest = (url, options = {}) => {
  options.headers = options.headers || {};
  options.method = options.method || 'GET';

  if (typeof options.body === 'string') {
    options.headers['Content-Type'] = 'application/json';
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(response => {
      if (response.status === 204) {
        return {};
      }

      return response.json();
    });
};

export default makeRequest;
