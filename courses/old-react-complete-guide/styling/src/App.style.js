import styled from 'styled-components';

export const AppStyled = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  max-width: 60rem;
`;

export const AppTitle = styled.h1`
  display: flex;
  align-items: center;
`;

export const ButtonLink = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  margin-left: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    color: #60a0a0;
    text-decoration: underline;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    border-color: #60a0a0;
  }
`;
