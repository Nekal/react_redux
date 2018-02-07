import NewsService from '../services/NewsService';
import UserService from '../services/UserService';

const newsService = new NewsService();
const userService = new UserService();

export const loginUserAction = (dispatch, history, user) => {
  userService.getToken({
    username: user.username,
    password: user.password
  })
    .then((token) => {
      window.localStorage.setItem('token', token);
      dispatch({
        type: 'LOGIN_USER',
        token
      });
      userService.signIn({
        username: user.username,
        password: user.password
      });
    });
};

export const addNewsAction = (dispatch, history, title, description, userId) => {
  const token = window.localStorage.getItem('token');
  newsService.addNews({
    title,
    description,
    userId,
    token
  })
    .then((newsItem) => {
      dispatch({
        type: 'ADD_NEWS',
        newsItem
      });
      history.push('/');
    });
};

export const getAllNewsAction = (dispatch) => {
  newsService.getAllNews()
    .then((newsList) => {
      if (newsList.name === undefined) {
        dispatch({
          type: 'SHOW_ALL_NEWS',
          newsList
        });
      }
    });
};

export const getNewsAction = (dispatch, id) => {
  newsService.getNews({ id })
    .then((newsItem) => {
      dispatch({
        type: 'SHOW_NEWS',
        newsItem
      });
    });
};

export const deleteNewsAction = (dispatch, history, id, userId) => {
  const token = window.localStorage.getItem('token');
  newsService.deleteNews({ token, id, userId })
    .then(() => {
      history.push('/');
    });
};

export const editNewsAction = (dispatch, history, id, title, description, userId) => {
  const token = window.localStorage.getItem('token');
  newsService.editNews({
    id,
    title,
    description,
    userId,
    token
  })
    .then(() => {
      history.push('/');
    });
};

export const signUpAction = (user) => {
  userService.signUp({
    username: user.username,
    email: user.email,
    password: user.password,
    role: user.role
  });
};

export const signInAction = (user) => {
  userService.signIn({
    username: user.username,
    password: user.password
  });
};
