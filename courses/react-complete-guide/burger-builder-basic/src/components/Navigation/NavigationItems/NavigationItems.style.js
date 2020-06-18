import styled from 'styled-components';

export const NavigationItemsStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;

  ${props => props.dir === 'vertical' ? `
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
  ` : ''}
`;
