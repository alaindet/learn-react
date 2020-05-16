import React from 'react';

class GoogleAuth extends React.Component {

  state = {
    isSignedIn: null,
  };

  clientId = process.env.REACT_APP_GAPI_CLIENT_ID;
  auth = null;

  componentDidMount() {

    const config = {
      clientId: this.clientId,
      scope: 'email',
    };

    const registerAuthClient = () => {
      this.auth = window.gapi.auth2.getAuthInstance();
      this.onAuthChange();
      this.auth.isSignedIn.listen(this.onAuthChange.bind(this));
    };

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init(config).then(registerAuthClient);
    });
  }

  onAuthChange() {
    if (this.auth) {
      this.setState({
        isSignedIn: this.auth.isSignedIn.get(),
      });
    }
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    }

    if (!this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }

    return (
      <button className="ui red google button" onClick={this.onSignOut}>
        <i className="google icon" />
        Sign Out
      </button>
    );
  }

  render() {
    return this.renderAuthButton();
  }
}

export default GoogleAuth;
