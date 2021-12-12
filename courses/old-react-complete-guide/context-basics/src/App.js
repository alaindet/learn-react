import React from 'react';

import { Container } from './theme/layout';
import { Button } from './theme/button';
import People from './components/People';
import WeatherContext from './context/weather';
import ThemeContext from './context/theme';

class App extends React.Component {

  state = {
    theme: 'light',
    weather: 'rainy',
    people: [
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Caroline' },
    ],
  };

  onChangeWeather = () => {
    const weather = this.state.weather === 'sunny' ? 'rainy' : 'sunny';
    this.setState({ weather });
  };

  onChangeTheme = () => {
    const theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme });
  };

  render() {

    // Perfomance hit?
    const themeContextValue = {
      theme: this.state.theme,
      changeTheme: this.onChangeTheme,
    };

    // Perfomance hit?
    const weatherContextValue = {
      weather: this.state.weather,
      changeWeather: this.onChangeWeather,
    };

    return (
      <ThemeContext.Provider value={themeContextValue}>
        <WeatherContext.Provider value={weatherContextValue}>
        <Container hasPadding hasShadow>
          <div className="actions">
            <Button onClick={this.onChangeWeather}>Change weather</Button>
            &nbsp;
            <Button onClick={this.onChangeTheme}>Change theme</Button>
          </div>
          <People people={this.state.people} />
        </Container>
        </WeatherContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
