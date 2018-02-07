import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/bootstrap.css';
import '../styles/news.css';

const DeleteNewsComponent = ({ id, deleteNewsClick, userData }) => (
    <Link to={'/'}>
      <button className='btn btn-primary btn-large'
              type={'submit'}
              onClick={() => { deleteNewsClick(id, userData.id); }}>
       Delete
      </button>
    </Link>
);

DeleteNewsComponent.propTypes = {
  id: PropTypes.number.isRequired,
  deleteNewsClick: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired
};

export default DeleteNewsComponent;
