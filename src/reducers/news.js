const news = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_NEWS':
      return {
        newsList: [...state.newsList],
        activeNews: action.newsItem,
        addedNews: { ...state.addedNews }
      };
    case 'SHOW_ALL_NEWS':
      return {
        newsList: action.newsList,
        activeNews: { ...state.activeNews },
        addedNews: { ...state.addedNews }
      };
    case 'ADD_NEWS':
      return {
        newsList: [...state.newsList],
        activeNews: { ...state.activeNews },
        addedNews: action.newsItem
      };
    case 'DELETE_NEWS':
      window.localStorage.removeItem(action.id);
      return state;
    case 'EDIT_NEWS':
      // window.localStorage.setItem(action.id, JSON.stringify(action) );
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          status: 'new'
        }
      ];
    default:
      return state;
  }
};

export default news;
