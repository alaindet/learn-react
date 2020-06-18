import styled from 'styled-components';

import theme from 'theme/theme';

export const SideDrawerToggleStyled = styled.button`
  width: 40px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  border-radius: 0.5rem;

  & > div {
    width: 75%;
    height: 3px;
    background-color: ${theme.color.black};
    transition: background-color 0.1s ease-out;
  }

  &:hover {
    background-color: ${theme.color.yellow};
  }

  &:active,
  &:focus {
    outline: none;
  }

`;
