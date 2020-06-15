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
    canBuy: false,
    totalPrice: 4,
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 2,
      bacon: 2,
    },
  };

  componentDidMount() {
    this.updateCanBuyFlag(this.state.ingredients);
  }

  updateCanBuyFlag = (ingredients) => {
    let sum = 0;
    for (const amount of Object.values(ingredients)) {
      sum += amount;
    }
    this.setState({ canBuy: sum > 0 });
  };

  addIngredient = (type) => {
    const priceDelta = INGREDIENT_PRICES[type];
    const totalPrice = this.state.totalPrice + priceDelta;
    const count = this.state.ingredients[type] + 1;
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = count;
    this.setState({ totalPrice, ingredients });
    this.updateCanBuyFlag(ingredients);
  };

  removeIngredient = (type) => {
    const priceDelta = -1 * INGREDIENT_PRICES[type];
    const totalPrice = this.state.totalPrice + priceDelta;
    const count = Math.max(this.state.ingredients[type] - 1, 0);
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = count;
    this.setState({ totalPrice, ingredients });
    this.updateCanBuyFlag(ingredients);
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
          canBuy={this.state.canBuy}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
