import { connect } from 'react-redux'
import React from "react";
import NewsDetailComponent from "../components/NewsDetailComponent";
import {getNewsAction} from "../actions";
import {getUserData} from "../services/UserService";

let NewsDetailContainer = (props) => {
    let news  = props.news
    console.log(news)
    props.getNews(props.match.params.id, news)
    return (
        <NewsDetailComponent news={news} userData={getUserData()}/>
    )
}

const mapDispatchToProps = (dispatch) => {
    console.log("map")
    return ({
        getNews: (id, news) => {
            getNewsAction(dispatch, id, news)
        }
    })
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

NewsDetailContainer = connect(mapStateToProps, mapDispatchToProps)(NewsDetailContainer)

export default NewsDetailContainer


