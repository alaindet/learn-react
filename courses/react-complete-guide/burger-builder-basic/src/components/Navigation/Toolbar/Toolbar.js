import React from 'react';

import { ToolbarStyled, Navigation } from './Toolbar.style';
import { Show } from 'theme/responsive';
import Logo from 'components/Logo/Logo';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import Button from 'components/UI/Button/Button';

const Toolbar = (props) => {
  return (
    <ToolbarStyled>

      <Button
        onClick={props.openSideDrawer}
        size="small"
      >MENU</Button>

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
