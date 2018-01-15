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
                dispatch(addNewsAction(findId(), title, content))
            }
        }
    })
}

let findId = () => {
    let newsList = []
    let maxId = 0

    for(let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i)
        let news = JSON.parse(window.localStorage.getItem(key))
        newsList.push(news)

        if (news.id >= maxId) {
            maxId = news.id + 1
        }
    }
    return maxId
}

AddNews.propTypes = {
    addNewsClick: PropTypes.func.isRequired,
}

AddNewsContainer = connect(null, AddNews)(AddNewsContainer)

export default AddNewsContainer
