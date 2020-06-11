import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = () => {
  const ingredient = 'Cheese';
  return (
    <div>
      Burger
      <BurgerIngredient type={ingredient} />
    </div>
  );
};

export default Burger;
