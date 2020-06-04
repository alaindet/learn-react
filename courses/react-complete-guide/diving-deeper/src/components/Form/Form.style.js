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
