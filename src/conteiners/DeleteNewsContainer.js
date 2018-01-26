import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DeleteNewsComponent from '../components/DeleteNewsComponent';
import { deleteNewsAction } from '../actions';

const DeleteNewsContainer = ({ id, deleteNewsClick }) => (
    <DeleteNewsComponent id={id} deleteNewsClick={deleteNewsClick}/>
);

const DeleteNews = dispatch => ({
  deleteNewsClick: (id) => {
    deleteNewsAction(dispatch, id);
  }
});

DeleteNewsContainer.propTypes = {
  id: PropTypes.number.isRequired,
  deleteNewsClick: PropTypes.func.isRequired
};

export default connect(null, DeleteNews)(DeleteNewsContainer);
