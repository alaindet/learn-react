import React from 'react';

import { LogoStyled, LogoImage } from './Logo.style';
import burgerLogo from 'assets/images/logo.png';

const Logo = (props) => {
  return (
    <LogoStyled>
      <LogoImage src={burgerLogo} alt="BurgerBuilder Logo" />
    </LogoStyled>
  );
};

export default Logo;
