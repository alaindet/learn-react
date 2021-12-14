import { useReducer } from 'react';

import { PANEL_ACTION } from '../data';

export const useCollapsablePanel = (initialIsOpen) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'open':
        return { isOpen: false, actions: [PANEL_ACTION.MAXIMIZE] };
      case 'close':
        return { isOpen: true, actions: [PANEL_ACTION.MINIMIZE] };
      default:
        return state;
    }
  };

  const initialState = {
    isOpen: initialIsOpen,
    actions: initialIsOpen ? [PANEL_ACTION.MINIMIZE] : [PANEL_ACTION.MAXIMIZE],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = (isOpening) => {
    isOpening
      ? dispatch({ type: 'open' })
      : dispatch({ type: 'close' });
  };

  return [state, toggle];
};
