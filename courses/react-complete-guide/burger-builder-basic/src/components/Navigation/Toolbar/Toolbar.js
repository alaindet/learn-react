import React from 'react';

import { ToolbarStyled, Navigation } from './Toolbar.style';
import Logo from 'components/Logo/Logo';

const Toolbar = (props) => {
  return (
    <ToolbarStyled>

      <div>MENU</div>

      <Logo />

      <Navigation>
        Nav
      </Navigation>

    </ToolbarStyled>
  );
};

export default Toolbar;
