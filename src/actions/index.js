import NewsService from '../services/NewsService';
import UserService from '../services/UserService';

let newsService = new NewsService();
let userService = new UserService();

export const addNewsAction = (dispatch, title, description) => {
    newsService.addNews({
        title: description,
        description: description
    }).then((newsItem) => {
        dispatch({
            type: 'ADD_NEWS',
            newsItem
        });
    // window.location.href = "/"
    });
};

export const getAllNewsAction = (dispatch) => {
    newsService.getAllNews()
        .then(newsList => {
            if (newsList.name === undefined) {
                dispatch({
                    type: 'SHOW_ALL_NEWS',
                    newsList
                });
            }
        });
};

export const getNewsAction = (dispatch, id) => {
    // console.log("news: " + JSON.stringify(news))
    // const newsItem = news.find(news => news.id === id);
    //
    // if (newsItem) {
    //     console.log("if: " + JSON.stringify(newsItem))
    //     dispatch({
    //         type: 'SHOW_NEWS',
    //         newsItem
    //     });
    // } else {
    newsService.getNews({id: id})
        .then(newsItem => {
            dispatch({
                type: 'SHOW_NEWS',
                newsItem
            });
        });
    // }
};

export const deleteNewsAction = (dispatch, id) => {
    newsService.deleteNews({id: id})
        .then(() => {
            window.location.href = '/';
        });
};

export const editNewsAction = (dispatch, id, title, description) => {
    newsService.editNews({
        id,
        title,
        description
    })
        .then(() => {
            window.location.href = '/';
        });
};

export const signUpAction = (user) => {
    userService.signUp({
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role
    });
    return ({
        type: 'SIGN_UP',
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.type
    });
};

export const signInAction = (user) => {
    userService.signIn({
        username: user.username,
        password: user.password
    });
    return ({
        type: 'SIGN_IN',
        username: user.username,
        password: user.password
    });
};
