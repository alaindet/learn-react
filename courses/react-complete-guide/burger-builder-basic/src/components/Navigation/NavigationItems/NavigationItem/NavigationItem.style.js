import styled from 'styled-components';

import theme from 'theme/theme';

const activeLinkStyling = `
  background-color: ${theme.color.yellow};
  text-shadow: 0 0 .66px ${theme.color.black}, 0 0 .66px ${theme.color.black};
`;

export const NavigationItemLink = styled.a`
  display: block;
  color: ${theme.color.black};
  text-decoration: none;
  padding: 1rem 0.75rem;
  transition: all 0.2s ease-in-out;
  ${props => props.active ? activeLinkStyling : ''}

  &:hover,
  &:active {
    ${activeLinkStyling}
  }
`;

export const NavigationItemStyled = styled.li`
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;

  ${props => props.display === 'block' ? `
    display: block;
    width: 100%;
  ` : ''}
`;
