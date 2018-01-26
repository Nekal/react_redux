import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsComponent from '../components/NewsComponent';

const NewsContainer = ({ newsItem, news, getStatus }) => {
  getStatus(newsItem, news);
  return (
    <NewsComponent news={newsItem} status={getStatus(newsItem, news.addedNews)}/>
  );
};

const mapDispatchToProps = () => ({
  getStatus: (newsItem, addedNews) => (addedNews && addedNews.id === newsItem.id)
});

const mapStateToProps = state => ({
  news: state.news
});

NewsContainer.propTypes = {
  newsItem: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired,
  getStatus: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
