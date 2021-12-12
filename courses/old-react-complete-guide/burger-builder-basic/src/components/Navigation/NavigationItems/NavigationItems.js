import React from 'react';

import { NavigationItemsStyled } from './NavigationItems.style';
import NavigationItem from 'components/Navigation/NavigationItems/NavigationItem/NavigationItem';

const NavigationItems = (props) => {

  const links = [
    {
      label: 'Home',
      link: 'home',
      active: true,
    },
    {
      label: 'Checkout',
      link: 'checkout',
      active: false,
    },
    {
      label: 'About',
      link: 'about',
      active: false,
    },
  ];

  return (
    <NavigationItemsStyled dir={props.dir}>
      {links.map(link => (
        <NavigationItem
          key={link.link}
          active={link.active}
          link={link.link}
          display="block"
        >
          {link.label}
        </NavigationItem>  
      ))}
    </NavigationItemsStyled>
  );
};

export default NavigationItems;
