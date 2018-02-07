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
        if (response.body.errors) {
          return new Promise(resolve => resolve(response.body));
        }
        return new Promise(reject => reject(response.body));
      })
      .catch((err) => {
        if (err.status === Number(401)) {
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('USER_DATA');
        }
      })
  );

  getAllNews = () => (
    APIManager
      .get('/api/allnews')
      .then((response) => {
        if (response.body.errors) {
          return new Promise(resolve => resolve(response.body));
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
        if (response.body.errors) {
          return new Promise(resolve => resolve(response.body));
        }
        return new Promise(reject => reject(response.body));
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      })
  );

  deleteNews = params => (
    APIManager
      .delete('/api/news', params)
      .then((response) => {
        if (response.body.errors) {
          return new Promise(resolve => resolve(response.body));
        }
        return new Promise((reject) => { reject(response.body); });
      })
      .catch((err) => {
        if (err.status === Number(401)) {
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('USER_DATA');
        }
      })
  );

  editNews = params => (
    APIManager
      .put('/api/news', params)
      .then((response) => {
        if (response.body.errors) {
          return new Promise(resolve => resolve(response.body));
        }
        return new Promise(reject => reject(response.body));
      })
      .catch((err) => {
        if (err.status === Number(401)) {
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('USER_DATA');
        }
      })
  );
}

export default NewsService;
