import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = {
    loading: true,
    errorMessage: null,
    latitude: null,
  }

  constructor(props) {
    super(props);
    this.loadPosition();
  }

  loadPosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({
        loading: false,
        latitude: position.coords.latitude
      }),
      (error) => this.setState({
        loading: false,
        errorMessage: 'You did not allow access to your position'
      })
    );
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>;
    }

    if (this.state.errorMessage) {
      return <p>Error: {this.state.errorMessage}</p>;
    }

    return <p>Latitude: {this.state.latitude}</p>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
