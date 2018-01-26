import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInComponent from '../components/SignInComponent';
import { signInAction } from '../actions';

const SignInContainer = ({ signInClick }) => (
  <SignInComponent signInClick={signInClick}/>
);

const SignUp = dispatch => ({
  signInClick: (username, password) => {
    dispatch(signInAction({ username, password }));
  }
});

SignInContainer.propTypes = {
  signInClick: PropTypes.func.isRequired
};

export default connect(null, SignUp)(SignInContainer);
