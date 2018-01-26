import APIManager from '../utils';

let instance = null;

class NewsService {
  constructor() {
    instance = instance || this;
    return instance;
  }

  addNews = params => (
    APIManager
      .post('/api/add', params)
      .then((response) => {
        if (response.body.errors === undefined) {
          return new Promise((resolve) => {
            resolve(response.body);
          });
        }
        return new Promise((reject) => { reject(response.body); });
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      })
  );

  getAllNews =() => (
    APIManager
      .get('/api/allnews')
      .then((response) => {
        if (response.body.errors === undefined) {
          return new Promise((resolve) => {
            resolve(response.body);
          });
        }
        return new Promise((reject) => { reject(response.body); });
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      })
  );

  getNews = params => (
    APIManager
      .get('/api/news', params)
      .then((response) => {
        if (response.body.errors === undefined) {
          return new Promise((resolve) => {
            resolve(response.body);
          });
        }
        return new Promise((reject) => { reject(response.body); });
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      })
  );

  deleteNews = params => (
    APIManager
      .delete('/api/news', params)
      .then((response) => {
        if (response.body.errors === undefined) {
          return new Promise((resolve) => {
            resolve(response.body);
          });
        }
        return new Promise((reject) => { reject(response.body); });
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      })
  );

  editNews = params => (
    APIManager
      .put('/api/news', params)
      .then((response) => {
        if (response.body.errors === undefined) {
          return new Promise((resolve) => {
            resolve(response.body);
          });
        }
        return new Promise((reject) => { reject(response.body); });
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      })
  );
}

export default NewsService;
