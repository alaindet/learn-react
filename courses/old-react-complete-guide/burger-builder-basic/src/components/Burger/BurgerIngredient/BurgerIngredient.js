import React from 'react';

import { BurgerIngredientStyled } from './BurgerIngredient.style';

const BurgerIngredient = ({ type }) => {

  if ('bread-top' === type) {
    return (
      <BurgerIngredientStyled type={'bread-top'}>
        <BurgerIngredientStyled type={'seeds1'} />
        <BurgerIngredientStyled type={'seeds2'} />
      </BurgerIngredientStyled>
    );
  }

  return (
    <BurgerIngredientStyled type={type} />
  );
};

export default BurgerIngredient;
