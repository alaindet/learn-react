import styled from 'styled-components';

import { withShadowHover } from './utils';

const shadow = 'box-shadow: 3px 3px 7px rgba(0, 0, 0, .3)';

const options = {
  persistShadowOnFocus: true,
  transitionDuration: '0.15s',
  transitionTiming: 'ease-in',
};

const _Button = styled.button`
  border: 2px solid #aaa;
  background-color: white;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.15s ease-in;
  ${props => props.hasMargin ? 'margin: 0 0.5rem;' : ''}

  ${props => {
    const size = props.size || 'medium';
    if (size === 'small') {
      return `
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
      `;
    }
    if (size === 'medium') {
      return `
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
      `;
    }
  }}

  &:hover {
    border-color: #666;
  }

  &:active,
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

export const Button = withShadowHover(_Button, shadow, options);
