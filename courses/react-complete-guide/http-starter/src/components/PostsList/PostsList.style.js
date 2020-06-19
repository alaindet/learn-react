import styled from 'styled-components';

import { PostListItemStyled } from 'components/PostListItem/PostListItem.style';

export const PostsListStyled = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  max-height: 50vh;
  margin: auto;
  overflow-y: auto;

  & > ${PostListItemStyled} {
    flex-basis: 30%;
    margin: 1rem 1.5%;
  }
`;

export const PostsLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 80%;
  margin: 1.25rem auto;
  box-shadow: 3px 3px 7px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
`;
