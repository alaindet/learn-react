import React from 'react';

const themeContext = React.createContext({
  theme: 'light',
  changeTheme: () => { },
});

export default themeContext;
