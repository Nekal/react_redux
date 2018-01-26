import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsDetailComponent from '../components/NewsDetailComponent';
import { getNewsAction } from '../actions';
import UserService from '../services/UserService';

const NewsDetailContainer = (props) => {
  const { news } = props;
  return (
    <NewsDetailComponent news={news} userData={UserService.getUserData()}/>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  getNewsAction(dispatch, props.match.params.id);
};

const mapStateToProps = state => ({
  news: state.news
});

NewsDetailContainer.propTypes = {
  props: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailContainer);
