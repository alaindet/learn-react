import styled from 'styled-components';

import theme from 'theme/variables';

export const PostStyled = styled.article`
  width: 100px;
  padding: 1rem;
  text-align: center;
  border: 1px solid ${theme.color.greyLight};
  box-shadow: 0 2px 3px ${theme.color.grey};
  margin: 0.625rem;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${theme.color.blueLight};
  }
`;

export const PostMeta = styled.div`

`;

export const Author = styled.div`
  margin: 1rem 0;
  color: #ccc;
`;
