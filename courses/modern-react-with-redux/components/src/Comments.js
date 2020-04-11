import React from 'react';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const comments = [
  {
    image: faker.image.avatar(),
    author: 'John Doe',
    text: 'Nice blog post!',
    timeAgo: 'Today at 6:06 PM',
  }
];

const Comments = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          image={comments[0].image}
          author={comments[0].author}
          text={comments[0].text}
          timeAgo={comments[0].timeAgo}
        />
      </ApprovalCard>
    </div>
  );
};

export default Comments;
