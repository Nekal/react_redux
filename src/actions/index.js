export const addNewsAction = (title, content) => ({
    type: 'ADD_NEWS',
    id: Math.random() * 100000000000000000,
    title,
    content
})

export const deleteNewsAction = (id) => ({
    type: 'DELETE_TODO',
    id
})
