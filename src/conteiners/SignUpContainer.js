import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpComponent from '../components/SignUpComponent';
import { signUpAction } from '../actions';

const SignUpContainer = ({ signUpClick }) => (
  <SignUpComponent signUpClick={signUpClick}/>
);

const SignUp = dispatch => ({
  signUpClick: (username, email, password, role) => {
    dispatch(signUpAction({
      username, email, password, role
    }));
  }
});

SignUpContainer.propTypes = {
  signUpClick: PropTypes.func.isRequired
};

export default connect(null, SignUp)(SignUpContainer);
