import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddNewsComponent from '../components/AddNewsComponent';
import { addNewsAction } from '../actions';
import NotFound from '../components/NotFound';
import UserService from '../services/UserService';

const AddNewsContainer = ({ addNewsClick, checkUserData }) => (
    <div>
      {checkUserData() ? (
        <AddNewsComponent addNewsClick={addNewsClick}
                          userData={UserService.getUserData()}
        />
      ) : (<NotFound/>)}
    </div>
);

const mapDispatchToProps = (dispatch, props) => ({
  addNewsClick(title, description, userId) {
    if (title !== '' && description !== '') {
      addNewsAction(dispatch, props.history, title, description, userId);
    }
  },
  checkUserData() {
    const userData = UserService.getUserData();
    return (userData !== null && userData.role === 'admin');
  }
});

AddNewsContainer.propTypes = {
  addNewsClick: PropTypes.func.isRequired,
  checkUserData: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddNewsContainer);
