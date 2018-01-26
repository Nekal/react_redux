import React from 'react';
import Route from 'react-router-dom/es/Route';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './Footer';
import AddNewsContainer from '../conteiners/AddNewsContainer';
import EditNewsContainer from '../conteiners/EditNewsContainer';
import NewsListContainer from '../conteiners/NewsListContainer';
import NewsDetailContainer from '../conteiners/NewsDetailContainer';
import SignUpContainer from '../conteiners/SignUpContainer';
import SignInContainer from '../conteiners/SignInContainer';
import HeaderContainer from '../conteiners/HeaderContainer';
import NotFound from './NotFound';

const App = () => (
  <Router>
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

export default App;
