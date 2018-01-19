import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import SignInComponent from "../components/SignInComponent";
import {signInAction} from "../actions";

let SignInContainer = ({signInClick}) => (
    <SignInComponent signInClick={signInClick}/>
)

let SignUp = (dispatch) => {
    return ({
        signInClick: (username, password) => {
            dispatch(signInAction({username, password}))
        }
    })
}

SignInContainer.propTypes = {
    signInClick: PropTypes.func.isRequired,
}

SignInContainer = connect(null, SignUp)(SignInContainer)

export default SignInContainer
