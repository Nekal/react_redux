import React from 'react'
import '../styles/newsList.css'
import PropTypes from "prop-types";
import NewsContainer from "../conteiners/NewsContainer";

const NewsListComponent = ({newsList}) => {
    return (
        <div className="list">
            <ul>
                {newsList.map(news =>
                    <NewsContainer news={news} key={news.id}/>
                )}
            </ul>
        </div>
    )
}

NewsListComponent.propTypes = {
    newsList: PropTypes.array.isRequired,
}

export default NewsListComponent
