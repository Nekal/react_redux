import SignUpService from "../services/UserService";

export const addNewsAction = (id, title, content) => ({
    type: 'ADD_NEWS',
    id: id,
    title,
    content,
})

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
    SignUpService({username: user.username,
        email: user.email,
        password: user.password})
    return({
    type: 'SIGN_UP',
    username: user.username,
    email: user.email,
    password: user.password,
})
}
