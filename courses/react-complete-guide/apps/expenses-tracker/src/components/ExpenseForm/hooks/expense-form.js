import { useReducer } from 'react';

export const useExpenseForm = (initialState) => {

  const reducer = (state, action) => {
    const { type, value } = action;
    return { ...state, [type]: value };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateForm = (inputName, inputValue) => {
    dispatch({ type: inputName, value: inputValue });
  };

  return [state, updateForm];
};
