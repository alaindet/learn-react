import React from 'react';

import { SideDrawerStyled, Navigation, LogoContainer } from './SideDrawer.style';
import Logo from 'components/Logo/Logo';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import Backdrop from 'components/UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  return (
    <React.Fragment>
      <SideDrawerStyled show={props.show}>

        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Navigation>
          <NavigationItems dir="vertical" />
        </Navigation>

      </SideDrawerStyled>
      <Backdrop show={props.show} onDismiss={props.closeHandler} />
    </React.Fragment>
  );
};

export default SideDrawer;
