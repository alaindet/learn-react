import styled from 'styled-components';

import theme from 'theme/variables';

export const NewPostStyled = styled.div`
  width: 80%;
  margin: 1.25rem auto;
  border: 1px solid ${theme.color.greyLight};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin: 10px auto;
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

  &:hover {
    border-color: ${theme.color.greyDark};
  }

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

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DismissButton = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2 ease-out;

  &:hover {
    color: ${theme.color.orange};
  }
`;
