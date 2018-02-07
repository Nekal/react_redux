import React from 'react';
import PropTypes from 'prop-types';

import '../styles/addForm.css';
import '../styles/bootstrap.css';

const AddNewsComponent = ({ addNewsClick, userData }) => {
  let title;
  let description;
  return (
    <div className='container'>
      <div className='form-group addNews'>
        <h3 className='page-header'>Add news</h3>
        <div className='form-group'>
          <label htmlFor='listItemName'>Title <span>*</span></label>
          <input className='form-control' placeholder='Input title' ref={(node) => {
            title = node;
          }} />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='listItemDescription'>Description</label>
          <textarea className='form-control' placeholder='Input description' rows='10'
            ref={(node) => {
              description = node;
            }} />
        </div>
          <button className='btn btn-primary btn-large'
            onClick={() => { addNewsClick(title.value, description.value, userData.id); }}>
            Add
          </button>
      </div>
    </div>
  );
};

AddNewsComponent.propTypes = {
  addNewsClick: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired
};

export default AddNewsComponent;
