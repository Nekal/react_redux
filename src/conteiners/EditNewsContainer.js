import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import { editNewsAction, getNewsAction } from '../actions';
import EditNewsComponent from '../components/EditNewsComponent';
import NotFound from '../components/NotFound';
import UserService from '../services/UserService';

const EditNewsContainer = (props) => {
  const { news } = props;
  return (
    <div>
      {props.checkUserData() ? (
        <EditNewsComponent news={news}
                           editNewsClick={props.editNewsClick}
                           userData={UserService.getUserData()}/>
      ) : (<NotFound/>)}
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  getNewsAction(dispatch, props.match.params.id);
  return ({
    editNewsClick: (id, title, description, userId) => {
      if (title !== '' && description !== '') {
        editNewsAction(dispatch, props.history, id, title, description, userId);
      }
    },
    checkUserData: () => {
      const userData = UserService.getUserData();
      return (userData !== null && userData.role === 'admin');
    }
  });
};

const mapStateToProps = state => ({
  news: state.news
});

EditNewsContainer.propTypes = {
  news: PropTypes.object.isRequired,
  checkUserData: PropTypes.func.isRequired,
  editNewsClick: PropTypes.func.isRequired,
  props: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNewsContainer);
