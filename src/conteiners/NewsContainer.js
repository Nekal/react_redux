import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import NewsComponent from "../components/NewsComponent";
import {store} from "../index";

let NewsContainer = ({news}) => {
    return (
        <NewsComponent news={news} status={checkStatus(news.id)} viewedNews={viewedNews}/>
    )
}

let viewedNews = (id) => {
    let state = store.getState()
    delete state.news[getStateIndex(id)]
}

// let checkNewsClass = (document, id, status) => {
//     if (status === "new") {
//         document.getElementById(id).className += " viewed"
//     }
// }

let checkStatus = (id) => {
    let news = store.getState().news[getStateIndex(id)]
    if (news !== undefined && id === news.id) {
        return "new"
    } else {
        return "viewed"
    }
}

let getStateIndex = (id) => {
    let state = store.getState()
    for(let i = 0; i < state.news.length; i++) {
        if (state.news[i] !== undefined && id === state.news[i].id) {
            return i
        }
    }
    return null
}

NewsContainer.propTypes = {
    news: PropTypes.object.isRequired,
}

NewsContainer = connect()(NewsContainer)

export default NewsContainer
