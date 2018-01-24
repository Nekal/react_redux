import { connect } from 'react-redux'
import React from "react";
import NewsDetailComponent from "../components/NewsDetailComponent";
import {getNewsAction} from "../actions";
import UserService from "../services/UserService";
import PropTypes from "prop-types";

let NewsDetailContainer = (props) => {
    let news  = props.news
    return (
        <NewsDetailComponent news={news} userData={UserService.getUserData()}/>
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

NewsDetailContainer.propTypes = {
    props: PropTypes.object.isRequired,
}

NewsDetailContainer = connect(mapStateToProps, mapDispatchToProps)(NewsDetailContainer)

export default NewsDetailContainer


