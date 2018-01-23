import { connect } from 'react-redux'
import React from "react";
import {editNewsAction, getNewsAction} from "../actions";
import EditNewsComponent from "../components/EditNewsComponent";

let EditNewsContainer = (props) => {
    let news  = props.news
    props.getNews(props.match.params.id, news)
    return (
        <EditNewsComponent news={news} editNewsClick={props.editNewsClick}/>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        editNewsClick: (id, title, description) => {
            if (title !== "" && description !== "") {
                editNewsAction(dispatch, id, title, description)
            }
        },
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

EditNewsContainer = connect(mapStateToProps, mapDispatchToProps)(EditNewsContainer)

export default EditNewsContainer
