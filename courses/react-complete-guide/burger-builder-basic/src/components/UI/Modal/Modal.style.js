import styled from 'styled-components';

import theme from 'theme/theme';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: ${theme.zIndex.modal};
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  transition: all 0.2s ease-out;
  transform-origin: center;
  ${props => props.show ? 'transform: scale(1)' : 'transform: scale(0)'};

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;
