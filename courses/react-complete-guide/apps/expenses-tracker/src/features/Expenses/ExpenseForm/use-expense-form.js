import { useEffect, useState } from 'react';

import { formatDate } from '../../../utils';

export const useExpenseForm = (expense, formSchema) => {

  const initialState = {
    id: expense?.id ?? '',
    title: expense?.title ?? '',
    amount: expense?.amount ?? 0,
    date: formatDate('y-m-d', expense?.date ?? Date.now()),
  };

  const [isValid, setIsValid] = useState(false);
  const [formValue, setFormValue] = useState(initialState);

  useEffect(() => {

    // Updating whole form
    if (expense) {
      const { id, title, amount, date: rawDate } = expense;
      const date = formatDate('y-m-d', rawDate);
      setFormValue({ id, title, amount, date });
      return;
    }

    // Resetting
    setFormValue({
      title: '',
      amount: 0,
      date: formatDate('y-m-d', Date.now()),
    });

  }, [expense]);

  const validateForm = (formToValidate) => {
    for (const field of Object.keys(formSchema)) {
      for (const validator of formSchema[field]) {
        switch(validator) {
          case 'required':
            // Note: this makes 0 invalid
            if (!formToValidate[field]) {
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
    setFormValue(prevState => ({ ...prevState, [field]: value }));
    const toValidate = { ...formValue, [field]: value };
    validateForm(toValidate);
  };

  return [formValue, updateForm, isValid];
};
