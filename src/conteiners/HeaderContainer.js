import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from '../components/HeaderComponent';
import UserService from '../services/UserService';

let HeaderContainer = ({logoutClick}) => {
    return (
        <HeaderComponent userData={UserService.getUserData()} logoutClick={logoutClick}/>
    );
};

let Logout = () => {
    return ({
        logoutClick: () => {
            window.localStorage.removeItem('USER_DATA');
        }
    });
};

HeaderContainer.propTypes = {
    logoutClick: PropTypes.func.isRequired
};

HeaderContainer = connect(null, Logout)(HeaderContainer);

export default HeaderContainer;
