import React from 'react';

import { Container } from './theme/layout';
import People from './components/People';
import WeatherContext from './context/weather';

class App extends React.Component {

  state = {
    weather: 'rainy',
    people: [
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Caroline' },
    ],
  };

  onChangeWeather = () => {
    const random = Math.random();
    console.log('onChangeWeather', random);
    const weather = random > 0.5 ? 'sunny' : 'rainy';
    this.setState({ weather });
  };

  render() {
    return (
      <Container hasPadding hasShadow>
        <WeatherContext.Provider value={{
          weather: this.state.weather,
          changeWeather: this.onChangeWeather,
        }}>
          <People people={this.state.people} />
        </WeatherContext.Provider>
      </Container>
    );
  }
}

export default App;
