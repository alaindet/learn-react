import React from 'react';

import { Box, Lightbulb } from './../theme/theme';

class LightbulbClass extends React.Component {

  state = {
    lightbulb: false,
  };

  componentDidMount() {
    console.log('FooClass componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('FooClass shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('FooClass componentDidUpdate');
  }

  toggleLightbulb = () => {
    this.setState({
      lightbulb: !this.state.lightbulb,
    });
  };

  render() {
    return (
      <Box switch={this.state.lightbulb}>
        <h2>Lightbulb Class</h2>
        <Lightbulb switch={this.state.lightbulb} onClick={this.toggleLightbulb}>
          {this.state.lightbulb ? 'On' : 'Off'}
        </Lightbulb>
      </Box>
    );
  }
}

export default LightbulbClass;
