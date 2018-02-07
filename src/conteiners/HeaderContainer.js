import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '../components/HeaderComponent';
import UserService from '../services/UserService';

const HeaderContainer = ({ logoutClick }) => (
    <HeaderComponent userData={UserService.getUserData()} logoutClick={logoutClick}/>
);

const mapDispatchToProps = () => ({
  logoutClick: () => {
    window.localStorage.removeItem('USER_DATA');
    window.localStorage.removeItem('token');
  }
});

HeaderContainer.propTypes = {
  logoutClick: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
