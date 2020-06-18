import React from 'react';
import styled from 'styled-components';

import theme from 'theme/variables';
import Blog from 'containers/Blog/Blog';

const AppStyled = styled.main`
  margin: 0 1rem;

  @media (min-width: ${theme.breakpoint.mobileToTablet}) {
    margin: 0 4rem;
  }

  @media (min-width: ${theme.breakpoint.tabletToDesktop}) {
    margin: 0 6rem;
  }

  @media (min-width: ${theme.breakpoint.desktopToOver}) {
    margin: 0 auto;
    max-width: 60rem;
  }
`;

const App = () => {
  return (
    <AppStyled>
      <Blog />
    </AppStyled>
  );
};

export default App;
