import React from 'react';
import '../styles/addForm.css';
import '../styles/bootstrap.css';
import PropTypes from 'prop-types';

let SignInComponent = ({signInClick}) => {
    let username;

    let password;
    return (
        <div className='container' style={{marginTop: 200}}>
            <div className='col-sm-6 col-sm-offset-3'>
                <h1>Sign In</h1>
                <div className='form-group'>
                    <label>Username</label>
                    <input type='text' className='form-control' name='username' ref={(ref) => {
                        username = ref;
                    }} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control' name='password' ref={(ref) => {
                        password = ref;
                    }} />
                </div>
                <button className='btn btn-primary btn-lg' onClick={() => {
                    signInClick(username.value, password.value);
                }}>Sign Up</button>
            </div>
        </div>
    );
};

SignInComponent.propTypes = {
    signInClick: PropTypes.func.isRequired
};

export default SignInComponent;
