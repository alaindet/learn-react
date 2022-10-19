import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button has correct initial text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveTextContent(/change to blue/i);
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent(/change to red/i);
});
