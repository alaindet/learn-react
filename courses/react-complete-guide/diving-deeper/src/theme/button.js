import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 7px rgba(0, 0, 0, .3);
    transform: translate(-2px, -2px);
  }

  &:focus {
    outline: 0;
  }
`;

export const DangerButton = styled(Button)`
  background-color: #e53e3e;
  color: white;
`;

export const WarningButton = styled(Button)`
  background-color: #f6e05e;
`;

export const SuccessButton = styled(Button)`
  background-color: #48bb78;
  color: white;
`;
