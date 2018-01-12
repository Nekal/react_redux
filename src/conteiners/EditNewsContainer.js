import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import {editNewsAction} from "../actions";
import EditNewsComponent from "../components/EditNewsComponent";

let EditNewsContainer = ({editNewsClick, match}) => {
    let news = JSON.parse(window.localStorage.getItem(match.params.id))
    return (
        <EditNewsComponent news={news} editNewsClick={editNewsClick}/>
    )
}

let EditNews = (dispatch) => {
    return ({
        editNewsClick: (news) => {
            if (news.title !== "" && news.content !== "") {
                dispatch(editNewsAction(news))
                window.location.href = "/" + news.id
            }
        }
    })
}

EditNews.propTypes = {
    id: PropTypes.number.isRequired,
    editNewsClick: PropTypes.func.isRequired,
}

EditNewsContainer = connect(null, EditNews)(EditNewsContainer)

export default EditNewsContainer
