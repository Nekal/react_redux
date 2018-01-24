import { connect } from 'react-redux'
import React from "react";
import NewsListComponent from "../components/NewsListComponent";
import {getAllNewsAction} from "../actions";
import PropTypes from 'prop-types'

let NewsListContainer = (props) => {
    const news = props.news;
    return (
        <NewsListComponent news={news}/>
    )
}

let showNews = (dispatch) => {
    getAllNewsAction(dispatch)
}



const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

NewsListContainer.propTypes = {
    props: PropTypes.object.isRequired,
}

NewsListContainer = connect(mapStateToProps, showNews)(NewsListContainer)

export default NewsListContainer
