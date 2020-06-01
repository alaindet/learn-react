import React from 'react';

import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: 'Hello World',
    };
  }

  setContent(event) {
    const content = event.target.value;
    this.setState({ content });
  }

  render() {
    return (
      <div className="app">
        <UserInput
          value={this.state.content}
          change={this.setContent.bind(this)}
        />
        <UserOutput content={this.state.content} />
      </div>
    );
  }
}

export default App;
