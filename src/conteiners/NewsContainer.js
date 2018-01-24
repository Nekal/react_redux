import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import NewsComponent from "../components/NewsComponent";

let NewsContainer = ({news}) => {
    return (
        <NewsComponent news={news}/>
    )
}

NewsContainer.propTypes = {
    news: PropTypes.object.isRequired,
}

NewsContainer = connect()(NewsContainer)

export default NewsContainer
