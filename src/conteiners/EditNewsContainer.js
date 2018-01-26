import { connect } from 'react-redux';
import React from 'react';
import {editNewsAction, getNewsAction} from '../actions';
import EditNewsComponent from '../components/EditNewsComponent';
import NotFound from '../components/NotFound';
import UserService from '../services/UserService';
import PropTypes from 'prop-types';

let EditNewsContainer = (props) => {
  let news = props.news;

  return (
    <div>
      {checkUserData() ? (
        <EditNewsComponent news={news} editNewsClick={props.editNewsClick}/>
      ) : (<NotFound/>)}
    </div>
  );
};

const checkUserData = () => {
  let userData = UserService.getUserData();
  return (userData !== null && userData.role === 'admin');
};

const mapDispatchToProps = (dispatch, props) => {
  getNewsAction(dispatch, props.match.params.id);
  return ({
    editNewsClick: (id, title, description) => {
      if (title !== '' && description !== '') {
        editNewsAction(dispatch, id, title, description);
      }
    }
  });
};

const mapStateToProps = (state) => {
  return {
    news: state.news
  };
};

EditNewsContainer.propTypes = {
  props: PropTypes.object.isRequired
};

EditNewsContainer = connect(mapStateToProps, mapDispatchToProps)(EditNewsContainer);

export default EditNewsContainer;
