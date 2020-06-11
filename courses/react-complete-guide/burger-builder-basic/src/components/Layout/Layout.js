import React from 'react';

import { MainContent } from './Layout.style';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <MainContent>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default Layout;
