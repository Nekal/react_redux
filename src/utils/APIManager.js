import superagent from 'superagent';

export default {
  get (url, params) {
    return (
      superagent
        .get(url)
        .query(params)
        .set('Accept', 'application/json')
    );
  },

  post (url, params) {
    return (
      superagent
        .post(url)
        .send(params)
        .set('Accept', 'application/json')
    );
  },

  put (url, params) {
    return (
      superagent
        .put(url)
        .send(params)
        .set('Accept', 'application/json')
    );
  },

  delete (url, params) {
    return (
      superagent
        .delete(url)
        .query(params)
        .set('Accept', 'application/json')
    );
  }
};
