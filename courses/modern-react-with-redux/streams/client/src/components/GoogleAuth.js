import React from 'react';

class GoogleAuth extends React.Component {

  clientId = process.env.REACT_APP_GAPI_CLIENT_ID;

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: this.clientId,
        scope: 'email',
      })
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
