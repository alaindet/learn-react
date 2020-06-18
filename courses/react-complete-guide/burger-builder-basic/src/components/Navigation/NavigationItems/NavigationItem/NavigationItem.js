import React from 'react';

import { NavigationItemStyled, NavigationItemLink } from './NavigationItem.style';

const NavigationItem = (props) => {

  return (
    <NavigationItemStyled display={props.display}>
      <NavigationItemLink href={props.link} active={props.active}>
        {props.children}
      </NavigationItemLink>
    </NavigationItemStyled>
  );
};

export default NavigationItem;
