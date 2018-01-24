import { connect } from 'react-redux'
import AddNewsComponent from "../components/AddNewsComponent";
import React from "react";
import PropTypes from 'prop-types'
import {addNewsAction} from "../actions";
import {getUserData} from "../services/UserService";
import NotFound from "../components/NotFound";

let AddNewsContainer = ({addNewsClick}) => {
    // return (
    //     <AddNewsComponent addNewsClick={addNewsClick}/>
    // )
    return (
        <div>
            {checkUserData() ? (
                <AddNewsComponent addNewsClick={addNewsClick}/>
            ) : (<NotFound/>)}
        </div>
    )
}

const checkUserData = () => {
    let userData = getUserData()
    return (userData !== null && userData.role === "admin");
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
