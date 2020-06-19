import React from 'react';

import strings from 'services/string-utils';
import { PostsListStyled, PostsLoading } from './PostsList.style';
import Spinner from 'components/UI/Spinner/Spinner';
import PostListItem from 'components/PostListItem/PostListItem';

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
          author={post.userId}
          onClick={props.onPostSelect}
        />
      ))}
    </PostsListStyled>
  );
};

export default PostsList;
