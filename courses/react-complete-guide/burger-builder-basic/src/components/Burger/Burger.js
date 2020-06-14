import React from 'react';

import { BurgerStyled } from './Burger.style';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {

  const list = [];
  for (const [name, quantity] of Object.entries(ingredients)) {
    for (let i = 0; i < quantity; i++) {
      const key = name + i;
      const type = name;
      list.push({ key, type });
    }
  }

  return (
    <BurgerStyled>
      <BurgerIngredient type="bread-top" />
      {list.map(i => <BurgerIngredient key={i.key} type={i.type} />)}
      <BurgerIngredient type="bread-bottom" />
    </BurgerStyled>
  );
};

export default Burger;
