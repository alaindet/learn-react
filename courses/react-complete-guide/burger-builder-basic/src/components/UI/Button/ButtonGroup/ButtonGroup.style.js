import styled from 'styled-components';

import theme from 'theme/theme';

export const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${theme.breakpoint.mobileToTablet}px) {
    flex-direction: row;
  }
`;
