import React from 'react'
import '../styles/newsList.css'
import PropTypes from "prop-types";
import NewsContainer from "../conteiners/NewsContainer";
import NewsNav from "./NewsNav";

const NewsListComponent = ({news}) => {
    return (
        <div>
            <NewsNav />
            <div className="list">
                {news.newsList.map(news =>
                    <NewsContainer news={news} key={news.id}/>
                )}
            </div>
        </div>
    )
}

NewsListComponent.propTypes = {
    news: PropTypes.object.isRequired,
}

export default NewsListComponent
