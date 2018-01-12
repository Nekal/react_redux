import { connect } from 'react-redux'
import AddNewsComponent from "../components/AddNewsComponent";
import React from "react";
import PropTypes from 'prop-types'
import {addNewsAction} from "../actions";

let AddNewsContainer = ({addNewsClick}) => (
    <AddNewsComponent addNewsClick={addNewsClick}/>
)

let AddNews = (dispatch) => {
    return ({
        addNewsClick: (title, content) => {
            if (title !== "" && content !== "") {
                // let id = dispatch(addNewsAction(title, content)).id
                dispatch(addNewsAction(title, content))
                window.location.href = "/"
            }
        }
    })
}

AddNews.propTypes = {
    addNewsClick: PropTypes.func.isRequired,
}

AddNewsContainer = connect(null, AddNews)(AddNewsContainer)

export default AddNewsContainer
