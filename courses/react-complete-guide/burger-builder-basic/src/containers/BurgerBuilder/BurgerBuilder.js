import React from 'react';

import Burger from './../../components/Burger/Burger';

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 2,
      bacon: 2,
    },
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Burger
            ingredients={this.state.ingredients}
          />
        </div>
        <div>Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
