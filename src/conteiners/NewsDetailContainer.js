import { connect } from 'react-redux'
import React from "react";
import NewsDetailComponent from "../components/NewsDetailComponent";

let NewsDetailContainer = (props) => {
    let news = JSON.parse(window.localStorage.getItem(props.match.params.id))
    return (
        <NewsDetailComponent news={news}/>
    )
}

NewsDetailContainer = connect()(NewsDetailContainer)

export default NewsDetailContainer
