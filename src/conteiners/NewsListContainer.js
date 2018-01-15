import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import NewsListComponent from "../components/NewsListComponent";

let NewsListContainer = ({newsList}) => {
    return (
        <NewsListComponent newsList={newsList}/>
    )
}

let NewsList = () => {
    let newsList = []

    for(let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i)
        newsList.push(JSON.parse(window.localStorage.getItem(key)))
    }
    return {newsList}
}

NewsListContainer.propTypes = {
    newsList: PropTypes.array.isRequired,
}

NewsListContainer = connect(null, NewsList)(NewsListContainer)

export default NewsListContainer
