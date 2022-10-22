import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { SummaryForm } from './summary-form';

const TERMS_NAME = /i agree to terms and conditions/i;
const CONFIRM_NAME=  /confirm order/i;

describe('SummaryForm component', () => {

  test('checkbox is unchecked by default', () => {
    render(<SummaryForm />);
    const termsCheckbox = screen.getByRole('checkbox', { name: TERMS_NAME });
    expect(termsCheckbox).not.toBeChecked();
  });

  test('checkbox enables/disables button when clicked', () => {
    render(<SummaryForm />);
    const termsCheckbox = screen.getByRole('checkbox', { name: TERMS_NAME });
    const confirmButton = screen.getByRole('button', { name: CONFIRM_NAME });
    expect(confirmButton).toBeDisabled();
    fireEvent.click(termsCheckbox);
    expect(confirmButton).toBeEnabled();
    fireEvent.click(termsCheckbox);
    expect(confirmButton).toBeDisabled();
  });
});
