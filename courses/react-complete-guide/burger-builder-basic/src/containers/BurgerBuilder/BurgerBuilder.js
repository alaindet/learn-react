import React from 'react';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends React.Component {

  state = {
    totalPrice: 4,
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 2,
      bacon: 2,
    },
  };

  addIngredient = (type) => {
    const priceDelta = INGREDIENT_PRICES[type];
    const totalPrice = this.state.totalPrice + priceDelta;
    const count = this.state.ingredients[type] + 1;
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = count;
    this.setState({ totalPrice, ingredients });
  };

  removeIngredient = (type) => {
    const priceDelta = -1 * INGREDIENT_PRICES[type];
    const totalPrice = this.state.totalPrice + priceDelta;
    const count = Math.max(this.state.ingredients[type] - 1, 0);
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = count;
    this.setState({ totalPrice, ingredients });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
