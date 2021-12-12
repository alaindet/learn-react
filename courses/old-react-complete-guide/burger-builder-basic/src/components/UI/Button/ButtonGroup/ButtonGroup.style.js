import styled from 'styled-components';

import theme from 'theme/theme';
import { ButtonStyled } from 'components/UI/Button/Button.style';

export const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > ${ButtonStyled} {
    display: block;
  }

  @media (min-width: ${theme.breakpoint.mobileToTablet}px) {
    flex-direction: row;

    > ${ButtonStyled} {
      display: initial;
    }
  }
`;
