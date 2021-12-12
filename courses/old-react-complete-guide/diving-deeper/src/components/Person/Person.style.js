import styled from 'styled-components';

export const PersonStyled = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, .33);
  border: 3px dashed transparent;
`;

export const Generalities = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
`;

export const Actions = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
