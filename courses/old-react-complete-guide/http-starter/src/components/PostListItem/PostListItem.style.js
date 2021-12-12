import styled from 'styled-components';

import theme from 'theme/variables';

const orangeBorder = `border-color: ${theme.color.orange};`;

export const PostListItemStyled = styled.article`
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.color.shadowLight};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px ${theme.color.shadowLight};
  cursor: pointer;
  transition: border-color 0.2s ease-out;

  ${props => props.active ? orangeBorder : ''}

  &:hover,
  &:active {
    ${orangeBorder}
  }
`;

export const PostMeta = styled.div`

`;

export const Author = styled.div`
  margin: 1rem 0;
  color: #ccc;
`;
