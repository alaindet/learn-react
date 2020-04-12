import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = {
    loading: null,
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

  /**
   * Put data loading here
   */
  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      loading: true
    });
    this.loadPosition();
  }

  /**
   * Put data loading based on state/props here
   */
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  /**
   * Put cleanup stuff here
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  /**
   * Avoid anything here except returing JSX
   */
  render() {
    console.log('render');
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
