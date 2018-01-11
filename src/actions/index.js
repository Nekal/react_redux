export const addNewsAction = (title, content) => ({
    type: 'ADD_NEWS',
    id: Math.random() * 100000000000000000,
    title,
    content
})
