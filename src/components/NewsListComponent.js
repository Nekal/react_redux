import React from 'react';
import PropTypes from 'prop-types';

import '../styles/newsList.css';
import NewsContainer from '../conteiners/NewsContainer';
import NewsNavContainer from '../conteiners/NewsNavContainer';

const NewsListComponent = ({ news }) => (
    <div>
      <NewsNavContainer />
      <div className='list'>
        {news.newsList.map(item =>
          <NewsContainer newsItem={item} key={item.id}/>)}
      </div>
    </div>
);

NewsListComponent.propTypes = {
  news: PropTypes.object.isRequired
};

export default NewsListComponent;
