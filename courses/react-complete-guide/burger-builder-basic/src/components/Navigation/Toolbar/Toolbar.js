import React from 'react';

import { ToolbarStyled, Navigation } from './Toolbar.style';
import { Show } from 'theme/responsive';
import Logo from 'components/Logo/Logo';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import SideDrawerToggle from 'components/Navigation/SideDrawer/SideDrawerToggle/SideDrawerToggle';

const Toolbar = (props) => {
  return (
    <ToolbarStyled>

      <SideDrawerToggle onClick={props.openSideDrawer} />

      <Logo />

      <Show from="tablet" dir="up">
        <Navigation>
          <NavigationItems />
        </Navigation>
      </Show>

    </ToolbarStyled>
  );
};

export default Toolbar;
