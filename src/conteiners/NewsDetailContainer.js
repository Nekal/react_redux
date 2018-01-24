import { connect } from 'react-redux'
import React from "react";
import NewsDetailComponent from "../components/NewsDetailComponent";
import {getNewsAction} from "../actions";
import {getUserData} from "../services/UserService";

let NewsDetailContainer = (props) => {
    let news  = props.news
    console.log(news)
    return (
        <NewsDetailComponent news={news} userData={getUserData()}/>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    getNewsAction(dispatch, props.match.params.id)
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

NewsDetailContainer = connect(mapStateToProps, mapDispatchToProps)(NewsDetailContainer)

export default NewsDetailContainer


