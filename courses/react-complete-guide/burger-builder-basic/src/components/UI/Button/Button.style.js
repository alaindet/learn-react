import styled from 'styled-components';

import theme from './../../../theme/theme';

export const ButtonStyled = styled.button`
  margin: 1rem;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  border: 2px solid ${theme.color.black};
  color: ${theme.color.black};

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
    switch (props.type) {
      case 'primary':
        return `
          background-color: ${theme.color.yellow};
          &:hover {
            background-color: ${theme.color.yellowDark};
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
      case 'success':
        return `
          background-color: ${theme.color.green};
          color: white;
          &:hover {
            background-color: ${theme.color.greenDark};
          }
        `;
      case 'danger':
        return `
          background-color: ${theme.color.red};
          color: white;
          &:hover {
            background-color: ${theme.color.redDark};
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
