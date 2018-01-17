import React from 'react'
import '../styles/newsList.css'
import PropTypes from "prop-types";
import NewsContainer from "../conteiners/NewsContainer";
import NewsNav from "./NewsNav";

const NewsListComponent = ({newsList}) => {
    return (
        <div>
            <NewsNav />
            <div className="list">
                {newsList.map(news =>
                    <NewsContainer news={news} key={news.id}/>
                )}
            </div>
        </div>
    )
}

NewsListComponent.propTypes = {
    newsList: PropTypes.array.isRequired,
}

export default NewsListComponent
