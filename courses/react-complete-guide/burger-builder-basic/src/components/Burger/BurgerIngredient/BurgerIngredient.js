import React from 'react';

import { BurgerIngredientStyled } from './BurgerIngredient.style';

const BurgerIngredient = ({ type }) => {
  return (
    <BurgerIngredientStyled type={type}>{type}</BurgerIngredientStyled>
  );
};

export default BurgerIngredient;
