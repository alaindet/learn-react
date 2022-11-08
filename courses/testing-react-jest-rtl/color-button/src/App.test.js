import { render, screen, fireEvent } from '@testing-library/react';
import { App, addSpacesToCamelCase } from './App';

const RED = { r: 207, g: 10, b: 56 }; // #cf0a38
const BLUE = { r: 10, g: 56, b: 207 }; // #0a38cf
const GREY = { r: 204, g: 204, b: 204 }; // #cccccc

describe('App component', () => {
  test('button has correct initial color and text', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /change to blue/i });
    expect(colorButton).toHaveStyle({ backgroundColor: RED });
    expect(colorButton).toHaveTextContent(/change to blue/i);
  });

  test('initial conditions', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /change to blue/i });
    expect(colorButton).toBeEnabled();
    const checkbox = screen.getByRole('checkbox', { name: 'Enabled?' });
    expect(checkbox).toBeChecked();
  });

  test('button turns blue when clicked', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /change to blue/i });
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: BLUE });
    expect(colorButton).toHaveTextContent(/change to red/i);
  });

  test('button is enabled/disabled when clicking on checkbox', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /change to blue/i });
    const checkbox = screen.getByRole('checkbox', { name: 'Enabled?' });
    expect(colorButton).toBeEnabled();
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: GREY });
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
  });
});

describe('spaces before camel-case capital letters', () => {

  test('works for no inner capital letters', () => {
    const input = 'Red';
    const result = addSpacesToCamelCase(input);
    const expected = 'Red';
    expect(result).toEqual(expected);
  });

  test('works for one inner capital letter', () => {
    const input = 'VelvetRed';
    const result = addSpacesToCamelCase(input);
    const expected = 'Velvet Red';
    expect(result).toEqual(expected);
  });

  test('works for multiple inner capital letters', () => {
    const input = 'LateSummerSunset';
    const result = addSpacesToCamelCase(input);
    const expected = 'Late Summer Sunset';
    expect(result).toEqual(expected);
  });
});
