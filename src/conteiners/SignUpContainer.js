import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import SignUpComponent from "../components/SignUpComponent";
import {signUpAction} from "../actions";

let SignUpContainer = ({signUpClick}) => (
    <SignUpComponent signUpClick={signUpClick}/>
)

let SignUp = (dispatch) => {
    return ({
        signUpClick: (username, email, password, role) => {
            dispatch(signUpAction({username, email, password, role}))
        }
    })
}

SignUpContainer.propTypes = {
    signUpClick: PropTypes.func.isRequired,
}

SignUpContainer = connect(null, SignUp)(SignUpContainer)

export default SignUpContainer
