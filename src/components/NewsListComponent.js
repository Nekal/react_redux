import React from 'react'
import News from './News'
import '../styles/newsList.css'
import PropTypes from "prop-types";

const NewsListComponent = ({newsList}) => {
    return (
        <div className="list">
            <ul>
                {newsList.map(news =>
                    <News news={news} key={news.id}/>
                )}
            </ul>
        </div>
    )
}

NewsListComponent.propTypes = {
    newsList: PropTypes.array.isRequired,
}

export default NewsListComponent
