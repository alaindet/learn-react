import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextField = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  border: 1px solid #ccc;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 3px 3px 7px rgba(0, 0, 0, .3);
    transform: translate(-2px, -2px);
  }

  &:focus {
    outline: none;
    border-color: black;
  }
`;

export const FormGroup = styled.div`
  margin: 0.5rem 0;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  margin: 0.5rem;
  margin-left: 0;
  display: block;
`;
