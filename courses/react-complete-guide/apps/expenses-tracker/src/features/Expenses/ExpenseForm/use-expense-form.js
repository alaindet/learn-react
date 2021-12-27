import { useEffect, useReducer, useState } from 'react';

import { formatDate } from '../../../utils';

export const useExpenseForm = (expense, formSchema) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'all':

        // Updating whole form
        if (action.payload) {
          const { title, amount, date: rawDate } = action.payload;
          const date = formatDate('y-m-d', rawDate);
          return { title, amount, date };
        }

        // Resetting
        return {
          title: '',
          amount: 0,
          date: formatDate('y-m-d', Date.now()),
        };

      // Updating single field
      default:
        const { type, payload } = action;
        return { ...state, [type]: payload };
    }
  };

  const initialState = {
    title: expense?.title ?? '',
    amount: expense?.amount ?? 0,
    date: formatDate('y-m-d', expense?.date ?? Date.now()),
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    dispatch({ type: 'all', payload: expense });
  }, [expense]);

  const validateForm = (formValue) => {
    for (const field of Object.keys(formSchema)) {
      for (const validator of formSchema[field]) {
        switch(validator) {
          case 'required':
            // Note: this makes 0 invalid
            if (!formValue[field]) {
              setIsValid(false);
              return;
            }
            break;
          // Add validators here...
          default:
            break;
        }
      }
    }
    setIsValid(true);
  };

  const updateForm = (field, value) => {
    dispatch({ type: field, payload: value });
    const toValidate = { ...state, [field]: value };
    validateForm(toValidate);
  };

  return [state, updateForm, isValid];
};
