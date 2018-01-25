import { connect } from 'react-redux'
import React from "react";
import PropTypes from 'prop-types'
import NewsComponent from "../components/NewsComponent";

let NewsContainer = ({newsItem, news, getStatus}) => {
    getStatus(newsItem, news)
    return (
        <NewsComponent news={newsItem} status={getStatus(newsItem, news.addedNews)}/>
    )
}

const mapDispatchToProps = () => {
    return ({
        getStatus: (newsItem, addedNews) => {
            return (addedNews && addedNews.id === newsItem.id);
        }
    })
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

NewsContainer.propTypes = {
    news: PropTypes.object.isRequired,
}

NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsContainer)

export default NewsContainer
