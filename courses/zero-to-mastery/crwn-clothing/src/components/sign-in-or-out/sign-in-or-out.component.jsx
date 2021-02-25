import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../core/firebase/utils';
import { setCurrentUser } from '../../redux';

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

  return <Link className="option" to="/signin">SIGN IN</Link>;
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export const SignInOrOut = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInOrOut_);
