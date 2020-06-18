import React from 'react';

import { SideDrawerToggleStyled } from './SideDrawerToggle.style';

const SideDrawerToggle = (props) => {
  return (
    <SideDrawerToggleStyled onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </SideDrawerToggleStyled>
  );
};

export default SideDrawerToggle;
