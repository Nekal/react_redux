import React from 'react';
import PropTypes from 'prop-types';

import '../styles/addForm.css';
import '../styles/bootstrap.css';

const SignUpComponent = ({ signUpClick }) => {
  let username;
  let email;
  let password;
  return (
    <div className='container' style={{ marginTop: 200 }}>
      <div className='col-sm-6 col-sm-offset-3'>
        <h1> Sign Up </h1>
        <div className='form-group'>
          <label>Username</label>
          <input type='text' className='form-control' name='username' ref={(ref) => {
            username = ref;
          }} />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' className='form-control' name='email' ref={(ref) => {
            email = ref;
          }} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' name='password' ref={(ref) => {
            password = ref;
          }} />
        </div>
        <button className='btn btn-primary btn-lg' onClick={() => {
          signUpClick(username.value, email.value, password.value, 'user');
        }}>Sign Up</button>
      </div>
    </div>
  );
};

SignUpComponent.propTypes = {
  signUpClick: PropTypes.func.isRequired
};

export default SignUpComponent;
