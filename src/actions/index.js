import {SignInService, SignUpService} from "../services/UserService";
import {
    AddNewsService, deleteNewsService, editNewsService, GetAllNewsService,
    GetNewsService
} from "../services/NewsService";

export const addNewsAction = (title, description) => {
    AddNewsService({
        title: description,
        description: description,
    })
    return({
        type: 'ADD_NEWS',
        title,
        description,
    })
}

export const getAllNewsAction = (dispatch) => {

    GetAllNewsService()
        .then((newsList => {
            dispatch({
                type: 'SHOW_ALL_NEWS',
                newsList
            })
        }))
}



export const getNewsAction = (dispatch, id, news) => {
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
    GetNewsService({id: id})
        .then((newsItem => {
            dispatch({
                type: 'SHOW_NEWS',
                newsItem
            })
        }));
    // }
}

export const deleteNewsAction = (dispatch, id) => {
    deleteNewsService({id: id})
        .then((() => {
            window.location.href = '/'
        }));
}

export const editNewsAction = (dispatch, id, title, description) => {
    editNewsService({
            id,
            title,
            description
        })
        .then((() => {
            window.location.href = '/'
        }));
}

export const signUpAction = (user) => {
    SignUpService({
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role
    })
    return ({
        type: 'SIGN_UP',
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.type
    })
}

export const signInAction = (user) => {
    SignInService({
        username: user.username,
        password: user.password
    })
    return ({
        type: 'SIGN_IN',
        username: user.username,
        password: user.password,
    })
}

