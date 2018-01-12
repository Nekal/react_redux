const news = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            window.localStorage.setItem(action.id, JSON.stringify(action));
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    content: action.content,
                }
            ]
        case 'DELETE_TODO':
            window.localStorage.removeItem(action.id)
            return [
                ...state,
                {
                    id: action.id
                }
            ]
        default:
            return state
    }
}

export default news
