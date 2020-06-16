import React from 'react';

import Burger from 'components/Burger/Burger';
import BuildControls from 'components/Burger/BuildControls/BuildControls';
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary';
import Modal from 'components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends React.Component {

  state = {
    canBuy: false,
    isBuying: false,
    totalPrice: 3,
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
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

  onBuying = () => {
    this.setState({ isBuying: true });
  }

  onDismissBuying = () => {
    this.setState({ isBuying: false });
  };

  render() {

    const disabledInfo = {...this.state.ingredients};
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
          onOrder={this.onBuying}
        />

        <Modal
          show={this.state.isBuying}
          onDismiss={this.onDismissBuying}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>

      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
