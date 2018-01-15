export const addNewsAction = (title, content) => ({
    type: 'ADD_NEWS',
    id: Math.random() * 100000000000000000,
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
