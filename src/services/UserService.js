import APIManager from '../utils';

let instance = null;

class UserService {
  constructor() {
    instance = instance || this;
    return instance;
  }

  getToken = params => (
    APIManager
      .get('api/gettoken', params)
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
  ) ;

  signUp = (params) => {
    APIManager
      .post('api/signup', params)
      .then((response) => {
        if (response.body.errors !== undefined) {
          console.log(response.body.errors[0].message);
        } else {
          window.location.href = '/signin';
        }
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      });
  };

  signIn = (params) => {
    APIManager
      .get('api/signin', params)
      .then((response) => {
        if (response.body !== null) {
          window.localStorage.setItem('USER_DATA', JSON.stringify(response.body));
          window.location.href = '/';
        } else {
          console.log('Username or password dont match');
        }
      })
      .catch((err) => {
        console.log(`ERROR: ${JSON.stringify(err)}`);
      });
  };

  static getUserData() {
    const user = JSON.parse(window.localStorage.getItem('USER_DATA'));
    if (user) {
      return user;
    }
    return null;
  }
}

export default UserService;
