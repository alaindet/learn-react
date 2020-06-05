import styled from 'styled-components';

export const Box = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.switch ? 'yellow' : 'black'};
  color: ${props => props.switch ? 'black' : 'yellow'};
`;

export const Lightbulb = styled.button`
  border: 2px solid transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: transparent;
  color: ${props => props.switch ? 'black' : 'yellow'};
  border-color: ${props => props.switch ? 'black' : 'yellow'};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .3);
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;
