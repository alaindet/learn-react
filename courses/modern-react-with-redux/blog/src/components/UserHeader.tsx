import React from 'react';
import { connect } from 'react-redux';

import User from 'types/user.interface';
import State from 'types/state.interface';

interface TheseProps {
  userId?: string | number;
  user?: User;
}

class UserHeader extends React.Component<any, TheseProps> {

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

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
