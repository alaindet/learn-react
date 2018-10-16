import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    username: ''
  };

  onUsernameChange = (event) => {
    console.log('onUsernameChange');
    this.setState({ username: event.target.value });
  };

  render = () => (
    <div className="App">
      <UserInput
        username={this.state.username}
        changeHandler={this.onUsernameChange.bind(this)}
      />
      <UserOutput
        username={this.state.username}
      />
    </div>
  );
}

export default App;
