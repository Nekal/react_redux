import React from 'react';
import PropTypes from 'prop-types';

import '../styles/bootstrap.css';

const HeaderComponent = ({ userData, logoutClick }) => (
    <header className='navbar-inverse '>
      <div className='container'>
        <div className='nav navbar-left'>
          <li><a href='/'>Instructions</a></li>
        </div>

        {userData === null ? (
          <div className='nav navbar-right'>
            <li><a href='/signin'>Sign in</a></li>
            <li><a href='/signup'>Sign up</a></li>
          </div>
        ) : (
          <div className='nav navbar-right'>
            <li><a href={'/signin'} onClick={logoutClick}>Logout</a></li>
          </div>
        )}
      </div>
    </header>
);

HeaderComponent.propTypes = {
  userData: PropTypes.func.isRequired,
  logoutClick: PropTypes.func.isRequired
};

export default HeaderComponent;
