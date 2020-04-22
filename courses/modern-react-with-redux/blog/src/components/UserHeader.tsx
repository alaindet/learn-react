import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from 'actions/index';
import User from 'types/user.interface';
import State from 'types/state.interface';

interface TheseProps {
  userId?: string | number;
  user?: User;
  fetchUser?: () => any;
}

class UserHeader extends React.Component<any, TheseProps> {

  componentDidMount() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.userId);
    }
  }

  render() {

    if (!this.props.user) {
      return null;
    }

    return (
      <div>
        {this.props.user.name}
      </div>
    );
  }
}

const mapStateToProps = (state: State, ownProps: TheseProps) => {
  return {
    user: state.users.find(
      (user: User) => user.id === ownProps.userId
    ),
  }
};

const mapDispatchToProps = {
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
