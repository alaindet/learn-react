import styled from 'styled-components';

export const FormStyled = styled.form`

`;

export const FormGroup = styled.div`
  margin: 0.5rem 0;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const TextField = styled.input`
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .3);
    border-color: #aaa;
    transform: translate(-2px, -2px);
  }

  &:focus {
    border-color: #000;
  }
`;
