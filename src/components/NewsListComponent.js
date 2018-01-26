import React from 'react';
import '../styles/newsList.css';
import PropTypes from 'prop-types';
import NewsContainer from '../conteiners/NewsContainer';
import NewsNavContainer from '../conteiners/NewsNavContainer';

const NewsListComponent = ({news}) => {
  return (
    <div>
      <NewsNavContainer />
      <div className='list'>
        {news.newsList.map(news =>
          <NewsContainer newsItem={news} key={news.id}/>
        )}
      </div>
    </div>
  );
};

NewsListComponent.propTypes = {
  news: PropTypes.object.isRequired
};

export default NewsListComponent;
