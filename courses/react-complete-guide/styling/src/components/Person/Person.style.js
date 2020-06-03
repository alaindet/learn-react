import styled from 'styled-components';

export const PersonStyled = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 3px 3px 8px #ddd;
  border: 3px dashed transparent;
`;

export const PersonMetadata = styled.ul`
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

export const Action = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 3px 3px 3px #ccc;
    transform: translate(-1px, -1px);
  }

  &:focus {
    outline: 0;
  }
`;

export const RemoveAction = styled(Action)`
  background-color: #e53e3e;
  color: white;
`;

export const EditAction = styled(Action)`
  background-color: #f6e05e;
`;

export const SaveAction = styled(Action)`
  background-color: #48bb78;
  color: white;
`;

export const DiscardAction = styled(Action)`
  background-color: #48bb78;
  color: white;
`;
