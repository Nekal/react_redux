import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInComponent from '../components/SignInComponent';
import { loginUserAction } from '../actions';

const SignInContainer = ({ signInClick }) => (
  <SignInComponent signInClick={signInClick}/>
);

const mapDispatchToProps = (dispatch, props) => ({
  signInClick: (username, password) => {
    loginUserAction(dispatch, props.history, { username, password });
  }
});

SignInContainer.propTypes = {
  signInClick: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(SignInContainer);
