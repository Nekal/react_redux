import { connect } from 'react-redux'
import React from "react";
import {editNewsAction, getNewsAction} from "../actions";
import EditNewsComponent from "../components/EditNewsComponent";
import {getUserData} from "../services/UserService";
import NotFound from "../components/NotFound";

let EditNewsContainer = (props) => {
    let news  = props.news

    return (
        <div>
        {checkUserData() ? (
            <EditNewsComponent news={news} editNewsClick={props.editNewsClick}/>
        ) : (<NotFound/>)}
        </div>
    )
}

const checkUserData = () => {
    let userData = getUserData()
    return (userData !== null && userData.role === "admin");
}

const mapDispatchToProps = (dispatch, props) => {
    getNewsAction(dispatch, props.match.params.id)
    return ({
        editNewsClick: (id, title, description) => {
            if (title !== "" && description !== "") {
                editNewsAction(dispatch, id, title, description)
            }
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
