import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../core/firebase/utils';
import { setCurrentUser, selectCurrentUser } from '../../redux';

const SignInOrOut_ = (props) => {

  const signOut = () => {
    auth.signOut();
    props.setCurrentUser(null);
  };

  if (props.currentUser) {
    return (
      <span className="option like-link" onClick={signOut}>
        SIGN OUT
      </span>
    );
  }

  return <Link className="option" to="/sign-in">SIGN IN</Link>;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export const SignInOrOut = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInOrOut_);
