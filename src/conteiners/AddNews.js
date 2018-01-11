import { connect } from 'react-redux'
import AddNewsComponent from "../components/AddNewsComponent";
import React from "react";
import PropTypes from 'prop-types'
import {addNewsAction} from "../actions";

let AddNews = (addNewsClick) => (
    <AddNewsComponent addNewsClick={addNewsClick}/>
)

let AddNewsItem = (dispatch) => {
    return ({
        addNewsClick: (title, content) => {
            if (title !== "" && content !== "") {
                console.log(title, content)
                dispatch(addNewsAction(title, content))
            }
            // window.location.href = "/"
        }
    })
}

AddNews.propTypes = {
    addNewsClick: PropTypes.func.isRequired,
}

AddNews = connect(null, AddNewsItem)(AddNews)

export default AddNews
