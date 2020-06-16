import React from 'react';

import { BurgerStyled, MissingIngredients } from './Burger.style';
import BurgerIngredient from 'components/Burger/BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {

  const list = [];
  for (const [name, quantity] of Object.entries(ingredients)) {
    for (let i = 0; i < quantity; i++) {
      const key = name + i;
      const type = name;
      list.push({ key, type });
    }
  }

  let renderedList;
  if (list.length) {
    renderedList = list.map(ingredient => (
      <BurgerIngredient key={ingredient.key} type={ingredient.type} />
    ));
  } else {
    renderedList = (
      <MissingIngredients>
        Start adding ingredients below
      </MissingIngredients>
    );
  }

  return (
    <BurgerStyled>
      <BurgerIngredient type="bread-top" />
      {renderedList}
      <BurgerIngredient type="bread-bottom" />
    </BurgerStyled>
  );
};

export default Burger;
