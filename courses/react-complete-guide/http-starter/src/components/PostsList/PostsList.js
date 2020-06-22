import React from 'react';

import strings from 'services/string-utils';
import { PostsListStyled, PostsLoading } from './PostsList.style';
import Spinner from 'components/UI/Spinner/Spinner';
import PostListItem from 'components/PostListItem/PostListItem';
import Pagination from 'components/UI/Pagination/Pagination';

const PostsList = (props) => {

  if (props.posts.length === 0) {
    return (
      <PostsLoading>
        <Spinner />
      </PostsLoading>
    );
  }

  return (
    <PostsListStyled>
      {props.posts.map(post => (
        <PostListItem
          key={post.id}
          id={post.id}
          title={strings.truncate(post.title, 20)}
          author={post.author}
          active={props.selectedPostId === post.id}
          onClick={props.onPostSelect}
        />
      ))}
      <Pagination
        page={props.page}
        lastPage={props.lastPage}
        onPrev={props.onPrevPage}
        onNext={props.onNextPage}
      />
    </PostsListStyled>
  );
};

export default PostsList;
