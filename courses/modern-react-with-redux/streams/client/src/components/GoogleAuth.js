import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from './../actions';

class GoogleAuth extends React.Component {

  clientId = process.env.REACT_APP_GAPI_CLIENT_ID;
  auth = null;

  componentDidMount() {

    const config = {
      clientId: this.clientId,
      scope: 'email',
    };

    const registerAuthClient = () => {
      this.auth = window.gapi.auth2.getAuthInstance();
      this.onAuthChange(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.onAuthChange);
    };

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init(config).then(registerAuthClient);
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
      return;
    }

    this.props.signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }

    if (!this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }

    return (
      <button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon" />
        Sign Out
      </button>
    );
  }

  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
