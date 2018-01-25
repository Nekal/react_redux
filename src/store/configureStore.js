import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
    news: {
        newsList: [],
        activeNews: {id: 'empty', title: 'empty', description: 'empty'},
        addedNews: {id: null}
    }
};

export default function configureStore () {
    const store = createStore(rootReducer, initialState);
    return store;
}
