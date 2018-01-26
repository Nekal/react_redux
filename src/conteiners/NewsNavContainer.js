import React from 'react';
import { connect } from 'react-redux';

import NewsNav from '../components/NewsNav';
import UserService from '../services/UserService';

const NewsNavContainer = () => (
    <NewsNav userData={UserService.getUserData()} />
);

export default connect()(NewsNavContainer);
