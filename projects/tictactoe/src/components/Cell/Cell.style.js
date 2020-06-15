import styled from 'styled-components';

import theme from './../../theme/theme';

export const CellStyled = styled.div`
  border: 5px solid ${theme.colors.grid};
  width: 33.33333%;
  font-size: 15vw;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  @media screen and (min-width: 768) {
    font-size: 5rem;
  }

  ${props => {

    const css = [];

    switch (props.sign) {
      case 'x':
        css.push(`color: ${theme.colors.x};`);
        break;
      case 'o':
        css.push(`color: ${theme.colors.o};`);
        break;
      default:
        break;
    }

    switch (props.index) {
      case 0:
        css.push(`border-left: 0; border-top: 0;`);
        break;
      case 1:
        css.push(`border-top: 0;`);
        break;
      case 2:
        css.push(`border-right: 0; border-top: 0;`);
        break;
      case 3:
        css.push(`border-left: 0;`);
        break;
      case 5:
        css.push(`border-right: 0;`);
        break;
      case 6:
        css.push(`border-left: 0; border-bottom: 0;`);
        break;
      case 7:
        css.push(`border-bottom: 0;`);
        break;
      case 8:
        css.push(`border-right: 0; border-bottom: 0;`);
        break;
      default:
        break;
    }

    return css.join('');
  }}
`;
