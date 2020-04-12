import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {

  state = {
    loading: null,
    loadingMessage: 'Waiting for geolocation permission',
    errorMessage: null,
    latitude: null,
  }

  loadPosition() {
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({
        loading: false,
        latitude: pos.coords.latitude
      }),
      err => this.setState({
        loading: false,
        errorMessage: err.message,
      })
    );
  }
  
  componentDidMount() {
    this.setState({
      loading: true
    });
    this.loadPosition();
  }

  /**
   * Avoid anything here except returing JSX
   */
  render() {
    if (this.state.loading) {
      return <LoadingSpinner message={this.state.loadingMessage} />;
    }

    if (this.state.errorMessage) {
      return <p>Error: {this.state.errorMessage}</p>;
    }

    return <SeasonDisplay latitude={this.state.latitude} />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
