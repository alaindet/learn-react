import styled from 'styled-components';

import theme from 'theme/variables';

export const NewPostStyled = styled.div`
  width: 80%;
  margin: 1.25rem auto;
  border: 1px solid ${theme.color.greyLight};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px rgba(0,0,0,0.1);
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin: 10px auto;
  text-align: center;
  font-weight: bold;
`;

const Field = `
  display: block;
  width: 80%;
  border: 1px solid ${theme.color.grey};
  outline: none;
  font: inherit;
  margin: auto;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    border-color: ${theme.color.black};
  }
`;

export const Input = styled.input`
  ${Field}
`;

export const Textarea = styled.textarea`
  ${Field}
`;

export const Select = styled.select`
  ${Field}
`;

export const Button = styled.button`
  margin: 0.375rem 0;
  padding: 0.625rem;
  font: inherit;
  border: 1px solid ${theme.color.orange};
  background-color: transparent;
  color: ${theme.color.orange};
  cursor: pointer;

  &:hover,
  &:active {
    color: white;
    background-color: ${theme.color.orange};
  }
`;
