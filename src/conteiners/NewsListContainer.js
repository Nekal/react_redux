import { connect } from 'react-redux'
import React from "react";
import NewsListComponent from "../components/NewsListComponent";
import {getAllNewsAction} from "../actions";
// import PropTypes from 'prop-types'

let NewsListContainer = (props) => {
    const news = props.news;
    return (
        <NewsListComponent news={news}/>
    )
}

let showNews = (dispatch) => {
    getAllNewsAction(dispatch)
}

// NewsListContainer.propTypes = {
//     newsList: PropTypes.array.isRequired,
// }

const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

NewsListContainer = connect(mapStateToProps, showNews)(NewsListContainer)

export default NewsListContainer
