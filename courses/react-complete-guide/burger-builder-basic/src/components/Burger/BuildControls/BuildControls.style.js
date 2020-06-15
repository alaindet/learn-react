import styled, { keyframes } from 'styled-components';

const theme = {
  colors: {
    primary: '#966909',
  }
};

const enableAnimation = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const BuildControlsStyled = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

export const CallToActionButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  font-family: inherit;
  font-size: 1.2rem;
  padding: 15px 30px;
  margin: 1rem;
  box-shadow: 2px 2px 2px ${theme.colors.primary};
  text-transform: uppercase;

  &:hover,
  &:active {
    background-color: #a0db41;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:not(:disabled) {
    animation: ${enableAnimation} 0.3s linear;
  }
`;
