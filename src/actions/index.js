import {SignInService, SignUpService} from "../services/UserService";
import {AddNewsService, GetAllNewsService} from "../services/NewsService";

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

export const getAllNewsAction = () => {
    return GetAllNewsService()
}

export const deleteNewsAction = (id) => ({
    type: 'DELETE_NEWS',
    id
})

export const editNewsAction = (news) => ({
    type: 'EDIT_NEWS',
    id: news.id,
    title: news.title,
    content: news.content,
})

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

