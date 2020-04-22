import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from 'actions/index';
import Post from 'types/post.interface';
import UserHeader from 'components/UserHeader';

interface Props {
  fetchPostsAndUsers: () => any;
}

interface State {
  posts: any;
}

class PostList extends React.Component<any, Props> {

  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post: Post) => {
      return (
        <div key={post.id} className="item">

          {/* Icon */}
          <i className="large middle aligned icon user" />

          {/* Post */}
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>

          {/* Author */}
          <UserHeader userId={post.userId} />

        </div>
      );
    });
  }

  render() {
    if (!this.props.posts.length) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  fetchPostsAndUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
