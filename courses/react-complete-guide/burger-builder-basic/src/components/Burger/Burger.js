import React from 'react';

import { BurgerStyled } from './Burger.style';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = () => {
  const ingredient = 'bread-top';
  return (
    <BurgerStyled>
      <BurgerIngredient type={ingredient} />
    </BurgerStyled>
  );
};

export default Burger;
