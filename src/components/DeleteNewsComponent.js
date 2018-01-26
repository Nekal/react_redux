import React from 'react';
import PropTypes from 'prop-types';
import '../styles/bootstrap.css';
import '../styles/news.css';
import {Link} from 'react-router-dom';

const DeleteNewsComponent = ({id, deleteNewsClick}) => {
  return (
    <Link to={'/'}>
      <button className='btn btn-primary btn-large' type={'submit'} onClick={() => { deleteNewsClick(id); }}>
                 Delete
      </button>
    </Link>
  );
};

DeleteNewsComponent.propTypes = {
  id: PropTypes.number.isRequired,
  deleteNewsClick: PropTypes.func.isRequired
};

export default DeleteNewsComponent;
