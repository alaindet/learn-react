import styled from 'styled-components';

const activeLinkStyling = `

`;

export const NavigationItemLink = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 1rem; 0.75rem;
  border-bottom: 4px solid transparent;
  display: block;

  ${props => props.active ? activeLinkStyling : ''}

  a:hover,
  a:active {
    ${activeLinkStyling}
  }
`;

export const NavigationItemStyled = styled.li`
  margin: 0;
  display: flex;
  height: 100%;
  width: auto;
  align-items: center;
`;
