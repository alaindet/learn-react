import styled from 'styled-components';

import theme from 'theme/theme';

export const SideDrawerStyled = styled.aside`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: ${theme.zIndex.sideDrawer};
  background-color: white;
  padding: 2rem 1rem;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoint.mobileToTablet}px) {
    display: none;
  }

  ${props => props.show
    ? 'transform: translateX(0);'
    : 'transform: translateX(-100%);'
  }
`;

export const LogoContainer = styled.div`
  height: 10%;
  width: 100%;
  border-bottom: 2px solid ${theme.color.yellowDark};
  text-align: center;
  margin-bottom: 2rem;
`;

export const Navigation = styled.nav`
  height: 100%;
  width: 100%;
`;
