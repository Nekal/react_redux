import React from 'react';
import Route from 'react-router-dom/es/Route';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';
import AddNewsContainer from '../conteiners/AddNewsContainer';
import EditNewsContainer from '../conteiners/EditNewsContainer';
import NewsListContainer from '../conteiners/NewsListContainer';
import NewsDetailContainer from '../conteiners/NewsDetailContainer';
import SignUpContainer from '../conteiners/SignUpContainer';
import SignInContainer from '../conteiners/SignInContainer';
import HeaderContainer from '../conteiners/HeaderContainer';
import NotFound from '../components/NotFound';

const App = ({ history }) => (
  <Router history={history}>
    <div>
      <div style={{ height: 936 }}>
        <HeaderContainer />
        <Switch>
          <Route exact path='/' component={NewsListContainer} />
          <Route path='/add' component={AddNewsContainer} />
          <Route path='/edit/:id' component={EditNewsContainer} />
          <Route path='/signup' component={SignUpContainer} />
          <Route path='/signin' component={SignInContainer} />
          <Route path='/news/:id' component={NewsDetailContainer}/>
          <Route path='/:id' component={NotFound}/>
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;
