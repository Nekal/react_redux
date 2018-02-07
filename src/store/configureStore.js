import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import logger from '../middlewares/logger';


const enhancer = compose(
  applyMiddleware(
    thunk,
    logger
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const initialState = {
  news: {
    newsList: [],
    activeNews: { id: 'empty', title: 'empty', description: 'empty' },
    addedNews: { id: null }
  }
};

export default function configureStore(reducer = rootReducer, initial = initialState) {
  const store = createStore(reducer, initial, enhancer);
  return store;
}
