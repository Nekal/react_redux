import { connect } from 'react-redux'
import DeleteNewsComponent from "../components/DeleteNewsComponent";
import React from "react";
import PropTypes from 'prop-types'
import {deleteNewsAction} from "../actions";

let DeleteNewsContainer = ({id, deleteNewsClick}) => {
    return (
        <DeleteNewsComponent id={id} deleteNewsClick={deleteNewsClick}/>
    )
}

let DeleteNews = (dispatch) => {
    return ({
        deleteNewsClick: (id) => {
            dispatch(deleteNewsAction(id))
            window.location.href = "/"
        }
    })
}

DeleteNewsContainer.propTypes = {
    id: PropTypes.number.isRequired,
    deleteNewsClick: PropTypes.func.isRequired,
}

DeleteNewsContainer = connect(null, DeleteNews)(DeleteNewsContainer)

export default DeleteNewsContainer
