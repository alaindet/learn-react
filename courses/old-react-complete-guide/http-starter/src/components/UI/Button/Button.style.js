import styled from 'styled-components';

import theme from 'theme/variables';

export const ButtonStyled = styled.button`
  margin: 1rem 0;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  border: 2px solid ${theme.color.black};
  color: ${theme.color.black};
  transition: all 0.2s ease-out;

  &:disabled {
    color: #ccc;
    background-color: #ddd;
    border-color: #ccc;

    &:hover {
      background-color: #ddd;
      border-color: #ccc;
      color: #ccc;
    }
  }

  ${props => {
    switch (props.color) {
      case 'primary':
        return `
          background-color: ${theme.color.orange};
          color: white;
          border: 2px solid transparent;
          &:hover {
            background-color: white;
            color: ${theme.color.orange};
            border-color: ${theme.color.orange};
          }
        `;
      case 'secondary':
      default:
        return `
          background-color: transparent;
          &:hover {
            background-color: rgba(0,0,0,0.1);
          }
        `;
    }
  }}

  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 0.33rem 1rem;
          font-size: 1rem;
        `;
      case 'medium':
      default:
        return `
          padding: 0.5rem 1.5rem;
          font-size: 1.1rem;
        `;
      case 'large':
        return `
          padding: 0.75rem 2.25rem;
          font-size: 1.2rem;
        `;
    }
  }}

  ${props => props.uppercase ? `
    text-transform: uppercase;
    letter-spacing: 1px;
  ` : ''}
`;
