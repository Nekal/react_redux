import { connect } from 'react-redux'
import AddNewsComponent from "../components/AddNewsComponent";
import React from "react";
import PropTypes from 'prop-types'
import {addNewsAction} from "../actions";
import {getUserData} from "../services/UserService";

let AddNewsContainer = ({addNewsClick}) => {
    checkUserData()
    return (
        <AddNewsComponent addNewsClick={addNewsClick}/>
    )
}

const checkUserData = () => {
    let userData = getUserData()
    if (userData === null || userData.role !== "admin") {
        window.location.href = '/'
    }
}

let AddNews = (dispatch) => {
    return ({
        addNewsClick: (title, description) => {
            if (title !== "" && description !== "") {
                dispatch(addNewsAction(title, description))
            }
        }
    })
}

AddNews.propTypes = {
    addNewsClick: PropTypes.func.isRequired,
}

AddNewsContainer = connect(null, AddNews)(AddNewsContainer)

export default AddNewsContainer
