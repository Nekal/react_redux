import { connect } from 'react-redux';
import React from 'react';
import NewsNav from '../components/NewsNav';
import UserService from '../services/UserService';

let NewsNavContainer = () => {
    return (
        <NewsNav userData={UserService.getUserData()} />
    );
};

NewsNavContainer = connect()(NewsNavContainer);

export default NewsNavContainer;
