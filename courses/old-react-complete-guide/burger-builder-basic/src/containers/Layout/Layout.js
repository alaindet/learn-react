import React, { useState } from 'react';

import { MainContent } from './Layout.style';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

  const [sideDrawer, setSideDrawer] = useState(false);

  const openSideDrawer = () => {
    setSideDrawer(true);
  };

  const closeSideDrawer = () => {
    setSideDrawer(false);
  };

  return (
    <React.Fragment>
      <SideDrawer
        show={sideDrawer}
        closeHandler={closeSideDrawer} 
      />
      <Toolbar openSideDrawer={openSideDrawer} />
      <MainContent>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default Layout;
