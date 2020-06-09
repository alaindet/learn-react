import styled from 'styled-components';

export const FormField = styled.input`
  font-size: 18px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  ${props => props.monospace
    ? 'font-family: monospace;'
    : "font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
  }

  &:hover,
  &:focus {
    border-color: #333;
    outline: none;
  }
`;

export const FormGroup = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  ${props => props.inline
    ? 'display: inline-block;'
    : 'display: block;'
  }
`;
