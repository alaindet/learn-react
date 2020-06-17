import React from 'react';

import { MainContent } from './Layout.style';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <React.Fragment>
      {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
      <Toolbar />
      <MainContent>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default Layout;
