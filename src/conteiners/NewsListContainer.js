import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsListComponent from '../components/NewsListComponent';
import { getAllNewsAction } from '../actions';

const NewsListContainer = (props) => {
  const { news } = props;
  return (
    <NewsListComponent news={news}/>
  );
};

const showNews = (dispatch) => {
  getAllNewsAction(dispatch);
};

const mapStateToProps = state => ({
  news: state.news
});

NewsListContainer.propTypes = {
  props: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired
};

export default connect(mapStateToProps, showNews)(NewsListContainer);
