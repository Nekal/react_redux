import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './routes/App';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

