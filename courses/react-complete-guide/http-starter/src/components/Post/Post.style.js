import styled from 'styled-components';

import theme from 'theme/variables';

export const PostStyled = styled.article`
  padding: 1rem;
  text-align: center;
  border: 2px solid ${theme.color.shadowLight};
  border-radius: 0.5rem;
  box-shadow: 0 2px 3px ${theme.color.grey};
  cursor: pointer;
  transition: border-color 0.2s ease-out;

  &:hover,
  &:active {
    border-color: ${theme.color.orange};
  }
`;

export const PostMeta = styled.div`

`;

export const Author = styled.div`
  margin: 1rem 0;
  color: #ccc;
`;
