import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeleteNewsComponent from '../components/DeleteNewsComponent';
import { deleteNewsAction } from '../actions';
import UserService from '../services/UserService';

const DeleteNewsContainer = ({ id, deleteNewsClick }) => (
    <DeleteNewsComponent id={id}
                         deleteNewsClick={deleteNewsClick}
                         userData={UserService.getUserData()}
    />
);

const mapDispatchToProps = (dispatch, props) => ({
  deleteNewsClick: (id, userId) => {
    deleteNewsAction(dispatch, props.history, id, userId);
  }
});

DeleteNewsContainer.propTypes = {
  id: PropTypes.number.isRequired,
  deleteNewsClick: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(DeleteNewsContainer);
