import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/index';

interface Props {
  fetchPosts: () => any;
}

interface State {
  posts: any;
}

class PostList extends React.Component<any, Props> {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="ui container">
        Post List
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
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
