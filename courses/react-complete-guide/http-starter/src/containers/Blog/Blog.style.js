import styled from 'styled-components';

import { PostStyled } from 'components/Post/Post.style';

export const BlogStyled = styled.div`

`;

export const Posts = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  margin: auto;

  & > ${PostStyled} {
    flex-basis: 30%;
    margin: 1rem 1.5%;
  }
`;
