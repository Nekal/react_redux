import { connect } from 'react-redux'
import React from "react";
import {editNewsAction, getNewsAction} from "../actions";
import EditNewsComponent from "../components/EditNewsComponent";
import {getUserData} from "../services/UserService";

let EditNewsContainer = (props) => {
    checkUserData()
    let news  = props.news
    props.getNews(props.match.params.id, news)
    return (
        <EditNewsComponent news={news} editNewsClick={props.editNewsClick}/>
    )
}

const checkUserData = () => {
    let userData = getUserData()
    if (userData === null || userData.role !== "admin") {
        window.location.href = '/'
    }
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
