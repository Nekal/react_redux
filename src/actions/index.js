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
