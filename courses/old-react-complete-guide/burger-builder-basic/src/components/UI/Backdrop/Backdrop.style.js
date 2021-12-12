import styled from 'styled-components';

import theme from 'theme/theme';

export const BackdropStyled = styled.div`
  position: fixed;
  z-index: ${theme.zIndex.backdrop};
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
