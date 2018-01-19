import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import HeaderComponent from "../components/HeaderComponent";

let HeaderContainer = ({logoutClick}) => {
    return (
        <HeaderComponent userData={UserData()} logoutClick={logoutClick}/>
    )
}

const UserData = () => {
    let userData = JSON.parse(window.localStorage.getItem('USER_DATA'))
    return userData
}

let Logout = () => {
    return ({
        logoutClick: () => {
            window.localStorage.removeItem('USER_DATA')
        }
    })
}

HeaderContainer.propTypes = {
    props: PropTypes.object.isRequired,
}

HeaderContainer = connect(null, Logout)(HeaderContainer)

export default HeaderContainer
