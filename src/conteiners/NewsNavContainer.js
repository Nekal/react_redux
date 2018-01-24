import { connect } from 'react-redux'
import React from "react";
import {getUserData} from "../services/UserService";
import NewsNav from "../components/NewsNav";

let NewsNavContainer = () => {
    return (
        <NewsNav userData={getUserData()} />
    )
}

NewsNavContainer = connect()(NewsNavContainer)

export default NewsNavContainer
