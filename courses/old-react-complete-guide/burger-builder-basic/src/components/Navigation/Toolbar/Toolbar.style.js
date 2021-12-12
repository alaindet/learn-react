import styled from 'styled-components';

import theme from 'theme/theme';

export const ToolbarStyled = styled.header`
  height: ${theme.height.toolbar}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.toolbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: white;
  border-bottom: 3px solid ${theme.color.yellowDark};
`;

export const Navigation = styled.nav`
  height: 100%;
`;
