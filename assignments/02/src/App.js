import React, { Component } from 'react';
import TextComponent from './components/Text/Text';
import ValidationComponent from './components/Validation/Validation';
import CharsComponent from './components/Chars/Chars';
import './App.css';


class App extends Component {

  state = {
    text: '',
    min: 5,
    max: 20
  };

  onChangeInput = (event) => {
    let text = this.state.text;
    text = event.target.value;
    this.setState({ text });
  };

  onCharClick = (index, event) => {
    let text = this.state.text;
    const letters = text.split('');
    letters.splice(index, 1);
    text = letters.join('');
    this.setState({ text });
  };

  render = () => {

    // Title component
    const title = (<h1>Assignment #2</h1>);

    // Text component
    const text = (
      <TextComponent
        value={this.state.text}
        changeHandler={this.onChangeInput.bind(this)}
      />
    );

    // Validation component
    const validation = (
      <ValidationComponent
        value={this.state.text.length}
        min={this.state.min}
        max={this.state.max}
      />
    );

    // Characters components
    const chars = (
      <CharsComponent
        chars={this.state.text.split('')}
        clickHandler={this.onCharClick.bind(this)}
      />
    );

    return (
      <div className="App">
        {title}
        {text}
        {validation}
        {chars}
      </div>
    );
  };
}

export default App;
